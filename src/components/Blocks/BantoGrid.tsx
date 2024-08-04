import { cn } from "@/lib/utils";
import React from "react";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { AudioWaveform, Blinds, Blocks, CircleDollarSign, Copy, FolderDot, Navigation, WalletCards } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function BentoGridDemo() {
    const router = useRouter();
    const handleClick = (i: number) => {
        console.log(i);
        switch (i) {
            case 0:
                router.push('http://localhost:3000/components/blocks/cards')
            case 1:
                router.push('http://localhost:3000/components/blocks/steps')
            case 2:
                router.push('http://localhost:3000/components/blocks/hero')
            case 3:
                router.push('http://localhost:3000/components/blocks/navbars')
            case 4:
                router.push('http://localhost:3000/components/blocks/blogs')
            case 5:
                router.push('http://localhost:3000/components/blocks/pricing')
            case 6:
                router.push('http://localhost:3000/components/blocks/contents')


            default:
                break;
        }
    }
    return (
        <BentoGrid className="max-w-4xl mx-auto cursor-pointer">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                   
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    icon2={item.icon2}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}
// const Skeleton = () => (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#fff2c1] dark:from-neutral-900 dark:to-neutral-800 to-neutral-400">
//     </div>
// );
const items = [
    {
        title: "Card",
        description: "Versatile, responsive components for displaying content attractively.",
        header: <div role="status" className="flex items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
            <div className="w-full h-[150px] bg-gray-300 rounded-lg "></div>
            <span className="sr-only">Loading...</span>
        </div>,
        icon: <WalletCards className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Steps",
        description: "Displays process stages clearly to guide users through workflows.",
        header:
            <div role="status" className="max-w-sm animate-pulse mt-4">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>

        ,
        icon: <AudioWaveform className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Hero",
        description: "Prominent top section to capture attention with a message or image.",
        header:
            <div role="status" className="animate-pulse cursor-pointer mt-4">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                <div className="flex items-center justify-center mt-4">
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        ,
        icon: <Blinds className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Navbar",
        description: "Essential navigation component for easy website navigation.",
        header:
            <div className="flex gap-4 flex-col">
                <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>

                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>

                    <span className="sr-only">Loading...</span>
                </div>
            </div>


        ,
        icon: <Navigation className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Blog",
        description: "Displays blog posts and articles in an organized and engaging manner.",
        header: <div className="flex items-center justify-center">
            <div className="">
                <div className=" rounded shadow-lg animate-pulse">
                    <div className="w-[200px] h-[70px] bg-gray-300 rounded-lg"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mt-4"></div>
                    <div className="w-30 h-2 mt-6 mb-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
        </div>,
        icon: <Blocks className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Pricing",
        description: "Shows pricing plans clearly, helping users choose the best option.",
        header:
            <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div className="w-30 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                <span className="sr-only">Loading...</span>
            </div>
        ,
        icon: <CircleDollarSign className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Content",
        description: "Organized component for presenting information clearly and engagingly.",
        header:
            <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                <div className="flex items-center justify-center w-full h-40 bg-gray-300 rounded sm:w-96 ">
                    <svg className="w-10 h-5 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

        ,
        icon: <FolderDot className="h-4 w-4 text-neutral-500" />,
        icon2: <FaArrowRight className="h-4 w-4 text-neutral-500" />
    },
];

