import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/basic-ui/miniBox";

export default function TutorListTitle({ className }: { className?: string }) {
  return (
    <section className={`${className}`}>
      <MiniBox
        className="col-start-1 col-end-21 text-center"
        ui={MiniUiType.NONE}
        uiMotion={[fadeInUp()]}
      >
        <h1 className="text-5xl font-bold">Find the Right Tutor for You</h1>
        <p className="text-[var(--text-light)] mt-4">
          당신의 목표, 수준, 시간에 맞는 맞춤형 튜터를 찾아보세요.
          <br />
          언제 어디서나 쉽고 빠르게 예약하고, 성장의 여정을 시작하세요.
        </p>
      </MiniBox>
    </section>
  );
}
