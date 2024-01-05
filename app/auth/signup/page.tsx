"use client";

import { z } from "zod";
import React from "react";
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import Input from "@/app/_components/ui/Input";
import { MdOutlineMail } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { createAccountSchema } from "@/app/_lib/utils/schema";
import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";

export type CreateUser = z.infer<typeof createAccountSchema>;

const Signup = () => {
  const onSubmit: SubmitHandler<CreateUser> = (fields) => {
    console.log(fields);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateUser>({ resolver: zodResolver(createAccountSchema) });

  return (
    <AuthFormWrapper heading="Create an Account">
      <Input
        type="text"
        icon={<FaRegUser className="auth-icons" />}
        className="auth-input"
        placeholder="Firstname"
        register={register}
        id="firstname"
        errorMessage={errors.firstname?.message}
      />
      <Input
        type="text"
        register={register}
        icon={<FaRegUser className="auth-icons" />}
        className="auth-input"
        placeholder="Lastname"
        id="lastname"
        errorMessage={errors.lastname?.message}
      />
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
        register={register}
        icon={<MdOutlineMail className="auth-icons" />}
        className="auth-input"
        placeholder="Password"
        id="password"
        errorMessage={errors.password?.message}
      />
      <Input
        type="password"
        icon={<MdOutlineMail className="auth-icons" />}
        register={register}
        className="auth-input"
        placeholder="Confirm Password"
        id="confirmPassword"
        errorMessage=""
      />
      <button
        className="rounded-full text-sm font-medium bg-orange text-white w-full py-3 mt-3 shadow-lg hover:brightness-90 duration-300"
        onClick={handleSubmit(onSubmit)}>
        Create Account
      </button>
      <button
        type="button"
        className="border rounded-full font-medium w-full py-3 text-sm flex justify-center items-center gap-2">
        <FcGoogle className="text-xl" /> <p>Continue with Google</p>
      </button>
      
        <p className="font-medium text-xs text-center">
        Already have an account?
          <Link href="login" className="text-orange underline">
            Log in
          </Link>
        </p>
      
    </AuthFormWrapper>
  );
};

export default Signup;
