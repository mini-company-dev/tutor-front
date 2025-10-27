"use client";

import { HTMLMotionProps, Variants, ViewportOptions } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiType,
} from "../miniComponentConfig";
import { ReactNode } from "react";
import MiniImage from "./../basic-ui/miniImage";
import MiniBox from "../basic-ui/miniBox";

interface CarouselProps extends HTMLMotionProps<"div">, MiniComponetType {
  children?: ReactNode;
  childClassName?: string;
  image: string;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export function MiniImageInsideCard({
  children,
  image = "",
  className = "",
  childClassName = "",
  ui = MiniUiType.NONE,
  uiMotion,
  uiHover,
  uiSize,
  viewport,
  ...props
}: CarouselProps) {
  const animation: Variants = mergeVariants(uiMotion, uiHover);

  const baseStyle = "relative group flex flex-col shadow-lg";

  return (
    <MiniBox className={`${baseStyle} ${uiStyle[ui]}`} {...props}>
      <MiniImage
        className={`${className}`}
        uiHover={uiHover}
        uiMotion={uiMotion}
        uiSize={uiSize}
        viewport={viewport}
        src={image}
      />

      <div
        className={`absolute inset-0 flex flex-col opacity-0 group-hover:opacity-100 z-10 pointer-events-none ${childClassName}`}
      >
        {children}
      </div>
    </MiniBox>
  );
}

export function MiniImageCard({
  children,
  image = "",
  className = "",
  childClassName = "",
  ui = MiniUiType.NONE,
  uiMotion,
  uiHover,
  uiSize,
  viewport,
  ...props
}: CarouselProps) {
  const animation: Variants = mergeVariants(uiMotion, uiHover);

  const baseStyle = "relative group flex flex-col shadow-lg";

  return (
    <MiniBox
      className={`${baseStyle} ${uiStyle[ui]} ${className}`}
      uiHover={uiHover}
      uiMotion={uiMotion}
      uiSize={uiSize}
      viewport={viewport}
      {...props}
    >
      <MiniImage src={image} className={`${childClassName}`} />
      {children}
    </MiniBox>
  );
}
