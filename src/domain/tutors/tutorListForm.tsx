"use client";

import {
  hoverLift,
  hoverScale,
} from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import MiniInput from "@/mini-components/basic-ui/miniInput";
import MiniDropdown from "@/mini-components/ui/dropdown/miniDropdown";
import useTutorListForm from "./useTutorListForm";
import TutorProfileComponent from "@/components/tutors/tutorProfileComponent";
import MiniSpacer from "@/mini-components/ui/miniSpacer";
import { useEffect } from "react";

export default function TutorListForm() {
  const {
    handleSubmit,
    message,
    loading,
    isSuccess,
    data,

    setSearch,
    setCareer,
    setStyle,
    setSort,
  } = useTutorListForm();

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 🔹 검색 및 필터 영역 */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-3 items-center">
          <MiniInput
            ui={MiniUiType.BASIC}
            className="p-3 rounded-full w-[500px]"
            placeholder="튜터 이름, 키워드로 검색"
            onChange={(e) => setSearch(e.target.value)}
          />
          <MiniButton
            ui={MiniUiType.BRAND}
            uiHover={[hoverScale(1.1)]}
            className="rounded-full px-5 py-3 text-sm shadow-lg w-[80px]"
            onClick={handleSubmit}
          >
            검색
          </MiniButton>
        </div>

        <div className="flex gap-3">
          <MiniDropdown
            uiHover={[hoverLift()]}
            className="rounded-full w-52 px-4 py-2.5 text-sm font-medium"
            ui={MiniUiType.OUTLINE}
            placeholder="경력 선택"
            onValueSelect={(value) => setCareer(value)}
            options={[
              { value: "all", label: "전체 경력" },
              { value: "junior", label: "1년 미만" },
              { value: "mid", label: "1~3년" },
              { value: "senior", label: "3년 이상" },
            ]}
          />

          <MiniDropdown
            uiHover={[hoverLift()]}
            className="rounded-full w-52 px-4 py-2.5 text-sm font-medium"
            ui={MiniUiType.OUTLINE}
            placeholder="성향 선택"
            onValueSelect={(value) => setStyle(value)}
            options={[
              { value: "all", label: "전체 성향" },
              { value: "friendly", label: "친절한" },
              { value: "strict", label: "엄격한" },
              { value: "fun", label: "재미있는" },
            ]}
          />

          <MiniDropdown
            uiHover={[hoverLift()]}
            className="rounded-full w-52 px-4 py-2.5 text-sm font-medium"
            ui={MiniUiType.OUTLINE}
            placeholder="정렬 기준"
            onValueSelect={(value) => setSort(value)}
            options={[
              { value: "rating", label: "정렬: 평점순" },
              { value: "match", label: "정렬: AI 적합도" },
              { value: "latest", label: "정렬: 최신순" },
            ]}
          />
        </div>
      </div>

      <MiniSpacer size={100} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          <p className="col-span-4 text-center text-gray-400">로딩 중...</p>
        ) : data && data.length > 0 ? (
          data.map((tutor, idx) => (
            <div key={idx}>
              <TutorProfileComponent className="h-[380px]" tutor={tutor} />
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            등록된 튜터가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
