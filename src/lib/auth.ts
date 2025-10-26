import axios from "axios";

export async function login(username: string, password: string) {
  try {
    const res = await axios.post(
      "/api/login",
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status < 200 || res.status >= 300) {
      return res.data?.message || "로그인 실패";
    }

    return res.data;
  } catch (error: any) {
    return error.response?.data?.message || "로그인 실패";
  }
}
