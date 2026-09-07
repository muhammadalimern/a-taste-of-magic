import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { Button, ButtonLink } from "@/components/Button";
import { FormField } from "@/components/FormField";
import { PageHeader } from "@/components/PageHeader";
import { QuantityControl } from "@/components/QuantityControl";
import { useCart } from "@/hooks/useCart";
import { money, orderReference } from "@/lib/format";
import { site } from "@/data/site";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Emberline" },
      {
        name: "description",
        content:
          "Review your Emberline order, add your delivery details and choose to pay on delivery or at the restaurant.",
      },
      { property: "og:title", content: "Checkout | Emberline" },
      {
        property: "og:description",
        content: "Review your order and confirm delivery or collection at Emberline.",
      },
    ],
  }),
  component: CheckoutPage,
});

const emptyForm = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  address: "",
  notes: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please add the name for the order.";
  if (!/^[+0-9()\s-]{7,20}$/.test(values.phoneNumber.trim()))
    errors.phoneNumber = "Enter a phone number our driver can call.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.emailAddress.trim()))
    errors.emailAddress = "Enter a valid email address.";
  if (values.address.trim().length < 8)
    errors.address = "Add a full address, including door number.";
  return errors;
}

function CheckoutPage() {
  const {
    lines,
    count,
    subtotal,
    serviceFee,
    total,
    lineUnitPrice,
    increment,
    decrement,
    clearCart,
  } = useCart();
  const [values, setValues] = useState(emptyForm);
  const [payment, setPayment] = useState("cash");
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  function update(field) {
    return (event) => {
      const { value } = event.target;
      setValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    // Frontend-only: send this payload to your ordering API later.
    setConfirmed({
      reference: orderReference("ORD"),
      name: values.fullName,
      payment: payment === "cash" ? "Cash on Delivery" : "Pay at Restaurant",
      items: lines.map((line) => ({
        key: line.key,
        name: line.name,
        quantity: line.quantity,
        amount: lineUnitPrice(line) * line.quantity,
        options: line.options,
      })),
      total,
    });
    clearCart(true);
    toast.success("Your order has been received.");
  }

  if (confirmed) {
    return (
      <>
        <PageHeader eyebrow="Order confirmed" title="Order Received!" />
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="rounded-2xl border border-ink/5 bg-paper p-7 text-center sm:p-10">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-sand text-ember">
                <CheckCircle2 className="size-7" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Thank you, {confirmed.name}.
              </h2>
              <p className="mt-2 text-sm text-ink/65">
                Order <strong className="text-ink">{confirmed.reference}</strong> is with the
                kitchen. Estimated preparation time is 25–35 minutes.
              </p>

              <ul className="mt-8 divide-y divide-ink/10 text-left">
                {confirmed.items.map((item) => (
                  <li key={item.key} className="flex justify-between gap-4 py-3 text-sm">
                    <span className="min-w-0">
                      <span className="font-semibold text-ink">
                        {item.name} × {item.quantity}
                      </span>
                      {item.options?.length ? (
                        <span className="block text-xs text-sage">
                          {item.options.map((option) => option.label).join(" · ")}
                        </span>
                      ) : null}
                    </span>
                    <span className="font-semibold whitespace-nowrap text-ink">
                      {money(item.amount)}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-left text-sm text-ink/70">
                <div className="flex justify-between">
                  <dt>Payment</dt>
                  <dd className="font-semibold text-ink">{confirmed.payment}</dd>
                </div>
                <div className="flex justify-between text-base">
                  <dt className="font-display font-semibold text-ink">Total</dt>
                  <dd className="font-display text-xl font-semibold text-ink">
                    {money(confirmed.total)}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-xs text-ink/50">
                Need to change something? Call {site.phone}.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <ButtonLink to="/" variant="primary">
                  Back to home
                </ButtonLink>
                <ButtonLink to="/menu" variant="outline">
                  Order something else
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (count === 0) {
    return (
      <>
        <PageHeader eyebrow="Checkout" title="Your cart is empty" />
        <section className="bg-cream">
          <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-sand text-ink">
              <ShoppingBag className="size-7" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Your cart is waiting for something delicious.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
              Add a dish or two from the board and your order will appear here.
            </p>
            <ButtonLink to="/menu" variant="primary" size="lg" className="mt-7">
              Explore Menu
            </ButtonLink>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Checkout"
        title="Almost at the table"
        description="Tell us where it's going and how you'd like to pay. Nothing is charged online."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6 rounded-2xl border border-ink/5 bg-paper p-6 sm:p-8"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">Your details</h2>
                <p className="mt-1 text-xs text-ink/50">
                  Fields marked <span className="text-ember">*</span> are required.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  id="fullName"
                  label="Full name"
                  required
                  value={values.fullName}
                  onChange={update("fullName")}
                  error={errors.fullName}
                  autoComplete="name"
                />
                <FormField
                  id="phoneNumber"
                  label="Phone"
                  required
                  type="tel"
                  value={values.phoneNumber}
                  onChange={update("phoneNumber")}
                  error={errors.phoneNumber}
                  autoComplete="tel"
                />
              </div>
              <FormField
                id="emailAddress"
                label="Email"
                required
                type="email"
                value={values.emailAddress}
                onChange={update("emailAddress")}
                error={errors.emailAddress}
                autoComplete="email"
              />
              <FormField
                id="address"
                label="Delivery address"
                required
                as="textarea"
                value={values.address}
                onChange={update("address")}
                error={errors.address}
                placeholder="Door number, street, postcode"
                autoComplete="street-address"
              />
              <FormField
                id="notes"
                label="Delivery notes"
                as="textarea"
                value={values.notes}
                onChange={update("notes")}
                placeholder="Buzzer code, allergies, where to leave it…"
              />

              <fieldset>
                <legend className="mb-3 font-display text-xl font-semibold text-ink">
                  Payment method
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { id: "cash", label: "Cash on Delivery", hint: "Pay the driver at the door." },
                    {
                      id: "restaurant",
                      label: "Pay at Restaurant",
                      hint: "Collect and settle at the counter.",
                    },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`flex cursor-pointer gap-3 rounded-xl border p-4 text-sm transition-colors ${
                        payment === option.id
                          ? "border-ember bg-sand/60"
                          : "border-ink/15 hover:border-ink/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        checked={payment === option.id}
                        onChange={() => setPayment(option.id)}
                        className="mt-0.5 size-4 accent-ember"
                      />
                      <span>
                        <span className="block font-semibold text-ink">{option.label}</span>
                        <span className="text-xs text-ink/55">{option.hint}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Place Order · {money(total)}
              </Button>
            </form>

            <aside className="h-fit rounded-2xl border border-ink/5 bg-paper p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-xl font-semibold text-ink">
                Order summary · {count}
              </h2>
              <ul className="mt-4 divide-y divide-ink/10">
                {lines.map((line) => (
                  <li key={line.key} className="py-4">
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="min-w-0">
                        <span className="block font-semibold text-ink">{line.name}</span>
                        {line.options?.length ? (
                          <span className="block text-xs text-sage">
                            {line.options.map((option) => option.label).join(" · ")}
                          </span>
                        ) : null}
                      </span>
                      <span className="font-semibold whitespace-nowrap text-ink">
                        {money(lineUnitPrice(line) * line.quantity)}
                      </span>
                    </div>
                    <div className="mt-2">
                      <QuantityControl
                        quantity={line.quantity}
                        label={line.name}
                        onIncrease={() => increment(line.key)}
                        onDecrease={() => decrement(line.key)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="space-y-2 border-t border-ink/10 pt-4 text-sm text-ink/70">
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
              <Button variant="quiet" size="sm" className="mt-3" onClick={() => clearCart()}>
                Clear entire cart
              </Button>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
