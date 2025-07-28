import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpoFast - Tests Online per Oposicions a Catalunya | Mossos, Bombers i Més",
  description: "Prepara les teves oposicions a Catalunya amb OpoFast. Tests actualitzats per Mossos d'Esquadra, Bombers i més cossos. Simulacres, seguiment del progrés i contingut en català al millor preu.",
  keywords: "oposicions catalunya, mossos esquadra, bombers catalunya, tests oposicions, preparació oposicions, simulacres oposicions, oposicions català",
  authors: [{ name: "OpoFast" }],
  creator: "OpoFast",
  publisher: "OpoFast",
  openGraph: {
    title: "OpoFast - Tests Online per Oposicions a Catalunya",
    description: "Prepara les teves oposicions a Catalunya amb tests actualitzats per Mossos, Bombers i més cossos.",
    url: "https://opofast.com",
    siteName: "OpoFast",
    locale: "ca_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpoFast - Tests Online per Oposicions a Catalunya",
    description: "Prepara les teves oposicions a Catalunya amb tests actualitzats per Mossos, Bombers i més cossos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon (7).png",
    shortcut: "/icon (7).png",
    apple: "/icon (7).png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon (7).png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
