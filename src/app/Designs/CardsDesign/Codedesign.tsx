"use client"
import React, { useState } from 'react'
import { designCode } from "@/app/utils/Codes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Codedesign = ({ value }: any) => {
    const [copy, setCopy] = useState<boolean>(false);
    function handClick(e: any) {
        navigator.clipboard.writeText(e);
        setCopy(true);
    }

    return (
        <div className="relative p-4">
            <div>
                <Tabs defaultValue="Preview" className="w-full">
                    <div className="flex justify-between items-center mx-auto py-4 w-[95%]">

                        <div className='flex  justify-between items-center w-full'>
                            <TabsList className="grid w-[250px] grid-cols-2">
                                <TabsTrigger value="Preview">Html+Css</TabsTrigger>
                                <TabsTrigger value="Code">Jsx+Tailwind</TabsTrigger>
                            </TabsList>
                            <button onClick={() => handClick(designCode[value].cardDesignOneCode)} className="bg-gray-700 p-2 rounded-md text-white flex items-center">
                                {
                                    !copy ?
                                        <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                }
                            </button>

                        </div>
                    </div>
                    <TabsContent value="Preview">
                        <div className="h-fit m-3 border-gray-600 bg-[#151518] rounded-md shadow-md p-4">
                            <h1>Html css</h1>
                        </div>
                    </TabsContent>
                    <TabsContent value="Code" className="w-full h-screen overflow-auto">
                        <div className="w-full overflow-auto">
                            <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                            }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                {designCode[value].cardDesignOneCode}
                            </SyntaxHighlighter>
                        </div>
                    </TabsContent>
                </Tabs>

            </div>

        </div>
    )
}

export default Codedesign