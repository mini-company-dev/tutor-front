"use client";

import { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import { MemberType } from "@/types/member";

export default function AuthProvider({ children }: PropsWithChildren) {
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;

      try {
        const { jwtDecode } = require("jwt-decode");
        const payload: MemberType = jwtDecode(token);
        setUser(payload);
      } catch {
        clearUser();
      }
    } else {
      clearUser();
    }
  }, [setUser, clearUser]);

  return <>{children}</>;
}
