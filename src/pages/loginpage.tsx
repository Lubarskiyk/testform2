import CardWrapper from "../components/auth/card-wrapper.tsx";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form.tsx";
import { Input } from "../components/ui/input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schema";
import { Button } from "../components/ui/button.tsx";

interface formData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <CardWrapper
      label="LogIn Account"
      title="LogIn"
      buttonHref="/registred"
      buttonTitle="Register Here"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {"Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
