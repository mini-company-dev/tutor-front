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
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          allow="autoplay; fullscreen"
        />
        {children}
      </section>
    );
  }

  return;
}
