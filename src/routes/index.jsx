import { createFileRoute, Link } from "@tanstack/react-router";
import { ChefHat, CheckCircle2, Flame, Leaf, Sparkles, Wine } from "lucide-react";

import heroImage from "@/assets/hero.webp";
import aboutImage from "@/assets/about-chef.webp";
import flatbread from "@/assets/dish-flatbread.webp";
import interior from "@/assets/gallery-interior.webp";
import hands from "@/assets/gallery-hands.webp";
import { ButtonLink } from "@/components/Button";
import { MenuCard } from "@/components/MenuCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { popularItems } from "@/data/menuData";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emberline | Modern Dining & Wood-Fired Kitchen in Ashford" },
      {
        name: "description",
        content:
          "Where fire meets honest food. Seasonal, oak-fired cooking at Emberline in Ashford — browse the menu, order online or reserve a table.",
      },
      { property: "og:title", content: "Emberline | Modern Dining & Wood-Fired Kitchen" },
      {
        property: "og:description",
        content: "Where fire meets honest food. Seasonal, oak-fired cooking in Ashford.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    Icon: Leaf,
    title: "Seasonal, local produce",
    body: "Menus change with the farm. What the growers bring that week is what we cook.",
  },
  {
    Icon: Flame,
    title: "Cooked on open flame",
    body: "Our oak-fired hearth gives every dish a depth that no gas line can match.",
  },
  {
    Icon: ChefHat,
    title: "A kitchen of regulars",
    body: "Our chefs have cooked together for nearly a decade — it shows in the plate.",
  },
  {
    Icon: Sparkles,
    title: "A calm, candlelit room",
    body: "Warm light, low music, and no rushing. Stay as long as the fire will let you.",
  },
  {
    Icon: Wine,
    title: "Thoughtful pairings",
    body: "A tight, natural-leaning list matched by a team that loves a good pour.",
  },
  {
    Icon: CheckCircle2,
    title: "Quality you can taste",
    body: "Fewer dishes, made properly. If it isn't right, it doesn't leave the pass.",
  },
];

const steps = [
  { step: "01", title: "Explore the menu", body: "Search, filter and read every dish on the board." },
  { step: "02", title: "Add your favourites", body: "Customise burgers and pizzas, then add to cart." },
  { step: "03", title: "Review your cart", body: "Adjust quantities and check your total, saved as you go." },
  { step: "04", title: "Place your order", body: "Pick delivery or collection and confirm in seconds." },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt="Ember-glazed duck plated by candlelight at Emberline"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8">
          <p className="mb-5 text-xs tracking-[0.35em] text-cream/70 uppercase">
            Wood-fired · Seasonal · Ashford
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[0.98] font-semibold text-cream sm:text-6xl lg:text-7xl">
            Where fire meets <span className="text-ember italic">honest</span> food.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/75 sm:text-lg">
            Emberline is a slow-cooking kitchen where local produce, open flame and a few well-worn
            rituals turn an ordinary evening into something worth remembering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/menu" variant="primary" size="lg">
              Explore Menu
            </ButtonLink>
            <ButtonLink to="/reservation" variant="onDark" size="lg">
              Reserve a Table
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-cream/60">
            <span>Open Tue–Sun · 5pm–11pm</span>
            <span>{site.address}</span>
            <a href={site.phoneHref} className="transition-colors hover:text-cream">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Chef's Favorites" title="Dishes worth the crawl back" />
            <Link
              to="/menu"
              className="border-b border-ember pb-0.5 text-sm font-semibold text-ink transition-colors hover:text-ember"
            >
              View full menu →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-12 max-w-2xl">
            <SectionHeading
              eyebrow="Why Emberline"
              title="Built around the fire, and the people around it"
              tone="dark"
            />
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 60}>
                <div className="mb-4 grid size-12 place-items-center rounded-xl bg-ember/15 text-ember">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="Order in four unhurried steps"
            align="center"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <li key={item.step} className="rounded-2xl border border-ink/5 bg-paper p-6">
                <span className="font-display text-3xl font-semibold text-ember">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src={aboutImage}
              alt="Emberline's head chef plating a dish in the open kitchen"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="A kitchen that started with a single hearth"
              />
              <p className="mt-6 leading-relaxed text-ink/65">
                Emberline began in 2016 as a six-seat counter around one wood-fired oven. Nearly a
                decade on, the counter's still here — and so is the belief that great food is
                patient, local, and made by hand.
              </p>
              <p className="mt-4 leading-relaxed text-ink/65">
                We don't chase trends. We chase the best thing the season can give us, cooked the way
                we'd want it at home.
              </p>
              <ButtonLink to="/about" variant="dark" size="lg" className="mt-8">
                More about us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Kind words"
              title="From the people at the table"
              align="center"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="A look inside" />
            <Link
              to="/gallery"
              className="border-b border-ember pb-0.5 text-sm font-semibold text-ink transition-colors hover:text-ember"
            >
              Full gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <img
              src={flatbread}
              alt="Oak-fired flatbread with a blistered crust"
              width={1024}
              height={1024}
              loading="lazy"
              className="col-span-2 row-span-2 aspect-square w-full rounded-2xl object-cover"
            />
            <img
              src={interior}
              alt="Candlelit dining room with warm wooden tables"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
            <img
              src={hands}
              alt="Chef scattering herbs over the open flame"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p className="mb-4 text-xs tracking-[0.35em] text-ember uppercase">Your evening awaits</p>
          <h2 className="font-display text-3xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Good food. Warm light.
            <br />
            <span className="italic">A table with your name on it.</span>
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/reservation" variant="primary" size="lg">
              Reserve a Table
            </ButtonLink>
            <ButtonLink to="/menu" variant="onDark" size="lg">
              Explore Menu
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
