import { VariantLabels, Variants } from "framer-motion";

export interface MiniComponetType {
  ui?: MiniUiType;
  motion?: Variants | undefined;
  hover?: Variants | undefined;
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

export const mergeVariants = (...data: (Variants | undefined)[]): Variants => {
  return data
    .filter((v): v is Variants => v !== undefined)
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
};
