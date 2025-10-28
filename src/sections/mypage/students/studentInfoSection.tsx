"use client";

import { zoomIn } from "@/mini-components/animation/miniMotionAnimation";
import MiniBox from "@/mini-components/basic-ui/miniBox";
import MiniImage from "@/mini-components/basic-ui/miniImage";
import { useAuthStore } from "@/store/authStore";

export default function MyPageStudentInfoSection({
  className,
}: {
  className?: string;
}) {
  const { name, picture } = useAuthStore();
  return (
    <MiniBox
      uiMotion={[zoomIn()]}
      className="flex flex-col items-center justify-center space-y-3"
    >
      <MiniImage
        src={picture || "/default-profile.png"}
        alt="Profile"
        className="w-20 h-20 rounded-full shadow-xl"
      />
      <h3 className="text-2xl font-bold">
        안녕, <strong>{name}</strong>님!
      </h3>
      <p className="text-gray-600">오늘도 영어 레벨업!</p>
    </MiniBox>
  );
}
