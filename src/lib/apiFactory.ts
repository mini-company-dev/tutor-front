import axios, { AxiosRequestConfig, Method } from "axios";

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  status: number;
}

export async function requestApi<T>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const res = await axios.request({
      method,
      url,
      data,
      headers: { "Content-Type": "application/json" },
      ...config,
    });

    return {
      data: res.data,
      message: res.data?.message || "요청 성공",
      status: res.status,
    };
  } catch (error: any) {
    return {
      data: undefined,
      message: error.response?.data?.message || error.message || "요청 실패",
      status: error.response?.status || 500,
    };
  }
}
