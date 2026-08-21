export interface SignatureDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "bbq" | "burgers" | "sides" | "drinks";
  popular?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: { day: string; open: string; close: string }[];
  location: {
    lat: number;
    lng: number;
    mapUrl: string;
    embedUrl: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export const restaurantInfo: RestaurantInfo = {
  name: "LITRE BBQ",
  tagline: "SMOKE. FIRE. FLAVOR.",
  address: "Shankhamul, Kathmandu 44600",
  phone: "+977 974-4475794",
  email: "info@litrebbq.com",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.407551216052!2d85.3401!3d27.6876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a3b8b5c7d%3A0x123456789!2sThe%20Litre%20Cafe!5e0!3m2!1sen!2snp!4v1234567890",
  },
  social: {
    instagram: "https://instagram.com/litrebbq",
    facebook: "https://facebook.com/litrebbq",
  },
};

export const signatureDishes: SignatureDish[] = [
  {
    id: "samgyeopsal",
    name: "SAMGYEOPSAL",
    description: "Premium pork belly, thick-cut and grilled at your table with traditional banchan",
    price: 850,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    category: "BBQ",
  },
  {
    id: "galbi",
    name: "LA GALBI",
    description: "Marinated beef short ribs in traditional soy-garlic sauce, fire-grilled to perfection",
    price: 1200,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    category: "BBQ",
  },
  {
    id: "dak-galbi",
    name: "DAK GALBI",
    description: "Spicy marinated chicken with vegetables, rice cakes, and gochujang glaze",
    price: 750,
    image: "https://images.unsplash.com/photo-1590080876056-4b3e3b7f1b6f?w=800&q=80",
    category: "BBQ",
  },
  {
    id: "woo-samgyeop",
    name: "WOO SAMGYEOP",
    description: "Thin-sliced beef brisket, quick-grilled and wrapped with fresh lettuce & ssamjang",
    price: 950,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    category: "BBQ",
  },
];

export const menuItems: MenuItem[] = [
  { id: "1", name: "SAMGYEOPSAL", description: "Premium pork belly, thick-cut with traditional banchan", price: 850, category: "bbq", popular: true },
  { id: "2", name: "LA GALBI", description: "Marinated beef short ribs, fire-grilled to perfection", price: 1200, category: "bbq", popular: true },
  { id: "3", name: "DAK GALBI", description: "Spicy chicken with vegetables and rice cakes", price: 750, category: "bbq" },
  { id: "4", name: "WOO SAMGYEOP", description: "Thin-sliced beef brisket with lettuce wraps", price: 950, category: "bbq" },
  { id: "5", name: "DEUNGSIM", description: "Premium beef sirloin, tender and flavorful", price: 1100, category: "bbq" },
  { id: "6", name: "BBQ BURGER", description: "Smoked patty, BBQ sauce, pickles, smoked cheddar", price: 650, category: "burgers", popular: true },
  { id: "7", name: "SPICY CHICKEN BURGER", description: "Gochujang-marinated chicken, slaw, spicy mayo", price: 600, category: "burgers" },
  { id: "8", name: "DOUBLE SMOKE BURGER", description: "Double patty, double cheese, bacon, BBQ sauce", price: 850, category: "burgers" },
  { id: "9", name: "KIMCHI FRIES", description: "Crispy fries topped with kimchi, cheese, mayo", price: 380, category: "sides", popular: true },
  { id: "10", name: "CORN CHEESE", description: "Sweet corn baked with mozzarella and mayo", price: 350, category: "sides" },
  { id: "11", name: "TTEOKBOKKI", description: "Spicy rice cakes with fish cakes and eggs", price: 400, category: "sides" },
  { id: "12", name: "KOREAN FRIED CHICKEN", description: "Double-fried crispy chicken, soy garlic or spicy", price: 650, category: "sides", popular: true },
  { id: "13", name: "SOJU", description: "Classic Korean spirit, multiple flavors", price: 350, category: "drinks", popular: true },
  { id: "14", name: "MAKGEOLLI", description: "Traditional rice wine, slightly sweet and fizzy", price: 400, category: "drinks" },
  { id: "15", name: "KOREAN BEER", description: "Cass / Terra / Kloud", price: 280, category: "drinks" },
  { id: "16", name: "SIKHYE", description: "Sweet rice drink with pine nuts", price: 180, category: "drinks" },
  { id: "17", name: "ICED AMERICANO", description: "Premium Korean coffee beans", price: 200, category: "drinks" },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80", alt: "Premium pork belly on grill", width: 1200, height: 800 },
  { id: "2", src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80", alt: "Korean fried chicken", width: 800, height: 1200 },
  { id: "3", src: "https://images.unsplash.com/photo-1590080876056-4b3e3b7f1b6f?w=1200&q=80", alt: "Restaurant interior", width: 1200, height: 800 },
  { id: "4", src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200&q=80", alt: "Bibimbap bowl", width: 800, height: 1200 },
  { id: "5", src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&q=80", alt: "Table setting with banchan", width: 1200, height: 800 },
  { id: "6", src: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=1200&q=80", alt: "Soju and beer selection", width: 800, height: 1200 },
  { id: "7", src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80", alt: "Banchan side dishes", width: 1200, height: 800 },
  { id: "8", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", alt: "Chef grilling meat", width: 1200, height: 800 },
  { id: "9", src: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=1200&q=80", alt: "Kimchi jjigae stew", width: 800, height: 1200 },
];