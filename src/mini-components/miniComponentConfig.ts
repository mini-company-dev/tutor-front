import { Variants } from "framer-motion";

export interface MiniComponetType {
  ui?: MiniUiType;
  motion?: Variants[] | undefined;
  hover?: Variants[] | undefined;
}

export enum MiniUiType {
  BASIC = "basic",
  OUTLINE = "outline",
  BRAND = "brand",
  NONE = "none",
}

export type MiniUiStyleType = {
  [key in MiniUiType]: string;
};

export const mergeVariants = (
  ...data: (Variants[] | undefined)[]
): Variants => {
  const flat = data
    .filter((arr): arr is Variants[] => arr !== undefined)
    .flat();

  return flat.reduce((acc, cur) => {
    for (const key in cur) {
      acc[key] = { ...(acc[key] || {}), ...(cur[key] || {}) };
    }
    return acc;
  }, {} as Variants);
};
