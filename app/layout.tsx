import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/customlayouts/navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dessertify ",
  description: "Order your desired desserts online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
