"use client";

import { useEffect, useState } from "react";
import {
  hoverBright,
  hoverLift,
} from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiSize, MiniUiType } from "@/mini-components/miniComponentConfig";
import {
  MiniImageCard,
  MiniImageInsideCard,
} from "@/mini-components/ui/miniImageCard";

export default function MainAboutImageSection({
  className,
}: {
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ 브라우저 환경에서만 실행
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ PC 레이아웃
  if (!isMobile) {
    return (
      <section className={className}>
        <div className="col-start-3 col-end-19 grid grid-cols-4 gap-8">
          <MiniImageInsideCard
            className="h-[300px] rounded-2xl"
            childClassName="text-white items-center justify-center"
            image="./main-picture/pic1.jpg"
            uiHover={[hoverLift(), hoverBright(0.6, 0.3)]}
            uiSize={MiniUiSize.NONE}
          >
            <h3 className="text-xl font-bold mt-2">직장인을 위한 비즈니스</h3>
            <p>초급-중급 영어</p>
          </MiniImageInsideCard>

          <MiniImageInsideCard
            className="h-[300px] rounded-2xl"
            childClassName="text-white items-center justify-center"
            image="./main-picture/pic2.jpg"
            uiHover={[hoverLift(), hoverBright(0.6, 0.3)]}
            uiSize={MiniUiSize.NONE}
          >
            <h3 className="text-xl font-bold mt-2">원어민과 일상 생활영어</h3>
            <p>초급-중급</p>
          </MiniImageInsideCard>

          <MiniImageInsideCard
            className="h-[300px] rounded-2xl"
            childClassName="text-white items-center justify-center"
            image="./main-picture/pic3.jpg"
            uiHover={[hoverLift(), hoverBright(0.6, 0.3)]}
            uiSize={MiniUiSize.NONE}
          >
            <h3 className="text-xl font-bold mt-2">성인영어 취업/이직 준비</h3>
            <p>OPIC, TOIEC</p>
          </MiniImageInsideCard>

          <MiniImageInsideCard
            className="h-[300px] rounded-2xl"
            childClassName="text-white items-center justify-center"
            image="./tutor.png"
            uiHover={[hoverLift(), hoverBright(0.6, 0.3)]}
            uiSize={MiniUiSize.NONE}
          >
            <h3 className="text-xl font-bold mt-2">해외 유학/이민 준비</h3>
            <p>IELTS, TOEFL, DUOLINGO</p>
          </MiniImageInsideCard>
        </div>
      </section>
    );
  }

  // ✅ 모바일 레이아웃
  return (
    <section className={className}>
      <div className="col-start-1 col-end-7 grid grid-cols-2 gap-4 px-4">
        <MiniImageCard
          className="rounded-xl p-3"
          childClassName="rounded-xl h-[200px]"
          image="./main-picture/pic1.jpg"
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.NONE}
        >
          <h3 className="text-base font-bold text-center">직장인 비즈니스</h3>
        </MiniImageCard>

        <MiniImageCard
          className="rounded-xl p-3"
          childClassName="rounded-xl h-[200px]"
          image="./main-picture/pic2.jpg"
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.NONE}
        >
          <h3 className="text-base font-bold text-center">일상 생활영어</h3>
        </MiniImageCard>

        <MiniImageCard
          className="rounded-xl p-3"
          childClassName="rounded-xl h-[200px]"
          image="./main-picture/pic3.jpg"
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.NONE}
        >
          <h3 className="text-base font-bold text-center">취업/이직 영어</h3>
        </MiniImageCard>

        <MiniImageCard
          className="rounded-xl p-3"
          childClassName="rounded-xl h-[200px]"
          image="./tutor.png"
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.NONE}
        >
          <h3 className="text-base font-bold text-center">유학/이민 영어</h3>
        </MiniImageCard>
      </div>
    </section>
  );
}
