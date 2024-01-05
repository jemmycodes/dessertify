import React from "react";
import { MdOutlineMail } from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";
import Link from "next/link";

const Login = () => {
  return (
    <AuthFormWrapper btnText="Login" heading="Login" extraText={<p className="font-medium text-xs">Don&apos;t have an account? <Link href="signup" className="text-orange underline">Sign up</Link></p>}>
      <Input
        type="email"
        icon={<MdOutlineMail className="auth-icons"/>}
        className="auth-input"
        placeholder="Email"
        id="email"
        errorMessage=""
      />
      <Input
        type="password"
        icon={
          <MdOutlineMail className="auth-icons" />
        }
        className="auth-input"
        placeholder="Password"
        id="password"
        errorMessage=""
      />

    </AuthFormWrapper>
  );
};

export default Login;
