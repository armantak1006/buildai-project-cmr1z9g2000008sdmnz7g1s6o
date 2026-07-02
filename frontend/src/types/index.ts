export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

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

export interface Tattoo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string;
  dateCreated: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  tattooId: string;
  rating: number;
  comment: string;
  dateCreated: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchQuery {
  id: string;
  userId: string;
  query: string;
  dateCreated: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: string;
  read: boolean;
  dateCreated: string;
  createdAt: string;
  updatedAt: string;
}
