# LITRE BBQ Website - Editing Guide

This guide explains how to customize the website content without touching code.

---

## File Structure

```
src/
├── lib/
│   └── restaurant-data.ts    ← ALL CONTENT LIVES HERE
├── components/
│   ├── Hero.tsx
│   ├── Signatures.tsx
│   ├── About.tsx
│   ├── Menu.tsx
│   ├── BBQExperience.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
└── app/
    ├── page.tsx              ← Main page (imports all sections)
    ├── layout.tsx            ← Root layout, fonts, metadata
    └── globals.css           ← Colors, typography, animations
```

---

## 1. Restaurant Info (Name, Address, Phone, Hours, Social)

**File:** `src/lib/restaurant-data.ts`

```typescript
export const restaurantInfo: RestaurantInfo = {
  name: "LITRE BBQ",
  tagline: "SMOKE. FIRE. FLAVOR.",
  address: "Shankhamul, Kathmandu 44600",
  phone: "+977 974-4475794",
  email: "info@litrebbq.com",
  hours: [
    { day: "Monday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "10:00 PM" },
    // ... etc
  ],
  location: {
    lat: 27.6876,
    lng: 85.3423,
    mapUrl: "https://www.google.com/maps/place/...",
    embedUrl: "https://www.google.com/maps/embed?pb=...",
  },
  social: {
    instagram: "https://instagram.com/litrebbq",
    facebook: "https://facebook.com/litrebbq",
  },
};
```

**Used in:** Navbar, Contact, Footer, SEO metadata

---

## 2. Hero Section

**File:** `src/components/Hero.tsx`

- **Background image:** Line 13 - change the `backgroundImage` URL
- **Headlines:** Lines 28-35 - edit the h1/h2 text
- **Subtext:** Line 38 - edit the paragraph
- **Buttons:** Lines 44-53 - href targets (`#menu`, `#contact`)

---

## 3. Signature Dishes (4 Featured Cards)

**File:** `src/lib/restaurant-data.ts` → `signatureDishes` array

```typescript
export const signatureDishes: SignatureDish[] = [
  {
    id: "samgyeopsal",           // unique ID
    name: "SAMGYEOPSAL",         // display name
    description: "Premium pork belly...", // short description
    price: 850,                  // number only (NPR added automatically)
    image: "https://images.unsplash.com/...", // photo URL
    category: "BBQ",             // label badge
  },
  // ... 3 more
];
```

**To replace photos:** Use high-quality images (1200x800px minimum). Upload to your image host and paste URLs here.

**Used in:** `src/components/Signatures.tsx`

---

## 4. Menu Items

**File:** `src/lib/restaurant-data.ts` → `menuItems` array

```typescript
export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "SAMGYEOPSAL",
    description: "Premium pork belly, thick-cut with traditional banchan",
    price: 850,
    category: "bbq",        // must match: "bbq" | "burgers" | "sides" | "drinks"
    popular: true,          // optional - shows ★ POPULAR badge
  },
  // ... more items
];
```

**Categories:** BBQ, BURGERS, SIDES, DRINKS (defined in `src/components/Menu.tsx`)

**Used in:** `src/components/Menu.tsx`

---

## 5. Gallery Images

**File:** `src/lib/restaurant-data.ts` → `galleryImages` array

```typescript
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/...", // full-size image URL
    alt: "Premium pork belly on grill",      // alt text + lightbox caption
    width: 1200,                             // original width
    height: 800,                             // original height
  },
  // ... more images
];
```

**Tips:**
- Use varied aspect ratios (landscape/portrait) for masonry effect
- Minimum 1200px on longest side
- Alt text appears in lightbox

**Used in:** `src/components/Gallery.tsx`

---

## 6. About Section

**File:** `src/components/About.tsx`

- **Left image:** Line 18 - change the `src` URL
- **Headline:** Line 38 - "BUILT AROUND FIRE"
- **Body copy:** Lines 42-50 - three paragraphs
- **Stats:** Lines 54-58 - three stat items (value + label)

---

## 7. BBQ Experience Section

**File:** `src/components/BBQExperience.tsx`

- **Background image:** Line 7 - change the `backgroundImage` URL
- **Headline:** Lines 22-24
- **Subtext:** Line 27
- **Button:** Line 31 - href target (`#contact`)

---

## 8. Contact Section

**File:** `src/components/Contact.tsx`

- **Map embed:** Line 48 - `restaurantInfo.location.embedUrl` (from data file)
- **Map link:** Line 52 - `restaurantInfo.location.mapUrl`
- **Phone/WhatsApp/Email:** All pulled from `restaurantInfo` in data file

---

## 9. Footer

**File:** `src/components/Footer.tsx`

- **Social links:** Lines 18-25 - uses `restaurantInfo.social`
- **Nav links:** Lines 30-38 - hardcoded, edit here
- **Copyright year:** Line 58 - auto-updates

---

## 10. SEO & Metadata

**File:** `src/app/layout.tsx` (lines 19-39)

```typescript
export const metadata: Metadata = {
  title: "LITRE BBQ | Smoke. Fire. Flavor. Authentic Korean BBQ in Kathmandu",
  description: "Experience authentic Korean BBQ at LITRE BBQ...",
  keywords: ["Korean BBQ", "BBQ restaurant", "Kathmandu", ...],
  openGraph: { ... },
  twitter: { ... },
};
```

---

## 11. Colors & Typography (Global)

**File:** `src/app/globals.css` (lines 6-30)

```css
@theme inline {
  --color-bg-primary: #171717;
  --color-bg-secondary: #222222;
  --color-bg-card: #292929;
  --color-bg-footer: #111111;
  
  --color-text-primary: #F5F5F4;
  --color-text-secondary: #A8A29E;
  
  --color-accent-primary: #D97706;  /* burnt orange */
  --color-accent-bright: #F59E0B;   /* amber hover */
  
  --color-border: #3F3F46;
}
```

**File:** `tailwind.config.ts` - same colors for Tailwind utilities

---

## 12. Adding New Sections

1. Create component in `src/components/NewSection.tsx`
2. Import and add to `src/app/page.tsx` in the main `<main>` area
3. Add any new data to `src/lib/restaurant-data.ts`

---

## Quick Reference: Where Things Appear

| Content | Data File | Component(s) |
|---------|-----------|--------------|
| Restaurant name/logo | `restaurantInfo.name` | Navbar, Footer, SEO |
| Tagline | `restaurantInfo.tagline` | Hero, Footer |
| Address | `restaurantInfo.address` | Contact, Footer |
| Phone | `restaurantInfo.phone` | Navbar, Contact, Footer, WhatsApp links |
| Email | `restaurantInfo.email` | Contact, Footer |
| Hours | `restaurantInfo.hours` | Contact, Footer |
| Map URLs | `restaurantInfo.location` | Contact, Footer |
| Social URLs | `restaurantInfo.social` | Footer |
| Signature dishes | `signatureDishes[]` | Signatures |
| Menu items | `menuItems[]` | Menu |
| Gallery images | `galleryImages[]` | Gallery |

---

## Image Hosting Recommendations

- **Unsplash** (free, high quality): `https://images.unsplash.com/...`
- **Cloudinary** (optimization, transformations)
- **Vercel Blob** / **AWS S3** / **Cloudflare R2** (self-hosted)
- **Local:** Place in `public/images/` and reference as `/images/photo.jpg`

---

## Development Commands

```bash
bun run dev       # Start dev server (port 4000)
bun run build     # Production build
bun run typecheck # TypeScript validation
```

After editing `restaurant-data.ts`, changes appear instantly in dev mode.