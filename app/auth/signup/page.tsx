import React from "react";
import Link from "next/link"
import { FaRegUser } from "react-icons/fa";
import Input from "@/app/_components/ui/Input"
import { MdOutlineMail } from "react-icons/md";
import AuthFormWrapper from "@/app/_components/customlayouts/AuthFormWrapper";

const Login = () => {
  return (
    <AuthFormWrapper btnText="Signup" heading="Create an Account" extraText={<p className="font-medium text-xs">Already have an account? <Link href="login" className="text-orange underline">Log in</Link></p>}>
      <Input
        type="text"
        icon={<FaRegUser className="auth-icons" />}
        className="auth-input"
        placeholder="Firstname"
        id="firstname"
        errorMessage=""
      />
       <Input
        type="text"
        icon={<FaRegUser className="auth-icons" />}
        className="auth-input"
        placeholder="Lastname"
        id="lastname"
        errorMessage=""
      />
      <Input
        type="email"
        icon={<MdOutlineMail className="auth-icons" />}
        className="auth-input"
        placeholder="Email"
        id="email"
        errorMessage=""
      />
       <Input
        type="password"
        icon={<MdOutlineMail className="auth-icons" />}
        className="auth-input"
        placeholder="Password"
        id="password"
        errorMessage=""
      />
       <Input
        type="password"
        icon={<MdOutlineMail className="auth-icons" />}
        className="auth-input"
        placeholder="Confirm Password"
        id="confirm-password"
        errorMessage=""
      />
    </AuthFormWrapper>
  );
};

export default Login;
