"use client";

import { motion as fk, Variants, HTMLMotionProps } from "framer-motion";
import { mergeVariants, MiniComponetType } from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

interface MiniImageProps extends HTMLMotionProps<"img">, MiniComponetType {}

export default function MiniImage({
  className = "",
  uiMotion,
  uiHover,
  uiSize,
  ui,
  viewport = defaultViewport,
  ...props
}: MiniImageProps) {
  const animation: Variants = mergeVariants(uiMotion, uiHover);

  return (
    <div className={`overflow-hidden ${className}`}>
      <fk.img
        variants={animation}
        initial={animation ? "hidden" : undefined}
        animate={animation ? "visible" : undefined}
        whileHover={animation ? "whileHover" : undefined}
        viewport={viewport}
        className={`w-full h-full object-cover`}
        {...props}
      />
    </div>
  );
}
