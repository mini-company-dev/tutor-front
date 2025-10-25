"use client";

import { Variants, ViewportOptions } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiType,
} from "../miniComponentConfig";
import { ReactNode } from "react";
import MiniBox from "./miniBox";

interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MiniComponetType {
  children?: ReactNode;
  childClassName?: string;
  image: string;
  viewport?: ViewportOptions | undefined;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export default function MiniImageCard({
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

  const baseStyle = "relative group flex flex-col";

  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      <MiniBox
        ui={MiniUiType.NONE}
        className="w-full h-[300px] rounded-2xl overflow-hidden"
        uiHover={uiHover}
        uiMotion={uiMotion}
        uiSize={uiSize}
        viewport={viewport}
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
      </MiniBox>

      <div
        className={`absolute inset-0 flex flex-col opacity-0 group-hover:opacity-100 z-10 pointer-events-none ${childClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
