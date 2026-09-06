import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {images.map((image) => (
          <li key={image.src} className="overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setActive(image)}
              className="group block w-full"
              aria-label={`Open larger image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-70 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            <X className="size-5" />
          </button>
          <figure onClick={(event) => event.stopPropagation()} className="max-w-3xl">
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/70">{active.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
