import JoinForm from "@/domain/auth/joinForm";

export default function JoinPage() {
  return (
    <div>
      {/* 타이틀 */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">회원가입</h1>
        <p className="text-sm text-[var(--text-light)] mt-1">
          계정 정보를 입력하세요.
        </p>
      </div>
      <JoinForm />
    </div>
  );
}
