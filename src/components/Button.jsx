import { Link } from "@tanstack/react-router";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-ember text-cream hover:bg-emberdeep",
  dark: "bg-ink text-cream hover:bg-emberdeep",
  outline: "border border-ink/25 text-ink hover:bg-ink hover:text-cream",
  onDark: "border border-cream/40 text-cream hover:bg-cream hover:text-ink",
  quiet: "text-ink hover:text-ember",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function buttonClass({ variant = "primary", size = "md", className = "" } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export function Button({ variant, size, className, type = "button", ...props }) {
  return <button type={type} className={buttonClass({ variant, size, className })} {...props} />;
}

export function ButtonLink({ variant, size, className, ...props }) {
  return <Link className={buttonClass({ variant, size, className })} {...props} />;
}
