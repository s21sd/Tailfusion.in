"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "../ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { AudioWaveform, Blinds, Blocks, BookText, CircleDollarSign, FolderDot, Github, Images, ListEnd, LockKeyhole, MessageSquareCode, Navigation, ShoppingBag, SwatchBook, Table, Users, WalletCards } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import { FaChartArea } from "react-icons/fa";
import Image from "next/image";
import logo from '../../assets/blacklogo.png'
export function MySidebar({ children }: any) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const sidebarItems = [
        { label: 'Card', href: '/components/blocks/cards', icon: <WalletCards className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Hero', href: '/components/blocks/hero', icon: <Blinds className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Navbar', href: '/components/blocks/navbars', icon: <Navigation className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Content', href: '/components/blocks/contents', icon: <FolderDot className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Gallery', href: '/components/blocks/gallery', icon: <Images className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Testimonial', href: '/components/blocks/testimonials', icon: <SwatchBook className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Ecommerce', href: '/components/blocks/ecommerces', icon: <ShoppingBag className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Cta', href: '/components/blocks/cta', icon: <Table className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Statistic', href: '/components/blocks/statistics', icon: <FaChartArea className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Feature', href: '/components/blocks/features', icon: <MessageSquareCode className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Blog', href: '/components/blocks/blogs', icon: <Blocks className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Auth', href: '/components/blocks/auths', icon: <LockKeyhole className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Pricing', href: '/components/blocks/pricing', icon: <CircleDollarSign className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Footer', href: '/components/blocks/footers', icon: <ListEnd className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Step', href: '/components/blocks/steps', icon: <AudioWaveform className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
        { label: 'Team', href: '/components/blocks/teams', icon: <Users className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" /> },
    ];

    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row w-full flex-1 mx-auto overflow-hidden",
                "h-screen"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>

                <SidebarBody className="justify-between gap-5">
                    <div className="flex flex-col flex-1">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {sidebarItems.map((item, idx) => (
                                <SidebarLink key={idx} link={item} isActive={pathname === item.href} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "",
                                href: "#",
                                icon: "",
                            }}
                            isActive={false}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard>{children}</Dashboard>
        </div>
    );
}

const SidebarLink = ({ link, isActive }: any) => {
    return (
        <Link
            href={link.href}
            className={`flex items-center p-2 space-x-2 rounded-md transition-transform duration-300 ease-out ${isActive ? 'text-[#fff2c1] dark:text-[#9e4ceb] bg-[#333333] dark:bg-black' : 'text-neutral-700 dark:text-gray-600 '}`}
        >
            {link.icon}
            <ScrollArea className="h-full max-h-screen overflow-y-auto">
                <span className={`ml-2 text-md font-semibold tracking-wide ${isActive ? 'text-[#fff2c1] dark:text-[#9e4ceb]' : ''}`}>
                    {link.label}
                </span>
            </ScrollArea>
        </Link>
    );
};

export const Logo = () => {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io";
    };
    return (

        <Link
            href="#"
            className="font-normal flex flex-col items-center text-sm relative z-20"
        >
            <div className="h-12 w-12  rounded-full flex-shrink-0 flex items-center justify-center">
                <Image className="rounded-full" src={logo} width={40} height={40} alt="img" />
            </div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-semibold dark:text-[#9e4ceb] text-[#fff2c1] mt-2"
            >
                TailFusion
            </motion.span>
            <div className="w-full mt-4">
                <div className="font-medium tracking-wide">

                    <div className='text-[#fff2c1] ml-2 mt-4 dark:text-[#9e4ceb] flex flex-col gap-3  cursor-pointer'>
                        <div
                            onClick={() => router.push('/components/docs')}
                            className='flex gap-2 hover:text-[#fff2c1] dark:hover:text-[#9e4ceb] transition-colors duration-300'
                        >
                            <BookText className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" />
                            Docs
                        </div>
                        <div
                            onClick={handleClick}
                            className='flex gap-2 hover:text-[#fff2c1] dark:hover:text-[#9e4ceb] transition-colors duration-300'
                        >
                            <Github className="text-[#fff2c1] dark:text-[#9e4ceb] h-5 w-5 flex-shrink-0" />
                            GitHub
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 dark:bg-gray-700 h-[1px] w-full mt-4'></div>
            </div>
        </Link>

    );
};

export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex  items-center text-sm text-black relative z-20"
        >
            <div className=" rounded-full flex-shrink-0">
                <Image className="rounded-full" src={logo} width={40} height={40} alt="img" />
            </div>
        </Link>
    );
};

const Dashboard = ({ children }: any) => {
    return (
        <div className="flex-1 p-4">{children}</div>
    );
};
