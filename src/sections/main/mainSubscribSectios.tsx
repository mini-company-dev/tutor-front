import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniHeroSection from "@/mini-components/section/miniHeroSection";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniSpacer from "@/mini-components/ui/miniSpacer";

export default function MainSubscribSection({
  className,
}: {
  className?: string;
}) {
  return (
    <MiniHeroSection
      className="h-screen"
      video="https://www.youtube.com/embed/k49dtURLDoE?autoplay=1&mute=1&loop=1&playlist=k49dtURLDoE&controls=0&showinfo=0&modestbranding=1"
    >
      <div className="relative z-10 col-start-1 col-end-21 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">
          영어가 내 <strong>생활속</strong>에 스며들다
        </h1>
        <MiniSpacer size={10} />
        <p className="text-lg text-[var(--text-light)]">
          나만의 맞춤형 튜터와
          <strong>EasyFun</strong>
          화상영어
        </p>
        <MiniSpacer size={20} />
        <MiniButton
          ui={MiniUiType.BRAND}
          className="px-10 rounded-full"
          hover={[hoverScale()]}
        >
          시작하기
        </MiniButton>
      </div>
    </MiniHeroSection>
  );
}
