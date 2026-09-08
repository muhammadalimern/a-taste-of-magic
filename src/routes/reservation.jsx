import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

import interior from "@/assets/gallery-interior.webp";
import { PageHeader } from "@/components/PageHeader";
import { ReservationForm } from "@/components/ReservationForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reserve a Table | Emberline" },
      {
        name: "description",
        content:
          "Book a table at Emberline in Ashford. Choose your date, time and party size — we confirm every request personally.",
      },
      { property: "og:title", content: "Reserve a Table | Emberline" },
      {
        property: "og:description",
        content: "Book a table at Emberline — choose your date, time and party size.",
      },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title="Save your seat by the fire"
        description="We hold a few counter places for walk-ins, but the dining room books ahead. Tell us when you'd like to come."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <ReservationForm />
            <aside className="space-y-6">
              <img
                src={interior}
                alt="Candlelit dining room at Emberline"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-4/5 w-full rounded-2xl object-cover"
              />
              <div className="rounded-2xl border border-ink/5 bg-paper p-6">
                <h2 className="font-display text-lg font-semibold text-ink">Good to know</h2>
                <ul className="mt-4 space-y-3 text-sm text-ink/65">
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-ember" />
                    Last kitchen orders one hour before close.
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-ember" />
                    {site.address}
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-ember" />
                    <a href={site.phoneHref} className="transition-colors hover:text-ink">
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
