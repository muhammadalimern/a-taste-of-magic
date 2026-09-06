import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";

import { ButtonLink } from "@/components/Button";
import { useCart } from "@/hooks/useCart";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

export function Navbar() {
  const { count, openDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-14" : "h-16 sm:h-20"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-baseline gap-2">
          <span
            className={`font-display font-semibold tracking-tight text-ink transition-all ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            {site.name}
          </span>
          <span className="hidden text-[11px] tracking-[0.25em] text-ember uppercase sm:inline">
            {site.established}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-ink" }}
              inactiveProps={{ className: "text-ink/60" }}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={openDrawer}
            className="relative grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
            aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute top-1 right-1 grid size-5 place-items-center rounded-full bg-ember text-[11px] font-bold text-cream">
                {count}
              </span>
            ) : null}
          </button>
          <ButtonLink to="/reservation" variant="dark" size="sm" className="hidden sm:inline-flex">
            Reserve a Table
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-ink/10 bg-cream transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
          <ul className="divide-y divide-ink/10">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-ember" }}
                  className="block py-3.5 text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            to="/reservation"
            variant="primary"
            className="mt-4 mb-2 w-full"
            onClick={() => setMobileOpen(false)}
          >
            Reserve a Table
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
