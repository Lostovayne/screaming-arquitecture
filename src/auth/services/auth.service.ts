import { AuthApi } from "../api/auth.api";

export class AuthService {
  static async login(email: string, password: string) {
    try {
      const { data } = await AuthApi.post("/login", {
        email,
        password,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al iniciar sesión");
    }
  }

  static async register(fullName: string, email: string, password: string) {
    try {
      const { data } = await AuthApi.post("/register", {
        fullName,
        email,
        password,
      });

      return data;
    } catch (error) {
      throw new Error("Error al registrar el usuario");
    }
  }

  static async checkAuthStatus() {
    try {
      const { data } = await AuthApi.get("/check-status");
      return data;
    } catch (error) {
      throw new Error("Error al revalidar el token");
    }
  }
}
