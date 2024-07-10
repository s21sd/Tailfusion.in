<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { designCode, designCodeForFooter } from "@/app/utils/Codes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
=======
"use client"
import React, { useState } from 'react'
import { designCode, designCodeForNav, designCodeForHeroSection, designCodeForAuth } from "@/app/utils/Codes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy } from "lucide-react";
import { TiTick } from "react-icons/ti";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
>>>>>>> 85bfc7d8e9ce6c544b337fb91dba558725567146

const Codedesign = ({
  valueOfTheComponent,
  value,
}: {
  valueOfTheComponent: number;
  value: number;
}) => {
  const [copy, setCopy] = useState<boolean>(false);
  function handClick(e: any) {
    navigator.clipboard.writeText(e);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  }

<<<<<<< HEAD
  // Same Thing I will do here With the value of the props I will do it here switch case
  const RenderComponentsBasedOnTheValueOfTheComponent = () => {
    switch (valueOfTheComponent) {
      case 0:
        const renderTheCodeBlock = () => {
          return (
            <div className="relative p-4">
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
                    <button
                      onClick={() =>
                        handClick(designCode[value][1].cardDesignOneCodeCss)
                      }
                      className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center"
                    >
                      {!copy ? (
                        <Copy size={26} color="white" />
                      ) : (
                        <TiTick size={26} color="white" />
                      )}
                    </button>
                    <div className="w-full overflow-auto">
                      <SyntaxHighlighter
                        wrapLines={true}
                        showLineNumbers={true}
                        lineProps={{
                          style: {
                            wordBreak: "break-all",
                            whiteSpace: "pre-wrap",
                          },
                        }}
                        language="html"
                        style={oneDark}
                        className="rounded-md scrollbar-thin"
                      >
                        {designCode[value][1].cardDesignOneCodeCss}
                      </SyntaxHighlighter>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="tailwind"
                    className="w-full h-screen overflow-auto"
                  >
                    <button
                      onClick={() =>
                        handClick(
                          designCode[value][0].cardDesignOneCodeTailwind
                        )
                      }
                      className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center"
                    >
                      {!copy ? (
                        <Copy size={26} color="white" />
                      ) : (
                        <TiTick size={26} color="white" />
                      )}
                    </button>
                    <div className="w-full overflow-auto">
                      <SyntaxHighlighter
                        wrapLines={true}
                        showLineNumbers={true}
                        lineProps={{
                          style: {
                            wordBreak: "break-all",
                            whiteSpace: "pre-wrap",
                          },
                        }}
                        language="html"
                        style={oneDark}
                        className="rounded-md scrollbar-thin"
                      >
                        {designCode[value][0].cardDesignOneCodeTailwind}
                      </SyntaxHighlighter>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          );
        };
        return renderTheCodeBlock();
      case 2:
        const renderFooterCode = () => {
          return (
            <div className="relative p-4">
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
                    <button
                      onClick={() =>
                        handClick(
                          designCodeForFooter[value][1].footerDesignOneCodeCss
                        )
                      }
                      className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center"
                    >
                      {!copy ? (
                        <Copy size={26} color="white" />
                      ) : (
                        <TiTick size={26} color="white" />
                      )}
                    </button>
                    <div className="w-full overflow-auto">
                      <SyntaxHighlighter
                        wrapLines={true}
                        showLineNumbers={true}
                        lineProps={{
                          style: {
                            wordBreak: "break-all",
                            whiteSpace: "pre-wrap",
                          },
                        }}
                        language="html"
                        style={oneDark}
                        className="rounded-md scrollbar-thin"
                      >
                        {designCodeForFooter[value][1].footerDesignOneCodeCss}
                      </SyntaxHighlighter>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="tailwind"
                    className="w-full h-screen overflow-auto"
                  >
                    <button
                      onClick={() =>
                        handClick(
                          designCodeForFooter[value][0]
                            .footerDesignOneCodeTailwind
                        )
                      }
                      className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center"
                    >
                      {!copy ? (
                        <Copy size={26} color="white" />
                      ) : (
                        <TiTick size={26} color="white" />
                      )}
                    </button>
                    <div className="w-full overflow-auto">
                      <SyntaxHighlighter
                        wrapLines={true}
                        showLineNumbers={true}
                        lineProps={{
                          style: {
                            wordBreak: "break-all",
                            whiteSpace: "pre-wrap",
                          },
                        }}
                        language="html"
                        style={oneDark}
                        className="rounded-md scrollbar-thin"
                      >
                        {designCode[value][0].cardDesignOneCodeTailwind}
                      </SyntaxHighlighter>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          );
        };
        return renderFooterCode();
=======
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
                                    <button onClick={() => handClick(designCode[value][1].Css)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCode[value][1].Css}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                                <TabsContent value="tailwind" className="w-full h-screen overflow-auto">
                                    <button onClick={() => handClick(designCode[value][0].Tailwind)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCode[value][0].Tailwind}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>
                }
                return renderTheCodeBlock();
            case 1:
                const renderTheCodeBlockForNavbar = () => {
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
                                    <button onClick={() => handClick(designCodeForNav[value][1].Css)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCodeForNav[value][1].Css}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                                <TabsContent value="tailwind" className="w-full h-screen overflow-auto">
                                    <button onClick={() => handClick(designCodeForNav[value][0].Tailwind)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCodeForNav[value][0].Tailwind}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>
                }
                return renderTheCodeBlockForNavbar();
            case 2:
                const renderComponentDesignForHeroSection = () => {
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
                                    <button onClick={() => handClick(designCodeForHeroSection[value][1].Css)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCodeForHeroSection[value][1].Css}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                                <TabsContent value="tailwind" className="w-full h-screen overflow-auto">
                                    <button onClick={() => handClick(designCodeForHeroSection[value][0].Tailwind)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCodeForHeroSection[value][0].Tailwind}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>
                }
                return renderComponentDesignForHeroSection();
            case 3:
                const renderComponentDesignForAuth = () => {
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
                                    <button onClick={() => handClick(designCodeForAuth[value][1].Css)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCodeForAuth[value][1].Css}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                                <TabsContent value="tailwind" className="w-full h-screen overflow-auto">
                                    <button onClick={() => handClick(designCodeForAuth[value][0].Tailwind)} className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md text-white flex items-center">
                                        {
                                            !copy ?
                                                <Copy size={26} color='white' /> : <TiTick size={26} color='white' />
                                        }
                                    </button>
                                    <div className="w-full overflow-auto">
                                        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} lineProps={{
                                            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                                        }} language="html" style={oneDark} className="rounded-md scrollbar-thin">
                                            {designCodeForAuth[value][0].Tailwind}
                                        </SyntaxHighlighter>
                                    </div>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>
                }
                return renderComponentDesignForAuth();
        }
>>>>>>> 85bfc7d8e9ce6c544b337fb91dba558725567146
    }
  };
  return <>{RenderComponentsBasedOnTheValueOfTheComponent()}</>;
};

export default Codedesign;
