'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MiniButton from '@/components/miniButton';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut' }}
      className="
        sticky top-0 z-50
        flex items-center justify-between
        px-10 py-4
        mini-background/10
        backdrop-blur-md
        transition-all duration-200
      "
    >
      {/* 로고 */}
      <Link href="/" className="text-xl font-bold mini-brand-text">
        Ken<span className="mini-text">Studio</span>
      </Link>

      {/* 네비게이션 */}
      <nav className="flex gap-8 text-[var(--foreground)] text-sm">
        <Link
          href="/tutor"
          className="hover:text-[var(--brand)] transition-colors duration-200"
        >
          Tutor
        </Link>
        <Link
          href="/projects"
          className="hover:text-[var(--brand)] transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:text-[var(--brand)] transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>

      {/* 버튼 */}
      <MiniButton
        onClick={() => router.push('/login')}
        variant="outline"
        className="mini-round text-sm"
      >
        Login
      </MiniButton>
    </motion.header>
  );
}
