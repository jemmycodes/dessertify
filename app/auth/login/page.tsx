"use client";

import { z } from "zod";
import Link from "next/link";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { MdOutlineMail } from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/_lib/helpers/schema";
import { loginWithEmail } from "@/app/_lib/helpers/supabase";
import { useForm, type SubmitHandler } from "react-hook-form";
import usePasswordIcon from "@/app/_lib/hooks/usePasswordIcon";
import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";

export type LoginUser = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { icon, showPassword } = usePasswordIcon();

  const onSubmit: SubmitHandler<LoginUser> = async (fields) => {
    setLoading(true);
    const toastID = toast.loading("Logging you in...");

    const res = await loginWithEmail(fields);

    if (res?.session) {
      setLoading(false);
      toast.success("Login successful, please hold on while we redirect...", {
        id: toastID,
      });
      router.push("/menu/all");
      return;
    }

    setLoading(false);
    toast.dismiss(toastID);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginUser>({ resolver: zodResolver(loginSchema) });

  return (
    <AuthFormWrapper heading="Login" onSubmitForm={handleSubmit(onSubmit)}>
      <Input
        id="email"
        type="email"
        disabled={loading}
        placeholder="Email"
        {...register("email")}
        icon={<MdOutlineMail className="auth-icons" />}
        errorMessage={errors.email && errors.email.message}
        className={errors.email ? "auth-input-error" : "auth-input"}
      />
      <Input
        icon={icon}
        id="password"
        disabled={loading}
        placeholder="Password"
        {...register("password")}
        type={showPassword ? "text" : "password"}
        errorMessage={errors.password && errors.password.message}
        className={errors.password ? "auth-input-error" : "auth-input"}
      />
      <Link href="" className="text-right text-xs font-medium -mt-4  ">
        Forgot your Password?
      </Link>
      <button
        className="rounded-full text-sm font-medium bg-orange text-white w-full py-3 mt-3 shadow-lg hover:brightness-90 duration-300 disabled:bg-gray-400 disabled:text-gray-100"
        disabled={loading}
        onClick={() => handleSubmit(onSubmit)}>
        {loading ? "Loading..." : "Login"}
      </button>
      <button
        type="button"
        disabled={loading}
        className="border rounded-full font-medium w-full py-3 text-sm flex justify-center items-center gap-2 mb-4 ">
        <FcGoogle className="text-xl" /> <p>Continue with Google</p>
      </button>

      <p className="font-medium text-xs text-center">
        Don&apos;t have an account?{" "}
        <Link href="signup" className="text-orange underline">
          Sign up
        </Link>
      </p>
    </AuthFormWrapper>
  );
};

export default Login;
