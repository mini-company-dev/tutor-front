import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MainAboutSection from "@/sections/main/mainAboutSection";
import MainHeroSection from "@/sections/main/mainHeroSection";
import MainSubscribSection from "@/sections/main/mainSubscribSectios";

export default function Home() {
  return (
    <div>
      <MainHeroSection className="rounded-4xl mini-shadow oper" />
      <MiniSpacer size={250} />
      <MainSubscribSection />
      <MiniSpacer size={250} />
      <MainAboutSection />
      <MiniSpacer size={250} />
    </div>
  );
}
