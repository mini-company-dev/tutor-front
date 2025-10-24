export async function login(username: string, password: string) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const res = await fetch("/api/login", { method: "POST", body: formData });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "로그인 실패");
  return data;
}
