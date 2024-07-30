import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { form, onSubmit } = useRegister();

  return (
    <div className=" min-h-screen w-full flex items-center justify-center">
      <form action="" className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" type="text" className="border" {...form.register("fullName")} />

        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" className="border" {...form.register("email")} />

        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" className="border" {...form.register("password")} />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};
