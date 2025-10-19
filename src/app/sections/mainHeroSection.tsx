import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import {
  fadeIn,
  fadeInUp,
} from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniInput from "@/mini-components/ui/miniInput";

export default function MainHeroSection({ className }: { className?: string }) {
  return (
    <div
      className={`h-screen flex flex-col justify-center items-center ${className}`}
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, var(--brand) 50%, transparent), color-mix(in srgb, var(--bg) 50%, transparent))",
      }}
    >
      <section>
        <div className="col-start-1 col-end-21 mb-20 text-center">
          <MiniBox ui={MiniUiType.NONE} motion={fadeInUp()}>
            <h1 className="mini-t text-5xl font-bold">
              Find the Right Tutor for You
            </h1>
          </MiniBox>
          <MiniBox ui={MiniUiType.NONE} motion={fadeIn(1.7)}>
            <p className="text-[var(--text-light)] mt-4">
              당신의 목표, 수준, 시간에 맞는 맞춤형 튜터를 찾아보세요.
              <br />
              언제 어디서나 쉽고 빠르게 예약하고, 성장의 여정을 시작하세요.
            </p>
          </MiniBox>
          <div className="mt-8 flex justify-center">
            <MiniInput
              ui={MiniUiType.BASIC}
              className="p-3 rounded-full w-[550px] mr-3 shadow-lg"
              placeholder="과목, 튜터 이름 또는 지역으로 검색"
            />
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.08)}
              className="rounded-full px-6 py-3 text-sm shadow-lg"
            >
              튜터 검색
            </MiniButton>
          </div>
        </div>

        <div className="col-start-7 col-end-15 grid grid-cols-4 gap-8">
          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl shadow-lg"
          >
            <h3 className="font-bold">1,200+</h3>
            <p className="text-[var(--text-light)]">등록 튜터</p>
          </MiniBox>

          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl shadow-lg"
          >
            <h3 className="font-bold">8,500+</h3>
            <p className="text-[var(--text-light)]">누적 수업</p>
          </MiniBox>

          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl shadow-lg"
          >
            <h3 className="font-bold">4.9/5</h3>
            <p className="text-[var(--text-light)]">평균 만족도</p>
          </MiniBox>

          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl shadow-lg"
          >
            <h3 className="font-bold">50+</h3>
            <p className="text-[var(--text-light)]">전문 과목</p>
          </MiniBox>
        </div>
      </section>
    </div>
  );
}
