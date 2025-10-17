import MiniButton from '@/components/miniButton';

export default function MainHeroSection({ className }: { className?: string }) {
  return (
    <section className={`h-screen ${className}`}>
      <div className="col-start-3 col-end-11 flex flex-col justify-center text-left">
        <h1 className="text-7xl leading-tight mini-text font-bold">
          Reach Your
        </h1>
        <h1 className="text-7xl leading-tight mini-text font-bold">
          Financial Goals
        </h1>
        <h1 className="text-7xl leading-tight mini-brand-text font-bold">
          with MFS
        </h1>
        <p className="text-lg mini-light-text max-w-xl mt-4">
          In a world that moves too fast, taking a moment to think clearly
          becomes a rare strength. Simplicity, after all, is the result of deep
          understanding — not the absence of complexity.
        </p>
        <div className="flex gap-4 mt-5">
          <MiniButton className="w-[150px] mini-round">test</MiniButton>
          <MiniButton className="w-[150px] mini-round" variant="outline">
            test
          </MiniButton>
        </div>
      </div>

      <div className="col-start-12 col-end-20 relative round overflow-hidden mt-12 mb-12">
        <img
          src="./picture.jpg"
          alt="Finance"
          className="inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
