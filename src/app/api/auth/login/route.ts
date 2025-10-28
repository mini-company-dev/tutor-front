import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { API_BASE_URL } from "@/lib/env";
import { LoginRequest } from "@/types/auth";

export interface ApiRequest {
  token: string | null;
}

export async function POST(req: NextRequest) {
  try {
    const dto: LoginRequest = await req.json();

    if (!dto.username || !dto.password) {
      return NextResponse.json(
        {
          data: { token: null },
          message: "인증 정보가 없습니다.",
        },
        { status: 500 }
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
          data: { token: null },
          message: "인증 실패",
        },
        { status: 500 }
      );
    }

    const res = NextResponse.json(
      {
        data: { token: token },
        message: "인증 성공",
      },
      { status: 200 }
    );

    return res;
  } catch (err: any) {
    console.error("Login error:", err.response?.data || err.message);
    return NextResponse.json(
      {
        data: { token: null },
        message: "인증 실패",
      },
      { status: 500 }
    );
  }
}
