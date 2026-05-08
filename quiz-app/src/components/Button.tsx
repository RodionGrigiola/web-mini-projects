import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "ghost";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base = "rounded px-6 py-3 font-medium transition active:scale-95";

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-slate-700 hover:bg-slate-600",
    danger: "bg-red-500 hover:bg-red-600",
    ghost: "bg-slate-700 hover:bg-slate-600 text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
