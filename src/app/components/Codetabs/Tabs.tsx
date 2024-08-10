import React, { useEffect, useState } from 'react';
import Designone from "@/app/Designs/Designone";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineTabletMac } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area";
import Codedesign from "@/app/Designs/Codedesign";
import { SelectColor } from "./SelectColor";
import '../../utils/Devices.css';
import RenderDeviceComponents from '@/app/utils/DevicesComponentsCodeHelper/RenderDeviceComponents';
import { renderBtnColors, renderColor, renderColorsBorder } from '@/app/utils/RenderColor/RenderColor';
import { CiHeart } from 'react-icons/ci';

export function TabsDemo({ valueOfTheComponent, codevalue }: { valueOfTheComponent: number, codevalue: number }) {
    const [deviceView, setDeviceView] = useState<string | null>(null);
    const [selectColor, setSelectColor] = useState<string>('');
    useEffect(() => {
        const updateDeviceView = () => {
            if (window.innerWidth >= 768) {
                setDeviceView(null);
            } else if (window.innerWidth >= 680) {
                setDeviceView('tablet');
            } else {
                setDeviceView('phone');
            }
        };

        updateDeviceView(); // Set initial value
        window.addEventListener('resize', updateDeviceView); // Update on resize

        return () => window.removeEventListener('resize', updateDeviceView);
    }, []);

    const handleSelectValueChange = (value: string) => {
        setSelectColor(value);
    };
    const saveToFavourite = () => {

    }

    const colorClass = renderColor(selectColor);
    const selectBtnColorClass = renderBtnColors(colorClass);
    const selectColorBorder = renderColorsBorder(colorClass);

    const renderDeviceView = () => {
        switch (deviceView) {
            case 'phone':
                return (
                    <div className="flex justify-center">
                        <div className="marvel-device iphone8 silver mx-auto">
                            <div className="top-bar"></div>
                            <div className="sleep"></div>
                            <div className="volume"></div>
                            <div className="camera"></div>
                            <div className="sensor"></div>
                            <div className="speaker"></div>
                            <div className="screen">
                                <ScrollArea className="h-full max-h-screen overflow-y-auto bg-[#151518]">
                                    <RenderDeviceComponents codevalue={codevalue} valueOfTheComponent={valueOfTheComponent} selectBtnColorClass={selectBtnColorClass} selectColorBorder={selectColorBorder} colorClass={colorClass} />
                                </ScrollArea>
                            </div>
                            <div className="home"></div>
                            <div className="bottom-bar"></div>
                        </div>
                    </div>
                );
            case 'tablet':
                return (
                    <div className="flex justify-center">
                        <div className="marvel-device ipad silver mx-auto">
                            <div className="camera"></div>
                            <div className="screen">
                                <ScrollArea className="h-full max-h-screen overflow-y-auto bg-[#151518]">
                                    <RenderDeviceComponents codevalue={codevalue} valueOfTheComponent={valueOfTheComponent} selectBtnColorClass={selectBtnColorClass} selectColorBorder={selectColorBorder} colorClass={colorClass} />
                                </ScrollArea>
                            </div>
                            <div className="home"></div>
                        </div>
                    </div>
                );
            default:
                return <Designone valueOfTheComponent={valueOfTheComponent} codevalue={codevalue} selectColor={selectColor} />;
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
                <div className='flex justify-center items-center gap-4'>
                   
                    <div className="border hidden sm:flex md:flex lg:flex border-gray-300 dark:border-gray-700 p-2 rounded-md  gap-4 dark:text-[#9e4ceb] text-white">
                        <IoPhonePortraitOutline
                            className={`cursor-pointer ${deviceView === 'phone' ? 'text-white dark:text-[#9e4ceb]' : 'text-gray-600 dark:text-gray-400'}`}
                            size={25}
                            onClick={() => setDeviceView('phone')}
                        />
                        <MdOutlineTabletMac
                            className={`cursor-pointer ${deviceView === 'tablet' ? 'text-white dark:text-[#9e4ceb]' : 'text-gray-600 dark:text-gray-400'}`}
                            size={25}
                            onClick={() => setDeviceView('tablet')}
                        />
                        <FaLaptopCode
                            className={`cursor-pointer ${deviceView === null ? 'text-white dark:text-[#9e4ceb]' : 'text-gray-600 dark:text-gray-400'}`}
                            size={25}
                            onClick={() => setDeviceView(null)}
                        />
                    </div>
                </div>
            </div>
            <TabsContent value="Preview">
                <div className="h-fit m-3 border-gray-600 bg-[#151518] rounded-md shadow-md p-4 mx-auto">
                    {renderDeviceView()}
                </div>
            </TabsContent>
            <TabsContent value="Code" className="w-full h-screen overflow-auto">
                <Codedesign valueOfTheComponent={valueOfTheComponent} value={codevalue} />
            </TabsContent>
        </Tabs>
    );
}

export default TabsDemo;
