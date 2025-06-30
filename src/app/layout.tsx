import type { Metadata } from "next";

import "./globals.css";
import { lato } from "./font";

export const metadata: Metadata = {
  title: "clothingSite",
  description: "A clothing store website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
