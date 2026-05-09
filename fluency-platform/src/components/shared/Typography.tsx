import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "body" | "body-sm" | "caption";
  children: React.ReactNode;
  className?: string;
  font?: "heading" | "sans" | "tamil";
}

export default function Typography({
  variant,
  children,
  className,
  font = "sans",
}: TypographyProps) {
  const fontClasses = {
    heading: "font-[family-name:var(--font-heading)]",
    sans: "font-[family-name:var(--font-sans)]",
    tamil: "font-[family-name:var(--font-tamil)]",
  };

  const variantClasses = {
    h1: "text-5xl md:text-7xl font-bold leading-tight tracking-tight",
    h2: "text-4xl md:text-5xl font-bold leading-tight",
    h3: "text-2xl md:text-3xl font-semibold leading-snug",
    body: "text-lg leading-relaxed",
    body-sm: "text-base leading-relaxed",
    caption: "text-sm leading-normal text-text-muted",
  };

  const Component = variant === "h1" || variant === "h2" || variant === "h3" ? variant : "p";

  return (
    <Component
      className={twMerge(clsx(fontClasses[font], variantClasses[variant], className))}
    >
      {children}
    </Component>
  );
}
