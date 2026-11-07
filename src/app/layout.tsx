import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KHAYVAN · The Art of Fragrance | Thalassery",
  description:
    "A new fragrance experience is on its way. Crafted to inspire, designed to be remembered. By Thweeb, Thalassery · Kerala.",
  keywords: [
    "Khayvan",
    "Fragrance",
    "Perfume",
    "Thweeb",
    "Thalassery",
    "Kerala",
    "Luxury Perfume",
    "Art of Fragrance",
  ],
  openGraph: {
    title: "KHAYVAN · A New Chapter Begins",
    description:
      "Something extraordinary is coming. The art of fragrance by Thweeb, Thalassery · Kerala.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#070709] text-[#e8e6e3] min-h-screen selection:bg-[#d4af37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
