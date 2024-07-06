"use client"
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from 'next/navigation';
const Sidebar = () => {
    const router = useRouter();
    return (
        <div>
            <main className="flex">
                <div className="sm:w-80 min-h-screen w-14 pt-4 transition-all">
                    <div className="p-6 font-bold tracking-widest">
                        <h1 className='text-[#fff2c1] text-xl'>Getting Started</h1>
                        <div className='text-sm text-gray-400 flex flex-col gap-3 mt-4 ml-4 cursor-pointer'>
                            <h1 className='hover:text-[#fff2c1]'>Docs</h1>
                            <h1 className='hover:text-[#fff2c1]'>GitHub</h1>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-[1px] ml-2 w-[80%]'></div>
                    <h1 className='text-[#fff2c1] text-xl mt-10 p-6 font-bold tracking-widest'>Build Your Application</h1>
                    <ScrollArea className="h-screen w-48">
                        <div className="p-6">
                            <ul className=" mb-5 text-gray-400 ">
                                <li onClick={() => router.push('/components/blocks/cards')} className=" rounded-lg cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Cards</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Buttons</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Cards</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Footer</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                                <li className=" rounded-lg mt-2 cursor-pointer sm:justify-start flex items-center justify-center active">
                                    <span className="ml-3 hidden sm:block font-semibold tracking-wide transition-colors hover:text-[#fff2c1]">Navbar</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollArea>

                </div>
            </main>
        </div>
    )
}

export default Sidebar