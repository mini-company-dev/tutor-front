"use client";

import { MEMBER_ROLE, MemberType } from "@/types/Member";
import { create } from "zustand";

interface AuthState extends MemberType {
  setUser: (user: Partial<AuthState>) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  sub: "",
  username: "",
  name: "",
  role: MEMBER_ROLE.ROLE_STUDENT,
  picture: "",
  exp: 0,
  iat: 0,
  setUser: (user) => set((state) => ({ ...state, ...user })),
  clearUser: () =>
    set({
      sub: "",
      username: "",
      name: "",
      role: MEMBER_ROLE.ROLE_STUDENT,
      exp: 0,
      iat: 0,
    }),
}));
