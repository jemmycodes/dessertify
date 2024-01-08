"use client";

import { z } from "zod";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import email from "@/public/email.svg";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import Input from "@/app/_components/ui/Input";
import { MdOutlineMail } from "react-icons/md";
import Dialog from "@/app/_components/ui/Dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { createAccountSchema } from "@/app/_lib/utils/schema";
import { signupWithEmail } from "@/app/_lib/helpers/supabase";
import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";

export type CreateUser = z.infer<typeof createAccountSchema>;

const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
    reset,
  } = useForm<CreateUser>({ resolver: zodResolver(createAccountSchema) });

  const onSubmit: SubmitHandler<CreateUser> = async (fields) => {
    const toastID = toast.loading("Creating your account...");
    console.log(fields);
    const res = await signupWithEmail(fields);

    res && setShowModal(true);

    toast.dismiss(toastID);
  };

  return (
    <AuthFormWrapper heading="Create an Account">
      {showModal && (
        <Dialog
          heading="Verify your Account"
          text={
            <p>
              We have sent you a mail at
              <span className="font-semibold text-orange underline">
                {getValues("email")}
              </span>
              . Follow the instructions in the mail to verify your account.
            </p>
          }
          image={email}
          handleModal={() => setShowModal((prev) => !prev)}
        />
      )}
      <Input
        type="text"
        id="firstname"
        autoFocus={true}
        placeholder="Firstname"
        {...register("firstname")}
        icon={<FaRegUser className="auth-icons" />}
        errorMessage={errors.firstname && errors.firstname.message}
        className={
          errors.firstname
            ? "auth-input-error capitalize"
            : "auth-input capitalize"
        }
      />
      <Input
        type="text"
        id="lastname"
        placeholder="Lastname"
        {...register("lastname")}
        icon={<FaRegUser className="auth-icons" />}
        errorMessage={errors.lastname && errors.lastname.message}
        className={
          errors.lastname
            ? "auth-input-error  capitalize"
            : "auth-input capitalize"
        }
      />
      <Input
        id="email"
        type="email"
        placeholder="Email"
        {...register("email")}
        icon={<MdOutlineMail className="auth-icons" />}
        errorMessage={errors.email && errors.email.message}
        className={errors.email ? "auth-input-error" : "auth-input"}
      />
      <Input
        id="password"
        type="password"
        placeholder="Password"
        {...register("password")}
        icon={<MdOutlineMail className="auth-icons" />}
        errorMessage={errors.password && errors.password?.message}
        className={errors.password ? "auth-input-error" : "auth-input"}
      />
      <Input
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
        icon={<MdOutlineMail className="auth-icons" />}
        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
        className={errors.confirmPassword ? "auth-input-error" : "auth-input"}
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
