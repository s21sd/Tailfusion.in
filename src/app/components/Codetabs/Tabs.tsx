import Designone from "@/app/Designs/CardsDesign/Designone"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineTabletMac } from "react-icons/md";
import { designCode } from "@/app/utils/Codes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";
import Codedesign from "@/app/Designs/CardsDesign/Codedesign";
import { SelectColor } from "./SelectColor";

export function TabsDemo() {
    return (
        <Tabs defaultValue="Preview" className="w-full">
            <div className="flex justify-between items-center mx-auto py-4 w-[95%]">
                <div className="flex justify-center items-center gap-4">
                    <TabsList className="grid w-[150px] grid-cols-2">
                        <TabsTrigger value="Preview">Preview</TabsTrigger>
                        <TabsTrigger value="Code">Code</TabsTrigger>
                    </TabsList>
                    <SelectColor />
                </div>
                <div className="border border-gray-300 p-2 rounded-md flex gap-4">
                    <IoPhonePortraitOutline size={20} color="white" />
                    <FaLaptopCode size={20} color="white" />
                    <MdOutlineTabletMac size={20} color="white" />
                </div>
            </div>
            <TabsContent value="Preview">
                <div className="h-fit m-3 border-gray-600 bg-[#151518] rounded-md shadow-md p-4">
                    <Designone />
                </div>
            </TabsContent>
            <TabsContent value="Code" className="w-full h-screen overflow-auto">
                <Codedesign value={0} />
            </TabsContent>
        </Tabs>
    )
}
