"use client";

import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import { TutorType } from "@/types/tutor";
import { useRouter } from "next/navigation";

export default function TutorProfileComponent({ tutor }: { tutor: TutorType }) {
  const router = useRouter();

  return (
    <MiniBox
      onClick={() => router.push(`/tutors/${tutor.id}`)}
      ui={MiniUiType.BASIC}
      motion={[fadeInUp()]}
      hover={[hoverScale()]}
      className="p-5 rounded-2xl shadow-lg"
    >
      <img
        src={`tutor.png`}
        alt={`${tutor.name} 프로필`}
        className="h-[200px] w-full object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-bold">{tutor.name}</h3>
      <p className="text-[var(--text-light)] text-sm mb-1">{tutor.subject}</p>
      <p className="text-sm text-[var(--text-light)] mb-2">
        ⭐ {tutor.rating} | {tutor.price} / 회
      </p>
    </MiniBox>
  );
}
