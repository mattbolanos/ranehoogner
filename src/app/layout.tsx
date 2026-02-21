import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranehoogner.vercel.app"),
  title: "Rane Hoogner — Baskets, Florals & Design",
  description:
    "Handcrafted baskets, floral arrangements, wreaths, and garden design by Rane Hoogner. Creating since 1982.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
