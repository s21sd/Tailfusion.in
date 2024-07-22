"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>TailFusion</title>
        <meta
          name="description"
          content="A Html css library to make your site 10x beautiful"
        />
      </head>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={cn("absolute inset-0 -z-10", { "dark:bg-[url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80')]": true })}>
            <div className="hidden dark:block absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative z-10 w-full">
            <Navbar />
            <div className="flex">
              {isOpen && !isLandingPage && <Sidebar toggleSidebar={toggleSidebar} />}
              {!isLandingPage && (
                !isOpen && <GiHamburgerMenu
                  onClick={toggleSidebar}
                  className="cursor-pointer fixed ml-2 dark:text-[#9e4ceb] text-[#fff2c1]"
                  size={40}
                />
              )}
              <div className="flex-1 p-4">{children}</div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
