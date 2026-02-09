import { API_URL } from '../constants';
import { ReservationData } from '../types';

export const createReservation = async (data: ReservationData): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Fehler bei der Reservierung');
    }

    return await response.json();
  } catch (error) {
    console.error('Reservation API Error:', error);
    throw error;
  }
};


export const pingServer = async() => {
  try {
    await fetch('${API_URL}/ping');
    console.log('Server wake-up call sent');
  } catch (error) {
    console.error('Wake-up call failed', error);
  }
};
