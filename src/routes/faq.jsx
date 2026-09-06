import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/components/Button";
import { FAQItem } from "@/components/FAQItem";
import { PageHeader } from "@/components/PageHeader";
import { faqData } from "@/data/faqData";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Emberline Restaurant" },
      {
        name: "description",
        content:
          "Reservations, opening hours, dietary requirements, private events, takeaway and delivery — answers to the questions we're asked most.",
      },
      { property: "og:title", content: "FAQ | Emberline Restaurant" },
      {
        property: "og:description",
        content: "Answers on bookings, hours, dietary needs, events, takeaway and delivery.",
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [openId, setOpenId] = useState(faqData[0].id);

  return (
    <>
      <PageHeader
        eyebrow="Good to know"
        title="Questions, answered"
        description="Everything guests ask us before booking. If yours isn't here, the contact page reaches the team directly."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="rounded-2xl border border-ink/5 bg-paper px-6 sm:px-8">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                open={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-ink px-6 py-10 text-center text-cream sm:px-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Still deciding? Come and see the room.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/65">
              Tables go quickly at the weekend, but there's almost always space midweek.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink to="/reservation" variant="primary">
                Reserve a Table
              </ButtonLink>
              <ButtonLink to="/contact" variant="onDark">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
