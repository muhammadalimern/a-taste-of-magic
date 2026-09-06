import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";

const socials = [
  { label: "Emberline on Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Emberline on Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Emberline on X", href: "https://x.com", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-char text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-semibold text-cream">{site.name}</span>
          <p className="mt-3 text-sm leading-relaxed">
            A wood-fired kitchen in Ashford. Seasonal, local, and made by hand since 2016.
          </p>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-cream/20 transition-colors hover:border-ember hover:text-cream"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs tracking-[0.25em] text-cream/50 uppercase">Visit</h2>
          <ul className="space-y-2 text-sm">
            <li>{site.address}</li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs tracking-[0.25em] text-cream/50 uppercase">Explore</h2>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
              { to: "/faq", label: "FAQ" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs tracking-[0.25em] text-cream/50 uppercase">Hours</h2>
          <ul className="space-y-1.5 text-sm">
            {site.hours.map((entry) => (
              <li key={entry.days} className="flex justify-between gap-3">
                <span>{entry.days}</span>
                <span className="text-cream/50">{entry.time}</span>
              </li>
            ))}
          </ul>
          <ButtonLink to="/reservation" variant="primary" size="sm" className="mt-5">
            Reserve a Table
          </ButtonLink>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/40 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} Emberline. All rights reserved.</span>
          <span>Crafted with care around the fire.</span>
        </div>
      </div>
    </footer>
  );
}
