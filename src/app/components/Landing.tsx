"use client";
import React, { Suspense, lazy } from 'react';
import { TypewriterEffectSmoothDemo } from '@/components/Blocks/Typeeffect';
import finalPng from '../../assets/myfinal.png';
import Image from 'next/image';
import { MessageBox } from '@/components/Blocks/MessageBox';
import { AnimatedShinyTextDemo } from '@/components/Blocks/Shinytextdemo';
import { TextRevealDemo } from '@/components/Blocks/TextReveal';
import { BentoGridDemo } from '@/components/Blocks/BantoGrid';
import { BoxRevealDemo } from '@/components/Blocks/Reveatext';
import { TextGenerateEffectDemo } from '@/components/Blocks/TextGenerationDemo';
const GlobeDemoComp = lazy(() => delayForDemo(import('@/components/Blocks/GlobeDemo')));
async function delayForDemo(promise: any) {
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });
    return promise;
}
const Landing = () => {
    return (
        <div className="container px-5 py-12 sm:py-24 mx-auto relative">
            <AnimatedShinyTextDemo />

            <div className='fixed right-6 bottom-5 sm:right-5 z-10'>
                <MessageBox />
            </div>

            <div className="flex flex-col justify-center mx-auto text-center w-full mb-5 ">
                <TypewriterEffectSmoothDemo />
                <div className='flex justify-center items-center'>
                    <BoxRevealDemo />
                </div>

            </div>
            <div className='flex flex-col sm:flex-row  justify-between items-center mt-5 sm:mt-20 p-10 space-x-4'>
                <Image className='rounded-xl w-[100%]'
                    alt='phoneImg' src={finalPng} />

            </div>
            <div className='grid sm:flex mt-10'>
                <TextRevealDemo />
                <BentoGridDemo />
            </div>

            <div className='relative flex flex-col sm:flex-row justify-between items-center mt-5 sm:mt-20 p-10 space-x-4'>
                <div className='relative w-full sm:w-[50%]'>
                    <video
                        className='rounded-xl w-full h-full object-cover blur-sm'
                        loop
                        muted
                        autoPlay
                        src='/assests/videos/mac.mp4'
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-2xl p-4 bg-black bg-opacity-50'>
                        <span className="text-xl sm:text-3xl">Explore TailFusion UI Components</span>
                        <span className="text-xs mt-2 sm:text-xl">Enhance Your Projects with Versatile, Customizable Designs</span>

                    </div>
                </div>
                <div className='relative w-full mt-10 sm:mt-0 sm:w-[50%]'>
                    <video
                        className='rounded-xl w-full h-full object-cover blur-sm'
                        loop
                        muted
                        autoPlay
                        src='/assests/videos/phone.mp4'
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-2xl p-4 bg-black bg-opacity-50'>
                        <span className="text-xl sm:text-3xl">Transform Your UI with TailFusion</span>
                        <span className="text-xs mt-2 sm:text-xl">Seamlessly Integrate Elegant Components into Your Designs</span>

                    </div>
                </div>
            </div>

            <div className='grid justify-center sm:flex sm:justify-between items-center mt-10 sm:mt-0'>
                <TextGenerateEffectDemo />
                <Suspense fallback={<div></div>}>
                    <GlobeDemoComp />
                </Suspense>
            </div>
        </div>
    );
};

export default Landing;


