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
          <h2 className="text-4xl">Education for the Future</h2>
          <h2 className="text-4xl">
            Learning that{" "}
            <strong className="mini-brand-text font-bold">
              awakens potential
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
              스스로 배우는 힘을 기르는 교육
            </h3>
            <p className="mini-t-l">
              우리는 학생이 단순히 지식을 암기하는 것이 아니라,
              <br />
              스스로 생각하고 탐구할 수 있도록 돕습니다.
            </p>
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="mini-round mini-t-r text-sm mt-4 flex justify-center"
            >
              자세히 보기
            </MiniButton>
          </MiniBox>

          <MiniBox ui={MiniUiType.NONE} className="p-3">
            <MiniImageCard
              className="h-[300px] rounded-2xl"
              image="./main-picture/pic3.jpg"
            />
            <h3 className="text-xl font-bold mt-2">실패를 통해 배우는 성장</h3>
            <p className="mini-t-l">
              실패는 끝이 아닌 출발점입니다.
              <br />
              우리는 도전 속에서 진짜 배움을 찾습니다.
            </p>
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="mini-round mini-t-r text-sm mt-4 flex justify-center"
            >
              튜터 보기
            </MiniButton>
          </MiniBox>

          <MiniBox ui={MiniUiType.NONE} className="p-3">
            <MiniImageCard
              className="h-[300px] rounded-2xl"
              image="./main-picture/pic1.jpg"
            />
            <h3 className="text-xl font-bold mt-2">
              함께 배우는 공동체의 가치
            </h3>
            <p className="mini-t-l">
              교육은 혼자가 아닌 함께의 여정입니다.
              <br />
              우리는 서로 배우고 가르치며 성장하는 문화를 만듭니다.
            </p>
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="mini-round mini-t-r text-sm mt-4 flex justify-center"
            >
              커리큘럼 보기
            </MiniButton>
          </MiniBox>
        </div>
      </section>
    </div>
  );
}
