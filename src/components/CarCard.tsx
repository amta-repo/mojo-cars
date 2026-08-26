import { Link } from "@tanstack/react-router";
import { Users, Fuel, Cog } from "lucide-react";
import { formatFcfa, type Car } from "@/data/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[10px] border border-border bg-card transition-shadow hover:shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
        <img
          src={car.image}
          alt={`${car.name} en location chez Mojo Cars`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {car.badge && (
          <span className="badge absolute left-3 top-3 bg-destructive text-destructive-foreground">
            {car.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] font-bold uppercase tracking-wide text-text-tertiary">
          {car.category}
        </p>
        <h3 className="mt-1 text-[20px] font-bold">{car.name}</h3>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-text-tertiary">
          <li className="flex items-center gap-2">
            <Users size={16} /> {car.seats} places
          </li>
          <li className="flex items-center gap-2">
            <Cog size={16} /> {car.transmission}
          </li>
          <li className="flex items-center gap-2">
            <Fuel size={16} /> {car.fuel}
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {car.features.map((f) => (
            <span
              key={f}
              className="rounded-[4px] border border-border bg-surface-alt px-2 py-1 text-[12px] text-text-secondary"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
          <p className="text-[20px] font-bold text-primary">
            {formatFcfa(car.pricePerDay)}
            <span className="block text-[12px] font-normal text-text-tertiary">par jour</span>
          </p>
          <Link
            to="/reservation"
            search={{ vehicule: car.name }}
            className="btn btn-primary no-underline !text-primary-foreground"
          >
            Réserver
          </Link>
        </div>
      </div>
    </article>
  );
}
