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

export interface NotificationInput {
  userId: string;
  message: string;
  type: string;
  read: boolean;
  dateCreated: string;
}
