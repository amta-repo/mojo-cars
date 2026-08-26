import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const daxColor = variant === "light" ? "text-background" : "text-primary";
  const subColor = variant === "light" ? "text-secondary" : "text-text-secondary";

  return (
    <Link to="/" className="inline-flex flex-col leading-none no-underline" aria-label="Mojo Cars — accueil">
      <span className={`text-[28px] font-bold tracking-tight ${daxColor}`}>MOJO</span>
      <span className={`text-[11px] font-bold uppercase tracking-[0.28em] ${subColor}`}>
        Cars
      </span>
    </Link>
  );
}
