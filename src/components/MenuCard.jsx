import { useState } from "react";
import { Heart, Settings2 } from "lucide-react";

import { Button } from "@/components/Button";
import { Stars } from "@/components/Stars";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";
import { money } from "@/lib/format";

export function MenuCard({ item, priority = false }) {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState([]);

  const hasOptions = Boolean(item.options?.length);
  const favorite = isFavorite(item.id);
  const extras = selected.reduce((sum, id) => {
    const option = item.options.find((entry) => entry.id === id);
    return sum + (option ? option.price : 0);
  }, 0);

  function toggleOption(id) {
    setSelected((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    );
  }

  function handleAdd() {
    const chosen = hasOptions
      ? item.options.filter((option) => selected.includes(option.id))
      : [];
    addItem(item, chosen);
    setSelected([]);
    setShowOptions(false);
  }

  return (
    <article className="card-lift flex flex-col overflow-hidden rounded-2xl border border-ink/5 bg-paper">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={768}
          loading={priority ? "eager" : "lazy"}
          className="aspect-4/3 w-full object-cover"
        />
        <button
          type="button"
          onClick={() => toggleFavorite(item)}
          aria-pressed={favorite}
          aria-label={favorite ? `Remove ${item.name} from favourites` : `Save ${item.name} to favourites`}
          className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-cream/90 text-ink shadow-soft transition-colors hover:bg-cream"
        >
          <Heart className={favorite ? "size-4 fill-ember text-ember" : "size-4"} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <span className="text-[11px] tracking-[0.2em] text-sage uppercase">{item.category}</span>
          <Stars rating={item.rating} className="text-ink/60" />
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">{item.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>

        {item.tags?.length ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-ink/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {hasOptions ? (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowOptions((open) => !open)}
              aria-expanded={showOptions}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/70 transition-colors hover:text-ember"
            >
              <Settings2 className="size-3.5" />
              {showOptions ? "Hide options" : "Customise this dish"}
            </button>
            {showOptions ? (
              <fieldset className="mt-3 space-y-2 rounded-xl bg-sand/60 p-3">
                <legend className="sr-only">Options for {item.name}</legend>
                {item.options.map((option) => (
                  <label key={option.id} className="flex items-center gap-2 text-sm text-ink/75">
                    <input
                      type="checkbox"
                      checked={selected.includes(option.id)}
                      onChange={() => toggleOption(option.id)}
                      className="size-4 accent-ember"
                    />
                    <span className="flex-1">{option.label}</span>
                    <span className="text-xs font-semibold text-ink/50">
                      {option.price > 0 ? `+${money(option.price)}` : "Free"}
                    </span>
                  </label>
                ))}
              </fieldset>
            ) : null}
          </div>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-3 pt-1">
          <span className="font-display text-2xl font-semibold text-ink">
            {money(item.price + extras)}
          </span>
          <Button variant="dark" size="sm" onClick={handleAdd}>
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
