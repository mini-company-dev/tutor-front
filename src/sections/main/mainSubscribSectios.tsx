import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MiniHeroSection from "@/mini-components/section/miniHeroSection";

export default function MainSubscribSection({
  className,
}: {
  className?: string;
}) {
  return (
    <MiniHeroSection
      className={`h-[50vh] sm:h-[80vh] ${className}`}
      video="video.mp4"
    />
  );
}
