import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={manrope.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
