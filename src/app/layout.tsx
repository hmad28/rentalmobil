import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DriveMate | Rental Mobil & Motor Bandung",
  description:
    "DriveMate, partner perjalanan tepercaya untuk sewa mobil dan motor di Bandung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className={`${bodyFont.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
