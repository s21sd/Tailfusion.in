"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'
import { TabsDemo } from '../../Codetabs/Tabs';

const page = () => {
    const [value, setValue] = useState<number>(0);
    return (
        <div className='text-white p-3 mt-4'>
            <Card contentVal={value} />
            <TabsDemo />
        </div>
    )
}

export default page