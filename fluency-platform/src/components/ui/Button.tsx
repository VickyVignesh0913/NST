import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-[var(--ease-cinematic)] hover:scale-[1.02] active:scale-[0.98]";

  const variantClasses = {
    primary: "bg-accent text-bg hover:bg-accent-muted shadow-[var(--shadow-glow-sm)] hover:shadow-[var(--shadow-glow-md)]",
    secondary: "border border-text-muted text-text hover:border-accent hover:text-accent bg-transparent",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={twMerge(clsx(baseClasses, variantClasses[variant], sizeClasses[size], className))}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
