import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const daxColor = variant === "light" ? "text-background" : "text-primary";
  const subColor = variant === "light" ? "text-secondary" : "text-text-secondary";

  return (
    <Link to="/" className="inline-flex flex-col leading-none no-underline" aria-label="DAX Auto SARL — accueil">
      <span className={`text-[28px] font-bold tracking-tight ${daxColor}`}>DAX</span>
      <span className={`text-[11px] font-bold uppercase tracking-[0.28em] ${subColor}`}>
        Auto SARL
      </span>
    </Link>
  );
}
