"use client";

import Link from "next/link";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import { useRouter } from "next/navigation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import {
  fadeIn,
  fadeInDown,
} from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/basic-ui/miniBox";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import MiniImage from "@/mini-components/basic-ui/miniImage";

export default function Header() {
  const router = useRouter();
  const { picture, sub } = useAuthStore();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
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
        <MiniImage
          className="w-[40px] h-[40px] rounded-full"
          src={picture}
          onClick={() => router.push("/mypage")}
          uiMotion={[fadeIn(0.5)]}
          uiHover={[hoverScale()]}
        />
      ) : (
        <MiniButton
          onClick={() => router.push("/auth")}
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
