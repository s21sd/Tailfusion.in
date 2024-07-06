"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { useState } from 'react'

const page = () => {
    const [value, setValue] = useState<number>(1);
    return (
        <div className='text-white p-3 mt-4'>
            <Card contentVal={value} />
        </div>
    )
}

export default page