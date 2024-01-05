interface Props {
  id: string;
  icon: React.ReactNode;
  label?: string;
  className: string;
  placeholder: string;
  errorMessage: string;
  type: "text" | "checkbox" | "password" | "email";
}

const Input = ({
  type,
  className,
  label,
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
        placeholder={placeholder}
      />
      {icon}
      <p>{errorMessage}</p>
    </div>
  );
};

export default Input;
