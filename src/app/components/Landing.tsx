"use client";
import React, { Suspense, lazy } from 'react';
import { TypewriterEffectSmoothDemo } from '@/components/Blocks/Typeeffect';
import finalPng from '../../assets/phonef.png';
import macPng from '../../assets/macf.png';
// import macvideo from '../../../public/assests/videos/'
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
            <div className='flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-20 p-10 space-x-4'>
                <video
                    className='rounded-xl w-full sm:w-[50%]'
                    loop
                    muted
                    autoPlay
                    src='/assests/videos/mac.mp4'
                >
                    Your browser does not support the video tag.
                </video>
                <video
                    className='rounded-xl w-full sm:w-[50%]'
                    loop
                    muted
                    autoPlay
                    src='/assests/videos/phone.mp4'
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='grid sm:flex mt-10'>
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


{/* <Image className='rounded-xl w-[100%] sm:w-[80%]' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt='phoneImg' src={finalPng} />
                <Image className='rounded-xl w-[100%] sm:w-[80%]' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt='phoneImg' src={macPng} /> */}