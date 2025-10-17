'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode;
  variant?: 'basic' | 'outline' | 'none';
  animation?: boolean;
}

export default function MiniBox({
  children,
  className = '',
  variant = 'basic',
  animation = false,
  ...props
}: ButtonProps) {
  const baseStyle = '';

  const variantStyle = {
    basic: 'bg-[white]/60 shadow',
    outline: 'border border-[var(--brand)]',
    none: '',
  };

  return (
    <motion.div
      whileHover={animation ? { scale: 1.02 } : undefined}
      {...props}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
