import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaRetweet } from 'react-icons/fa'

const Footer = () => {
    return (
        <div><footer className="text-gray-600 body-font mb-3">
            <div className="container px-5 py-24 mx-auto  flex justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center justify-between ">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-[#fff2c1] text-xl">TailFusion</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Make Your Website look 10 X Modern.
                    </p>
                </div>
                <div className="flex-grow flex justify-end items-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-[#fff2c1] text-sm text-center sm:text-left">© 2024 TailFusion —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@xxxxxxx</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <div className="text-gray-500 flex justify-between items-center gap-2">
                            <FaGithub className='hover:text-[#fff2c1] cursor-pointer' size={23} />
                            <FaLinkedin className='hover:text-[#fff2c1] cursor-pointer' size={23} />
                            <FaInstagram className='hover:text-[#fff2c1] cursor-pointer' size={23} />
                        </div>

                    </span>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer