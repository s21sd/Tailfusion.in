"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'
import { TabsDemo } from '../../Codetabs/Tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const page = () => {
    const [valueOfTheComponent, setValueOfTheComponent] = useState<number>(2);

    return (
        <ScrollArea className='text-white h-full max-h-screen overflow-y-auto p-3 mt-4'>
            <Card contentVal={valueOfTheComponent} />
            <div className='flex flex-col gap-3'>
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={0} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={0} />
               
            </div>
        </ScrollArea>
    )
}

export default page