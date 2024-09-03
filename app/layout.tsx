import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";

const inter = Nunito({
  weight: ["400","500","600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loves Yummy Cuisine",
  description: "Live Catering Indian Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
