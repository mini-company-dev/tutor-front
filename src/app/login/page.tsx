"use client";

import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniInput from "@/mini-components/ui/miniInput";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 flex flex-col gap-6"
      >
        <MiniBox
          ui={MiniUiType.OUTLINE}
          className="p-9 rounded-2xl mini-shadow"
        >
          {/* 타이틀 */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              로그인
            </h1>
            <p className="text-sm text-[var(--foreground-light)] mt-1">
              계정 정보를 입력하세요.
            </p>
          </div>

          {/* 입력창 */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col text-sm">
              <MiniInput
                ui={MiniUiType.BASIC}
                label="이메일"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 rounded-full"
              />
            </div>

            <div className="flex flex-col text-sm">
              <MiniInput
                ui={MiniUiType.BASIC}
                label="비밀번호"
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-full"
              />
            </div>

            {/* 로그인 버튼 */}
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={[hoverScale()]}
              type="submit"
              className="mt-4 py-2 w-full rounded-full mini-t-r"
            >
              로그인
            </MiniButton>
          </form>

          {/* 구분선 */}
          <div className="relative text-center my-4">
            <div className="absolute inset-x-0 top-1/2 border-t border-[var(--foreground-light)]" />
            <span className="relative bg-[var(--background)] px-2 text-sm text-light-text">
              또는
            </span>
          </div>

          {/* 소셜 로그인 버튼 */}
          <div className="flex flex-col gap-2">
            <MiniButton
              className="w-full py-2 rounded-full"
              ui={MiniUiType.OUTLINE}
            >
              Google로 로그인
            </MiniButton>
            <MiniButton
              className="w-full py-2 rounded-full"
              ui={MiniUiType.OUTLINE}
            >
              Naver로 로그인
            </MiniButton>
          </div>

          {/* 회원가입 링크 */}
          <p className="text-center text-sm mini-t-l mt-2">
            계정이 없으신가요?{" "}
            <Link href="/register" className="mini-t-b hover:underline">
              회원가입
            </Link>
          </p>
        </MiniBox>
      </motion.div>
    </main>
  );
}
