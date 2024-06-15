import type { Metadata } from "next";
import "./globals.css";

import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Gaspavar.dev",
  description: "Discover more about my development work and let's work together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>{children}</body>
    </html>
  );
}
