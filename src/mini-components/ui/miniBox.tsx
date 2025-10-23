"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

interface MiniBoxProps extends HTMLMotionProps<"div">, MiniComponetType {
  children?: React.ReactNode;
}

const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export default function MiniBox({
  children,
  className = "",
  ui = MiniUiType.NONE,
  motion,
  viewport = defaultViewport,
  hover,
  ...props
}: MiniBoxProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = "";

  return (
    <fk.div
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${baseStyle} ${uiStyle[ui]} ${className}`}
      {...props}
    >
      {children}
    </fk.div>
  );
}
