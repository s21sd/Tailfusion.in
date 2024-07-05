import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "TailFusion",
  description: "A Html css liberary to make your site 10x beautiful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}><Navbar />
        {children}

      </body>
    </html>
  );
}
