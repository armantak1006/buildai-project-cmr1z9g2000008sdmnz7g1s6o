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

export interface UserInput {
  email: string;
  password: string;
  name: string;
  bio: string;
  profilePicture: string;
}
