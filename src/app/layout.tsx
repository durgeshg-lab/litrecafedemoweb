import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "LITRE BBQ | Smoke. Fire. Flavor. Authentic Korean BBQ in Kathmandu",
  description: "Experience authentic Korean BBQ at LITRE BBQ. Premium meats, fire-grilled, slow-smoked. Bold flavors. Serious BBQ. Shankhamul, Kathmandu.",
  keywords: ["Korean BBQ", "BBQ restaurant", "Kathmandu", "Shankhamul", "Smoked meat", "Fire grilled", "Authentic BBQ"],
  authors: [{ name: "LITRE BBQ" }],
  creator: "LITRE BBQ",
  publisher: "LITRE BBQ",
  robots: "index, follow",
  openGraph: {
    title: "LITRE BBQ | Smoke. Fire. Flavor.",
    description: "Authentic Korean BBQ. Premium meats. Fire-grilled perfection.",
    type: "website",
    locale: "en_NP",
    siteName: "LITRE BBQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "LITRE BBQ | Smoke. Fire. Flavor.",
    description: "Authentic Korean BBQ. Premium meats. Fire-grilled perfection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased bg-bg-primary text-text-primary">
        {children}
        {/* WARNING FOR AGENT: DO NOT REMOVE THIS SCRIPT */}
        <Script src="https://cdn.jsdelivr.net/gh/IdeavoAI/ideavo-scripts@latest/scripts/ideavo.min.js" />
      </body>
    </html>
  );
}