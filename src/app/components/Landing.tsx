"use client";
import React, { Suspense, lazy } from 'react';
import { TypewriterEffectSmoothDemo } from '@/components/Blocks/Typeeffect';
import finalPng from '../../assets/Final.png';
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

            <div className='fixed bottom-5 right-5 z-10'>
                <MessageBox />
            </div>

            <div className="flex flex-col justify-center mx-auto text-center w-full mb-5 mt-5">
                <TypewriterEffectSmoothDemo />
                <div className='flex justify-center items-center'>
                    <BoxRevealDemo />
                </div>

            </div>

            <div className='flex justify-center items-center mt-5 sm:mt-20 p-10 rounded-xl'>
                <Image className='rounded-xl w-[100%] sm:w-[80%]' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt='phoneImg' src={finalPng} />
            </div>
            <div className='grid sm:flex'>
                <TextRevealDemo />
                <BentoGridDemo />
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
