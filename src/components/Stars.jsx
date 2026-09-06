import { Star } from "lucide-react";

export function Stars({ rating, showValue = true, className = "" }) {
  const rounded = Math.round(rating);
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((step) => (
          <Star
            key={step}
            className={
              step <= rounded ? "size-3.5 fill-ember text-ember" : "size-3.5 text-ink/25"
            }
          />
        ))}
      </span>
      {showValue ? (
        <span className="text-xs font-semibold">{rating.toFixed(1)}</span>
      ) : null}
      <span className="sr-only">{rating.toFixed(1)} out of 5</span>
    </span>
  );
}
