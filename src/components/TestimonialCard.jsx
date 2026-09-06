import { Stars } from "@/components/Stars";

export function TestimonialCard({ testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink/5 bg-paper p-7">
      <Stars rating={testimonial.rating} showValue={false} />
      <blockquote className="mt-3 flex-1 leading-relaxed text-ink/75">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-sand font-display text-sm font-semibold text-ink"
        >
          {initials}
        </span>
        <span className="min-w-0 text-sm">
          <strong className="block font-semibold text-ink">{testimonial.name}</strong>
          <span className="text-ink/50">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
