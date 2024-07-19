"use client"
import { TypewriterEffectSmoothDemo } from '@/components/Blocks/Typeeffect';
import React, { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import finalPng from '../../assets/Final.png'
import laptopdemo from '../../assets/image1.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Landing = () => {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io"
    }
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className='rounded-full cursor-pointer text-white  border border-[#fff2c1] main_heading w-fit flex justify-center items-center mx-auto p-3'>
                <h1 className='sec_heading'>Introducing productive templates</h1>
            </div>

            <div className="flex flex-col text-center w-full mb-10 mt-5">
                <TypewriterEffectSmoothDemo />
                <p className="lg:w-[90%] text-xl sm:text-xm mx-auto leading-relaxed mb-1 main_heading text-[#fff2c1]">
                    Copy paste the most trending components and use them in your websites without having to worry about styling.
                </p>
            </div>
            <div className='grid gap-6'>
                <div onClick={() => router.push('components/docs')} className='bg-[#fff2c1] hover:bg-gray-50 rounded-md w-[250px] cursor-pointer font-semibold text-black flex justify-center items-center mx-auto p-4'>
                    <h1>Browse Components</h1>
                </div>
                <div onClick={handleClick} className='border rounded-md w-[250px] font-semibold cursor-pointer text-white border-[#fff2c1]  flex justify-center items-center mx-auto p-4 gap-4'>
                    <FaGithub size={30} />
                    <h1>GitHub</h1>
                </div>
            </div>

            <div className='flex justify-center items-center mt-20 bg-white p-10 rounded-xl'>
                <Image className='rounded-xl w-[80%]' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt='phoneImg' src={finalPng} />
            </div>
            <div className='mt-20 flex justify-center items-center '>
                <h1>Build by <span className='text-[#fff2c1] tracking-wide font-bold'>TailFusion</span>. The Source code is available on<span className='text-[#fff2c1] tracking-wide font-bold'> GitHub</span> </h1>
            </div>
        </div>
    );
};

export default Landing;
