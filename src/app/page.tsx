import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Litre Cafe - Authentic Korean BBQ in Kathmandu",
  description: "Experience authentic Korean BBQ at The Litre Cafe. Premium meats, traditional recipes, cozy atmosphere in Shankhamul, Kathmandu. View menu, gallery, and contact us.",
  keywords: ["Korean BBQ", "Korean restaurant", "Kathmandu", "Shankhamul", "Samgyeopsal", "Galbi", "Bibimbap", "Kimchi"],
  authors: [{ name: "The Litre Cafe" }],
  creator: "The Litre Cafe",
  publisher: "The Litre Cafe",
  robots: "index, follow",
  openGraph: {
    title: "The Litre Cafe - Authentic Korean BBQ",
    description: "Experience authentic Korean BBQ in Kathmandu. Premium meats, traditional recipes, cozy atmosphere.",
    type: "website",
    locale: "en_NP",
    siteName: "The Litre Cafe",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Litre Cafe - Authentic Korean BBQ",
    description: "Experience authentic Korean BBQ in Kathmandu.",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function HomePage() {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">
          <Hero />
          <Menu />
          <Gallery />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}