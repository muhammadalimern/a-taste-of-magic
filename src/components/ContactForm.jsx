import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/Button";
import { FormField } from "@/components/FormField";

const emptyForm = { cname: "", cemail: "", cphone: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.cname.trim()) errors.cname = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.cemail.trim()))
    errors.cemail = "Enter a valid email address.";
  if (values.cphone.trim() && !/^[+0-9()\s-]{7,20}$/.test(values.cphone.trim()))
    errors.cphone = "That phone number doesn't look right.";
  if (values.message.trim().length < 10)
    errors.message = "Tell us a little more — at least 10 characters.";
  if (values.message.length > 1000) errors.message = "Please keep it under 1000 characters.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

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
    // Frontend-only: connect your email service or API here later.
    setSent(true);
    setValues(emptyForm);
    toast.success("Thanks — your message is with us.");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-ink/5 bg-paper p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink">Message sent</h2>
        <p className="mt-3 text-sm text-ink/65">
          We reply to everything within one working day. For anything urgent, give the restaurant a
          ring.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-ink/5 bg-paper p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="cname"
          label="Name"
          required
          value={values.cname}
          onChange={update("cname")}
          error={errors.cname}
          autoComplete="name"
        />
        <FormField
          id="cemail"
          label="Email"
          required
          type="email"
          value={values.cemail}
          onChange={update("cemail")}
          error={errors.cemail}
          autoComplete="email"
        />
      </div>
      <FormField
        id="cphone"
        label="Phone"
        type="tel"
        value={values.cphone}
        onChange={update("cphone")}
        error={errors.cphone}
        autoComplete="tel"
      />
      <FormField
        id="message"
        label="Message"
        required
        as="textarea"
        maxLength={1000}
        value={values.message}
        onChange={update("message")}
        error={errors.message}
        placeholder="How can we help?"
      />
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
