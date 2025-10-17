'use client';

import { motion } from 'framer-motion';

interface CarouselProps {
  children?: React.ReactNode;
  image: string;
  className?: string;
  animation?: boolean;
}

export default function MiniImageCard({
  children,
  image = '',
  className = '',
  animation = false,
}: CarouselProps) {
  return (
    <motion.div
      className={`relative overflow-hidden flex items-center justify-center bg-center bg-cover bg-no-repeat text-white ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
      whileHover={animation ? { scale: 1.02 } : undefined}
    >
      <div className="relative z-10 text-center">{children}</div>
    </motion.div>
  );
}
