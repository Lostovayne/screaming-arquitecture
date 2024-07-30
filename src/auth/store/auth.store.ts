import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../interfaces/User.interface";
import { Status } from "../interfaces/status.interface";
import { AuthService } from "../services/auth.service";

export interface AuthState {
  status: Status;
  token?: string;
  user?: User;

  //?  Metodos
  loginUser(email: string, password: string): Promise<void>;
  checkAuthStatus(): Promise<void>;
  registerUser(fullName: string, email: string, password: string): Promise<void>;
}

const AuthStore: StateCreator<AuthState> = (set) => ({
  status: "pending",
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "authenticated", token, user });
    } catch (error) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
    }
  },

  //? Para reovar el token
  checkAuthStatus: async () => {
    try {
      const { token, ...user } = await AuthService.checkAuthStatus();
      set({ status: "authenticated", token, user });
    } catch (error) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
    }
  },

  registerUser: async (fullName: string, email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.register(fullName, email, password);
      set({ status: "authenticated", token, user });
    } catch (error) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
    }
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(AuthStore, {
      name: "authState",
    })
  )
);
