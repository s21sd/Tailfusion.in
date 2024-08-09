import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '@/assets/dlogo.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className=" text-gray-200">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    {/* Logo and Info */}
                    <div className="flex-shrink-0 text-center md:text-left mb-6 md:mb-0">
                        <a href="#" className="flex items-center justify-center md:justify-start text-gray-100">
                            <Image
                                src={logo}
                                alt='logo'
                                className='object-contain mr-2'
                                width={50}
                                height={50}
                                style={{ imageRendering: 'crisp-edges' }}
                            />
                            <span className="ml-3 text-2xl font-bold text-[#fff2c1] dark:text-[#9e4ceb]">TailFusion</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-400">A product by TailFusion</p>
                        <p className="mt-2 text-sm text-gray-400">
                            Building in public at{' '}
                            <a href="https://www.linkedin.com/in/sunny-srivastava-a82996244/" className="text-[#fff2c1] dark:text-[#9e4ceb] " target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                    </div>

                    {/* Info Section */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h1 className="text-lg font-medium text-gray-400">
                            Built by <span className="text-[#fff2c1] dark:text-[#9e4ceb] font-bold">TailFusion</span>. The source code is available on{' '}
                            <a href="https://github.com/s21sd/Tailfusion.io" className="text-[#fff2c1] dark:text-[#9e4ceb] font-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </h1>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 mt-2">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <p className="text-sm text-gray-400 text-center sm:text-left">
                            © 2024 TailFusion —
                            <a href="https://github.com/s21sd/Tailfusion.io" className="text-[#fff2c1] dark:text-[#9e4ceb] " target="_blank" rel="noopener noreferrer"> @s21sd</a>
                        </p>
                        <div className="mt-4 sm:mt-0 flex justify-center sm:justify-start gap-4">
                            <a href="https://github.com/s21sd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fff2c1] hover:dark:text-[#9e4ceb] transform transition-transform hover:scale-110">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/sunny-srivastava-a82996244/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fff2c1] hover:dark:text-[#9e4ceb] transform transition-transform hover:scale-110">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/sunnysrivastava8063/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fff2c1] hover:dark:text-[#9e4ceb] transform transition-transform hover:scale-110">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
