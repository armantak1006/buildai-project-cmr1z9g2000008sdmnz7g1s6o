export interface Booking {
  id: string;
  userId: string;
  date: string;
  time: string;
  service: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookingInput {
  userId: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}
