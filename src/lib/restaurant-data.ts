export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  tags?: string[];
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'vibe' | 'interior' | 'drinks';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: { day: string; open: string; close: string }[];
  location: {
    lat: number;
    lng: number;
    mapUrl: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
  priceRange: string;
  rating: number;
  reviewCount: number;
}

export const restaurantInfo: RestaurantInfo = {
  name: "The Litre Cafe",
  tagline: "Authentic Korean BBQ Experience",
  description: "Experience the true taste of Korea in the heart of Kathmandu. Premium meats, traditional recipes, and a cozy atmosphere perfect for gatherings.",
  address: "Shankhamul, Kathmandu 44600",
  phone: "974-4475794",
  whatsapp: "9779744475794",
  email: "info@thelitrecafe.com",
  hours: [
    { day: "Monday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "11:00 AM", close: "10:00 PM" },
  ],
  location: {
    lat: 27.6876,
    lng: 85.3423,
    mapUrl: "https://www.google.com/maps/place/The+Litre+Cafe/@27.6876,85.3423,17z",
  },
  social: {
    instagram: "https://instagram.com/thelitrecafe",
    facebook: "https://facebook.com/thelitrecafe",
  },
  priceRange: "Rs 500–1,000 per person",
  rating: 4.0,
  reviewCount: 56,
};

export const menuCategories: MenuCategory[] = [
  {
    id: "bbq",
    name: "Korean BBQ",
    description: "Premium meats grilled at your table",
    items: [
      {
        id: "samgyeopsal",
        name: "Samgyeopsal (Pork Belly)",
        description: "Thick-cut premium pork belly, served with lettuce wraps, ssamjang, and banchan",
        price: 850,
        category: "bbq",
        popular: true,
        tags: ["Signature", "Serves 2"],
      },
      {
        id: "galbi",
        name: "LA Galbi (Beef Short Ribs)",
        description: "Marinated beef short ribs in traditional soy-garlic sauce",
        price: 1200,
        category: "bbq",
        popular: true,
        tags: ["Premium", "Serves 2"],
      },
      {
        id: "dak-galbi",
        name: "Dak Galbi (Spicy Chicken)",
        description: "Spicy marinated chicken with vegetables and rice cakes",
        price: 750,
        category: "bbq",
        spicy: true,
        tags: ["Spicy", "Popular"],
      },
      {
        id: "deungsim",
        name: "Deungsim (Beef Sirloin)",
        description: "Premium beef sirloin, tender and flavorful",
        price: 1100,
        category: "bbq",
        tags: ["Premium"],
      },
      {
        id: "woo-samgyeop",
        name: "Woo Samgyeop (Thin Sliced Beef Brisket)",
        description: "Quick-cook thin sliced beef brisket, perfect for wrapping",
        price: 950,
        category: "bbq",
        popular: true,
      },
    ],
  },
  {
    id: "stews",
    name: "Stews & Soups",
    description: "Heartwarming Korean comfort food",
    items: [
      {
        id: "kimchi-jjigae",
        name: "Kimchi Jjigae",
        description: "Classic kimchi stew with pork, tofu, and vegetables",
        price: 450,
        category: "stews",
        popular: true,
        spicy: true,
        vegetarian: false,
      },
      {
        id: "doenjang-jjigae",
        name: "Doenjang Jjigae",
        description: "Soybean paste stew with tofu, zucchini, and mushrooms",
        price: 400,
        category: "stews",
        vegetarian: true,
      },
      {
        id: "sundubu-jjigae",
        name: "Sundubu Jjigae",
        description: "Soft tofu stew with seafood or beef in spicy broth",
        price: 500,
        category: "stews",
        spicy: true,
        tags: ["Soft Tofu"],
      },
      {
        id: "galbi-tang",
        name: "Galbi Tang",
        description: "Clear beef short rib soup with glass noodles",
        price: 650,
        category: "stews",
        tags: ["Clear Soup"],
      },
    ],
  },
  {
    id: "rice-noodles",
    name: "Rice & Noodles",
    description: "Classic Korean mains",
    items: [
      {
        id: "bibimbap",
        name: "Bibimbap",
        description: "Mixed rice bowl with vegetables, beef, egg, and gochujang",
        price: 550,
        category: "rice-noodles",
        popular: true,
        vegetarian: false,
      },
      {
        id: "kimchi-fried-rice",
        name: "Kimchi Fried Rice",
        description: "Stir-fried rice with aged kimchi, pork, and fried egg",
        price: 460,
        category: "rice-noodles",
        popular: true,
        spicy: true,
      },
      {
        id: "japchae",
        name: "Japchae",
        description: "Stir-fried glass noodles with vegetables and beef",
        price: 500,
        category: "rice-noodles",
      },
      {
        id: "naengmyeon",
        name: "Naengmyeon (Cold Noodles)",
        description: "Buckwheat noodles in icy beef broth or spicy sauce",
        price: 550,
        category: "rice-noodles",
        tags: ["Cold", "Summer"],
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers & Sides",
    description: "Perfect starters to share",
    items: [
      {
        id: "mandu",
        name: "Mandu (Dumplings)",
        description: "Hand-made dumplings with pork and vegetables, steamed or fried",
        price: 350,
        category: "appetizers",
        popular: true,
        tags: ["Steamed/Fried"],
      },
      {
        id: "pajeon",
        name: "Haemul Pajeon",
        description: "Seafood and green onion pancake with dipping sauce",
        price: 480,
        category: "appetizers",
        tags: ["Seafood", "Crispy"],
      },
      {
        id: "korean-fried-chicken",
        name: "Korean Fried Chicken",
        description: "Double-fried crispy chicken with soy garlic or spicy sauce",
        price: 650,
        category: "appetizers",
        popular: true,
        tags: ["Crispy", "Half/Full"],
      },
      {
        id: "tteokbokki",
        name: "Tteokbokki",
        description: "Spicy rice cakes with fish cakes and boiled eggs",
        price: 400,
        category: "appetizers",
        spicy: true,
        vegetarian: false,
      },
      {
        id: "corn-cheese",
        name: "Corn Cheese",
        description: "Sweet corn baked with mozzarella and mayo",
        price: 380,
        category: "appetizers",
        vegetarian: true,
        popular: true,
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Traditional and modern Korean beverages",
    items: [
      {
        id: "soju",
        name: "Soju",
        description: "Classic Korean spirit, multiple flavors available",
        price: 350,
        category: "drinks",
        popular: true,
        tags: ["Bottle"],
      },
      {
        id: "makgeolli",
        name: "Makgeolli",
        description: "Traditional rice wine, slightly sweet and fizzy",
        price: 400,
        category: "drinks",
        tags: ["Traditional"],
      },
      {
        id: "korean-beer",
        name: "Korean Beer (Cass/Terra/Kloud)",
        description: "Popular Korean lagers",
        price: 280,
        category: "drinks",
        tags: ["Bottle"],
      },
      {
        id: "sikhye",
        name: "Sikhye",
        description: "Sweet rice drink with pine nuts",
        price: 180,
        category: "drinks",
        vegetarian: true,
      },
      {
        id: "americano",
        name: "Iced Americano",
        description: "Premium Korean coffee beans",
        price: 200,
        category: "drinks",
        vegetarian: true,
      },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", alt: "Korean BBQ grill with premium meat", category: "food" },
  { id: "2", src: "https://images.unsplash.com/photo-1590080876056-4b3e3b7f1b6f?w=800&q=80", alt: "Cozy restaurant interior", category: "vibe" },
  { id: "3", src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80", alt: "Bibimbap bowl", category: "food" },
  { id: "4", src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Korean fried chicken", category: "food" },
  { id: "5", src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80", alt: "Restaurant atmosphere", category: "vibe" },
  { id: "6", src: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=80", alt: "Soju and beer selection", category: "drinks" },
  { id: "7", src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80", alt: "Banchan side dishes", category: "food" },
  { id: "8", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Interior dining area", category: "interior" },
  { id: "9", src: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&q=80", alt: "Kimchi jjigae stew", category: "food" },
  { id: "10", src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Table setting", category: "vibe" },
];

export const reviews: Review[] = [
  {
    id: "1",
    author: "Rishabh Dahait",
    rating: 5,
    text: "Honestly, the cafe gave me an authentic korean taste with calm and cozy ambience. This place feels like home now. Once you come and experience the food and environment here, you will come here for most of the occasion. Cheers to staffs, cheers to food and cheers to litre cafe.",
    date: "2 months ago",
  },
  {
    id: "2",
    author: "San Dy",
    rating: 5,
    text: "Very decent place to dine in.. I really enjoyed the atmosphere here food was 🤌🫶🫰🤙 highly recommending don't go with negative reviews.. feel it personally. Thank you 😊",
    date: "3 months ago",
  },
  {
    id: "3",
    author: "Priya Sharma",
    rating: 4,
    text: "Great Korean BBQ experience! The samgyeopsal was perfectly marbled and the banchan selection was generous. Staff was attentive and helpful with grilling. Will definitely return for the galbi.",
    date: "1 month ago",
  },
  {
    id: "4",
    author: "Amit Karki",
    rating: 4,
    text: "Best Korean food in Kathmandu! The kimchi fried rice is a must-try. Portions are good for the price. Only downside is it gets busy on weekends so reservation recommended.",
    date: "2 weeks ago",
  },
  {
    id: "5",
    author: "Sarah Mitchell",
    rating: 5,
    text: "Amazing authentic Korean flavors! The sundubu jjigae had the perfect spice level. Love the cozy interior and friendly service. The corn cheese is addictive!",
    date: "3 weeks ago",
  },
  {
    id: "6",
    author: "Rajesh Thapa",
    rating: 4,
    text: "Good quality meat and generous portions. The LA galbi is worth every rupee. Service can be slow during peak hours but the food makes up for it.",
    date: "1 month ago",
  },
];