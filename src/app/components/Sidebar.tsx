"use client";
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';

const Sidebar = ({ toggleSidebar }: any) => {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io";
    };
    return (
        <div className='fixed top-0 shadow-2xl shadow-[#4b4739] dark:shadow-gray-400 rounded-md left-0 h-full bg-black dark:bg-white  z-50 m-h-screen w-80 pt-4'>
            <main className="flex flex-col p-4">
                <div className="">
                    <div className="p-6 font-bold tracking-widest">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[#fff2c1] text-xl dark:text-[#9e4ceb] '>Getting Started</h1>
                            <RxCross2
                                className="cursor-pointer dark:text-[#9e4ceb] text-[#fff2c1]"
                                onClick={toggleSidebar}
                                size={40}

                            />
                        </div>
                        <div className='text-sm text-gray-400 flex flex-col gap-3 mt-4 ml-4 cursor-pointer dark:text-gray-500'>
                            <div onClick={() => router.push('/components/docs')} className='hover:text-[#fff2c1] dark:hover:text-[#9e4ceb]   hover:ml-2 transition-transform duration-300 ease-out'>Docs</div>
                            <div onClick={handleClick} className='hover:text-[#fff2c1] dark:hover:text-[#9e4ceb] hover:ml-2 transition-transform duration-300 ease-out'>GitHub</div>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-[1px] ml-2 '></div>
                    <h1 className='text-[#fff2c1] text-xl mt-10 pl-6 font-bold tracking-widest dark:text-[#9e4ceb]'>Build Your Application</h1>
                    <ScrollArea className="h-screen mt-2 mb-6">
                        <div className="p-6 pt-4">
                            <div className="mb-5 text-gray-400 dark:text-gray-500 ">
                                {[
                                    { label: 'Card', route: '/components/blocks/cards' },
                                    { label: 'Hero', route: '/components/blocks/hero' },
                                    { label: 'Navbar', route: '/components/blocks/navbars' },
                                    { label: 'Content', route: '/components/blocks/contents' },
                                    { label: 'Gallery', route: '/components/blocks/gallery' },
                                    { label: 'Ecommerce', route: '/components/blocks/ecommerces' },
                                    { label: 'Blog', route: '/components/blocks/blogs' },
                                    { label: 'Auth', route: '/components/blocks/auths' },
                                    { label: 'Pricing', route: '/components/blocks/pricing' },
                                    { label: 'Footer', route: '/components/blocks/footers' },
                                    { label: 'Step', route: '/components/blocks/steps' },
                                    { label: 'Button', route: '/components/blocks/buttons' },
                                    { label: 'Team', route: '/components/blocks/teams' },
                                    { label: 'Testimonial', route: '/components/blocks/testimonials' },
                                    { label: 'Statistic', route: '/components/blocks/statistics' },
                                    { label: 'Feature', route: '/components/blocks/features' },
                                    { label: 'Cta', route: '/components/blocks/cta' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => router.push(item.route)}
                                        className="rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active"
                                    >
                                        <span className="ml-3 font-semibold tracking-wide hover:text-[#fff2c1] dark:hover:text-[#9e4ceb]  hover:ml-4 transition-transform duration-300 ease-out">
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </main>
        </div>
    );
};

export default Sidebar;
