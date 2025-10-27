import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniHeroSection from "@/mini-components/section/miniHeroSection";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import MiniSpacer from "@/mini-components/ui/miniSpacer";

export default function MainHeroSection({ className }: { className?: string }) {
  return (
    <MiniHeroSection
      className={`h-[50vh] sm:h-screen ${className ?? ""}`}
      video="https://www.youtube.com/embed/k49dtURLDoE?autoplay=1&mute=1&loop=1&playlist=k49dtURLDoE&controls=0&showinfo=0&modestbranding=1"
    >
      <div className="relative z-10 col-start-1 col-end-21 flex flex-col items-center justify-center text-center px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          영어가 내 <strong>생활속</strong>에 스며들다
        </h1>
        <MiniSpacer size={10} />
        <p className="text-base sm:text-lg text-[var(--text-light)]">
          나만의 맞춤형 튜터와 <strong>EasyFun</strong> 화상영어
        </p>
        <MiniSpacer size={20} />
        <MiniButton
          ui={MiniUiType.BRAND}
          className="w-[70%] sm:w-30 rounded-2xl mt-4"
          uiHover={[hoverScale()]}
        >
          시작하기
        </MiniButton>
      </div>
    </MiniHeroSection>
  );
}
