import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cars, CONTACT } from "@/data/cars";

export function BookingForm({
  compact = false,
  defaultVehicle = "",
}: {
  compact?: boolean;
  defaultVehicle?: string;
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    vehicule: defaultVehicle,
    depart: "",
    retour: "",
    lieu: "Cotonou",
    chauffeur: "non",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Nouvelle demande de réservation — Mojo Cars",
      `Nom: ${form.nom}`,
      `Téléphone: ${form.telephone}`,
      `Véhicule: ${form.vehicule || "À conseiller"}`,
      `Départ: ${form.depart}`,
      `Retour: ${form.retour}`,
      `Lieu de prise en charge: ${form.lieu}`,
      `Avec chauffeur: ${form.chauffeur === "oui" ? "Oui" : "Non"}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[10px] border border-border bg-card p-6 text-left shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] md:p-8"
    >
      <h2 className="text-[24px] font-bold">Réservez votre véhicule</h2>
      <p className="mt-2 text-[14px] text-text-tertiary">
        Remplissez le formulaire, votre demande nous arrive directement sur WhatsApp.
      </p>

      <div className={`mt-6 grid gap-5 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
        <div>
          <label className="field-label" htmlFor="nom">
            Nom complet
          </label>
          <input id="nom" className="field" required value={form.nom} onChange={set("nom")} placeholder="Votre nom" />
        </div>
        <div>
          <label className="field-label" htmlFor="telephone">
            Téléphone / WhatsApp
          </label>
          <input
            id="telephone"
            className="field"
            required
            type="tel"
            value={form.telephone}
            onChange={set("telephone")}
            placeholder="01 94 95 28 47"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="vehicule">
            Véhicule souhaité
          </label>
          <select id="vehicule" className="field" value={form.vehicule} onChange={set("vehicule")}>
            <option value="">Conseillez-moi</option>
            {cars.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name} — {c.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="lieu">
            Lieu de prise en charge
          </label>
          <input id="lieu" className="field" value={form.lieu} onChange={set("lieu")} />
        </div>
        <div>
          <label className="field-label" htmlFor="depart">
            Date de départ
          </label>
          <input id="depart" className="field" required type="date" value={form.depart} onChange={set("depart")} />
        </div>
        <div>
          <label className="field-label" htmlFor="retour">
            Date de retour
          </label>
          <input id="retour" className="field" required type="date" value={form.retour} onChange={set("retour")} />
        </div>
        <div>
          <label className="field-label" htmlFor="chauffeur">
            Avec chauffeur ?
          </label>
          <select id="chauffeur" className="field" value={form.chauffeur} onChange={set("chauffeur")}>
            <option value="non">Non, je conduis</option>
            <option value="oui">Oui, avec chauffeur</option>
          </select>
        </div>

        {!compact && (
          <div className="md:col-span-2">
            <label className="field-label" htmlFor="message">
              Précisions (optionnel)
            </label>
            <textarea id="message" className="field" value={form.message} onChange={set("message")} placeholder="Itinéraire, nombre de passagers, besoins particuliers..." />
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">
          Envoyer ma demande
        </button>
        <a href={CONTACT.phoneHref} className="btn btn-ghost no-underline !text-foreground">
          Appeler {CONTACT.phone}
        </a>
      </div>

      {sent && (
        <p className="mt-5 flex items-center gap-2 text-[14px] font-bold text-primary">
          <CheckCircle2 size={18} /> Demande préparée sur WhatsApp — envoyez le message pour confirmer.
        </p>
      )}
    </form>
  );
}
