// import { ComponentPropsWithRef } from "react";
// import { CreateUser } from "@/app/auth/signup/page";
// import { Path, UseFormRegister } from "react-hook-form";

import { InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

type TInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  label?: string
  icon?: React.ReactNode;
  containerClass?: string;
  errorMessage?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, TInputProps>(({ errorMessage,containerClass, icon, label,...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 relative ${containerClass}`}>
        {label && <label>{label}</label>}
        <input ref={ref} {...props} />
        {icon}
        <p className="text-xs text-red-700 font-medium ">{errorMessage}</p>
      </div>
    );
})

Input.displayName = 'Input';

export default Input;