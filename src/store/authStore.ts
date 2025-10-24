"use client";

import { create } from "zustand";

interface AuthState {
  id: string;
  username: string;
  name: string;
  roles: string[];
}

export const useAuthStore = create<AuthState>((set) => ({
  id: "",
  username: "",
  name: "",
  roles: [],
}));
