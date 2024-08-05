"use client"
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
    return (
        <ScrollArea className='text-white h-full max-h-screen overflow-y-auto p-6'>
            <div className='space-y-8'>
                {/* Header Section */}
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[#fff2c1] text-4xl font-bold dark:text-[#9e4ceb]'>
                        Get Started
                    </h1>
                    <p className=' px-6 text-3xl text-[#fff2c1] mt-4 font-bold dark:text-[#9e4ceb]'>
                        What is TailFusion UI
                    </p>
                    <p className='text-gray-400 text-xl px-6 dark:text-gray-700'>
                        TailFusion UI is a free, open-source library of stunning UI components based on Tailwind CSS, designed to help you create beautiful, responsive websites in minutes. Our goal with TailFusion UI is to provide customizable design elements that anyone can use to craft their next website. With a comprehensive range of building blocks at your disposal, you can effortlessly tailor your site's look and feel. Whether you're building an e-commerce platform or a personal blog, TailFusion UI simplifies the process, making it quick and easy to achieve a polished, professional design.
                        <br /><br />
                        With TailFusion UI, you can construct a new website in no time. What once took hours can now be accomplished with just a few clicks. Our library includes over 16+ ready-to-use components, enabling you to create virtually any type of page with ease. Imagine assembling a website like you would with LEGO bricks—simple, intuitive, and fun. TailFusion UI is designed with this in mind, offering a collection of versatile components that streamline your development process.
                        <br /><br />
                        Built with HTML and CSS, TailFusion UI leverages the power of Tailwind CSS—a utility-first framework that simplifies customization. If a component needs tweaking, you can easily adjust it using Tailwind CSS's straightforward utility classes.
                    </p>
                    <p className="text-gray-400 text-xl px-6 dark:text-gray-700">
                        All the components are just good ol' HTML and CSS, but without the need of writing complex CSS rules thanks to{' '}
                        <a href="https://tailwindcss.com" className="text-[#fff2c1] dark:text-[#9e4ceb] hover:underline" target="_blank" rel="noopener noreferrer">
                            Tailwind CSS
                        </a>. Tailwind CSS is a utility-first CSS framework, so if one of our components doesn’t fit your needs just right, you can modify them easily by following the{' '}
                        <a href="https://tailwindcss.com/docs" className="text-[#fff2c1] dark:text-[#9e4ceb] hover:underline" target="_blank" rel="noopener noreferrer">
                            Tailwind CSS documentation
                        </a>.
                    </p>
                </div>

                {/* Features Section */}
                <section className="py-12 ">
                    <div className="container mx-auto px-6">
                        <h2 className='text-[#fff2c1] text-3xl font-bold dark:text-[#9e4ceb] mb-6'>
                            Features
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 text-gray-400 text-xl dark:text-gray-700">
                            <li className="text-lg">
                                Individual components that can be re-used multiple times in your designs.
                            </li>
                            <li className="text-lg">
                                Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.
                            </li>
                            <li className="text-lg">
                                Full templates that showcase pieces of what you can achieve with the building blocks that are in this UI kit.
                            </li>
                            <li className="text-lg font-semibold text-[#fff2c1] dark:text-[#9e4ceb] mt-6">
                                Coming soon™
                            </li>
                            <li className="text-lg">
                                Templates for different purposes such as marketing or blogging.
                            </li>
                            <li className="text-lg">
                                Plenty of new components.
                            </li>
                            <li className="text-lg">
                                More customizable colors and shades from the Tailwind CSS 2.0 color palette.
                            </li>
                            <li className="text-lg">
                                Ability to view the components in tablet and mobile sizes without resizing the browser.
                            </li>
                            <li className="text-lg">
                                Something else that I haven't thought of? If you have a feature request or just want to chat, you can contact us on{' '}
                                <a href="https://www.linkedin.com/in/sunny-srivastava-a82996244/" className="text-[#fff2c1] dark:text-[#9e4ceb]" target="_blank" rel="noopener noreferrer">
                                    @tailfusion_ui
                                </a> or create a new issue on{' '}
                                <a href="https://github.com/s21sd/Tailfusion.io" className="text-[#fff2c1] dark:text-[#9e4ceb]" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>.
                            </li>
                        </ul>

                        <div className="mt-12 text-center">
                            <p className="text-lg text-gray-400 dark:text-gray-700">Buy me a coffee ☕</p>
                            <a href="https://github.com/s21sd/Tailfusion.io" className="text-[#fff2c1] dark:text-[#9e4ceb] " target="_blank" rel="noopener noreferrer">
                                Support Us
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </ScrollArea>
    )
}

export default Page
