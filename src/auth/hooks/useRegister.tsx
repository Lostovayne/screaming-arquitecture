import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "../schemas/register.schema";
import { AuthService } from "../services/auth.service";

export const useRegister = () => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    const response = await AuthService.register(data.fullName, data.email, data.password);
    console.log(response);
  };

  return {
    form,
    onSubmit,
  };
};
