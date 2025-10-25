"use client";

import { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";

export default function AuthProvider({ children }: PropsWithChildren) {
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/auth");
        if (res.status >= 200 && res.status < 300) {
          setUser(res.data);
        } else {
          clearUser();
        }
      } catch (error) {
        clearUser();
      }
    })();
  }, [setUser, clearUser]);

  return <>{children}</>;
}
