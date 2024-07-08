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

const Codedesign = ({ valueOfTheComponent, value }: { valueOfTheComponent: number, value: number }) => {
    const [copy, setCopy] = useState<boolean>(false);
    function handClick(e: any) {
        navigator.clipboard.writeText(e);
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
    }

    // Same Thing I will do here With the value of the props I will do it here switch case
    const RenderComponentsBasedOnTheValueOfTheComponent = () => {
        switch (valueOfTheComponent) {
            case 0:
                const renderTheCodeBlock = () => {
                    return <div className="relative p-4">
                        <div>
                            <Tabs defaultValue="css" className="w-full">
                                <div className="flex justify-between items-center mx-auto py-4 w-[95%]">
                                    <div className="flex justify-center items-center gap-4">
                                        <TabsList className="grid w-[250px] grid-cols-2">
                                            <TabsTrigger value="css">Html+Css</TabsTrigger>
                                            <TabsTrigger value="tailwind">Jsx+Tailwind</TabsTrigger>
                                        </TabsList>
                                    </div>
                                </div>
                                <TabsContent value="css">
                                    <button onClick={() => handClick(designCode[value][1].cardDesignOneCodeCss)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCode[value][1].cardDesignOneCodeCss}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                                <TabsContent value="tailwind" className="w-full h-screen overflow-auto">
                                    <button onClick={() => handClick(designCode[value][0].cardDesignOneCodeTailwind)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCode[value][0].cardDesignOneCodeTailwind}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>
                }
                return renderTheCodeBlock();
        }
    }
    return (
        <>
            {RenderComponentsBasedOnTheValueOfTheComponent()}
        </>
    )
}

export default Codedesign
