import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniInput from "@/mini-components/ui/miniInput";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import {
  hoverLift,
  hoverScale,
} from "@/mini-components/animation/miniHoverAnimation";
import MiniSelect from "@/mini-components/ui/miniDropdown";
import TutorProfileComponent from "@/components/tutors/tutorProfileComponent";
import { TutorType } from "@/types/tutor";

const tutors: TutorType[] = [
  {
    id: "tutor-1",
    name: "이수현",
    subject: "영어 회화",
    rating: 4.9,
    price: "25,000원",
  },
  {
    id: "tutor-2",
    name: "김민준",
    subject: "수학 심화",
    rating: 4.8,
    price: "30,000원",
  },
  {
    id: "tutor-3",
    name: "박지은",
    subject: "한국어 TOPIK",
    rating: 5.0,
    price: "28,000원",
  },
  {
    id: "tutor-4",
    name: "John Park",
    subject: "Business English",
    rating: 4.7,
    price: "35,000원",
  },
  {
    id: "tutor-5",
    name: "이수현",
    subject: "영어 회화",
    rating: 4.9,
    price: "25,000원",
  },
  {
    id: "tutor-6",
    name: "김민준",
    subject: "수학 심화",
    rating: 4.8,
    price: "30,000원",
  },
  {
    id: "tutor-7",
    name: "박지은",
    subject: "한국어 TOPIK",
    rating: 5.0,
    price: "28,000원",
  },
  {
    id: "tutor-8",
    name: "John Park",
    subject: "Business English",
    rating: 4.7,
    price: "35,000원",
  },
  {
    id: "tutor-9",
    name: "이수현",
    subject: "영어 회화",
    rating: 4.9,
    price: "25,000원",
  },
  {
    id: "tutor-10",
    name: "김민준",
    subject: "수학 심화",
    rating: 4.8,
    price: "30,000원",
  },
  {
    id: "tutor-11",
    name: "박지은",
    subject: "한국어 TOPIK",
    rating: 5.0,
    price: "28,000원",
  },
  {
    id: "tutor-12",
    name: "John Park",
    subject: "Business English",
    rating: 4.7,
    price: "35,000원",
  },
];

export default function TutorListSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section>
      <div className="col-start-3 col-end-19 mb-10">
        <MiniBox
          ui={MiniUiType.NONE}
          className="flex flex-wrap gap-4 items-center justify-between"
        >
          {/* 검색창 */}
          <div className="flex gap-3 items-center">
            <MiniInput
              ui={MiniUiType.BASIC}
              className="p-3 rounded-full w-[500px]"
              placeholder="튜터 이름, 과목, 지역으로 검색"
            />
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="rounded-full px-5 py-3 text-sm shadow-lg w-[80px]"
            >
              검색
            </MiniButton>
          </div>

          {/* 필터 & 정렬 */}
          <div className="flex gap-3">
            <MiniSelect
              hover={hoverLift()}
              className="rounded-full w-52 px-4 py-2.5 text-sm font-medium"
              ui={MiniUiType.OUTLINE}
              placeholder="과목 선택"
              options={[
                { value: "all", label: "전체 과목" },
                { value: "english", label: "영어" },
                { value: "math", label: "수학" },
                { value: "korean", label: "한국어" },
              ]}
            />
            <MiniSelect
              hover={hoverLift()}
              className="rounded-full w-52 px-4 py-2.5 text-sm font-medium"
              ui={MiniUiType.OUTLINE}
              placeholder="지역 선택"
              options={[
                { value: "all", label: "전체 지역" },
                { value: "seoul", label: "서울" },
                { value: "busan", label: "부산" },
                { value: "daegu", label: "대구" },
              ]}
            />
            <MiniSelect
              hover={hoverLift()}
              className="rounded-full w-52 px-4 py-2.5 text-sm font-medium"
              ui={MiniUiType.OUTLINE}
              placeholder="정렬 기준"
              options={[
                { value: "rating", label: "정렬: 평점순" },
                { value: "price", label: "정렬: 가격순" },
                { value: "latest", label: "정렬: 최신순" },
              ]}
            />
          </div>
        </MiniBox>
      </div>
      {/* 튜터 리스트 */}
      <div className="col-start-3 col-end-19 grid grid-cols-4 gap-8">
        {tutors.map((tutor, idx) => (
          <div key={idx}>
            <TutorProfileComponent tutor={tutor} />
          </div>
        ))}
      </div>
    </section>
  );
}
