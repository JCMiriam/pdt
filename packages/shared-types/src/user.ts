export interface User {
  id: string;
  username: string;
  avatarIndex: number;
}

export interface CreateUserPayload {
  username: string;
  avatarIndex: number;
}
