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
  const [response, setResponse] = useState<LoginResponse>();
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
      setResponse(result.data);
    } catch (err: any) {
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
    response,
  };
}
