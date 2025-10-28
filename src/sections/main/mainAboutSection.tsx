import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/basic-ui/miniBox";
import MiniSpacer from "@/mini-components/ui/miniSpacer";
import MainAboutImageSection from "./mainAboutImageSection";

export default function MainAboutSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <MiniSpacer size={200} />
      <section>
        <MiniBox
          className="col-start-1 col-end-21 text-center px-4 sm:px-0"
          uiMotion={[fadeInUp()]}
        >
          <h2 className="text-2xl sm:text-4xl font-bold leading-snug sm:leading-tight">
            나만의 맞춤형 튜터와 <strong>EasyFun 화상영어</strong>
          </h2>

          <MiniSpacer size={10} />

          <p className="text-base sm:text-xl text-[var(--text-light)]">
            나의 스토리가 교재가 되다
          </p>
        </MiniBox>
      </section>
      <MiniSpacer size={30} />
      <MainAboutImageSection />
      <MiniSpacer size={200} />
    </div>
  );
}
