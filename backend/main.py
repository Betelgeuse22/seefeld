import os
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
from dotenv import load_dotenv
from typing import Optional
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType

# Загрузка переменных окружения
load_dotenv()

app = FastAPI(title="Seefeld Restaurant API")

# Конфигурация CORS
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://seefeld-kappa.vercel.app",  # Укажите ваш актуальный URL на Vercel
    os.getenv("FRONTEND_URL", "*")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Настройка почты (данные берутся из .env)
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_FROM_NAME="Seefeld Reservations",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)

# Подключение к Supabase
url: str = os.getenv("SUPABASE_URL", "")
key: str = os.getenv("SUPABASE_KEY", "")
supabase: Client = create_client(url, key) if url and key else None


class Reservation(BaseModel):
    name: str
    phone: str
    email: EmailStr
    persons: int
    date: str
    time: str
    message: Optional[str] = None

# Красивая HTML-разметка для письма


def create_email_html(data: dict):
    return f"""
    <html>
        <body style="font-family: 'Playfair Display', serif; background-color: #f9f9f9; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #1a1a1a; border-bottom: 2px solid #c4a484; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">
                    Tischreservierung — Seefeld
                </h2>
                <div style="margin-top: 30px; line-height: 1.6; color: #333;">
                    <p><strong>Name:</strong> {data['name']}</p>
                    <p><strong>Datum:</strong> {data['date']}</p>
                    <p><strong>Uhrzeit:</strong> {data['time']}</p>
                    <p><strong>Personen:</strong> {data['persons']}</p>
                    <p><strong>Telefon:</strong> <a href="tel:{data['phone']}" style="color: #c4a484; text-decoration: none;">{data['phone']}</a></p>
                    <p><strong>Email:</strong> {data['email']}</p>
                </div>
                {f'<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; font-style: italic;">" {data["message"]} "</div>' if data.get('message') else ''}
                <div style="margin-top: 40px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                    Dies ist eine automatische Benachrichtigung des Reservierungssystems Seefeld.
                </div>
            </div>
        </body>
    </html>
    """


async def send_notification_email(reservation_data: dict):
    html = create_email_html(reservation_data)
    message = MessageSchema(
        subject=f"Новая бронь: {reservation_data['name']} ({reservation_data['date']})",
        # Кому придет письмо (ваш адрес)
        recipients=[os.getenv("ADMIN_EMAIL")],
        body=html,
        subtype=MessageType.html
    )
    fm = FastMail(conf)
    await fm.send_message(message)


@app.post("/reservations")
async def create_reservation(reservation: Reservation, background_tasks: BackgroundTasks):
    if not supabase:
        raise HTTPException(
            status_code=500, detail="Database configuration error")

    try:
        data = reservation.model_dump()
        # Сохранение в базу
        response = supabase.table("reservations").insert(data).execute()

        if not response.data:
            raise Exception("Failed to save to database")

        # Отправка письма в фоновом режиме, чтобы не заставлять гостя ждать
        background_tasks.add_task(send_notification_email, data)

        return {"status": "success", "message": "Reservation saved and notification sent"}

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
def read_root():
    return {"message": "Willkommen bei Seefeld API"}
