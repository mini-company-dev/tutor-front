import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/env";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "필수 입력값 누락" },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "로그인 실패" },
        { status: response.status }
      );
    }

    let token = response.headers.get("Authorization");
    if (!token) {
      try {
        const data = await response.json();
        token = data?.token || data?.access_token || "";
      } catch {
        token = "";
      }
    }

    if (!token) {
      return NextResponse.json({ message: "토큰 누락" }, { status: 500 });
    }

    // ✅ 쿠키 설정
    const res = NextResponse.json({ message: "로그인 성공" });

    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ message: "서버 오류" }, { status: 500 });
  }
}
