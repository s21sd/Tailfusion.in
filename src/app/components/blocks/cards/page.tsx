"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'
import { TabsDemo } from '../../Codetabs/Tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const page = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <ScrollArea className='text-white h-screen p-3 mt-4'>
            <Card contentVal={value} />
            <div className='flex flex-col gap-3'>
                <TabsDemo codevalue={0} />
                <TabsDemo codevalue={1} />
                <TabsDemo codevalue={2} />
            </div>
        </ScrollArea>
    )
}

export default page