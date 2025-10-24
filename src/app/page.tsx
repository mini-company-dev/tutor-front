import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MainAboutSection from "@/sections/main/mainAboutSection";
import MainHeroSection from "@/sections/main/mainHeroSection";
import MainSub2scribSection from "@/sections/main/mainSub2scribSectios";
import MainSubscribSection from "@/sections/main/mainSubscribSectios";

export default function Home() {
  return (
    <div>
      <MainHeroSection />
      <MiniSpacer size={250} />
      <MainAboutSection />
      <MiniSpacer size={250} />
      <MainSubscribSection />
      <MainSub2scribSection />
      <MiniSpacer size={250} />
    </div>
  );
}
