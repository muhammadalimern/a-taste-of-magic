import { useState } from "react";
import { toast } from "sonner";

import { Button, ButtonLink } from "@/components/Button";
import { FormField } from "@/components/FormField";
import { orderReference } from "@/lib/format";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  guests: "2",
  date: "",
  time: "19:00",
  requests: "",
};

const times = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us the name for the table.";
  if (!/^[+0-9()\s-]{7,20}$/.test(values.phone.trim()))
    errors.phone = "Enter a phone number we can reach you on.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  const guests = Number(values.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 20)
    errors.guests = "Parties of 1 to 20 can book online.";
  if (!values.date) {
    errors.date = "Choose the date you'd like to join us.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(`${values.date}T00:00:00`) < today)
      errors.date = "Please choose today or a future date.";
  }
  if (!times.includes(values.time)) errors.time = "Choose a service time.";
  return errors;
}

export function ReservationForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [confirmation, setConfirmation] = useState(null);

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
    setStatus("loading");
    // Frontend-only: swap this timeout for your booking API call later.
    setTimeout(() => {
      setConfirmation({ ...values, reference: orderReference("EMB") });
      setStatus("done");
      toast.success("Reservation request received.");
    }, 900);
  }

  if (status === "done" && confirmation) {
    return (
      <div className="rounded-2xl border border-ink/5 bg-paper p-8 text-center">
        <p className="text-xs tracking-[0.3em] text-ember uppercase">Confirmed request</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
          Reservation Request Received
        </h2>
        <p className="mt-3 text-sm text-ink/65">
          Thank you, {confirmation.name}. We'll confirm by phone or email shortly.
        </p>
        <dl className="mx-auto mt-6 max-w-sm space-y-2 rounded-xl bg-sand/60 p-5 text-left text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink/60">Reference</dt>
            <dd className="font-semibold text-ink">{confirmation.reference}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink/60">Guests</dt>
            <dd className="font-semibold text-ink">{confirmation.guests}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink/60">Date</dt>
            <dd className="font-semibold text-ink">{confirmation.date}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink/60">Time</dt>
            <dd className="font-semibold text-ink">{confirmation.time}</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/menu" variant="primary">
            Explore Menu
          </ButtonLink>
          <Button
            variant="outline"
            onClick={() => {
              setValues(emptyForm);
              setConfirmation(null);
              setStatus("idle");
            }}
          >
            Book another table
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-ink/5 bg-paper p-6 sm:p-8"
    >
      <p className="text-xs text-ink/50">
        Fields marked <span className="text-ember">*</span> are required.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full name"
          required
          value={values.name}
          onChange={update("name")}
          error={errors.name}
          autoComplete="name"
          placeholder="Maren Doyle"
        />
        <FormField
          id="phone"
          label="Phone"
          required
          type="tel"
          value={values.phone}
          onChange={update("phone")}
          error={errors.phone}
          autoComplete="tel"
          placeholder="+44 20 7946 0102"
        />
        <FormField
          id="email"
          label="Email"
          required
          type="email"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          autoComplete="email"
          placeholder="you@example.com"
        />
        <FormField
          id="guests"
          label="Number of guests"
          required
          type="number"
          min="1"
          max="20"
          value={values.guests}
          onChange={update("guests")}
          error={errors.guests}
          hint="Parties over 20? Call us and we'll arrange it."
        />
        <FormField
          id="date"
          label="Date"
          required
          type="date"
          value={values.date}
          onChange={update("date")}
          error={errors.date}
        />
        <FormField
          id="time"
          label="Preferred time"
          required
          as="select"
          value={values.time}
          onChange={update("time")}
          error={errors.time}
        >
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </FormField>
      </div>
      <FormField
        id="requests"
        label="Special requests"
        as="textarea"
        value={values.requests}
        onChange={update("requests")}
        placeholder="Allergies, celebrations, seating preferences…"
      />
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending request…" : "Request Reservation"}
      </Button>
    </form>
  );
}
