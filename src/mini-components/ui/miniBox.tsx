"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";

interface BoxProps extends HTMLMotionProps<"div">, MiniComponetType {
  children?: React.ReactNode;
}

const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic mini-shadow",
  [MiniUiType.OUTLINE]: "border border-[var(--brand)] mini-shadow",
  [MiniUiType.BRAND]: "mini-bg-b hover:mini-bg-b/80 mini-shadow",
  [MiniUiType.NONE]: "",
};

export default function MiniBox({
  children,
  className = "",
  ui = MiniUiType.NONE,
  motion,
  hover,
  ...props
}: BoxProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = "";

  return (
    <fk.div
      variants={animation}
      initial={animation ? "hidden" : undefined}
      animate={animation ? "visible" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      className={`${baseStyle} ${uiStyle[ui]} ${className}`}
      {...props}
    >
      {children}
    </fk.div>
  );
}
