"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import {
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";

interface InputProps extends HTMLMotionProps<"input">, MiniComponetType {
  label?: string;
}

const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export default function MiniInput({
  label,
  className,
  ui = MiniUiType.NONE,
  motion: animation,
  ...props
}: InputProps) {
  const baseStyle = "";

  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="mini-text mb-1 block">
          {label}
        </label>
      )}
      <motion.input
        variants={animation}
        initial={animation ? "hidden" : undefined}
        animate={animation ? "visible" : undefined}
        className={`${baseStyle} ${uiStyle[ui]} ${className}`}
        {...props}
      />
    </div>
  );
}
