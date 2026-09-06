import { Trash2 } from "lucide-react";

import { QuantityControl } from "@/components/QuantityControl";
import { useCart } from "@/hooks/useCart";
import { money } from "@/lib/format";

export function CartItem({ line }) {
  const { increment, decrement, removeItem, lineUnitPrice } = useCart();
  const unit = lineUnitPrice(line);

  return (
    <li className="grid grid-cols-[4rem_minmax(0,1fr)] gap-4 border-b border-ink/10 py-4 last:border-0">
      <img
        src={line.image}
        alt={line.name}
        width={1024}
        height={768}
        loading="lazy"
        className="size-16 shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-base font-semibold text-ink">{line.name}</h3>
            <p className="text-xs text-ink/50">
              {money(unit)} each · {line.category}
            </p>
            {line.options?.length ? (
              <p className="mt-1 text-xs text-sage">
                {line.options.map((option) => option.label).join(" · ")}
              </p>
            ) : null}
          </div>
          <span className="font-display text-base font-semibold whitespace-nowrap text-ink">
            {money(unit * line.quantity)}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <QuantityControl
            quantity={line.quantity}
            label={line.name}
            onIncrease={() => increment(line.key)}
            onDecrease={() => decrement(line.key)}
          />
          <button
            type="button"
            onClick={() => removeItem(line.key)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/50 transition-colors hover:text-emberdeep"
          >
            <Trash2 className="size-3.5" />
            Remove
            <span className="sr-only"> {line.name} from cart</span>
          </button>
        </div>
      </div>
    </li>
  );
}
