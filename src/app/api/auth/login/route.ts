import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { API_BASE_URL } from "@/lib/env";
import { LoginRequest, LoginResponse } from "@/types/auth";
import { ApiResponse } from "@/lib/apiFactory";

export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse<LoginResponse>>> {
  try {
    const dto: LoginRequest = await req.json();

    if (!dto.username || !dto.password) {
      return NextResponse.json(
        {
          req: { token: null },
          explanation: "인증 정보가 없습니다.",
        },
        { status: 400 }
      );
    }

    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, dto, {
      headers: { "Content-Type": "application/json" },
      validateStatus: () => true,
    });

    let token = response.headers["authorization"];
    if (!token) {
      try {
        const data = response.data;
        token = data?.token || data?.access_token || "";
      } catch {
        token = "";
      }
    }

    if (!token) {
      return NextResponse.json(
        {
          req: { token: null },
          explanation: "인증 실패",
        },
        { status: 400 }
      );
    }

    const res = NextResponse.json(
      {
        req: { token: token },
        explanation: "인증 성공",
      },
      { status: 200 }
    );

    return res;
  } catch (err: any) {
    console.error("Login error:", err.response?.data || err.message);
    return NextResponse.json(
      {
        req: { token: null },
        explanation: "인증 실패",
      },
      { status: 500 }
    );
  }
}
