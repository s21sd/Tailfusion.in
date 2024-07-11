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
import { RxCross2 } from "react-icons/rx";

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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <div className="flex">
          {isOpen && !isLandingPage && <Sidebar />}
          {!isLandingPage && (
            !isOpen ? <GiHamburgerMenu
              onClick={toggleSidebar}
              className="cursor-pointer mt-4 ml-2"
              size={40}
              color="#fff2c1"
            />
              : <RxCross2
                onClick={toggleSidebar}
                className="cursor-pointer mt-4"
                size={40}
                color="#fff2c1"
              />

          )}
          <div className="flex-1 p-4">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
