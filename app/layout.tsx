// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Providers from "./providers";
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Trustmore - Private Wealth Management | Where Vision Meets Legacy",
  description:
    "We combine the power of financial technology with world-class private wealth expertise to create an ecosystem where money moves intelligently, wealth grows strategically, and luxury is experienced effortlessly.",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
