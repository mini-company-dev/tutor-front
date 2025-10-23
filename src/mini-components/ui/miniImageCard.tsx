"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import {
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";
import { ReactNode } from "react";

interface CarouselProps extends HTMLMotionProps<"div">, MiniComponetType {
  children?: ReactNode;
  image: string;
}

const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export default function MiniImageCard({
  children,
  image = "",
  className = "",
  ui = MiniUiType.NONE,
  motion: animation,
  ...props
}: CarouselProps) {
  const baseStyle =
    "relative w-full overflow-hidden flex items-center justify-center bg-center bg-cover bg-no-repeat text-white";

  return (
    <motion.div
      variants={animation}
      initial={animation ? "hidden" : undefined}
      animate={animation ? "visible" : undefined}
      className={`${baseStyle} ${uiStyle[ui]} ${className}`}
      {...props}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="relative z-10 text-center">{children}</div>
    </motion.div>
  );
}
