export function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-16 sm:px-8 sm:pt-20 sm:pb-20">
        <p className="mb-4 text-xs tracking-[0.35em] text-ember uppercase">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.02] font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl leading-relaxed text-cream/70">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
