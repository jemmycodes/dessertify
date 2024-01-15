import { type InputHTMLAttributes, forwardRef } from "react";

type TInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  label?: string;
  icon?: React.ReactNode;
  containerClass?: string;
  errorMessage?: string | undefined;
};

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ errorMessage, containerClass, icon, label, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 relative ${containerClass}`}>
        {label !== "" && <label>{label}</label>}
        <input ref={ref} {...props} />
        {icon}
        <p className="text-xs text-red-700 font-medium ">{errorMessage}</p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
