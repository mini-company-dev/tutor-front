import { joinApi, loginApi } from "@/lib/auth";
import { useState } from "react";

export default function useJoinForm() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== checkPassword) {
      setMessage("비밀번호가 일치하지 않습니다.");
      setLoading(false);
      return;
    }

    try {
      const result = await joinApi({ username, name, password });
      setMessage(result.explanation ? result.explanation : "회원가입 성공");
      setIsSuccess(true);
    } catch (err: any) {
      setMessage(`${err.explanation}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    message,
    loading,
    isSuccess,

    setName,
    setUsername,
    setPassword,
    setCheckPassword,
  };
}
