"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

interface ButtonProps extends HTMLMotionProps<"button">, MiniComponetType {
  children: React.ReactNode;
}

const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export default function MiniButton({
  children,
  className = "",
  ui = MiniUiType.NONE,
  motion,
  hover,
  viewport = defaultViewport,
  ...props
}: ButtonProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = "px-5 py-2.5 font-semibold";

  return (
    <fk.button
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${baseStyle} ${uiStyle[ui]} ${className}`}
      {...props}
    >
      {children}
    </fk.button>
  );
}
