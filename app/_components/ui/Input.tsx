import { ComponentPropsWithRef } from "react";
import { CreateUser } from "@/app/auth/signup/page";
import { Path, UseFormRegister } from "react-hook-form";

interface Props extends ComponentPropsWithRef<"input"> {
  id: Path<CreateUser>,
  icon: React.ReactNode;
  label?: string;
  className: string;
  placeholder: string;
  register: UseFormRegister<CreateUser> 
  errorMessage: string | undefined;
  type: "text" | "checkbox" | "password" | "email";
}

const Input = ({
  type,
  className,
  label,
  register,
  id,
  errorMessage,
  placeholder,
  icon,
}: Props) => {
  return (
    <div className="flex flex-col gap-1 relative">
      {label && <label>{label}</label>}
      <input
        type={type}
        className={className}
        id={id}
        {...register(id)}
        placeholder={placeholder}
      />
      {icon}
      <p className="text-xs text-red-700 font-medium ">{errorMessage}</p>
    </div>
  );
};

export default Input
