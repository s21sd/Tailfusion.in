"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'
import TabsDemo from '../../Codetabs/Tabs';

const page = () => {
    const [valueOfTheComponent, setValueOfTheComponent] = useState<number>(2); // Till Now I am passing the number 3 but I wil add It as 3
    return (
        <div className='text-white p-3 mt-4'>
            <Card contentVal={valueOfTheComponent} />
            <div className='flex flex-col gap-3'>
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={0} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={1} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={2} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={3} />

            </div>
        </div>
    )
}

export default page