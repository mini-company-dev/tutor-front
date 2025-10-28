export interface LoginRequest {
  username: string;
  password: string;
}

export interface JoinRequest {
  username: string;
  name: string;
  password: string;
}

export interface LoginResponse {
  token: string | null;
}
