import { NextRequest, NextResponse } from "next/server";
import { MemberType } from "@/types/Member";
import { jwtDecode } from "jwt-decode";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "인증되지 않음" }, { status: 401 });
  }

  const payload = jwtDecode<MemberType>(token);
  return NextResponse.json(payload);
}
