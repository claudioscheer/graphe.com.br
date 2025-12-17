import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-FSPTSQ46EV" />
    </html>
  );
}
