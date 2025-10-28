import { ServerApiResponse } from "@/app/api/serverApiFactory";
import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { NextApiResponse } from "next";

export interface ApiResponse<T> {
  req?: T;
  explanation?: string;
}

export async function requestApi<T>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const res: AxiosResponse<ApiResponse<T>> = await axios.request({
      method,
      url,
      data,
      headers: { "Content-Type": "application/json" },
      ...config,
    });

    if (res && res.data) {
      return res.data;
    }
    return {
      req: undefined,
      explanation: "요청 실패",
    };
  } catch (error: any) {
    return {
      req: undefined,
      explanation: "요청 실패",
    };
  }
}
