export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number | string;
  category: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  serving?: string;
  featured?: boolean;
  variants?: { label: string; price: number }[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
};

export const categories: MenuCategory[] = [
  { id: "starters", name: "Starters", description: "Char-grilled beginnings" },
  { id: "shawarma", name: "Shawarma", description: "Wrapped & rolled" },
  { id: "platter", name: "Chicken Platter", description: "The house feast" },
  { id: "mandi", name: "Afghani Palav & Mandi", description: "The heart of the table" },
  { id: "roti", name: "Roti", description: "Fresh from the tandoor" },
  { id: "gravies", name: "Gravies", description: "Slow-cooked comfort" },
  { id: "desserts", name: "Desserts", description: "A sweet farewell" },
];

export const menu: MenuItem[] = [
  { id: "chicken-tikka-6", name: "Chicken Tikka (6 pcs)", category: "starters", price: 230, serving: "6 pcs", isSpicy: true },
  { id: "garlic-tikka-6", name: "Garlic Tikka (6 pcs)", category: "starters", price: 230, serving: "6 pcs" },
  { id: "malai-tikka-6", name: "Malai Tikka (6 pcs)", category: "starters", price: 230, serving: "6 pcs" },
  { id: "murg-tikka-1", name: "Murg Tikka (1 pc)", category: "starters", price: 150, serving: "1 pc" },
  { id: "tandoori-chicken-1", name: "Tandoori Chicken (1 pc)", category: "starters", price: 150, serving: "1 pc", isSpicy: true },
  { id: "seekh-kebab-2", name: "Seekh Kebab (2 pcs)", category: "starters", price: 200, serving: "2 pcs" },
  {
    id: "afghani-chicken",
    name: "Afghani Chicken",
    category: "starters",
    price: "300 / 550",
    serving: "Half / Full",
    variants: [
      { label: "Half", price: 300 },
      { label: "Full", price: 550 },
    ],
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    category: "starters",
    price: "300 / 550",
    serving: "Half / Full",
    variants: [
      { label: "Half", price: 300 },
      { label: "Full", price: 550 },
    ],
  },
  { id: "mutton-tikka-6", name: "Mutton Tikka (6 pcs)", category: "starters", price: 230, serving: "6 pcs" },
  { id: "mutton-seekh-kebab-2", name: "Mutton Seekh Kebab (2 pcs)", category: "starters", price: 200, serving: "2 pcs" },
  { id: "chop-1", name: "Chop (1 pc)", category: "starters", price: 150, serving: "1 pc" },
  { id: "spl-qureshi-kebab-1", name: "Spl. Qureshi Kebab (1 pc)", category: "starters", price: 200, serving: "1 pc" },

  { id: "shawarma-normal", name: "Normal Shawarma", category: "shawarma", price: 100 },
  { id: "shawarma-spl-afghani", name: "Spl. Afghani Chicken Shawarma", category: "shawarma", price: 120 },
  { id: "shawarma-classy-chicken", name: "Classy Chicken Shawarma", category: "shawarma", price: 150, featured: true },
  { id: "shawarma-doner-cheese", name: "Afghan Doner Cheese Shawarma", category: "shawarma", price: 120, featured: true },
  { id: "shawarma-classy-doner", name: "Classy Doner Shawarma", category: "shawarma", price: 150, featured: true },

  {
    id: "chicken-platter",
    name: "Chicken Platter",
    description: "Chicken Tikka / Irani Tikka / Garlic Tikka / Kalmi / Seekh Kebab. A feast for the table.",
    category: "platter",
    price: 999,
    serving: "Half ₹300 / Full ₹550",
    featured: true,
    variants: [
      { label: "Half", price: 300 },
      { label: "Full", price: 550 },
    ],
  },

  {
    id: "afghani-chicken-palav",
    name: "Afghani Chicken Palav",
    category: "mandi",
    price: "150 / 300 / 600 / 1000",
    description: "1 pc ₹150 · 2 pcs ₹300 · 4 pcs ₹600 · 6 pcs ₹1,000",
    featured: true,
    variants: [
      { label: "1 pc", price: 150 },
      { label: "2 pcs", price: 300 },
      { label: "4 pcs", price: 600 },
      { label: "6 pcs", price: 1000 },
    ],
  },
  {
    id: "afghani-mutton-palav",
    name: "Afghani Mutton Palav (Buff)",
    category: "mandi",
    price: "150 / 300 / 600 / 1000",
    description: "1 pc ₹150 · 2 pcs ₹300 · 4 pcs ₹600 · 6 pcs ₹1,000",
    featured: true,
    variants: [
      { label: "1 pc", price: 150 },
      { label: "2 pcs", price: 300 },
      { label: "4 pcs", price: 600 },
      { label: "6 pcs", price: 1000 },
    ],
  },
  {
    id: "mandi-chicken",
    name: "Mandi Chicken",
    category: "mandi",
    price: "750 / 1000",
    serving: "Half / Full",
    featured: true,
    variants: [
      { label: "Half", price: 750 },
      { label: "Full", price: 1000 },
    ],
  },
  {
    id: "mandi-mutton",
    name: "Mandi Mutton (Buff)",
    category: "mandi",
    price: "750 / 1000",
    serving: "Half / Full",
    featured: true,
    variants: [
      { label: "Half", price: 750 },
      { label: "Full", price: 1000 },
    ],
  },
  {
    id: "al-faham-mandi",
    name: "Al-Faham Mandi",
    category: "mandi",
    price: "750 / 1000",
    serving: "Half / Full",
    variants: [
      { label: "Half", price: 750 },
      { label: "Full", price: 1000 },
    ],
  },
  {
    id: "tandoori-chicken-mandi",
    name: "Tandoori Chicken Mandi",
    category: "mandi",
    price: "750 / 1000",
    serving: "Half / Full",
    variants: [
      { label: "Half", price: 750 },
      { label: "Full", price: 1000 },
    ],
  },
  {
    id: "kabsa-mutton-mandi",
    name: "Kabsa Mutton Mandi (Buff)",
    category: "mandi",
    price: "750 / 1000",
    serving: "Half / Full",
    variants: [
      { label: "Half", price: 750 },
      { label: "Full", price: 1000 },
    ],
  },
  {
    id: "platter-mandi",
    name: "Platter Mandi",
    category: "mandi",
    price: 1500,
    description: "The grand sharing platter.",
    featured: true,
  },

  { id: "rumali", name: "Rumali", category: "roti", price: 20 },
  { id: "tandoori", name: "Tandoori", category: "roti", price: 20 },
  { id: "butter-naan", name: "Butter Naan", category: "roti", price: 30 },
  { id: "garlic-butter-naan", name: "Garlic Butter Naan", category: "roti", price: 40 },
  { id: "plain-kulcha", name: "Plain Kulcha", category: "roti", price: 30 },
  { id: "masala-kulcha", name: "Masala Kulcha", category: "roti", price: 40 },
  { id: "paneer-kulcha", name: "Paneer Kulcha", category: "roti", price: 50, isVeg: true },

  { id: "aqda-chicken", name: "Aqda Chicken", category: "gravies", price: 250 },
  { id: "aqda-buff", name: "Aqda (Buff)", category: "gravies", price: 300 },
  { id: "kadhai-chicken-3", name: "Kadhai Chicken (3 pcs)", category: "gravies", price: 200, serving: "3 pcs", isSpicy: true },
  { id: "kadhai-mutton-3", name: "Kadhai Mutton (Buff) (3 pcs)", category: "gravies", price: 250, serving: "3 pcs", isSpicy: true },
  { id: "chicken-nihari-3", name: "Chicken Nihari (3 pcs)", category: "gravies", price: 250, serving: "3 pcs" },
  { id: "nalli-nihari-3", name: "Nalli Nihari (3 pcs)", category: "gravies", price: 250, serving: "3 pcs" },
  { id: "paya-2-roti", name: "Paya + 2 Roti", category: "gravies", price: 200 },
  { id: "reshmi-chicken", name: "Reshmi Chicken", category: "gravies", price: 150 },
  { id: "reshmi-mutton-3", name: "Reshmi Mutton (Buff) (3 pcs)", category: "gravies", price: 350, serving: "3 pcs" },

  { id: "apricot-delight", name: "Apricot Delight", category: "desserts", price: 170 },
  { id: "sheer-khurma", name: "Sheer Khurma", category: "desserts", price: 150 },
  { id: "kadu-kheer", name: "Kadu Ki Kheer", category: "desserts", price: 150 },
  { id: "mango-rabdi", name: "Mango Rabdi", category: "desserts", price: 150 },
];

export const featuredItems = menu.filter((item) => item.featured);