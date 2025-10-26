"use client";

import { MemberType } from "@/types/member";
import { create } from "zustand";

interface AuthState extends MemberType {
  setUser: (user: Partial<AuthState>) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  sub: "",
  username: "",
  name: "",
  roles: [],
  exp: 0,
  iat: 0,
  setUser: (user) => set((state) => ({ ...state, ...user })),
  clearUser: () =>
    set({
      sub: "",
      username: "",
      name: "",
      roles: [],
      exp: 0,
      iat: 0,
    }),
}));
