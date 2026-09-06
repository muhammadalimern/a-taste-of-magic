/*
 * Emberline menu data.
 * Frontend-only: swap these objects (or point them at your own source) to
 * change the menu. Every field below is used by the UI.
 */
import burrata from "@/assets/dish-burrata.jpg";
import scallops from "@/assets/dish-scallops.jpg";
import soup from "@/assets/dish-soup.jpg";
import flatbread from "@/assets/dish-flatbread.jpg";
import duck from "@/assets/dish-duck.jpg";
import salmon from "@/assets/dish-salmon.jpg";
import shortrib from "@/assets/dish-shortrib.jpg";
import burger from "@/assets/dish-burger.jpg";
import mushroomBurger from "@/assets/dish-mushroom-burger.jpg";
import margherita from "@/assets/dish-margherita.jpg";
import trufflePizza from "@/assets/dish-truffle-pizza.jpg";
import chocolate from "@/assets/dish-chocolate.jpg";
import lemonTart from "@/assets/dish-lemon-tart.jpg";
import sorbet from "@/assets/dish-sorbet.jpg";
import cocktail from "@/assets/dish-cocktail.jpg";
import wine from "@/assets/dish-wine.jpg";
import coffee from "@/assets/dish-coffee.jpg";

export const categories = [
  "All",
  "Starters",
  "Main Course",
  "Burgers",
  "Pizza",
  "Desserts",
  "Drinks",
];

const burgerExtras = [
  { id: "cheese", label: "Add aged cheddar", price: 1.5 },
  { id: "sauce", label: "Extra ember sauce", price: 0.75 },
  { id: "no-onion", label: "No onions", price: 0 },
];

const pizzaExtras = [
  { id: "cheese", label: "Extra cheese", price: 2 },
  { id: "spicy", label: "Make it spicy", price: 0 },
  { id: "toppings", label: "Extra seasonal toppings", price: 2.5 },
];

export const menuItems = [
  {
    id: "burrata",
    name: "Heirloom Tomato & Burrata",
    description: "Slow-roasted tomatoes, torn burrata, basil oil, sourdough crisp.",
    price: 18,
    category: "Starters",
    image: burrata,
    rating: 4.7,
    popular: true,
    tags: ["Vegetarian"],
  },
  {
    id: "scallops",
    name: "Hearth Scallops",
    description: "Seared over oak, brown butter, toasted hazelnut, thyme.",
    price: 21,
    category: "Starters",
    image: scallops,
    rating: 4.8,
    popular: false,
    tags: ["Gluten free"],
  },
  {
    id: "squash-soup",
    name: "Roast Squash & Lentil Soup",
    description: "Charred squash, black lentils, pumpkin seed oil, crème fraîche.",
    price: 12,
    category: "Starters",
    image: soup,
    rating: 4.6,
    popular: false,
    tags: ["Vegetarian"],
  },
  {
    id: "flatbread",
    name: "Oak-Fired Flatbread",
    description: "Blistered dough, cultured butter, wild herbs, smoked salt.",
    price: 11,
    category: "Starters",
    image: flatbread,
    rating: 4.9,
    popular: true,
    tags: ["Vegetarian", "Share"],
  },
  {
    id: "duck",
    name: "Ember-Glazed Duck",
    description: "Charred over oak, lacquered in burnt orange and miso jus.",
    price: 28,
    category: "Main Course",
    image: duck,
    rating: 4.9,
    popular: true,
    tags: ["Chef's pick"],
  },
  {
    id: "salmon",
    name: "Wood-Fired Salmon",
    description: "Crisp-skinned, charred lemon, fennel and a whisper of dill oil.",
    price: 26,
    category: "Main Course",
    image: salmon,
    rating: 4.8,
    popular: true,
    tags: ["Gluten free"],
  },
  {
    id: "shortrib",
    name: "Short Rib, Ember Glaze",
    description: "Twelve-hour braise, charred allium, peppercorn jus.",
    price: 34,
    category: "Main Course",
    image: shortrib,
    rating: 4.9,
    popular: false,
    tags: ["Slow cooked"],
  },
  {
    id: "ember-smash",
    name: "Ember Smash Burger",
    description: "Double patty, aged cheddar, house pickles, brioche bun.",
    price: 17,
    category: "Burgers",
    image: burger,
    rating: 4.8,
    popular: true,
    tags: ["Fan favourite"],
    options: burgerExtras,
  },
  {
    id: "portobello-burger",
    name: "Grilled Portobello Burger",
    description: "Flame-grilled mushroom, smoked provolone, charred onion.",
    price: 15,
    category: "Burgers",
    image: mushroomBurger,
    rating: 4.6,
    popular: false,
    tags: ["Vegetarian"],
    options: burgerExtras,
  },
  {
    id: "margherita",
    name: "Margherita",
    description: "San Marzano, stracciatella, basil from the kitchen window.",
    price: 15,
    category: "Pizza",
    image: margherita,
    rating: 4.9,
    popular: true,
    tags: ["Vegetarian"],
    options: pizzaExtras,
  },
  {
    id: "truffle-pizza",
    name: "Wild Mushroom & Truffle",
    description: "White base, mushroom ragù, thyme, shaved truffle.",
    price: 19,
    category: "Pizza",
    image: trufflePizza,
    rating: 4.7,
    popular: false,
    tags: ["Vegetarian"],
    options: pizzaExtras,
  },
  {
    id: "chocolate-tart",
    name: "Dark Chocolate Ember Tart",
    description: "Bitter chocolate ganache, smoked salt, crème fraîche.",
    price: 10,
    category: "Desserts",
    image: chocolate,
    rating: 4.9,
    popular: true,
    tags: ["Vegetarian"],
  },
  {
    id: "lemon-tart",
    name: "Lemon Cloud Tart",
    description: "Torched meringue, brown-butter crumb, lemon curd.",
    price: 9,
    category: "Desserts",
    image: lemonTart,
    rating: 4.7,
    popular: false,
    tags: ["Vegetarian"],
  },
  {
    id: "sorbet",
    name: "Blood Orange Sorbet",
    description: "Churned in-house, mint, a spoon of citrus syrup.",
    price: 7,
    category: "Desserts",
    image: sorbet,
    rating: 4.5,
    popular: false,
    tags: ["Vegan"],
  },
  {
    id: "old-fashioned",
    name: "Smoked Old Fashioned",
    description: "Oak-smoked bourbon, bitters, burnt orange peel.",
    price: 14,
    category: "Drinks",
    image: cocktail,
    rating: 4.8,
    popular: true,
    tags: ["Bar"],
  },
  {
    id: "house-red",
    name: "House Red, Glass",
    description: "Low-intervention grenache from a small family plot.",
    price: 11,
    category: "Drinks",
    image: wine,
    rating: 4.6,
    popular: false,
    tags: ["Bar"],
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Single-origin espresso, silky steamed milk.",
    price: 4.5,
    category: "Drinks",
    image: coffee,
    rating: 4.7,
    popular: false,
    tags: ["Caffeine"],
  },
];

export const popularItems = menuItems.filter((item) => item.popular).slice(0, 3);

export function findMenuItem(id) {
  return menuItems.find((item) => item.id === id);
}
