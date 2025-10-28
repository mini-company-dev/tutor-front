"use client";

import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/basic-ui/miniBox";
import { useRouter } from "next/navigation";
import MiniImage from "@/mini-components/basic-ui/miniImage";
import { ClientTutorListType } from "@/types/tutor";

export default function TutorProfileComponent({
  className,
  tutor,
}: {
  className?: string;
  tutor: ClientTutorListType;
}) {
  const router = useRouter();

  return (
    <MiniBox
      onClick={() => router.push(`/tutors/${tutor.id}`)}
      ui={MiniUiType.BASIC}
      uiMotion={[fadeInUp()]}
      uiHover={[hoverScale()]}
      className={`p-5 rounded-2xl shadow-lg cursor-pointer transition-transform duration-200 ${className}`}
    >
      {/* 프로필 이미지 */}
      <MiniImage
        src={tutor.picture}
        alt={`${tutor.name} 프로필`}
        className="h-[200px] w-full object-cover rounded-xl mb-3"
      />

      {/* 이름 + 평점 */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-bold">{tutor.name}</h3>
        <p className="text-sm text-[var(--text-light)]">⭐ {tutor.rating}</p>
      </div>

      {/* 한 줄 소개 */}
      <p className="text-[var(--text-light)] text-sm mb-2 line-clamp-2">
        {tutor.shortBio}
      </p>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tutor.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="py-1 text-xs rounded-full text-[var(--text-light)]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </MiniBox>
  );
}
