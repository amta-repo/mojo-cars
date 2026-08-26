import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/data/cars";

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-foreground text-background">
      <div className="container-dax grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-[14px] leading-[20.44px] text-border-strong">
            Location de véhicules et service de chauffeur à Cotonou et partout au Bénin. Ponctuel,
            fiable et abordable.
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-bold">Navigation</h3>
          <ul className="mt-4 space-y-3 text-[14px]">
            {[
              { to: "/", label: "Accueil" },
              { to: "/flotte", label: "Notre flotte" },
              { to: "/reservation", label: "Réserver" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="!text-border-strong no-underline hover:!text-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] font-bold">Services</h3>
          <ul className="mt-4 space-y-3 text-[14px] text-border-strong">
            <li>Location courte durée</li>
            <li>Location longue durée</li>
            <li>Location avec chauffeur</li>
            <li>Transfert aéroport</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-[14px]">
            <li className="flex gap-2">
              <MapPin size={18} className="mt-[2px] shrink-0 text-secondary" />
              <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="!text-border-strong no-underline hover:!text-secondary">
                {CONTACT.address}
                <br />
                {CONTACT.plusCode}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone size={18} className="shrink-0 text-secondary" />
              <a href={CONTACT.phoneHref} className="!text-border-strong no-underline hover:!text-secondary">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle size={18} className="shrink-0 text-secondary" />
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="!text-border-strong no-underline hover:!text-secondary">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 py-6 text-center text-[14px] text-border-strong">
        © {new Date().getFullYear()} Mojo Cars. Tous droits réservés.
      </div>
    </footer>
  );
}
