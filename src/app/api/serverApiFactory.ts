// src/lib/serverApiFactory.ts
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosRequestConfig, Method } from "axios";
import { API_BASE_URL } from "@/lib/env";

export interface ApiResponse<T> {
  data?: T;
  message?: string | null;
  status: number;
}

export function createServerApiHandler<T>(method: Method, path: string) {
  return async (req: NextRequest): Promise<NextResponse<ApiResponse<T>>> => {
    try {
      const token = req.cookies.get("token")?.value;
      const dto = req.method === "GET" ? undefined : await req.json();

      console.log(dto);

      const config: AxiosRequestConfig = {
        method,
        url: `${API_BASE_URL}${path}`,
        data: dto,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        validateStatus: () => true,
      };

      const res = await axios.request<ApiResponse<T>>(config);

      return NextResponse.json<ApiResponse<T>>(
        {
          data: res.data as T,
          message: res.data?.message ?? "요청 성공",
          status: res.status,
        },
        { status: res.status }
      );
    } catch (err: any) {
      console.error("Server API Error:", err.message);
      return NextResponse.json(
        {
          data: undefined,
          message: err.response?.data?.message || err.message || "서버 오류",
          status: err.response?.status || 500,
        },
        { status: err.response?.status || 500 }
      );
    }
  };
}
