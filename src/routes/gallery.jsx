import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { CategoryFilter } from "@/components/CategoryFilter";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHeader } from "@/components/PageHeader";
import { galleryCategories, galleryImages } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Inside Emberline" },
      {
        name: "description",
        content:
          "Photographs of the food, the wood-fired kitchen, the dining room and the atmosphere at Emberline in Ashford.",
      },
      { property: "og:title", content: "Gallery | Inside Emberline" },
      {
        property: "og:description",
        content: "The food, the fire, the room — photographs from inside Emberline.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState("All");
  const images =
    category === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === category);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look inside the room"
        description="The food, the fire and the evenings in between. Tap any photograph to see it larger."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <CategoryFilter
            categories={galleryCategories}
            active={category}
            onChange={setCategory}
          />
          <div className="mt-8">
            <GalleryGrid images={images} />
          </div>
        </div>
      </section>
    </>
  );
}
