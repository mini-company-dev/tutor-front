"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyPage() {
  const router = useRouter();
  const { role } = useAuthStore();

  useEffect(() => {
    if (!role) return;

    switch (role) {
      case "ROLE_STUDENT":
        router.replace("/mypage/students");
        break;
      case "ROLE_TUTOR":
        router.replace("/mypage/tutors");
        break;
      default:
        router.replace("/");
        break;
    }
  }, [role, router]);

  return <div>Loading...</div>;
}
