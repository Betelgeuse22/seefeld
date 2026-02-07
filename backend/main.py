import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client
from dotenv import load_dotenv
from typing import Optional

# Load environment variables
load_dotenv()

app = FastAPI(title="Seefeld Restaurant API")

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://localhost:5173", # Vite default
    os.getenv("FRONTEND_URL", "*")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supabase Client Setup
url: str = os.getenv("SUPABASE_URL", "")
key: str = os.getenv("SUPABASE_KEY", "")

# Simple check to avoid crashing if env vars are missing during build
if not url or not key:
    print("Warning: SUPABASE_URL or SUPABASE_KEY not found in environment.")
    supabase = None
else:
    supabase: Client = create_client(url, key)

class Reservation(BaseModel):
    name: str
    phone: str
    email: str
    persons: int
    date: str # ISO Date YYYY-MM-DD
    time: str # HH:MM
    message: Optional[str] = None

@app.get("/")
def read_root():
    return {"message": "Willkommen bei Seefeld API"}

@app.post("/reservations")
def create_reservation(reservation: Reservation):
    if not supabase:
        raise HTTPException(status_code=500, detail="Database configuration error")

    try:
        # Prepare data for insertion
        data = reservation.model_dump()
        
        # Insert into Supabase
        response = supabase.table("reservations").insert(data).execute()
        
        # Supabase-py returns a response object, data is in response.data
        if not response.data:
            raise Exception("No data returned from insert")

        return {"status": "success", "data": response.data}
    
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
