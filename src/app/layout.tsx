import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/Context/Language/LanguageContext";
import AppWrapper from "@/Components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fonction pour récupérer les métadonnées selon la langue
const getMetadataByLang = (lang: string): Metadata => {
  const titles = {
    fr: "VTC Sud 13 - VTC Premium à Marseille",
    en: "VTC Sud 13 - Premium VTC in Marseille",
  };

  const descriptions = {
    fr: "Services de transfert haut de gamme, fiables et professionnels à Marseille et en région PACA.",
    en: "Premium, reliable and professional transfer services in Marseille and PACA region.",
  };

  // GitHub Pages base URL
  const baseUrl = "https://vtc-app.github.io";
  const imageUrl = `${baseUrl}/opengraph-image.jpg`;

  return {
    metadataBase: new URL(baseUrl),
    title: titles[lang as keyof typeof titles] || titles["fr"],
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions["fr"],
    keywords: [
      // French Keywords
      "VTC Marseille",
      "Chauffeur privé Marseille",
      "Transfert aéroport Marseille Provence",
      "Transport VIP Marseille",
      "VTC longue distance",
      "Chauffeur de maître",
      "Réservation VTC Marseille",
      "Navette aéroport Marseille",
      "Transport événementiel Provence",
      "VTC Gare Saint-Charles",
      "Excursion touristique Provence",
      "VTC Sud 13",
      "VTC App",
      "VTC App Marseille",
      "massilia drive",
      "massilia drive marseille",
      "massilia drive provence",

      // English Keywords
      "VTC Marseille",
      "Private driver Marseille",
      "Airport transfer Marseille Provence",
      "VIP transport Marseille",
      "Long distance VTC",
      "Chauffeur service Marseille",
      "Book VTC Marseille",
      "Marseille airport shuttle",
      "Event transport Provence",
      "VTC Saint-Charles Station",
      "Provence sightseeing tours",
      "Luxury travel Marseille",
      "VTC App",
      "VTC App Marseille",
      "massilia drive",
      "massilia drive marseille",
      "massilia drive provence",
    ],
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles["fr"],
      description:
        descriptions[lang as keyof typeof descriptions] || descriptions["fr"],
      url: baseUrl,
      siteName: "VTC Sud 13",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "VTC Sud 13 - VTC Premium",
          type: "image/jpeg",
        },
      ],
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang as keyof typeof titles] || titles["fr"],
      description:
        descriptions[lang as keyof typeof descriptions] || descriptions["fr"],
      images: [`${baseUrl}/opengraph-image.jpg`],
    },
  };
};

// Fonction dynamique côté serveur pour générer les métadonnées
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.locale || "fr";
  return getMetadataByLang(lang);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.locale || "fr";

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <AppWrapper>{children}</AppWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
