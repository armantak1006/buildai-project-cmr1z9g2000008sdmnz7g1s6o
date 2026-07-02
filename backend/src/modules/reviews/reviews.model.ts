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

export interface ReviewInput {
  userId: string;
  tattooId: string;
  rating: number;
  comment: string;
  dateCreated: string;
}
