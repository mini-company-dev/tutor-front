import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { fadeIn } from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniImageCard from "@/mini-components/ui/miniImageCard";

export default function MainAboutSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <section className="p-10">
        <MiniBox
          className="col-start-1 col-end-21 text-center"
          motion={fadeIn()}
        >
          <h2 className="text-4xl">Find Your Perfect Tutor</h2>
          <h2 className="text-4xl">
            Personalized learning that{" "}
            <strong className="text-[var(--brand)] font-bold">
              unlocks your potential
            </strong>
          </h2>
        </MiniBox>
      </section>

      <section className="p-5">
        <div className="col-start-3 col-end-19 grid grid-cols-3 gap-8">
          <MiniBox ui={MiniUiType.NONE} className="p-3">
            <MiniImageCard
              className="h-[300px] rounded-2xl"
              image="./main-picture/pic2.jpg"
            />
            <h3 className="text-xl font-bold mt-2">
              나에게 맞는 튜터와 함께 배우는 시간
            </h3>
            <p className="text-[var(--text-light)]">
              목표, 수준, 관심사에 맞춰 나만의 튜터를 찾아보세요.
              <br />
              진짜 배움은 나를 이해하는 것에서 시작됩니다.
            </p>
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="rounded-full text-sm mt-4 flex justify-center"
            >
              튜터 찾기
            </MiniButton>
          </MiniBox>

          <MiniBox ui={MiniUiType.NONE} className="p-3">
            <MiniImageCard
              className="h-[300px] rounded-2xl"
              image="./main-picture/pic3.jpg"
            />
            <h3 className="text-xl font-bold mt-2">
              꾸준함이 만드는 실력의 변화
            </h3>
            <p className="text-[var(--text-light)]">
              매일 조금씩 성장하는 학습 루틴.
              <br />
              주기적인 수업권으로 꾸준한 학습 습관을 만들어보세요.
            </p>
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="rounded-full text-sm mt-4 flex justify-center"
            >
              수업권 구매
            </MiniButton>
          </MiniBox>

          <MiniBox ui={MiniUiType.NONE} className="p-3">
            <MiniImageCard
              className="h-[300px] rounded-2xl"
              image="./main-picture/pic1.jpg"
            />
            <h3 className="text-xl font-bold mt-2">
              함께 성장하는 학습 커뮤니티
            </h3>
            <p className="text-[var(--text-light)]">
              튜터와 학생이 함께 배우고 소통하는 공간.
              <br />
              지속적인 피드백으로 더 나은 배움을 이어갑니다.
            </p>
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="rounded-full text-sm mt-4 flex justify-center"
            >
              이용가이드 보기
            </MiniButton>
          </MiniBox>
        </div>
      </section>
    </div>
  );
}
