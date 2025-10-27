export interface MemberType {
  sub: string;
  username: string;
  name: string;
  picture: string;
  role: MEMBER_ROLE;
  iat: number;
  exp: number;
}

export enum MEMBER_ROLE {
  ROLE_STUDENT = "ROLE_STUDENT",
  ROLE_TUTOR = "ROLE_TUTOR",
  ROLE_ADMIN = "ROLE_ADMIN",
}
