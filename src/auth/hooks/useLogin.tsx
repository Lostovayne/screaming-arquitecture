import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../schemas/login.schema";
import { useAuthStore } from "../store/auth.store";

export const useLogin = () => {
  const loginUser = useAuthStore((state) => state.loginUser);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    await loginUser(data.email, data.password);
  };

  return {
    form,
    onSubmit,
  };
};
