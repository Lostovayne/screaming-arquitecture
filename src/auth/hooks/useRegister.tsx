import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "../schemas/register.schema";
import { useAuthStore } from "../store/auth.store";

export const useRegister = () => {
  const RegisterUser = useAuthStore((state) => state.registerUser);
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    await RegisterUser(data.fullName, data.email, data.password);
  };

  return {
    form,
    onSubmit,
  };
};
