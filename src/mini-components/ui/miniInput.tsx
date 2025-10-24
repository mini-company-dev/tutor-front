"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

interface InputProps extends HTMLMotionProps<"input">, MiniComponetType {
  label?: string;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export default function MiniInput({
  label,
  className,
  ui = MiniUiType.NONE,
  uiMotion: motion,
  uiHover: hover,
  viewport = defaultViewport,
  ...props
}: InputProps) {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = "";

  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="mini-text mb-1 block">
          {label}
        </label>
      )}
      <fk.input
        variants={animation}
        initial={animation ? "hidden" : undefined}
        whileHover={animation ? "whileHover" : undefined}
        whileInView={animation ? "visible" : undefined}
        viewport={viewport}
        className={`${baseStyle} ${uiStyle[ui]} ${className}`}
        {...props}
      />
    </div>
  );
}
