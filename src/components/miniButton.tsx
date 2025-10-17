'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'basic' | 'outline';
}

export default function MiniButton({
  children,
  className = '',
  variant = 'basic',
  ...props
}: ButtonProps) {
  const baseStyle =
    'px-5 py-2.5 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyle = {
    basic:
      'mini-brand-background hover:mini-brand-background/80 text-white shadow-md hover:shadow-lg',
    outline:
      'border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--background)] transition-all duration-200 rounded-xl',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      {...props}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
