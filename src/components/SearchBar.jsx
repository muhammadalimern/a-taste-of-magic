import { Search, X } from "lucide-react";

export function SearchBar({ value, onChange, resultCount }) {
  return (
    <div className="w-full">
      <label htmlFor="menu-search" className="sr-only">
        Search the menu by dish, description or category
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink/40" />
        <input
          id="menu-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search dishes, e.g. duck, pizza, vegetarian"
          className="w-full rounded-full border border-ink/15 bg-paper py-3.5 pr-11 pl-11 text-sm text-ink placeholder:text-ink/40"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>
      <p className="mt-2 text-xs text-ink/50" aria-live="polite">
        {resultCount} {resultCount === 1 ? "dish" : "dishes"} on the board
      </p>
    </div>
  );
}
