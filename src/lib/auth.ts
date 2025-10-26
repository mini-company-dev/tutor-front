import { JoinRequest, LoginRequest, LoginResponse } from "@/types/auth";
import { ApiResponse, requestApi } from "./apiFactory";

export async function loginApi(
  dto: LoginRequest
): Promise<ApiResponse<LoginResponse>> {
  return requestApi<LoginResponse>("POST", "/api/auth/login", dto);
}

export async function joinApi(dto: JoinRequest): Promise<ApiResponse<void>> {
  return requestApi<void>("POST", "/api/auth/join", dto);
}
