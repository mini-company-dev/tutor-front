"use client";

import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { MiniUiSize, MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import MiniInput from "@/mini-components/basic-ui/miniInput";
import useLoginForm from "./useLoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function LoginForm() {
  const {
    handleSubmit,
    message,
    loading,
    isSuccess,
    setUsername,
    setPassword,
    data,
  } = useLoginForm();

  const router = useRouter();
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    if (isSuccess && data?.token) {
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["token"] = `${data.token}`;
      const payload = jwtDecode(data.token);
      setUser(payload);
      router.push("/");
    }
  }, [isSuccess, data]);

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
