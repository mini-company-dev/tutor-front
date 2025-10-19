import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MainAboutSection from "@/app/sections/mainAboutSection";
import MainHeroSection from "@/app/sections/mainHeroSection";
import MainSubscribSection from "@/app/sections/mainSubscribSectios";

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
