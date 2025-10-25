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
      className="h-[70vh]"
      video="https://www.youtube.com/embed/k49dtURLDoE?autoplay=1&mute=1&loop=1&playlist=k49dtURLDoE&controls=0&showinfo=0&modestbranding=1"
    >
      <div className="relative z-10 col-start-5 col-end-21 flex flex-col justify-center">
        <h1 className="text-5xl font-bold">
          마스터 튜터의 멘토링,
          <br />
          <strong>학습을 완성</strong>시킨다.
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
          className="w-30 rounded-2xl"
          uiHover={[hoverScale()]}
        >
          시작하기
        </MiniButton>
      </div>
    </MiniHeroSection>
  );
}
