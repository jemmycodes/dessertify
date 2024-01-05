"use client"

import React from "react";

import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {loginSchema} from "@/app/_lib/utils/schema"
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";

export type LoginUser = z.infer<typeof loginSchema>;

const Login = () => {
  const onSubmit: SubmitHandler<LoginUser> = (fields) => {
    console.log(fields)
  }

  const { handleSubmit, register, formState: { errors } } = useForm<LoginUser>({ resolver: zodResolver(loginSchema) });
  

  return (
    <AuthFormWrapper heading="Login">
      <Input
        type="email"
        register={register}
        icon={<MdOutlineMail className="auth-icons" />}
        className="auth-input"
        placeholder="Email"
        id="email"
        errorMessage={errors.email?.message}
      />
      <Input
        type="password"
        icon={<MdOutlineMail className="auth-icons" />}
        register={register}
        className="auth-input"
        placeholder="Password"
        id="password"
        errorMessage={errors.password?.message}
      />
      <Link href="" className="text-right text-xs font-medium -mt-4  ">
        Forgot your Password?
      </Link>
      <button
        className="rounded-full text-sm font-medium bg-orange text-white w-full py-3 mt-3 shadow-lg hover:brightness-90 duration-300"
        onClick={handleSubmit(onSubmit)}>
        Log in
      </button>
      <button
        type="button"
        className="border rounded-full font-medium w-full py-3 text-sm flex justify-center items-center gap-2 mb-4">
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
