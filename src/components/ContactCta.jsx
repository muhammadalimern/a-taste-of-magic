import { MessageCircle, Phone } from "lucide-react";

import { site } from "@/data/site";

/** Floating contact shortcuts — most useful on a phone. */
export function ContactCta() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2 sm:right-6 sm:bottom-6">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="grid size-12 place-items-center rounded-full bg-sage text-cream shadow-card transition-transform hover:scale-105"
        aria-label="Message Emberline on WhatsApp"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={site.phoneHref}
        className="grid size-12 place-items-center rounded-full bg-ember text-cream shadow-card transition-transform hover:scale-105"
        aria-label={`Call Emberline on ${site.phone}`}
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
