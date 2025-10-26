import { JoinResponse, LoginResponse } from "@/types/auth";
import { ApiResponse, requestApi } from "./apiFactory";

export async function loginApi(dto: LoginResponse): Promise<ApiResponse<void>> {
  return requestApi<void>("POST", "/api/auth/login", dto);
}

export async function joinApi(dto: JoinResponse): Promise<ApiResponse<void>> {
  return requestApi<void>("POST", "/api/auth/join", dto);
}
