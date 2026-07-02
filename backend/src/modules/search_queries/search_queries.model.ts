export interface SearchQuery {
  id: string;
  userId: string;
  query: string;
  dateCreated: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchQueryInput {
  userId: string;
  query: string;
  dateCreated: string;
}
