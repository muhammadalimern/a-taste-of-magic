import { Minus, Plus } from "lucide-react";

export function QuantityControl({ quantity, onIncrease, onDecrease, label }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-ink/15 p-1">
      <button
        type="button"
        onClick={onDecrease}
        aria-label={`Decrease quantity of ${label}`}
        className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
      >
        <Minus className="size-4" />
      </button>
      <span
        className="min-w-6 text-center text-sm font-semibold"
        aria-live="polite"
        aria-label={`Quantity of ${label}`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label={`Increase quantity of ${label}`}
        className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
