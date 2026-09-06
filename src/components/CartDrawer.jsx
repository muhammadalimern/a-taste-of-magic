import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { ShoppingBag, X } from "lucide-react";

import { Button, ButtonLink } from "@/components/Button";
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/hooks/useCart";
import { money } from "@/lib/format";
import { site } from "@/data/site";

export function CartDrawer() {
  const { lines, count, subtotal, serviceFee, total, clearCart, drawerOpen, closeDrawer } =
    useCart();
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") closeDrawer();
    }
    if (drawerOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [drawerOpen, closeDrawer]);

  useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", () => closeDrawer());
    return unsubscribe;
  }, [router, closeDrawer]);

  return (
    <div
      className={`fixed inset-0 z-60 ${drawerOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!drawerOpen}
    >
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-card transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-xl font-semibold text-ink">
            Your order{count > 0 ? ` · ${count}` : ""}
          </h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
          >
            <X className="size-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="grid size-16 place-items-center rounded-2xl bg-sand text-ink">
              <ShoppingBag className="size-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              Your cart is waiting for something delicious.
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              Browse the board and add a dish — the hearth is already lit.
            </p>
            <ButtonLink to="/menu" variant="primary" className="mt-6" onClick={closeDrawer}>
              Explore Menu
            </ButtonLink>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5">
              <ul className="divide-y divide-ink/10">
                {lines.map((line) => (
                  <CartItem key={line.key} line={line} />
                ))}
              </ul>
              <button
                type="button"
                onClick={() => clearCart()}
                className="my-4 text-xs font-semibold text-ink/50 underline decoration-ember decoration-1 underline-offset-4 transition-colors hover:text-emberdeep"
              >
                Clear entire cart
              </button>
            </div>
            <footer className="border-t border-ink/10 bg-sand/50 px-5 py-5">
              <dl className="space-y-2 text-sm text-ink/70">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="font-semibold text-ink">{money(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Service fee</dt>
                  <dd className="font-semibold text-ink">{money(serviceFee)}</dd>
                </div>
                <div className="flex justify-between border-t border-ink/10 pt-3 text-base">
                  <dt className="font-display font-semibold text-ink">Total</dt>
                  <dd className="font-display text-xl font-semibold text-ink">{money(total)}</dd>
                </div>
              </dl>
              <ButtonLink
                to="/checkout"
                variant="primary"
                size="lg"
                className="mt-4 w-full"
                onClick={closeDrawer}
              >
                Checkout
              </ButtonLink>
              <p className="mt-3 text-center text-xs text-ink/50">
                Questions about an order? Call {site.phone}
              </p>
              <Button
                variant="quiet"
                size="sm"
                className="mx-auto mt-1 block"
                onClick={closeDrawer}
              >
                Keep browsing
              </Button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
