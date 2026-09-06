import { useEffect, useState } from "react";

/**
 * Persist React state in the browser. Reading happens after mount so the
 * server-rendered markup and the first client render always match.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw));
    } catch {
      /* corrupted or unavailable storage — fall back to the initial value */
    }
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or blocked — the app keeps working in memory */
    }
  }, [key, value, hydrated]);

  return [value, setValue, hydrated];
}
