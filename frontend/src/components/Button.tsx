import { ReactElement, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: ReactElement;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  icon,
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white",
  };

  const sizes = {
    sm: "px-2 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-sm flex text-base items-center gap-2`}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
