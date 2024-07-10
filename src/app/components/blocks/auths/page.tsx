"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'
import TabsDemo from '../../Codetabs/Tabs';

const page = () => {
    const [valueOfTheComponent, setValueOfTheComponent] = useState<number>(3); 
    return (
        <div className='text-white p-3 mt-4'>
            <Card contentVal={valueOfTheComponent} />
            <div className='flex flex-col gap-3'>
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={0} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={1} />
              

            </div>
        </div>
    )
}

export default page