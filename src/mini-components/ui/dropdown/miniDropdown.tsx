"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiType,
} from "../../miniComponentConfig";
import MiniSelect, { OptionType } from "./miniSelect";

// === MiniDropdown Props ===
interface MiniDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MiniComponetType {
  options: OptionType[];
  placeholder?: string;

  onValueSelect?: (value: string) => void;
}

// === 공통 UI 스타일 (고정) ===
const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

// === 컴포넌트 ===
export default function MiniDropdown({
  options,
  placeholder = "선택하세요",
  onValueSelect,
  className = "",

  ui = MiniUiType.BASIC,
  uiMotion: motionVariant,
  uiHover: hover,
  ...props
}: MiniDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  const animation: Variants = mergeVariants(motionVariant, hover);

  // 바깥 클릭 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setIsOpen(false);
    setSelected(value);
    onValueSelect?.(value);
  };

  return (
    <div ref={ref} className={`relative inline-block ${className}`} {...props}>
      {/* 트리거 버튼 */}
      <motion.button
        variants={animation}
        initial={animation ? "hidden" : undefined}
        animate={animation ? "visible" : undefined}
        whileHover={animation ? "whileHover" : undefined}
        onClick={() => setIsOpen((p) => !p)}
        className={`
          flex justify-between items-center cursor-pointer
          ${uiStyle[ui]}
          ${className}
        `}
      >
        <span>
          {selected
            ? options.find((opt) => opt.value === selected)?.label
            : placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-gray-400"
        >
          ▼
        </motion.span>
      </motion.button>

      <MiniSelect isOpen={isOpen} options={options} onSelect={handleSelect} />
    </div>
  );
}
