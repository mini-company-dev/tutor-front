import {
  fadeIn,
  fadeInUp,
} from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/basic-ui/miniBox";
import MiniImage from "@/mini-components/basic-ui/miniImage";
import MiniSpacer from "@/mini-components/ui/miniSpacer";

export default function TutorListTitle({ className }: { className?: string }) {
  return (
    <div className={`bg-[var(--brand)]/30 ${className}`}>
      <MiniSpacer size={50} />
      <section>
        <div className="relative z-10 col-start-5 col-end-10 flex flex-col justify-center">
          <MiniBox uiMotion={[fadeInUp()]}>
            <h1 className="text-5xl font-bold">
              마스터 튜터의 멘토링,
              <br />
              <strong>학습을 완성</strong>시킨다.
            </h1>
          </MiniBox>
          <MiniSpacer size={10} />
          <MiniBox uiMotion={[fadeIn(0.7)]}>
            <p className="text-lg text-[var(--text-light)]">
              나만의 맞춤형 튜터와
              <strong>EasyFun</strong>
              화상영어
            </p>
          </MiniBox>
        </div>
        <MiniImage
          className="col-start-10 col-end-19"
          src="./tutor-picture/main.png"
        />
      </section>
      <MiniSpacer size={50} />
    </div>
  );
}
