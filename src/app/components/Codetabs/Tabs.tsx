import React, { useState } from 'react';
import Designone from "@/app/Designs/CardsDesign/Designone";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineTabletMac } from "react-icons/md";
import { designCode } from "@/app/utils/Codes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";
import Codedesign from "@/app/Designs/CardsDesign/Codedesign";
import { SelectColor } from "./SelectColor";
import '../../utils/Devices.css';

export function TabsDemo() {
    const [deviceView, setDeviceView] = useState<string | null>(null);
    const [selectColor, setSelectColor] = useState<string>('');
    const handleSelectValueChange = (value: string) => {
        setSelectColor(value);
    };
    console.log(selectColor)
    const renderDeviceView = () => {
        switch (deviceView) {
            case 'phone':
                return (
                    <div className="flex">
                        <div className="marvel-device iphone8 silver mx-auto ">
                            <div className="top-bar"></div>
                            <div className="sleep"></div>
                            <div className="volume"></div>
                            <div className="camera"></div>
                            <div className="sensor"></div>
                            <div className="speaker"></div>
                            <div className="screen">
                                <ScrollArea className="h-full max-h-screen overflow-y-auto bg-[#151518]">
                                    <div className="p-4 ">
                                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 ">
                                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 ">
                                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollArea>
                            </div>
                            <div className="home"></div>
                            <div className="bottom-bar"></div>
                        </div>
                    </div>
                );
            case 'tablet':
                return (
                    <div className='flex'>

                        <div className="marvel-device ipad silver mx-auto">
                            <div className="camera"></div>
                            <div className="screen">
                                <ScrollArea className="h-full max-h-screen overflow-y-auto bg-[#151518]">
                                    <div className="p-4 ">
                                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 ">
                                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 ">
                                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollArea>
                            </div>
                            <div className="home"></div>
                        </div>
                    </div>
                );
            default:
                return <Designone selectColor={selectColor} />;
        }
    };

    return (
        <Tabs defaultValue="Preview" className="w-full">
            <div className="flex justify-between items-center mx-auto py-4 w-[95%]">
                <div className="flex justify-center items-center gap-4">
                    <TabsList className="grid w-[150px] grid-cols-2">
                        <TabsTrigger value="Preview">Preview</TabsTrigger>
                        <TabsTrigger value="Code">Code</TabsTrigger>
                    </TabsList>
                    <SelectColor handleSelectValueChange={handleSelectValueChange} />
                </div>
                <div className="border border-gray-300 p-2 rounded-md flex gap-4">
                    <IoPhonePortraitOutline className="cursor-pointer" size={20} color="white" onClick={() => setDeviceView('phone')} />
                    <MdOutlineTabletMac className="cursor-pointer" size={20} color="white" onClick={() => setDeviceView('tablet')} />
                    <FaLaptopCode className="cursor-pointer" size={20} color="white" onClick={() => setDeviceView(null)} />
                </div>
            </div>
            <TabsContent value="Preview">
                <div className="h-fit m-3 border-gray-600 bg-[#151518] rounded-md shadow-md p-4 mx-auto">
                    {renderDeviceView()}
                </div>
            </TabsContent>
            <TabsContent value="Code" className="w-full h-screen overflow-auto">
                <Codedesign value={0} />
            </TabsContent>
        </Tabs>
    );
}

export default TabsDemo;
