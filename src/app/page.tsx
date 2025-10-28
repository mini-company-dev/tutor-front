import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MainAboutSection from "@/sections/main/mainAboutSection";
import MainHeroSection from "@/sections/main/mainHeroSection";
import MainSubscribSection from "@/sections/main/mainSubscribSectios";

export default function Home() {
  return (
    <div>
      <MainHeroSection className="shadow-lg" />
      <MainAboutSection />
      <MainSubscribSection className="shadow-lg" />
      <MiniSpacer size={250} />
    </div>
  );
}
