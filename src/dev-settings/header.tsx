"use client";

import Link from "next/link";
import MiniButton from "@/mini-components/ui/miniButton";
import { useRouter } from "next/navigation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import {
  fadeIn,
  fadeInDown,
} from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/ui/miniBox";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";

export default function Header() {
  const router = useRouter();
  const [hasToken, setHasToken] = useState(false);
  const { sub } = useAuthStore();

  useEffect(() => {
    console.log("id", sub);
    setHasToken(!!sub);
  }, [sub]);

  return (
    <MiniBox
      uiMotion={[fadeInDown()]}
      className="sticky w-full top-0 z-50 flex items-center justify-between px-10 py-4 bg-[var(--bg)]/90 border-b border-gray-300"
    >
      <Link href="/" className="text-xl font-bold text-[var(--brand)]">
        LOGO
      </Link>

      <nav className="flex gap-8 mini-t text-sm">
        <Link
          href="/tutors"
          className="hover:text-[var(--brand)] hover:font-bold"
        >
          튜터찾기
        </Link>
        <Link
          href="/projects"
          className="hover:text-[var(--brand)] hover:font-bold"
        >
          커뮤니티
        </Link>
      </nav>

      {hasToken ? (
        <MiniButton
          onClick={() => router.push("/mypage")}
          ui={MiniUiType.OUTLINE}
          uiMotion={[fadeIn(0.5)]}
          uiHover={[hoverScale()]}
          className="rounded-2xl text-sm"
        >
          My Page
        </MiniButton>
      ) : (
        <MiniButton
          onClick={() => router.push("/login")}
          ui={MiniUiType.OUTLINE}
          uiMotion={[fadeIn(0.5)]}
          uiHover={[hoverScale()]}
          className="rounded-2xl text-sm"
        >
          Login
        </MiniButton>
      )}
    </MiniBox>
  );
}
