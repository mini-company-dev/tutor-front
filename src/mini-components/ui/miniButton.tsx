"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

interface ButtonProps extends HTMLMotionProps<"button">, MiniComponetType {
  children: React.ReactNode;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

const uiSizeStyle = {
  [MiniUiSize.SMALL]: "p-8",
  [MiniUiSize.MEDIUM]: "px-5 py-2.5",
  [MiniUiSize.LARGE]: "p-20",
  [MiniUiSize.NONE]: "",
};

export default function MiniButton({
  children,
  className = "",
  ui = MiniUiType.NONE,
  uiSize = MiniUiSize.MEDIUM,
  uiMotion: motion,
  uiHover: hover,
  viewport = defaultViewport,
  ...props
}: ButtonProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = `${uiSizeStyle[uiSize]} ${uiStyle[ui]} font-semibold`;

  return (
    <fk.button
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </fk.button>
  );
}
