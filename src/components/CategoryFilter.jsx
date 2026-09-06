export function CategoryFilter({ categories, active, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter menu by category"
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
    >
      {categories.map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={selected}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
              selected
                ? "border-ink bg-ink text-cream"
                : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
