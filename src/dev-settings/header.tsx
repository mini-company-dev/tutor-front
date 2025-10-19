"use client";

import Link from "next/link";
import MiniButton from "@/mini-components/ui/miniButton";
import { useRouter } from "next/navigation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import hoverAnimation, {
  hoverScale,
} from "@/mini-components/animation/miniHoverAnimation";
import {
  fadeIn,
  fadeInDown,
} from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/ui/miniBox";

export default function Header() {
  const router = useRouter();
  return (
    <MiniBox
      motion={fadeInDown()}
      className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 mini-bg mini-shadow"
    >
      <Link href="/" className="text-xl font-bold mini-t-b">
        LOGO
      </Link>

      {/* 네비게이션 */}
      <nav className="flex gap-8 mini-t text-sm">
        <Link href="/tutor" className="hover:mini-t-b">
          Tutor
        </Link>
        <Link href="/projects" className="hover:mini-t-b">
          Projects
        </Link>
        <Link href="/contact" className="hover:mini-t-b">
          Contact
        </Link>
      </nav>

      {/* 버튼 */}
      <MiniButton
        onClick={() => router.push("/login")}
        ui={MiniUiType.OUTLINE}
        motion={fadeIn(0.5)}
        hover={hoverScale()}
        className="mini-round text-sm"
      >
        Login
      </MiniButton>
    </MiniBox>
  );
}
