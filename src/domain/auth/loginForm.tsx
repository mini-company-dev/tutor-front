"use client";

import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiSize, MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniInput from "@/mini-components/ui/miniInput";
import useLoginForm from "./useLoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";

export default function LoginForm() {
  const {
    handleSubmit,
    message,
    loading,
    isSuccess,
    setUsername,
    setPassword,
  } = useLoginForm();

  const router = useRouter();
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    if (isSuccess) {
      (async () => {
        const res = await axios.get("/api/auth");
        if (res.status >= 200 && res.status < 300) {
          setUser(res.data);
        } else {
          clearUser();
        }
      })();
      router.push("/");
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
          type="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="example"
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

      {/* 로그인 버튼 */}
      <MiniButton
        ui={MiniUiType.BRAND}
        uiHover={[hoverScale()]}
        uiSize={MiniUiSize.NONE}
        onClick={handleSubmit}
        className="mt-4 py-2 w-full rounded-full mini-t-r"
      >
        로그인
      </MiniButton>
    </form>
  );
}
