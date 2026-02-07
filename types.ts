export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  persons: number;
  date: string;
  time: string;
  message?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Vorspeise' | 'Hauptgang' | 'Dessert';
}

export enum FormStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
