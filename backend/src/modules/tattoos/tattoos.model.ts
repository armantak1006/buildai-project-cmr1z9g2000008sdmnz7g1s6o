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

export interface TattooInput {
  title: string;
  description: string;
  imageUrl: string;
  tags: string;
  dateCreated: string;
}
