import axios from "axios";

export async function login(username: string, password: string) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const res = await axios.post("/api/login", formData);
  const data = await res.data;

  if (res.status < 200 || res.status >= 300) {
    return data?.message || "로그인 실패";
  }

  return data;
}
