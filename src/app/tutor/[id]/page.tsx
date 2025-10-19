import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";

export default function TutorDetailSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={`w-full grid grid-cols-20 gap-8 p-10 ${className}`}>
      {/* Left Profile (col 3~9) */}
      <div className="col-start-3 col-end-9">
        <MiniBox
          ui={MiniUiType.BASIC}
          motion={fadeInUp()}
          className="flex flex-col items-center text-center p-6 rounded-2xl mini-shadow"
        >
          <img
            src="/tutors/profile1.jpg"
            alt="튜터 프로필"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold">이수현 튜터</h2>
          <p className="mini-t-l text-sm mt-1">
            영어 회화 · Grammar · 비즈니스 영어
          </p>

          <div className="flex items-center justify-center mt-3 space-x-2">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-base font-semibold">4.9</span>
            <span className="text-gray-500 text-sm">(120 reviews)</span>
          </div>

          <MiniButton
            ui={MiniUiType.BRAND}
            className="mt-6 rounded-full w-full py-3 text-sm mini-shadow"
          >
            수업 예약하기
          </MiniButton>
          <MiniButton
            ui={MiniUiType.OUTLINE}
            className="mt-2 w-full py-3 text-sm"
          >
            1:1 문의하기
          </MiniButton>
        </MiniBox>
      </div>

      {/* Right Info (col 9~18) */}
      <div className="col-start-9 col-end-18 space-y-8">
        {/* 수업 소개 */}
        <MiniBox ui={MiniUiType.NONE} className="p-6 mini-shadow rounded-2xl">
          <h3 className="text-xl font-bold mb-3">수업 소개</h3>
          <p className="mini-t-l leading-relaxed">
            실생활에서 바로 사용할 수 있는 주제 중심 회화 수업입니다.
            <br />
            문법보다는 말하기 중심으로 진행하며, 학생의 레벨에 따라 속도와
            난이도를 조정합니다.
          </p>
        </MiniBox>

        {/* 수업 가능 시간 */}
        <MiniBox ui={MiniUiType.NONE} className="p-6 mini-shadow rounded-2xl">
          <h3 className="text-xl font-bold mb-3">수업 가능 시간</h3>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            캘린더 컴포넌트 (예: FullCalendar)
          </div>
        </MiniBox>

        {/* 후기 섹션 */}
        <MiniBox ui={MiniUiType.NONE} className="p-6 mini-shadow rounded-2xl">
          <h3 className="text-xl font-bold mb-3">학생 후기</h3>
          <ul className="space-y-3">
            <li className="mini-t-l">
              “튜터님이 발음 교정에 정말 세심하게 도와주셨어요!” – 지민
            </li>
            <li className="mini-t-l">
              “첫 수업부터 친절하고 실력도 뛰어나신 분이었어요.” – 현수
            </li>
            <li className="mini-t-l">
              “매주 꾸준히 배우고 있는데 실력이 눈에 띄게 늘었어요.” – 수아
            </li>
          </ul>
        </MiniBox>

        {/* 튜터 소개 */}
        <MiniBox ui={MiniUiType.NONE} className="p-6 mini-shadow rounded-2xl">
          <h3 className="text-xl font-bold mb-3">튜터 소개</h3>
          <p className="mini-t-l leading-relaxed">
            TESOL 자격증 보유 / 5년 이상 영어 교육 경력.
            <br />
            대학생부터 직장인까지 다양한 연령대의 학습자를 지도해왔으며, 학생의
            학습 목표에 맞춘 커리큘럼 설계를 지향합니다.
          </p>
        </MiniBox>
      </div>
    </section>
  );
}
