import { ShoppingBag } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import InputFields from "../../components/reuseable/InputFields";
import { loginSchema, type LoginFormType } from "./loginSchema";
import { useAsyncLogin } from "../../api/auth/queries";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useAsyncLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  localStorage.clear();

  const onSubmit = (data: LoginFormType) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Login successful! Welcome To Dashboard", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      },

      onError: (error: any) => {
        toast.error(
          error?.message
            ? "Invalid credentials please try again"
            : " " || "Login failed. Please try again.",
          {
            position: "top-right",
            autoClose: 4000,
          }
        );
      },
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col justify-center items-center gap-4">
          <div className="w-16 h-16 bg-amber-300 rounded-lg flex justify-center items-center">
            <ShoppingBag size={33} />
          </div>
          <CardTitle className="text-2xl font-bold">Shop Admin</CardTitle>
          <CardDescription className="text-md font-semibold">
            Sign in to manage your store
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <InputFields
              name="email"
              title="Email Address"
              control={control}
              placeholder="admin@youstore.com"
              type="email"
            />

            <InputFields
              name="password"
              title="Password"
              control={control}
              placeholder="Enter your password"
              type="password"
            />

            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-10 bg-amber-300 hover:bg-amber-400/60 text-black cursor-pointer font-bold tex-lg"
            >
              {isPending ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <p className="text-xs text-muted-foreground">
            Demo credentials: admin@store.com / password
          </p>
        </CardFooter>
      </Card>

      <p className="text-sm text-muted-foreground mt-5">
        @2024 Shop Admin Panel, All rights reserved
      </p>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
