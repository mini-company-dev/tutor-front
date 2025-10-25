import { login } from "@/lib/auth";
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
      const result = await login(username, password);
      setMessage(result.message);
      setIsSuccess(true);
    } catch (err: any) {
      setMessage(`${err.message}`);
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
