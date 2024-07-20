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
        <div className='fixed top-0 shadow-2xl rounded-sm left-0 h-full bg-black z-50 min-h-screen w-80 pt-4'>
            <main className="flex flex-col p-4">
                <div className="">
                    <div className="p-6 font-bold tracking-widest">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[#fff2c1] text-xl'>Getting Started</h1>
                            <RxCross2
                                className="cursor-pointer "
                                onClick={toggleSidebar}
                                size={40}
                                color="#fff2c1"
                            />
                        </div>
                        <div className='text-sm text-gray-400 flex flex-col gap-3 mt-4 ml-4 cursor-pointer'>
                            <div onClick={() => router.push('/components/docs')} className='hover:text-[#fff2c1] hover:ml-2 transition-transform duration-300 ease-out'>Docs</div>
                            <div onClick={handleClick} className='hover:text-[#fff2c1] hover:ml-2 transition-transform duration-300 ease-out'>GitHub</div>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-[1px] ml-2 '></div>
                    <h1 className='text-[#fff2c1] text-xl mt-10 pl-6 font-bold tracking-widest'>Build Your Application</h1>
                    <ScrollArea className="h-screen mt-2 ">
                        <div className="p-6 pt-4">
                            <div className="mb-5 text-gray-400">
                                {[
                                    { label: 'Cards', route: '/components/blocks/cards' },
                                    { label: 'Navbar', route: '/components/blocks/navbars' },
                                    { label: 'Footers', route: '/components/blocks/footers' },
                                    { label: 'Buttons', route: '/components/blocks/buttons' },
                                    { label: 'Hero', route: '/components/blocks/hero' },
                                    { label: 'Contents', route: '/components/blocks/contents' },
                                    { label: 'Auth', route: '/components/blocks/auths' },
                                    { label: 'Gallery', route: '/components/blocks/gallery' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
                                    { label: 'LastComp', route: '/components/blocks/lastcomp' },
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
                                        <span className="ml-3 font-semibold tracking-wide hover:text-[#fff2c1] hover:ml-4 transition-transform duration-300 ease-out">
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
