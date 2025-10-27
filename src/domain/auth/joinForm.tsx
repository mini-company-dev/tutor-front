"use client";

import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiSize, MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import MiniInput from "@/mini-components/basic-ui/miniInput";
import { useRouter } from "next/navigation";
import useJoinForm from "./useJoinForm";
import { useEffect } from "react";

export default function JoinForm() {
  const {
    handleSubmit,
    message,
    loading,
    isSuccess,

    setName,
    setUsername,
    setPassword,
    setCheckPassword,
  } = useJoinForm();

  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/auth");
    }
  }, [isSuccess]);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col text-sm">
        <MiniInput
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.MEDIUM}
          label="아이디"
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="example"
          className="w-full rounded-full"
        />
      </div>

      <div className="flex flex-col text-sm">
        <MiniInput
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.MEDIUM}
          label="이름"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="w-full rounded-full"
        />
      </div>

      <div className="flex flex-col text-sm">
        <MiniInput
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.MEDIUM}
          label="비밀번호"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-full"
        />
      </div>

      <div className="flex flex-col text-sm">
        <MiniInput
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.MEDIUM}
          label="비밀번호 확인"
          id="check-password"
          type="password"
          onChange={(e) => setCheckPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-full"
        />
      </div>

      {/* 로그인 버튼 */}
      <MiniButton
        ui={MiniUiType.BRAND}
        uiHover={[hoverScale()]}
        uiSize={MiniUiSize.NONE}
        onClick={handleSubmit}
        className="mt-4 py-2 w-full rounded-full mini-t-r"
      >
        회원가입
      </MiniButton>
    </form>
  );
}
