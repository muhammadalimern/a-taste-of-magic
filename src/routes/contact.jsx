import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Emberline Ashford" },
      {
        name: "description",
        content:
          "Find Emberline at 14 Kiln Lane, Ashford. Phone, email, opening hours and a direct message form for the team.",
      },
      { property: "og:title", content: "Contact & Location | Emberline Ashford" },
      {
        property: "og:description",
        content: "Address, phone, opening hours and a direct line to the Emberline team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Find us on Kiln Lane"
        description="Two minutes from the old market square, with the oven glowing in the window. Call, message or write — someone from the floor team always answers."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-14">
            <div className="space-y-6">
              <div className="rounded-2xl border border-ink/5 bg-paper p-6">
                <h2 className="font-display text-lg font-semibold text-ink">Visit &amp; contact</h2>
                <ul className="mt-4 space-y-3 text-sm text-ink/70">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-ember" />
                    {site.address}
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-ember" />
                    <a href={site.phoneHref} className="font-semibold transition-colors hover:text-ember">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="mt-0.5 size-4 shrink-0 text-ember" />
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold transition-colors hover:text-ember"
                    >
                      Message us on WhatsApp
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-ember" />
                    <a href={`mailto:${site.email}`} className="transition-colors hover:text-ember">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-ink/5 bg-paper p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <Clock className="size-4 text-ember" />
                  Opening hours
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {site.hours.map((entry) => (
                    <li key={entry.days} className="flex justify-between gap-3">
                      <span>{entry.days}</span>
                      <span className="font-semibold text-ink">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <ContactForm />
              <div className="overflow-hidden rounded-2xl border border-ink/5">
                <div className="relative bg-sand">
                  <svg
                    viewBox="0 0 800 320"
                    role="img"
                    aria-label="Simplified map showing Emberline at 14 Kiln Lane, two streets from the old market square"
                    className="h-64 w-full sm:h-72"
                  >
                    <rect width="800" height="320" fill="#e8ddcb" />
                    <path d="M0 210 H800" stroke="#d4c5aa" strokeWidth="26" />
                    <path d="M240 0 V320" stroke="#d4c5aa" strokeWidth="22" />
                    <path d="M560 0 V320" stroke="#d4c5aa" strokeWidth="14" />
                    <path d="M0 90 H800" stroke="#d4c5aa" strokeWidth="12" />
                    <rect x="300" y="120" width="150" height="70" rx="10" fill="#cbb99a" />
                    <circle cx="378" cy="210" r="14" fill="#cd5a2c" />
                    <circle cx="378" cy="210" r="26" fill="#cd5a2c" opacity="0.25" />
                    <text x="404" y="200" fill="#1c1512" fontSize="18" fontWeight="600">
                      Emberline · 14 Kiln Lane
                    </text>
                    <text x="250" y="70" fill="#6f7256" fontSize="15">
                      Old Market Square
                    </text>
                  </svg>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 bg-paper px-6 py-4 text-sm text-ink/65">
                  <span>Street parking after 6pm · Ashford Central is a 6-minute walk.</span>
                  <a
                    href="https://maps.google.com/?q=14+Kiln+Lane+Ashford"
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ember pb-0.5 font-semibold text-ink transition-colors hover:text-ember"
                  >
                    Open in maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
