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
import { signupWithEmail } from "@/app/_lib/supabase/auth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createAccountSchema } from "@/app/_lib/helpers/schema";
import usePasswordIcon from "@/app/_lib/hooks/usePasswordIcon";

import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";

export type CreateUser = z.infer<typeof createAccountSchema>;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { icon, showPassword } = usePasswordIcon();
  const { icon: confirmPasswordIcon, showPassword: showConfirmPassword } =
    usePasswordIcon();
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
    reset,
  } = useForm<CreateUser>({ resolver: zodResolver(createAccountSchema) });

  const onSubmit: SubmitHandler<CreateUser> = async (fields) => {
    setLoading(true);
    const toastID = toast.loading("Creating your account...");
    const res = await signupWithEmail(fields);

    console.log(res)

    res && setShowModal(true);
    reset();
    toast.dismiss(toastID);
    setLoading(false);

    return;
  };

  return (
    <AuthFormWrapper
      onSubmitForm={handleSubmit(onSubmit)}
      heading="Create an Account">
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
        disabled={loading}
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
        disabled={loading}
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
        errorMessage={errors.password && errors.password?.message}
        className={errors.password ? "auth-input-error" : "auth-input"}
      />
      <Input
        disabled={loading}
        id="confirmPassword"
        icon={confirmPasswordIcon}
        placeholder="Confirm Password"
        {...register("confirmPassword")}
        type={showConfirmPassword ? "text" : "password"}
        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
        className={errors.confirmPassword ? "auth-input-error" : "auth-input"}
      />
      <button
        className="rounded-full text-sm font-medium bg-orange text-white w-full py-3 mt-3 shadow-lg hover:brightness-90 duration-300"
        type="submit"
        disabled={loading}>
        Create Account
      </button>
      <button
        type="button"
        disabled={loading}
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
