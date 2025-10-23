import MiniCarousel, { CarouselImageType } from "../ui/miniCarousel";

interface MiniHeroSectionProps {
  className?: string;
  children?: React.ReactNode;
  video?: string;
  image?: string[];
}

export default function MiniHeroSection({
  className = "",
  children,
  video,
  image,
}: MiniHeroSectionProps) {
  if (image && image.length > 1) {
    const imageData: CarouselImageType[] = image.map((imgSrc) => ({
      image: imgSrc,
      className: className,
      children: children,
    }));
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        <MiniCarousel className={className} images={imageData} />
      </section>
    );
  }

  if (video) {
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        <iframe
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.3] z-[-1]"
          src={video}
          allow="autoplay; fullscreen"
        />
        {children}
      </section>
    );
  }

  return;
}
