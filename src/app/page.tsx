import MiniCarousel, { CarouselImageType } from '@/components/miniCarousel';
import MiniImageCard from '@/components/miniImageCard';
import MiniVoidSection from '@/components/miniSpacer';
import MainAboutSection from '@/sections/main/mainAboutSection';
import MainHeroSection from '@/sections/main/mainHeroSection';

export default function Home() {
  const images: CarouselImageType[] = [
    {
      image: 'background3.png',
      children: (() => {
        return <div>test</div>;
      })(),
      className: 'items-center justify-center',
    },
    {
      image: 'background1.png',
      children: (() => {
        return <div>test</div>;
      })(),
      className: 'items-center justify-center',
    },
  ];
  return (
    <div>
      {/* <LoginForm /> */}
      <MainHeroSection />
      <MiniVoidSection size={60} className="bg-[#d6efe8]/50" />
      <MainAboutSection className="bg-[#d6efe8]/50" />
      <MiniVoidSection size={100} className="bg-[#d6efe8]/50" />
    </div>
  );
}
