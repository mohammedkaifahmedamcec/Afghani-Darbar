import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = "https://afghandarbar.com"; // TODO: replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Afghan Darbar | Authentic Afghani Mandi, Kebabs & Shawarma",
    template: "%s | Afghan Darbar",
  },
  description:
    "Experience the feast of authentic Afghani Mandi, char-grilled Kebabs, and Doner Shawarma. Made for sharing. Made for family.",
  keywords: [
    "Afghani Mandi",
    "Afghan restaurant",
    "Mandi restaurant",
    "Kebabs",
    "Shawarma",
    "Doner Shawarma",
    "Family restaurant",
    "Afghan Darbar",
  ],
  openGraph: {
    title: "Afghan Darbar | Authentic Afghani Mandi & Kebabs",
    description:
      "The feast is here. Authentic Afghani Mandi, Kebabs & Shawarma.",
    url: baseUrl,
    siteName: "Afghan Darbar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afghan Darbar | Authentic Afghani Mandi & Kebabs",
    description:
      "The feast is here. Authentic Afghani Mandi, Kebabs & Shawarma.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Afghan Darbar",
  description:
    "Authentic Afghani Mandi, Kebabs, and Shawarma. A premium family dining destination.",
  servesCuisine: ["Afghan", "Middle Eastern", "Mandi"],
  priceRange: "₹₹",
  url: baseUrl,
  telephone: "+91XXXXXXXXXX", // TODO: replace with real phone
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address", // TODO
    addressLocality: "Your City", // TODO
    addressRegion: "Your State", // TODO
    postalCode: "XXXXXX", // TODO
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="bg-[#1F1611] text-[#FDFBF7] antialiased">
        {children}
      </body>
    </html>
  );
}
