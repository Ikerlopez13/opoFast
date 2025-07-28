import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../../contexts/AuthContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpoFast - Preparació d'Oposicions a Catalunya",
  description: "La plataforma líder per preparar oposicions de Bombers i Mossos d'Esquadra a Catalunya. Tests actualitzats, simulacres realistes i seguiment del teu progrés.",
  keywords: [
    "oposicions catalunya",
    "bombers catalunya",
    "mossos d'esquadra",
    "tests oposicions",
    "preparació oposicions",
    "simulacres oposicions",
    "opofast"
  ],
  authors: [{ name: "OpoFast" }],
  creator: "OpoFast",
  publisher: "OpoFast",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ca_ES',
    url: 'https://opofast.com',
    siteName: 'OpoFast',
    title: "OpoFast - Preparació d'Oposicions a Catalunya",
    description: "La plataforma líder per preparar oposicions de Bombers i Mossos d'Esquadra a Catalunya. Tests actualitzats, simulacres realistes i seguiment del teu progrés.",
    images: [
      {
        url: '/icon (7).png',
        width: 1200,
        height: 630,
        alt: 'OpoFast - Preparació d\'Oposicions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "OpoFast - Preparació d'Oposicions a Catalunya",
    description: "La plataforma líder per preparar oposicions de Bombers i Mossos d'Esquadra a Catalunya.",
    images: ['/icon (7).png'],
    creator: '@opofast',
  },
  icons: {
    icon: '/icon (7).png',
    shortcut: '/icon (7).png',
    apple: '/icon (7).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" className={inter.variable}>
      <body className="font-sans">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
