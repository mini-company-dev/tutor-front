"use client";

import { login } from "@/lib/auth";
import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniInput from "@/mini-components/ui/miniInput";
import { useState } from "react";
import useLoginForm from "./useLoginForm";

export default function LoginForm() {
  const { handleSubmit, message, loading, setUsername, setPassword } =
    useLoginForm();

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col text-sm">
        <MiniInput
          ui={MiniUiType.BASIC}
          label="아이디"
          id="username"
          type="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="example"
          className="w-full px-4 py-2 rounded-full"
        />
      </div>

      <div className="flex flex-col text-sm">
        <MiniInput
          ui={MiniUiType.BASIC}
          label="비밀번호"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-2 rounded-full"
        />
      </div>

      {/* 로그인 버튼 */}
      <MiniButton
        ui={MiniUiType.BRAND}
        hover={[hoverScale()]}
        onClick={handleSubmit}
        className="mt-4 py-2 w-full rounded-full mini-t-r"
      >
        로그인
      </MiniButton>
    </form>
  );
}
