export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }) {
  const alignment = align === "center" ? "text-center mx-auto max-w-2xl" : "";
  const titleTone = tone === "dark" ? "text-cream" : "text-ink";
  const bodyTone = tone === "dark" ? "text-cream/65" : "text-ink/65";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">{eyebrow}</p>
      ) : null}
      <h2 className={`text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl ${titleTone}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 leading-relaxed ${bodyTone}`}>{description}</p>
      ) : null}
    </div>
  );
}
