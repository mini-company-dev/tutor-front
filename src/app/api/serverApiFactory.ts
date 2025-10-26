// src/lib/serverApiFactory.ts
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosRequestConfig, Method } from "axios";
import { API_BASE_URL } from "@/lib/env";
import { ApiResponse } from "@/lib/apiFactory";

export interface ServerApiResponse<T> {
  data?: T;
  message?: string | null;
}

export function createServerApiHandler<T>(method: Method, path: string) {
  return async (req: NextRequest): Promise<NextResponse<ApiResponse<T>>> => {
    try {
      const token = req.headers.get("token");
      const dto = req.method === "GET" ? undefined : await req.json();

      const config: AxiosRequestConfig = {
        method,
        url: `${API_BASE_URL}${path}`,
        data: dto,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `${token}` } : {}),
        },
        validateStatus: () => true,
      };

      const res = await axios.request<ServerApiResponse<T>>(config);

      return NextResponse.json<ApiResponse<T>>(
        {
          data: res.data as T,
          message: res.data?.message ?? "요청 성공",
        },
        { status: res.status }
      );
    } catch (err: any) {
      console.error("Server API Error:", err.message);
      return NextResponse.json(
        {
          data: undefined,
          message: err.response?.data?.message || err.message || "서버 오류"
        },
        { status: err.response?.status || 500 }
      );
    }
  };
}
