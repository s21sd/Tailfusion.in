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

export function TabsDemo({ codevalue }: { codevalue: number }) {
    const [deviceView, setDeviceView] = useState<string | null>(null);
    const [selectColor, setSelectColor] = useState<string>('');
    const handleSelectValueChange = (value: string) => {
        setSelectColor(value);
    };
    const renderColor = () => {
        switch (selectColor) {
            case 'pink':
                return 'text-pink-500';
            case 'red':
                return 'text-red-500';
            case 'purple':
                return 'text-purple-500';
            case 'blue':
                return 'text-blue-500';
            case 'orange':
                return 'text-orange-500';
            default:
                return 'text-[#fff2c1]';
        }
    };
    const colorClass = renderColor();

    const renderDeviceComponents = () => {
        switch (codevalue) {
            case 0:
                return <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 ">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>
                                        Raclette Blueberry Nextious Level
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                    </p>
                                    <a className={`${colorClass} inline-flex items-center`}>
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 ">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>
                                        Ennui Snackwave Thundercats
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                    </p>
                                    <a className={`${colorClass} inline-flex items-center`}>
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>
                                        Selvage Poke Waistcoat Godard
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                    </p>
                                    <a className={`${colorClass} inline-flex items-center`}>
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            case 1:
                return <section className="text-gray-400 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 ">
                                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                        <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>The Catalyzer</h1>
                                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className={`${colorClass}  inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 ">
                                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                        <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>The 400 Blows</h1>
                                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div className="flex items-center flex-wrap">
                                            <a className={`${colorClass}  inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 ">
                                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                        <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>Shooting Stars</h1>
                                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className={`${colorClass}  inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            case 2:
                return (
                    <section className="text-gray-600 body-font">
                        <div className="container flex justify-between items-center flex-col gap-7 px-5 py-12">
                            <div className="items-center text-center">
                                <h1 className={`title-font  text-3xl mb-4 font-medium ${colorClass}`}>
                                    Before they sold out
                                    <div className="hidden lg:inline-block"> readymade gluten</div>
                                </h1>
                                <p className="mb-8 leading-relaxed">
                                    Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                </p>
                                <div className="flex justify-center">
                                    <button
                                        className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                            colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                    colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                        colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                            'bg-indigo-500 hover:bg-indigo-600'
                                            }`}
                                    >
                                        Button
                                    </button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                        Button
                                    </button>
                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                            </div>
                        </div>
                    </section>
                );
        }
    }


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
                                    {renderDeviceComponents()}
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
                                    {renderDeviceComponents()}
                                </ScrollArea>
                            </div>
                            <div className="home"></div>
                        </div>
                    </div>
                );
            default:
                return <Designone codevalue={codevalue} selectColor={selectColor} />;
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
                <Codedesign value={codevalue} />
            </TabsContent>
        </Tabs>
    );
}

export default TabsDemo;