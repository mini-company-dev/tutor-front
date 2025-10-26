import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiSize, MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import Link from "next/link";
import LoginForm from "../../domain/auth/loginForm";

export default function LoginPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">로그인</h1>
        <p className="text-sm text-[var(--text-light)] mt-1">
          계정 정보를 입력하세요.
        </p>
      </div>

      <LoginForm />

      {/* 구분선 */}
      <div className="relative text-center my-4">
        <div className="absolute inset-x-0 top-1/2 border-t border-[var(--foreground-light)]" />
        <span className="relative bg-[var(--sub)] px-2 text-sm text-light-text">
          또는
        </span>
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="flex flex-col gap-2">
        <MiniButton
          className="w-full py-2 rounded-full hover:to-mini-brand"
          uiHover={[hoverScale()]}
          uiSize={MiniUiSize.NONE}
          ui={MiniUiType.OUTLINE}
        >
          Google로 로그인
        </MiniButton>
        <MiniButton
          className="w-full py-2 rounded-full hover:to-mini-brand"
          uiHover={[hoverScale()]}
          ui={MiniUiType.OUTLINE}
          uiSize={MiniUiSize.NONE}
        >
          Naver로 로그인
        </MiniButton>
      </div>

      {/* 회원가입 링크 */}
      <p className="text-center text-sm mini-t-l mt-2">
        계정이 없으신가요?{" "}
        <Link href="/auth/join" className="mini-t-b hover:underline">
          회원가입
        </Link>
      </p>
    </div>
  );
}
