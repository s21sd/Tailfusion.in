"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'
import { TabsDemo } from '../../Codetabs/Tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const page = () => {
    const [value, setValue] = useState<number>(0);
    return (
        <ScrollArea className='text-white p-3 mt-4 h-screen'>
            <Card contentVal={value} />
            <TabsDemo />
        </ScrollArea>
    )
}

export default page