import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Heart, SearchX } from "lucide-react";

import { Button } from "@/components/Button";
import { CategoryFilter } from "@/components/CategoryFilter";
import { MenuCard } from "@/components/MenuCard";
import { PageHeader } from "@/components/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { categories, menuItems } from "@/data/menuData";
import { useFavorites } from "@/hooks/useFavorites";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Emberline Wood-Fired Restaurant" },
      {
        name: "description",
        content:
          "Starters, mains, burgers, pizza, desserts and drinks from Emberline's oak-fired kitchen. Search, filter and order online.",
      },
      { property: "og:title", content: "Menu | Emberline Wood-Fired Restaurant" },
      {
        property: "og:description",
        content: "Search the full Emberline menu and order online in a few taps.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const { favorites } = useFavorites();

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesFavorites = !favoritesOnly || favorites.includes(item.id);
      const haystack = `${item.name} ${item.description} ${item.category} ${(item.tags || []).join(" ")}`.toLowerCase();
      return matchesCategory && matchesFavorites && (!needle || haystack.includes(needle));
    });
  }, [query, category, favoritesOnly, favorites]);

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setFavoritesOnly(false);
  }

  return (
    <>
      <PageHeader
        eyebrow="The board"
        title="Everything from the hearth, tonight"
        description="Seventeen dishes, changed with the season. Search by name, ingredient or category, then build your order."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start">
            <SearchBar value={query} onChange={setQuery} resultCount={results.length} />
            <div className="space-y-3">
              <CategoryFilter categories={categories} active={category} onChange={setCategory} />
              <button
                type="button"
                onClick={() => setFavoritesOnly((on) => !on)}
                aria-pressed={favoritesOnly}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  favoritesOnly
                    ? "border-ember bg-ember text-cream"
                    : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
                }`}
              >
                <Heart className={favoritesOnly ? "size-4 fill-cream" : "size-4"} />
                Favourites only ({favorites.length})
              </button>
            </div>
          </div>

          <div className="mt-10">
            {results.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((item, index) => (
                  <MenuCard key={item.id} item={item} priority={index < 3} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-ink/10 bg-paper px-6 py-16 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-sand text-ink">
                  {favoritesOnly && favorites.length === 0 ? (
                    <Heart className="size-6" />
                  ) : (
                    <SearchX className="size-6" />
                  )}
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {favoritesOnly && favorites.length === 0
                    ? "No favourites saved yet"
                    : "Nothing on the board matches that"}
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
                  {favoritesOnly && favorites.length === 0
                    ? "Tap the heart on any dish and it will be waiting here next time you visit."
                    : "Try a different word, or clear the filters to see the whole menu again."}
                </p>
                <Button variant="dark" className="mt-6" onClick={resetFilters}>
                  Show the full menu
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
