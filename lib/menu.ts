import fs from "fs/promises";
import path from "path";

export type MenuItem = {
  name: string;
  category: string;
  description: string;
  price: number;
  thcMg: number;
  servingSize: string;
  prepTime: number;
  vegan: boolean;
};

export type DisplaySection = {
  id: string;
  label: string;
  emoji: string;
  categories: string[];
};

export const DISPLAY_SECTIONS: DisplaySection[] = [
  {
    id: "drinks",
    label: "Drinks",
    emoji: "☕",
    categories: [
      "Espresso",
      "Latte",
      "Cold Brew",
      "Cortado",
      "Matcha",
      "Mocha",
      "Cappuccino",
      "Iced Drink",
      "Chai",
      "Dessert Drink",
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    emoji: "🥐",
    categories: ["Pastry"],
  },
  {
    id: "brunch",
    label: "Brunch",
    emoji: "🍳",
    categories: ["Brunch"],
  },
  {
    id: "savory",
    label: "Savory",
    emoji: "🥗",
    categories: ["Savory Snack"],
  },
  {
    id: "sweet",
    label: "Sweet",
    emoji: "🍫",
    categories: ["Sweet Snack"],
  },
];

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export async function getAllMenuItems(): Promise<MenuItem[]> {
  const csvPath = path.join(process.cwd(), "Documents", "menu.csv");
  const raw = await fs.readFile(csvPath, "utf-8");
  const lines = raw.trim().split("\n");

  // Skip header row
  return lines.slice(1).map((line) => {
    const [name, category, description, price, thcMg, servingSize, prepTime, vegan] =
      parseCSVLine(line);
    return {
      name,
      category,
      description,
      price: parseFloat(price),
      thcMg: parseInt(thcMg, 10),
      servingSize,
      prepTime: parseInt(prepTime, 10),
      vegan: vegan.trim().toLowerCase() === "yes",
    };
  });
}

export async function getMenuBySection(): Promise<
  { section: DisplaySection; items: MenuItem[] }[]
> {
  const all = await getAllMenuItems();
  return DISPLAY_SECTIONS.map((section) => ({
    section,
    items: all.filter((item) => section.categories.includes(item.category)),
  }));
}

export async function getFeaturedItems(): Promise<MenuItem[]> {
  const all = await getAllMenuItems();
  const featuredNames = [
    "Velvet Haze Latte",
    "Aurora Horchata Brew",
    "Wanderer's Waffle",
    "Afterglow Truffle Fries",
    "Prism Almond Tart",
    "Ember & Dew Affogato",
  ];
  return featuredNames
    .map((name) => all.find((item) => item.name === name))
    .filter(Boolean) as MenuItem[];
}
