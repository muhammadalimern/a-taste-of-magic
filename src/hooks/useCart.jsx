import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { toast } from "sonner";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { site } from "@/data/site";

const CartContext = createContext(null);

function lineKey(item, options) {
  const ids = (options || []).map((option) => option.id).sort();
  return ids.length ? `${item.id}::${ids.join("|")}` : item.id;
}

function lineUnitPrice(line) {
  const extras = (line.options || []).reduce((sum, option) => sum + option.price, 0);
  return line.price + extras;
}

export function CartProvider({ children }) {
  const [lines, setLines] = useLocalStorage("emberline.cart", []);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback(
    (item, options = [], quantity = 1) => {
      const key = lineKey(item, options);
      setLines((current) => {
        const existing = current.find((line) => line.key === key);
        if (existing) {
          return current.map((line) =>
            line.key === key ? { ...line, quantity: line.quantity + quantity } : line,
          );
        }
        return [
          ...current,
          {
            key,
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            category: item.category,
            options,
            quantity,
          },
        ];
      });
      toast.success(`${item.name} added to your cart.`);
    },
    [setLines],
  );

  const increment = useCallback(
    (key) =>
      setLines((current) =>
        current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + 1 } : line,
        ),
      ),
    [setLines],
  );

  const decrement = useCallback(
    (key) =>
      setLines((current) =>
        current.flatMap((line) => {
          if (line.key !== key) return [line];
          if (line.quantity <= 1) return [];
          return [{ ...line, quantity: line.quantity - 1 }];
        }),
      ),
    [setLines],
  );

  const removeItem = useCallback(
    (key) => {
      setLines((current) => current.filter((line) => line.key !== key));
      toast("Item removed from cart.");
    },
    [setLines],
  );

  const clearCart = useCallback(
    (silent = false) => {
      setLines([]);
      if (!silent) toast("Your cart has been cleared.");
    },
    [setLines],
  );

  const value = useMemo(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce(
      (sum, line) => sum + lineUnitPrice(line) * line.quantity,
      0,
    );
    const serviceFee = count > 0 ? site.serviceFee : 0;
    return {
      lines,
      count,
      subtotal,
      serviceFee,
      total: subtotal + serviceFee,
      lineUnitPrice,
      addItem,
      increment,
      decrement,
      removeItem,
      clearCart,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
    };
  }, [lines, addItem, increment, decrement, removeItem, clearCart, drawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a CartProvider");
  return context;
}
