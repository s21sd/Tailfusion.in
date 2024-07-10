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
import { ScrollArea } from "@/components/ui/scroll-area";
import Codedesign from "@/app/Designs/CardsDesign/Codedesign";
import { SelectColor } from "./SelectColor";
import '../../utils/Devices.css';
import RenderDeviceComponents from '@/app/utils/DevicesComponentsCodeHelper/RenderDeviceComponents';
import { renderColor } from '@/app/utils/RenderColor/RenderColor';

export function TabsDemo({ valueOfTheComponent, codevalue }: { valueOfTheComponent: number, codevalue: number }) {
    const [deviceView, setDeviceView] = useState<string | null>(null);
    const [selectColor, setSelectColor] = useState<string>('');
    const handleSelectValueChange = (value: string) => {
        setSelectColor(value);
    };

    const colorClass = renderColor(selectColor);

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
                                    <RenderDeviceComponents codevalue={codevalue} valueOfTheComponent={valueOfTheComponent} colorClass={colorClass} />
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
                                    <RenderDeviceComponents codevalue={codevalue} valueOfTheComponent={valueOfTheComponent} colorClass={colorClass} />
                                </ScrollArea>
                            </div>
                            <div className="home"></div>
                        </div>
                    </div>
                );
            default: // Everthing I will render with codition of ValueOf The Component
                return <Designone valueOfTheComponent={valueOfTheComponent} codevalue={codevalue} selectColor={selectColor} />; // Here also I want to conditionally check the number of the component
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
                <Codedesign valueOfTheComponent={valueOfTheComponent} value={codevalue} />
            </TabsContent>
        </Tabs>
    );
}

export default TabsDemo;