import type { Metadata } from "next";
import { Laila, Lobster_Two } from "next/font/google";
import "./globals.css";

const laila = Laila({
  variable: "--font-laila",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sewa Mobil Jogja | Sewa Mobil Tugu",
  description:
    "Sewa mobil dan motor di Yogyakarta dengan armada terawat, harga transparan, dan layanan praktis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${laila.variable} ${lobsterTwo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
