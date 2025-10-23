import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniSpacer from "@/mini-components/ui/miniSpacer";

export default function MainHeroSection({ className }: { className?: string }) {
  return (
    <section
      className={`relative w-full h-[80vh] overflow-hidden ${className ?? ""}`}
    >
      <iframe
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.3] z-[-1]"
        src="https://www.youtube.com/embed/k49dtURLDoE?autoplay=1&mute=1&loop=1&playlist=k49dtURLDoE&controls=0&showinfo=0&modestbranding=1"
        title="YouTube video background"
        allow="autoplay; fullscreen"
      />

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
          hover={hoverScale()}
        >
          시작하기
        </MiniButton>
      </div>
    </section>
  );
}
