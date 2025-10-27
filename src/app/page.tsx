import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MainAboutSection from "@/sections/main/mainAboutSection";
import MainHeroSection from "@/sections/main/mainHeroSection";
import MainSubscribSection from "@/sections/main/mainSubscribSectios";

export default function Home() {
  return (
    <div>
      <MainHeroSection />
      <MiniSpacer size={200} />
      <MainAboutSection />
      <MiniSpacer size={200} />
      <MainSubscribSection />
      <MiniSpacer size={250} />
    </div>
  );
}
