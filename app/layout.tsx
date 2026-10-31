import type { Metadata, Viewport } from "next";
import { Fraunces, Geist_Mono, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Graphe - Vivendo as Escrituras",
  description: "Graphe - Vivendo as Escrituras",
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png?v=2",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.ico?v=2",
        sizes: "any",
      },
    ],
    apple: "/apple-touch-icon.png?v=2",
  },
  appleWebApp: {
    title: "Graphe",
  },
};

export const viewport: Viewport = {
  themeColor: "#efe8da",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${fraunces.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-FSPTSQ46EV" />
    </html>
  );
}
