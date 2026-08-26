import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/data/cars";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/flotte", label: "Notre flotte" },
  { to: "/reservation", label: "Réserver" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[102] border-b border-border bg-background">
      <div className="container-dax flex h-[76px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-2 md:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="border-b-2 border-transparent px-5 pb-[2px] text-[16px] font-bold !text-foreground no-underline transition-colors hover:!text-link hover:border-link [&.active]:!text-link [&.active]:border-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-[14px] font-bold !text-foreground no-underline hover:!text-link"
          >
            <Phone size={18} /> {CONTACT.phone}
          </a>
          <Link to="/reservation" className="btn btn-secondary no-underline">
            Réserver
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-5 py-4 text-[16px] font-bold !text-foreground no-underline"
            >
              {l.label}
            </Link>
          ))}
          <div className="p-5">
            <a href={CONTACT.whatsapp} className="btn btn-primary w-full no-underline !text-primary-foreground">
              WhatsApp {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
