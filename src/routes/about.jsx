import { createFileRoute } from "@tanstack/react-router";

import aboutImage from "@/assets/about-chef.webp";
import oven from "@/assets/gallery-oven.webp";
import dining from "@/assets/gallery-dining.webp";
import { ButtonLink } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Emberline Restaurant" },
      {
        name: "description",
        content:
          "From a six-seat counter to a wood-fired dining room: the story, philosophy and kitchen behind Emberline in Ashford.",
      },
      { property: "og:title", content: "Our Story | Emberline Restaurant" },
      {
        property: "og:description",
        content: "The story, philosophy and kitchen behind Emberline in Ashford.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Our philosophy",
    body: "Cook less, cook better. A short menu means every plate gets the attention it deserves, and nothing sits waiting under a lamp.",
  },
  {
    title: "The chef's approach",
    body: "Head chef Iris Calloway builds each dish around one ingredient at its peak, then lets oak smoke do the rest of the talking.",
  },
  {
    title: "Fresh ingredients",
    body: "Vegetables arrive from three farms within twenty miles, fish comes up from the coast each morning, and bread is baked here daily.",
  },
  {
    title: "The experience",
    body: "Low light, unhurried service, and a room built for long conversations. You'll never be rushed out for the next sitting.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Ten years of cooking with fire"
        description="Emberline started as a six-seat counter around a single wood-fired oven. The counter is still here — and so is the way we cook."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src={aboutImage}
              alt="Head chef Iris Calloway plating a dish in the open kitchen"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
            <div>
              <SectionHeading eyebrow="How it began" title="One oven, three farms, no shortcuts" />
              <p className="mt-6 leading-relaxed text-ink/65">
                In 2016 we took over a former bakery on Kiln Lane, kept the brick oven and threw out
                almost everything else. The first menu had six dishes. It sold out every night for a
                month, and we learned that people will happily eat simply when the cooking is honest.
              </p>
              <p className="mt-4 leading-relaxed text-ink/65">
                A decade later the dining room seats fifty-two, the oven is still the loudest thing
                in the building, and the same three growers deliver most of what we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="What we stand for"
              title="Four things we refuse to compromise on"
              tone="dark"
            />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-cream/10 p-7">
                <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={oven}
                alt="The wood-fired oven glowing with embers"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-4/5 w-full rounded-2xl object-cover"
              />
              <img
                src={dining}
                alt="Guests sharing plates by candlelight"
                width={1024}
                height={1280}
                loading="lazy"
                className="mt-8 aspect-4/5 w-full rounded-2xl object-cover"
              />
            </div>
            <div>
              <SectionHeading eyebrow="Our mission" title="Feed people the way we'd want feeding" />
              <p className="mt-6 leading-relaxed text-ink/65">
                Everything we do is measured against one question: would we be happy if this arrived
                at our own table? That covers the cooking, the wine list, the welcome at the door and
                the price on the bill.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/reservation" variant="primary" size="lg">
                  Reserve a Table
                </ButtonLink>
                <ButtonLink to="/menu" variant="outline" size="lg">
                  Explore Menu
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
