'use client';

import MiniBox from '@/components/miniBox';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="
          w-full max-w-md
          p-8
          flex flex-col gap-6
        "
      >
        <MiniBox variant="outline"></MiniBox>
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
            <label htmlFor="email" className="text-[var(--foreground)] mb-1">
              이메일
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="
                w-full px-4 py-2 rounded-lg
                border border-[var(--foreground-light)]
                focus:outline-none focus:border-[var(--brand)]
                transition-all duration-200
              "
            />
          </div>

          <div className="flex flex-col text-sm">
            <label htmlFor="password" className="text-[var(--foreground)] mb-1">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="
                w-full px-4 py-2 rounded-lg
                border border-[var(--foreground-light)]
                focus:outline-none focus:border-[var(--brand)]
                transition-all duration-200
              "
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="
              mt-4 py-2 w-full
              bg-[var(--brand)] text-white
              rounded-lg
              hover:bg-[var(--foreground)]
              transition-all duration-200
            "
          >
            로그인
          </button>
        </form>

        {/* 구분선 */}
        <div className="relative text-center my-4">
          <div className="absolute inset-x-0 top-1/2 border-t border-[var(--foreground-light)]" />
          <span className="relative bg-[var(--background)] px-2 text-sm text-[var(--foreground-light)]">
            또는
          </span>
        </div>

        {/* 소셜 로그인 버튼 */}
        <div className="flex flex-col gap-2">
          <button className="w-full py-2 border border-[var(--foreground-light)] rounded-lg hover:bg-[var(--foreground-light)]/10 transition">
            Google로 로그인
          </button>
          <button className="w-full py-2 border border-[var(--foreground-light)] rounded-lg hover:bg-[var(--foreground-light)]/10 transition">
            GitHub로 로그인
          </button>
        </div>

        {/* 회원가입 링크 */}
        <p className="text-center text-sm text-[var(--foreground-light)] mt-2">
          계정이 없으신가요?{' '}
          <Link
            href="/register"
            className="text-[var(--brand)] hover:underline"
          >
            회원가입
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
