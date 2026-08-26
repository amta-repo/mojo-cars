import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="border-b border-border bg-surface-alt">
      <div className="container-dax py-14 md:py-20">
        <h1 className="text-[36px] font-bold leading-tight md:text-[46px]">{title}</h1>
        <p className="mt-4 max-w-2xl text-[16px] text-text-tertiary">{subtitle}</p>
      </div>
    </section>
  );
}
