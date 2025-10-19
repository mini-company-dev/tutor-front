"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";

interface ButtonProps extends HTMLMotionProps<"button">, MiniComponetType {
  children: React.ReactNode;
}

const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic mini-shadow",
  [MiniUiType.OUTLINE]: "mini-ol-b mini-t-b hover:mini-bg-b hover:mini-t-r",
  [MiniUiType.BRAND]: "mini-bg-b hover:mini-bg-b/80 mini-shadow",
  [MiniUiType.NONE]: "",
};

export default function MiniButton({
  children,
  className = "",
  ui = MiniUiType.NONE,
  motion,
  hover,
  ...props
}: ButtonProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = "px-5 py-2.5 font-semibold";

  return (
    <fk.button
      variants={animation}
      initial={animation ? "hidden" : undefined}
      animate={animation ? "visible" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      className={`${baseStyle} ${uiStyle[ui]} ${className}`}
      {...props}
    >
      {children}
    </fk.button>
  );
}
