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

export default function Header() {
  const router = useRouter();
  return (
    <MiniBox
      motion={[fadeInDown()]}
      className="sticky w-full top-0 z-50 flex items-center justify-between px-10 py-4 bg-[var(--bg)]/90 mini-shadow border-b border-gray-300"
    >
      <Link href="/" className="text-xl font-bold text-[var(--brand)]">
        LOGO
      </Link>

      {/* 네비게이션 */}
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

      {/* 버튼 */}
      <MiniButton
        onClick={() => router.push("/login")}
        ui={MiniUiType.OUTLINE}
        motion={[fadeIn(0.5)]}
        hover={[hoverScale()]}
        className=" rounded-2xl text-sm hover:to-mini-brand"
      >
        Login
      </MiniButton>
    </MiniBox>
  );
}
