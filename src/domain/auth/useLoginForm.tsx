import { loginApi } from "@/lib/auth";
import { useState } from "react";

export default function useLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await loginApi({
        username,
        password,
      });
      setMessage(result.message ? result.message : "로그인 성공");
      setIsSuccess(true);
    } catch (err: any) {
      console.log(err.message);
      setMessage(`${err.message}`);
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    message,
    loading,
    isSuccess,
    setUsername,
    setPassword,
  };
}
