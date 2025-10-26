import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { API_BASE_URL } from "@/lib/env";
import { LoginResponse } from "@/types/auth";

export async function POST(req: NextRequest) {
  try {
    const dto: LoginResponse = await req.json();

    if (!dto.username || !dto.password) {
      return NextResponse.json({ message: "필수 입력값 누락" }, { status: 400 });
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
      return NextResponse.json({ message: "토큰 누락" }, { status: 500 });
    }

    const res = NextResponse.json({ message: "로그인 성공" });

    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err: any) {
    console.error("Login error:", err.response?.data || err.message);
    return NextResponse.json({ message: "서버 오류" }, { status: 500 });
  }
}
