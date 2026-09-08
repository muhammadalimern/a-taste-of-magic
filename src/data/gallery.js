import interior from "@/assets/gallery-interior.webp";
import hands from "@/assets/gallery-hands.webp";
import dining from "@/assets/gallery-dining.webp";
import bar from "@/assets/gallery-bar.webp";
import oven from "@/assets/gallery-oven.webp";
import chef from "@/assets/about-chef.webp";
import flatbread from "@/assets/dish-flatbread.webp";
import duck from "@/assets/dish-duck.webp";
import cocktail from "@/assets/dish-cocktail.webp";

export const galleryCategories = ["All", "Food", "Interior", "Chef", "Atmosphere"];

export const galleryImages = [
  { src: flatbread, alt: "Oak-fired flatbread with a blistered, charred crust", category: "Food" },
  { src: interior, alt: "Candlelit dining room with warm wooden tables", category: "Interior" },
  { src: hands, alt: "Chef scattering herbs over the open flame grill", category: "Chef" },
  { src: dining, alt: "Guests sharing plates by candlelight", category: "Atmosphere" },
  { src: bar, alt: "Brass and wood bar with backlit bottles", category: "Interior" },
  { src: oven, alt: "The wood-fired oven glowing with embers", category: "Chef" },
  { src: duck, alt: "Ember-glazed duck plated on stoneware", category: "Food" },
  { src: chef, alt: "Head chef plating a dish in the open kitchen", category: "Chef" },
  { src: cocktail, alt: "Smoked old fashioned on the bar top", category: "Atmosphere" },
];
