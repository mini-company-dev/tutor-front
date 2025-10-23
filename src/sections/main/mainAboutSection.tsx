import {
  hoverBright,
  hoverLift,
} from "@/mini-components/animation/miniHoverAnimation";
import { fadeIn } from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniImageCard from "@/mini-components/ui/miniImageCard";
import MiniSpacer from "@/mini-components/ui/miniSpacer";

export default function MainAboutSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <section>
        <MiniBox
          className="col-start-1 col-end-21 text-center"
          motion={[fadeIn(1.5)]}
        >
          <h2 className="text-4xl font-bold">
            나만의 맞춤형 튜터와 <strong>EasyFun 화상영어</strong>
          </h2>
          <MiniSpacer size={10} />
          <p className="text-xl text-[var(--text-light)]">
            나의 스토리가 교재가 되다
          </p>
        </MiniBox>
      </section>
      <MiniSpacer size={20} />
      <section>
        <div className="col-start-3 col-end-19 grid grid-cols-4 gap-8">
          <MiniImageCard
            className="p-3"
            childClassName="text-white items-center justify-center"
            image="./main-picture/pic1.jpg"
            hover={[hoverLift(), hoverBright(0.7, 0.3)]}
          >
            <h3 className="text-xl font-bold mt-2">직장인을 위한 비즈니스</h3>
            <p>초급-중급 영어</p>
          </MiniImageCard>

          <MiniImageCard
            className="p-3"
            childClassName="text-white items-center justify-center"
            image="./main-picture/pic2.jpg"
            hover={[hoverLift(), hoverBright(0.7, 0.3)]}
          >
            <h3 className="text-xl font-bold mt-2">원어민과 일상 생활영어</h3>
            <p>초급-중급</p>
          </MiniImageCard>

          <MiniImageCard
            className="p-3"
            childClassName="text-white items-center justify-center"
            image="./main-picture/pic3.jpg"
            hover={[hoverLift(), hoverBright(0.7, 0.3)]}
          >
            <h3 className="text-xl font-bold mt-2">성인영어 취업/이직 준비</h3>
            <p>OPIC, TOIEC</p>
          </MiniImageCard>

          <MiniImageCard
            className="p-3"
            childClassName="text-white items-center justify-center"
            image="./tutor.png"
            hover={[hoverLift(), hoverBright(0.7, 0.3)]}
          >
            <h3 className="text-xl font-bold mt-2">해외 유학/이민 준비</h3>
            <p>IELTS, TOEFL, DUOLINGO</p>
          </MiniImageCard>
        </div>
      </section>
    </div>
  );
}
