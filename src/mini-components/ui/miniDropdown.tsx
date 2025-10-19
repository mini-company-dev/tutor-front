"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiStyleType,
  MiniUiType,
} from "../miniComponentConfig";

// === MiniDropdown Props ===
interface MiniDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MiniComponetType {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  onValueSelect?: (value: string) => void;
}

// === 공통 UI 스타일 (고정) ===
const uiStyle: MiniUiStyleType = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

// === 컴포넌트 ===
export default function MiniDropdown({
  label,
  options,
  placeholder = "선택하세요",
  onValueSelect,
  className = "",
  ui = MiniUiType.BASIC,
  motion: motionVariant,
  hover,
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
    setSelected(value);
    setIsOpen(false);
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

      {/* 드롭다운 리스트 */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute w-52 mt-2 rounded-xl overflow-hidden z-50
              border border-gray-200 bg-white/80 backdrop-blur-md
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            `}
          >
            {options.map((opt, idx) => (
              <motion.li
                key={idx}
                whileHover={{ backgroundColor: "var(--brand)", color: "#fff" }}
                className="
                  mini-no-transition
                  px-4 py-2 text-sm cursor-pointer
                  text-[var(--foreground)] bg-transparent
                  transition-colors duration-150
                "
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
