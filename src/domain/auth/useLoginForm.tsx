import { ApiResponse } from "@/lib/apiFactory";
import { loginApi } from "@/lib/auth";
import { LoginResponse } from "@/types/auth";
import axios from "axios";
import { useState } from "react";

export default function useLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState<LoginResponse>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await loginApi({
        username,
        password,
      });
      setMessage(result.explanation ? result.explanation : "로그인 성공");
      setIsSuccess(true);
      setData(result.req);
    } catch (err: any) {
      setMessage(`${err.explanation}`);
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
    data,
  };
}
