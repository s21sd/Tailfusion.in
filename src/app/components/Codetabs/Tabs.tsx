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


export function TabsDemo() {
    return (
        <Tabs defaultValue="Preview" className="w-full">
            <div className="flex justify-between items-center w-[95%] mx-auto">
                <div>
                    <TabsList className="grid w-[200px] grid-cols-2">
                        <TabsTrigger value="Preview">Preview</TabsTrigger>
                        <TabsTrigger value="Code">Code</TabsTrigger>
                    </TabsList>
                </div>
                <div className="border border-gray-300 w-fit p-2 rounded-md gap-4 flex ">
                    <IoPhonePortraitOutline size={20} color="white" />
                    <FaLaptopCode size={20} color="white" />
                    <MdOutlineTabletMac size={20} color="white" />
                </div>


            </div>
            <TabsContent value="Preview">
                <div className="h-fit m-3 border-gray-600 bg-[#151518] rounded-md shadow-md">
                    <Designone />
                </div>
            </TabsContent>
            <TabsContent value="Code">
                <div className="h-fit border border-gray-600">
                    <h1>Code page</h1>
                    <Designone />
                </div>
            </TabsContent>
        </Tabs>
    )
}
