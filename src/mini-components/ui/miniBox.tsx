"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";
import { useEffect, useRef, useState } from "react";

interface MiniBoxProps extends HTMLMotionProps<"div">, MiniComponetType {
  children?: React.ReactNode;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

const uiSizeStyle = {
  [MiniUiSize.SMALL]: "",
  [MiniUiSize.MEDIUM]: "",
  [MiniUiSize.LARGE]: "",
  [MiniUiSize.NONE]: "",
};

export default function MiniBox({
  children,
  className = "",
  ui = MiniUiType.NONE,
  uiSize = MiniUiSize.MEDIUM,

  uiMotion: motion,
  viewport = defaultViewport,
  uiHover: hover,
  ...props
}: MiniBoxProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = `${uiSizeStyle[uiSize]} ${uiStyle[ui]}`;

  return (
    <fk.div
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </fk.div>
  );
}
