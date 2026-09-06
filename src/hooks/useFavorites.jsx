import { createContext, useCallback, useContext, useMemo } from "react";
import { toast } from "sonner";

import { useLocalStorage } from "@/hooks/useLocalStorage";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("emberline.favorites", []);

  const toggleFavorite = useCallback(
    (item) => {
      setFavorites((current) => {
        if (current.includes(item.id)) {
          toast(`${item.name} removed from favourites.`);
          return current.filter((id) => id !== item.id);
        }
        toast.success(`${item.name} saved to favourites.`);
        return [...current, item.id];
      });
    },
    [setFavorites],
  );

  const value = useMemo(
    () => ({
      favorites,
      isFavorite: (id) => favorites.includes(id),
      toggleFavorite,
    }),
    [favorites, toggleFavorite],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside a FavoritesProvider");
  return context;
}
