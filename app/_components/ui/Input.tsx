// import { ComponentPropsWithRef } from "react";
// import { CreateUser } from "@/app/auth/signup/page";
// import { Path, UseFormRegister } from "react-hook-form";

import { InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

type TInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  icon: React.ReactNode;
  errorMessage: string | undefined;
  label?: string
}

const Input = forwardRef<HTMLInputElement, TInputProps>(({ errorMessage, icon, label,...props }, ref) => {
    return (
    <div className="flex flex-col gap-1 relative">
      {label && <label>{label}</label>}
      <input
       ref={ref}
      {...props}
      />
      {icon}
      <p className="text-xs text-red-700 font-medium ">{errorMessage}</p>
    </div>
  )
})

Input.displayName = 'Input';

export default Input;