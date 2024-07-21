import { renderColor } from '@/app/utils/RenderColor/RenderColor';
import React from 'react';
const Designone = ({ valueOfTheComponent, codevalue, selectColor }: { valueOfTheComponent: number, codevalue: number, selectColor: string }) => {
    const colorClass = renderColor(selectColor);
    // Same thing I will do here will the valueOfTheComponent prop I will Add a swich case Of this
    const RenderComponentsBasedOnTheValueOfTheComponent = () => {
        switch (valueOfTheComponent) {
            // For the Cards
            case 0:
                const renderComponentDesignForCard = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-12 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">CATEGORY</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>
                                                    Raclette Blueberry Nextious Level
                                                </h1>
                                                <p className="leading-relaxed mb-3">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <a className={`${colorClass} inline-flex items-center`}>
                                                    Learn More
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                        1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                        6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">CATEGORY</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>
                                                    Ennui Snackwave Thundercats
                                                </h1>
                                                <p className="leading-relaxed mb-3">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <a className={`${colorClass} inline-flex items-center`}>
                                                    Learn More
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                        1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                        6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">CATEGORY</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>
                                                    Selvage Poke Waistcoat Godard
                                                </h1>
                                                <p className="leading-relaxed mb-3">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <a className={`${colorClass} inline-flex items-center`}>
                                                    Learn More
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                        1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                        6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-400 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>The Catalyzer</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>1.2K
                                                        </span>
                                                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>6
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>The 400 Blows</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap">
                                                        <a className={`${colorClass} text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>1.2K
                                                        </span>
                                                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>6
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>Shooting Stars</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>1.2K
                                                        </span>
                                                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>6
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return (
                                <section className="text-gray-600 body-font">
                                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                            <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}>
                                                Before they sold out
                                                <div className="hidden lg:inline-block"> readymade gluten</div>
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button
                                                    className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                        'bg-indigo-500 hover:bg-indigo-600'
                                                        }`}
                                                >
                                                    Button
                                                </button>
                                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                    Button
                                                </button>
                                            </div>
                                        </div>
                                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                        </div>
                                    </div>
                                </section>
                            );
                        case 3:
                            return (
                                <section className="text-gray-600 body-font">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                                            <div className="sm:w-1/2 mb-10 px-4">
                                                <div className="rounded-lg h-64 overflow-hidden">
                                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                                                </div>
                                                <h2 className={`${colorClass} title-font text-2xl font-medium mt-6 mb-3`}>Buy YouTube Videos</h2>
                                                <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                                                <button className={`flex ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded`}>Button</button>
                                            </div>
                                            <div className="sm:w-1/2 mb-10 px-4">
                                                <div className="rounded-lg h-64 overflow-hidden">
                                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                                                </div>
                                                <h2 className={`${colorClass} title-font text-2xl font-medium mt-6 mb-3`}>The Catalyzer</h2>
                                                <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                                                <button className={`flex ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded`}>Button</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                    }
                }
                return renderComponentDesignForCard();
            // For Navbar
            case 1:
                const renderComponentDesignForNavbar = () => {
                    switch (codevalue) {
                        case 0:
                            return <header className="text-white body-font">
                                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                                    <a className={`flex title-font font-medium items-center ${colorClass} mb-4 md:mb-0`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                        </svg>
                                        <span className="ml-3 text-xl">TailFusion</span>
                                    </a>
                                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                                        <a className={`mr-5 hover:${colorClass}`}>First Link</a>
                                        <a className={`mr-5 hover:${colorClass}`}>Second Link</a>
                                        <a className={`mr-5 hover:${colorClass}`}>Third Link</a>
                                        <a className={`mr-5 hover:${colorClass}`}>Fourth Link</a>
                                    </nav>
                                    <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                        'bg-indigo-500 hover:bg-indigo-600'
                                        } `}>Button
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </header>
                        case 1: return <header className="text-white body-font">
                            <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                                <div className='flex justify-center items-center gap-4'>
                                    <div className={`flex title-font font-medium items-center ${colorClass} mb-4 md:mb-0`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                        </svg>
                                        <span className="ml-3 text-xl">TailFusion</span>

                                    </div>
                                    <div className='flex justify-center items-center gap-3 text-gray-500'>
                                        <h1>Home</h1>
                                        <h1>Components</h1>
                                    </div>
                                </div>
                                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                                    <a className={`mr-5 hover:${colorClass}`}>Login </a>
                                    <a className={`mr-5 hover:${colorClass}`}>Register</a>
                                </nav>
                                <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                    'bg-indigo-500 hover:bg-indigo-600'
                                    } `}>Button
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </header>
                        case 2:
                            return <header className="text-white body-font">
                                <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                                    <a className={`flex title-font font-medium items-center ${colorClass} mb-4 md:mb-0`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                        </svg>
                                        <span className="ml-3 text-xl">TailFusion</span>
                                    </a>
                                    <nav className=" flex flex-wrap items-center text-base justify-center">
                                        <a className={`mr-5 hover:${colorClass}`}>Home</a>
                                        <a className={`mr-5 hover:${colorClass}`}>Component</a>
                                        <a className={`mr-5 hover:${colorClass}`}>Github</a>
                                    </nav>
                                    <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                        'bg-indigo-500 hover:bg-indigo-600'
                                        } `}>Button
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </header>
                        case 3:
                            return <header className="text-white body-font">
                                <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                                    <a className={`flex title-font font-medium items-center ${colorClass} mb-4 md:mb-0`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                        </svg>
                                        <span className="ml-3 text-xl">TailFusion</span>
                                    </a>
                                    <div className='flex justify-between items-center gap-4'>
                                        <button className={`inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 border border-1`}>Feedback
                                        </button>
                                        <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                            colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                    colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                        colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                            'bg-indigo-500 hover:bg-indigo-600'
                                            } `}>Learn

                                        </button>
                                    </div>

                                </div>
                            </header>


                    }
                }
                return renderComponentDesignForNavbar();
            // For Hero Section
            case 2:
                const renderComponentDesignForHeroSection = () => {
                    switch (codevalue) {
                        case 0:
                            return (
                                <section className="text-gray-600 body-font">
                                    <div className="container mx-auto flex px-5 py-24 md:flex-row items-center">
                                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                            <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}>
                                                Before they sold out
                                                <div className="hidden lg:inline-block"> readymade gluten</div>
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button
                                                    className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                        'bg-indigo-500 hover:bg-indigo-600'
                                                        }`}
                                                >
                                                    Button
                                                </button>
                                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                    Button
                                                </button>
                                            </div>
                                        </div>
                                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                        </div>
                                    </div>
                                </section>
                            );
                        case 1: return (
                            <section className="text-gray-600 body-font">
                                <div className="container mx-auto flex px-5 py-24 md:flex-row items-center">
                                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                    </div>
                                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:item-center md:text-center mb-16 md:mb-0 items-center text-center">
                                        <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}>
                                            Before they sold out
                                            <div className="hidden lg:inline-block"> readymade gluten</div>
                                        </h1>
                                        <p className="mb-8 leading-relaxed">
                                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                        </p>
                                        <div className="flex justify-center">
                                            <button
                                                className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    }`}
                                            >
                                                Button
                                            </button>
                                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                Button
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        );
                        case 2: return (
                            <section className="text-gray-600 body-font m-auto ">
                                <div className="container mx-auto grid justify-center px-5 py-24 md:flex-row items-center">
                                    <div className="m-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                    </div>
                                    <div className="m-auto lg:flex-grow mt-8 md:w-1/2 flex flex-col md:item-center md:text-center mb-16 md:mb-0 items-center text-center">
                                        <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}>
                                            Before they sold out
                                            <div className="hidden lg:inline-block"> readymade gluten</div>
                                        </h1>
                                        <p className="mb-8 leading-relaxed">
                                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                        </p>
                                        <div className="flex justify-center">
                                            <button
                                                className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    }`}
                                            >
                                                Button
                                            </button>
                                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                Button
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        );
                        case 3: return (
                            <section className="text-gray-600 body-font">
                                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                    </div>
                                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                        <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}>Knausgaard typewriter readymade marfa</h1>
                                        <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                                        <div className="flex w-full md:justify-start justify-center items-end">
                                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">

                                                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <button className={`inline-flex text-white ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                    colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                        colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                            colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                'bg-indigo-500 hover:bg-indigo-600'
                                                }  border-0 py-2 px-6 focus:outline-none  rounded text-lg`}>Button</button>
                                        </div>
                                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
                                        <div className="flex lg:flex-row md:flex-col">
                                            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                                </svg>
                                                <span className="ml-4 flex items-start flex-col leading-none">
                                                    <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                                    <span className="title-font font-medium">Google Play</span>
                                                </span>
                                            </button>
                                            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                                </svg>
                                                <span className="ml-4 flex items-start flex-col leading-none">
                                                    <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                                    <span className="title-font font-medium">App Store</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )

                    }
                }
                return renderComponentDesignForHeroSection();
            // For the Auth Page
            case 3:
                const renderComponentDesignForAuth = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 flex justify-between items-center body-font">
                                <div className="w-[50%]">
                                    <img className="w-full rounded-md h-[470px] object-cover object-center" src="https://dummyimage.com/520x400" alt="blog" />
                                </div>
                                <div className="container w-[50%] px-5 py-24 mx-auto flex">
                                    <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
                                        <h2 className={`${colorClass} text-lg mb-1 font-medium title-font`}>Feedback</h2>
                                        <p className="leading-relaxed mb-5 text-gray-600">Let us know how we can improve!</p>
                                        <div className=" mb-4">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Company Email</label>
                                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">How Can We Help You?</label>
                                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                        <button className={`${colorClass === 'text-red-500' ? 'bg-red-500' :
                                            colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                    colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                        colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                            'bg-indigo-500 hover:bg-indigo-600'
                                            } bg-indigo-500 border-0 py-2 px-6 focus:outline-none text-white hover:bg-indigo-600 rounded text-lg`}>Submit</button>
                                        <p className="text-xs text-end text-gray-500 mt-3">We value your feedback!</p>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <div className="w-80 mx-auto h-128 bg-[#c0bcbc] rounded-lg p-8">
                                <p className={`${colorClass} text-black text-center font-sans text-2xl font-extrabold my-2 mb-8`}>Welcome back</p>
                                <form className="flex flex-col gap-4 mb-4 text-black">
                                    <input
                                        type="email"
                                        className="rounded-full border border-gray-300 px-4 py-3 outline-none"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="password"
                                        className="rounded-full border border-gray-300 px-4 py-3 outline-none"
                                        placeholder="Password"
                                    />
                                    <p className="text-right text-sm text-gray-700 underline cursor-pointer">Forgot Password?</p>
                                    <button className={`rounded-full ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                        'bg-indigo-500 hover:bg-indigo-600'
                                        } text-white py-3 shadow-md `}>Log in</button>
                                </form>
                                <p className="text-center text-xs text-gray-700">
                                    Don't have an account?
                                    <span className="text-indigo-500 underline cursor-pointer ml-1">Sign up</span>
                                </p>
                                <div className="flex flex-col gap-4 mt-5">
                                    <div className="flex items-center justify-center bg-black border border-gray-500  text-white rounded-full py-3 shadow-md cursor-pointer">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-xl mr-2" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                                        </svg>
                                        <span>Log in with Apple</span>
                                    </div>
                                    <div className="flex items-center justify-center border border-gray-500 rounded-full py-3 shadow-md cursor-pointer">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="text-xl mr-2" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                        <span>Log in with Google</span>
                                    </div>
                                </div>
                            </div>
                        case 2:
                            return <div className="w-80 mx-auto h-128 bg-[#c0bcbc] rounded-lg p-8">
                                <p className={`${colorClass} text-black text-center font-sans text-2xl font-extrabold my-2 mb-8`}>Create Your Account</p>
                                <form className="flex flex-col gap-4 mb-4 text-black">
                                    <input
                                        name="name"
                                        type="text"
                                        className="rounded-full border border-gray-300 px-4 py-3 outline-none"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="email"
                                        className="rounded-full border border-gray-300 px-4 py-3 outline-none"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="password"
                                        className="rounded-full border border-gray-300 px-4 py-3 outline-none"
                                        placeholder="Password"
                                    />
                                    <input
                                        type="password"
                                        className="rounded-full border border-gray-300 px-4 py-3 outline-none"
                                        placeholder="Confirm Password"
                                    />
                                    <button className={`rounded-full ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                        'bg-indigo-500 hover:bg-indigo-600'
                                        } text-white py-3 shadow-md `}>Register</button>
                                </form>
                                <p className="text-center text-xs text-gray-700">
                                    Don't have an account?
                                    <span className="text-indigo-500 underline cursor-pointer ml-1">Login</span>
                                </p>

                            </div>
                        case 3:
                            return <section className="text-gray-400 body-font relative">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-12">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorClass}`}>Contact Us</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Reach out to us for any inquiries or feedback. We're here to help!</p>
                                    </div>
                                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                                    <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                                    <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                                    <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <button className={`flex mx-auto text-white ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Send Message</button>
                                            </div>
                                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                                <a className="text-indigo-400">support@example.com</a>
                                                <p className="leading-normal my-5">1234 Main St.
                                                    <span>Anytown, USA 12345</span>
                                                </p>
                                                <span className="inline-flex">
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="ml-4 text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="ml-4 text-gray-500">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="ml-4 text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                    }
                }
                return renderComponentDesignForAuth();

            // For the Content page
            case 4:
                const renderComponentDesignForContent = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className=" body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h2 className="text-xl text-white tracking-widest font-medium title-font mb-1">JOIN THE COMMUNITY</h2>
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorClass}`}>Discover New Experiences</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                            Join us in exploring unique and exciting opportunities. From local events to global adventures, we bring you the best experiences right at your fingertips.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>Shooting Stars</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Immerse yourself in the beauty of the night sky. Join our stargazing events and learn about the wonders of the universe.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} href="#">
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>The Catalyzer</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Explore innovative ideas and join our workshops to catalyze your creativity and bring your visions to life.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} href="#">
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>Neptune</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Dive into the world of marine life. Join our underwater adventures and discover the hidden treasures of the ocean.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} href="#">
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>Melanchole</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Experience the calming effects of nature. Join our retreat programs and find peace in serene landscapes.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} href="#">
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <button className={`flex mx-auto mt-16 text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                        'bg-indigo-500 hover:bg-indigo-600'
                                        }`}>
                                        Button
                                    </button>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap w-full mb-20">
                                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                            <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${colorClass} `}>Innovative Solutions for Modern Challenges</h1>
                                            <div className={`h-1 w-20 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                    colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                        colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                            colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                'bg-indigo-500 hover:bg-indigo-600'
                                                } rounded`}></div>
                                        </div>
                                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">We offer a variety of cutting-edge solutions designed to meet the unique needs of today's fast-paced world. From advanced technology to sustainable practices, our services are tailored to help you succeed.</p>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="xl:w-1/4 md:w-1/2 p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="Innovative Technology" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>TECHNOLOGY</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Innovative Technology</h2>
                                                <p className="leading-relaxed text-base">Discover the latest advancements in technology designed to improve efficiency and drive success in your business.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/4 md:w-1/2 p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="Sustainable Solutions" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>SUSTAINABILITY</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Sustainable Solutions</h2>
                                                <p className="leading-relaxed text-base">Implement eco-friendly practices that reduce your environmental impact and promote long-term sustainability.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/4 md:w-1/2 p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="Expert Consulting" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>CONSULTING</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Expert Consulting</h2>
                                                <p className="leading-relaxed text-base">Benefit from our expertise with personalized consulting services that address your specific challenges and opportunities.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/4 md:w-1/2 p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="Customized Solutions" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>CUSTOMIZATION</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Customized Solutions</h2>
                                                <p className="leading-relaxed text-base">Receive tailored solutions that meet your unique needs and help you achieve your business objectives.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${colorClass} `}>Dynamic Solutions for Modern Challenges</h1>
                                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Explore our range of innovative solutions designed to tackle contemporary challenges with creativity and efficiency.</p>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="xl:w-1/3 md:w-1/2 p-4">
                                            <div className="border border-gray-200 p-6 rounded-lg">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-500 ${colorClass} mb-4`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 className={`text-lg font-medium ${colorClass} title-font mb-2`}>Innovative Ideas</h2>
                                                <p className="leading-relaxed text-base">Explore new ideas and concepts to stay ahead in a rapidly evolving market.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/3 md:w-1/2 p-4">
                                            <div className="border border-gray-200 p-6 rounded-lg">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-500 ${colorClass} mb-4`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <circle cx="6" cy="6" r="3"></circle>
                                                        <circle cx="6" cy="18" r="3"></circle>
                                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                                    </svg>
                                                </div>
                                                <h2 className={`text-lg font-medium ${colorClass} title-font mb-2`}>Strategic Planning</h2>
                                                <p className="leading-relaxed text-base">Effective planning strategies to achieve sustainable growth and success.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/3 md:w-1/2 p-4">
                                            <div className="border border-gray-200 p-6 rounded-lg">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-500 ${colorClass} mb-4`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </div>
                                                <h2 className={`text-lg font-medium ${colorClass} title-font mb-2`}>Consulting Services</h2>
                                                <p className="leading-relaxed text-base">Expert consulting services tailored to address specific business challenges and opportunities.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/3 md:w-1/2 p-4">
                                            <div className="border border-gray-200 p-6 rounded-lg">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-500 ${colorClass} mb-4`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                                    </svg>
                                                </div>
                                                <h2 className={`text-lg font-medium ${colorClass} title-font mb-2`}>Creative Solutions</h2>
                                                <p className="leading-relaxed text-base">Innovative and creative solutions tailored to meet your business challenges.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/3 md:w-1/2 p-4">
                                            <div className="border border-gray-200 p-6 rounded-lg">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-500 ${colorClass} mb-4`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    </svg>
                                                </div>
                                                <h2 className={`text-lg font-medium ${colorClass} title-font mb-2`}>Quality Assurance</h2>
                                                <p className="leading-relaxed text-base">Ensuring quality and reliability through comprehensive assurance practices.</p>
                                            </div>
                                        </div>
                                        <div className="xl:w-1/3 md:w-1/2 p-4">
                                            <div className="border border-gray-200 p-6 rounded-lg">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-500 ${colorClass} mb-4`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                                    </svg>
                                                </div>
                                                <h2 className={`text-lg font-medium ${colorClass} title-font mb-2`}>Customer Satisfaction</h2>
                                                <p className="leading-relaxed text-base">Dedicated to delivering solutions that exceed customer expectations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={`flex mx-auto mt-16 text-white ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                        'bg-indigo-500 hover:bg-indigo-600'
                                        } border-0 py-2 px-8 focus:outline-none rounded text-lg`}>Learn More</button>
                                </div>
                            </section>
                        case 3:
                            return <section className="text-gray-900 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium mb-1">TECHNOLOGY</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass}  mb-3`}>Cutting-Edge Innovations</h1>
                                                <p className="leading-relaxed mb-3">Explore the latest advancements in technology that are shaping the future of industries worldwide.</p>
                                                <a className={`${colorClass} inline-flex items-center`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className=" mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-500">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>1.2K
                                                    </span>
                                                    <span className=" inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SUSTAINABILITY</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass}  mb-3`}>Eco-Friendly Practices</h1>
                                                <p className="leading-relaxed mb-3">Discover sustainable solutions that help protect our planet while driving business success.</p>
                                                <a className={`${colorClass} inline-flex items-center`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className=" mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-500">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>900
                                                    </span>
                                                    <span className=" inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>4
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CONSULTING</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Expert Guidance</h1>
                                                <p className="leading-relaxed mb-3">Leverage our expertise to navigate complex challenges and seize opportunities with confidence.</p>
                                                <a className={`${colorClass} inline-flex items-center`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className=" mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-500">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>750
                                                    </span>
                                                    <span className=" inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>5
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 4:
                            return <section className=" body-font overflow-hidden">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-12">
                                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                                            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">TECHNOLOGY</span>
                                            <h2 className={`sm:text-3xl text-2xl title-font font-medium ${colorClass} mt-4 mb-4`}>Cutting-Edge Innovations in Tech</h2>
                                            <p className="leading-relaxed mb-8">Explore the latest advancements in technology that are shaping the future of industries worldwide.</p>
                                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                                <a className={`${colorClass} inline-flex items-center`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                            <a className="inline-flex items-center">
                                                <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                <span className="flex-grow flex flex-col pl-4">
                                                    <span className={`title-font font-medium ${colorClass}`}>Holden Caulfield</span>
                                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                                            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">DESIGN</span>
                                            <h2 className={`sm:text-3xl text-2xl title-font font-medium ${colorClass} mt-4 mb-4`}>Innovative Design Trends</h2>
                                            <p className="leading-relaxed mb-8">Discover the cutting-edge design trends that are redefining aesthetics and functionality across various domains.</p>
                                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                                <a className={`${colorClass} inline-flex items-center`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                            <a className="inline-flex items-center">
                                                <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                <span className="flex-grow flex flex-col pl-4">
                                                    <span className={`title-font font-medium ${colorClass}`}>Alper Kamu</span>
                                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 5:
                            return <section className="text-gray-400 body-font overflow-hidden">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="-my-8 divide-y-2 divide-gray-100">
                                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className={`font-semibold title-font ${colorClass}`}>BUSINESS</span>
                                                <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>Strategic Planning for Business Growth</h2>
                                                <p className="leading-relaxed">Explore the key strategies and planning techniques essential for driving business growth and achieving long-term success in today's competitive market.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className={`font-semibold title-font ${colorClass}`}>TECHNOLOGY</span>
                                                <span className="mt-1 text-gray-500 text-sm">18 Jul 2023</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>Innovations in Artificial Intelligence</h2>
                                                <p className="leading-relaxed">Delve into the latest advancements in artificial intelligence and machine learning, and discover how these technologies are revolutionizing various industries.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className={`font-semibold title-font ${colorClass}`}>DESIGN</span>
                                                <span className="text-sm text-gray-500">25 Aug 2023</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>Trends in Modern UI/UX Design</h2>
                                                <p className="leading-relaxed">Stay updated on the latest trends and best practices in UI/UX design to create user-centric and visually appealing digital experiences.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 6:
                            return <section className="text-gray-400 body-font ">
                                <div className="container px-5 py-24 mx-auto flex flex-col">
                                    <div className="lg:w-4/6 mx-auto">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                                        </div>
                                        <div className="flex flex-col sm:flex-row mt-10">
                                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                <div className={`w-20 h-20 rounded-full inline-flex items-center justify-center ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } text-white`}>
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-center text-center justify-center mt-4">
                                                    <h2 className={`font-medium title-font ${colorClass} text-lg`}>John Doe</h2>
                                                    <div className={`w-12 h-1 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                        colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                            colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                                colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                    colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                        'bg-indigo-500 hover:bg-indigo-600'
                                                        } rounded mt-2 mb-4`}></div>
                                                    <p className="text-base text-gray-700">Experienced Business Analyst | Strategic Planner</p>
                                                </div>
                                            </div>
                                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                <p className="leading-relaxed text-lg mb-4">Seasoned business analyst with a track record of delivering strategic insights and solutions that drive business growth. Proven expertise in market analysis, competitive benchmarking, and strategic planning. Strong analytical skills combined with a deep understanding of industry trends and customer behavior.</p>
                                                <a href="#" className={`${colorClass} inline-flex items-center`}>Read More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>




                        default:
                            break;
                    }
                }
                return renderComponentDesignForContent();

            // For the Gallery page
            case 5:
                const renderComponentDesignForGallery = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                    <div className="flex w-full mb-20 flex-wrap">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font ${colorClass} lg:w-1/3 lg:mb-0 mb-4`}>Master Cleanse Reliac Heirloom</h1>
                                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-600">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                                    </div>
                                    <div className="flex flex-wrap md:-m-2 -m-1">
                                        <div className="flex flex-wrap w-1/2">
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                                            </div>
                                            <div className="md:p-2 p-1 w-full">
                                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/2">
                                            <div className="md:p-2 p-1 w-full">
                                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                    <div className="lg:w-2/3 mx-auto">
                                        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                                            <img
                                                alt="gallery"
                                                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                                src="https://dummyimage.com/820x340"
                                            />
                                            <div className="text-center relative z-10 w-full">
                                                <h2 className={`text-2xl ${colorClass} font-medium title-font mb-2`}>
                                                    Starry Night
                                                </h2>
                                                <p className="leading-relaxed">
                                                    Enjoy a serene night under the stars with our exclusive collection.
                                                </p>
                                                <a className={`mt-3 ${colorClass} inline-flex items-center`} href="#more">
                                                    Discover More
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="w-4 h-4 ml-2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-2">
                                            <div className="px-2 w-1/2">
                                                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                                    <img
                                                        alt="gallery"
                                                        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                                        src="https://dummyimage.com/542x460"
                                                    />
                                                    <div className="text-center relative z-10 w-full">
                                                        <h2 className={`text-xl ${colorClass} font-medium title-font mb-2`}>
                                                            Celestial Views
                                                        </h2>
                                                        <p className="leading-relaxed">
                                                            Experience the beauty of the cosmos from the comfort of your home.
                                                        </p>
                                                        <a className={`mt-3 ${colorClass} inline-flex items-center`} href="#learn-more">
                                                            Learn More
                                                            <svg
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                className="w-4 h-4 ml-2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 w-1/2">
                                                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                                    <img
                                                        alt="gallery"
                                                        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                                        src="https://dummyimage.com/542x420"
                                                    />
                                                    <div className="text-center relative z-10 w-full">
                                                        <h2 className={`text-xl ${colorClass} font-medium title-font mb-2`}>
                                                            Lunar Landscapes
                                                        </h2>
                                                        <p className="leading-relaxed">
                                                            Discover the mysteries of the moon with our detailed guides.
                                                        </p>
                                                        <a className={`mt-3 ${colorClass} inline-flex items-center`} href="#explore-more">
                                                            Explore More
                                                            <svg
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                className="w-4 h-4 ml-2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorClass}`}>Inspirational Quotes Collection</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Discover a collection of inspiring quotes that can uplift your spirit and motivate you throughout the day.</p>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">INSPIRATION</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believe in Yourself</h1>
                                                    <p className="leading-relaxed">"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MOTIVATION</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Stay Positive</h1>
                                                    <p className="leading-relaxed">"Keep your face always toward the sunshine—and shadows will fall behind you." - Walt Whitman</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">PERSEVERANCE</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Never Give Up</h1>
                                                    <p className="leading-relaxed">"The best way to predict the future is to create it." - Peter Drucker</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">GROWTH</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Embrace Challenges</h1>
                                                    <p className="leading-relaxed">"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Ralph Waldo Emerson</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RESILIENCE</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Bounce Back</h1>
                                                    <p className="leading-relaxed">"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">COURAGE</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Face Your Fears</h1>
                                                    <p className="leading-relaxed">"Courage is not the absence of fear, but rather the judgment that something else is more important than fear." - Ambrose Redmoon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 3:
                            return <section className=" body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-12">
                                        <h1 className={`sm:text-4xl text-3xl font-semibold title-font mb-4 ${colorClass}`}>Explore Our Unique Collection</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">Discover our exclusive range of items with a blend of contemporary and classNameic designs to suit all your needs.</p>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 md:w-1/2 lg:w-1/3">
                                            <div className="h-full  border-2 border-gray-600  border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium  ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">The Catalyzer</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/2 lg:w-1/3">
                                            <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium  ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Shooting Stars</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/2 lg:w-1/3">
                                            <div className="h-full  border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium  ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Neptune</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/2 lg:w-1/3">
                                            <div className="h-full  border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/723x403" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium  ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Holden Caulfield</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/2 lg:w-1/3">
                                            <div className="h-full  border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/724x404" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium  ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Alper Kamu</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/2 lg:w-1/3">
                                            <div className="h-full  border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/725x405" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium  ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">The 400 Blows</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 4:
                            return <section className=" body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-12">
                                        <h1 className={`sm:text-4xl text-3xl font-semibold title-font mb-4 ${colorClass}`}>Featured Items</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">Discover our exclusive selection of items designed to elevate your lifestyle. Explore and enjoy the unique blend of style and functionality.</p>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 md:w-1/2">
                                            <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/600x360" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Alper Kamu</h1>
                                                    <p className="leading-relaxed mb-3">Elegant and modern design, perfect for adding a touch of sophistication to any space.</p>
                                                    <a className={`${colorClass} inline-flex items-center`} href="#">Learn More
                                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/2">
                                            <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/601x361" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Neptune</h1>
                                                    <p className="leading-relaxed mb-3">Stylish and functional, this piece is designed to enhance your everyday experience.</p>
                                                    <a className={`${colorClass} inline-flex items-center`} href="#">Learn More
                                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        default:
                            break;
                    }
                }
                return renderComponentDesignForGallery();

            // For the Pricing Section
            case 6:
                const renderComponentDesignForPricing = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 body-font overflow-hidden">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-2 ${colorClass}`}>Pricing</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                                        <div className={`flex mx-auto border-2 ${colorClass === 'text-red-500' ? 'border-red-500' :
                                            colorClass === 'text-purple-500' ? 'border-purple-500' :
                                                colorClass === 'text-blue-500' ? 'border-blue-500' :
                                                    colorClass === 'text-pink-500' ? 'border-pink-500' :
                                                        colorClass === 'text-orange-500' ? 'border-orange-500' :
                                                            'border-indigo-500 hover:border-indigo-600'
                                            } rounded overflow-hidden mt-6`}>

                                            <button className={`py-1 px-4 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                    colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                        colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                            colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                'bg-indigo-500 hover:bg-indigo-600'
                                                } text-white focus:outline-none`}>Monthly</button>
                                            <button className="py-1 px-4 focus:outline-none">Annually</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                                                <h1 className={`text-5xl ${colorClass} pb-4 mb-4 border-b border-gray-200 leading-none`}>Free</h1>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Vexillologist pitchfork
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Tumeric plaid portland
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-6">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Mixtape chillwave tumeric
                                                </p>
                                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                                            <div className={`h-full p-6 rounded-lg border-2 ${colorClass === 'text-red-500' ? 'border-red-500' :
                                                colorClass === 'text-purple-500' ? 'border-purple-500' :
                                                    colorClass === 'text-blue-500' ? 'border-blue-500' :
                                                        colorClass === 'text-pink-500' ? 'border-pink-500' :
                                                            colorClass === 'text-orange-500' ? 'border-orange-500' :
                                                                'border-indigo-500 hover:border-indigo-600'
                                                } flex flex-col relative overflow-hidden`}>
                                                <span className={`${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}>POPULAR</span>
                                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                                <h1 className={`text-5xl ${colorClass} leading-none flex items-center pb-4 mb-4 border-b border-gray-200`}>
                                                    <span>$38</span>
                                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                                </h1>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Vexillologist pitchfork
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Tumeric plaid portland
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Hexagon neutra unicorn
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-6">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Mixtape chillwave tumeric
                                                </p>
                                                <button className={`flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } rounded`}>Button
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                                                <h1 className={`text-5xl ${colorClass} leading-none flex items-center pb-4 mb-4 border-b border-gray-200`}>
                                                    <span>$56</span>
                                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                                </h1>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Vexillologist pitchfork
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Tumeric plaid portland
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Hexagon neutra unicorn
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-6">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Mixtape chillwave tumeric
                                                </p>
                                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
                                                <h1 className={`text-5xl ${colorClass} leading-none flex items-center pb-4 mb-4 border-b border-gray-200`}>
                                                    <span>$72</span>
                                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                                </h1>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Vexillologist pitchfork
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Tumeric plaid portland
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-2">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Hexagon neutra unicorn
                                                </p>
                                                <p className="flex items-center text-gray-600 mb-6">
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Mixtape chillwave tumeric
                                                </p>
                                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-2 ${colorClass}`}>Pricing</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                            Discover the perfect plan for your needs. Choose the best speed, storage, and price that suits you.
                                        </p>
                                    </div>
                                    <div className="lg:w-2/3 w-full mx-auto overflow-auto ">
                                        <table className="table-auto w-full text-left whitespace-no-wrap border border-1 rounded-lg border-gray-700">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-3">Basic</td>
                                                    <td className="px-4 py-3">5 Mb/s</td>
                                                    <td className="px-4 py-3">15 GB</td>
                                                    <td className="px-4 py-3 text-lg text-gray-200">Free</td>
                                                    <td className="w-10 text-center">
                                                        <input name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">Standard</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                                    <td className={`border-t-2 border-gray-200 px-4 py-3 text-lg ${colorClass}`}>$20</td>
                                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                                        <input name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">Premium</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">50 Mb/s</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">50 GB</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-200">$40</td>
                                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                                        <input name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Ultimate</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">100 Mb/s</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">200 GB</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-200">$60</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                                        <input name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>
                                            Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <button className={`flex ml-auto text-white  border-0 py-2 px-6 focus:outline-none ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                            colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                    colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                        colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                            'bg-indigo-500 hover:bg-indigo-600'
                                            } rounded`}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className=" py-12">
                                <div className="container mx-auto px-6 text-gray-600">
                                    <div className="text-center mb-16">
                                        <h1 className={`text-4xl font-semibold ${colorClass}`}>Our Pricing Plans</h1>
                                        <p className="mt-4 text-gray-600">Choose the plan that suits your needs best. All plans come with a 14-day free trial.</p>
                                        <div className="inline-flex border rounded-lg mt-6">
                                            <button className={`py-2 px-6 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                    colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                        colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                            colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                'bg-indigo-500 hover:bg-indigo-600'
                                                } text-white rounded-l-lg focus:outline-none`}>Monthly</button>
                                            <button className="py-2 px-6 text-gray-600 bg-white rounded-r-lg focus:outline-none">Yearly</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-4">
                                        <div className="w-full md:w-1/3 px-4 mb-8">
                                            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <h2 className="text-lg font-semibold text-gray-800">Basic</h2>
                                                <div className="flex items-center mt-6">
                                                    <h1 className="text-5xl font-bold text-gray-800">$0</h1>
                                                    <span className="ml-1 text-xl text-gray-600">/mo</span>
                                                </div>
                                                <p className="mt-4 text-gray-600">Perfect for getting started with basic features.</p>
                                                <ul className="mt-6 space-y-4">
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Access to basic features
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        5 Projects
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Email support
                                                    </li>
                                                </ul>
                                                <button className={`mt-8 w-full py-3 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } text-white rounded-lg transition-colors duration-300`}>Sign Up</button>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 px-4 mb-8">
                                            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                                                <span className={`absolute top-0 right-0 px-3 py-1 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } text-white text-xs font-bold rounded-bl-lg`}>POPULAR</span>
                                                <h2 className="text-lg font-semibold text-gray-800">Standard</h2>
                                                <div className="flex items-center mt-6">
                                                    <h1 className="text-5xl font-bold text-gray-800">$29</h1>
                                                    <span className="ml-1 text-xl text-gray-600">/mo</span>
                                                </div>
                                                <p className="mt-4 text-gray-600">Ideal for growing your business with advanced features.</p>
                                                <ul className="mt-6 space-y-4">
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Access to all features
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Unlimited Projects
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Priority support
                                                    </li>
                                                </ul>
                                                <button className={`mt-8 w-full py-3 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } text-white rounded-lg transition-colors duration-300`}>Sign Up</button>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 px-4 mb-8">
                                            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <h2 className="text-lg font-semibold text-gray-800">Premium</h2>
                                                <div className="flex items-center mt-6">
                                                    <h1 className="text-5xl font-bold text-gray-800">$49</h1>
                                                    <span className="ml-1 text-xl text-gray-600">/mo</span>
                                                </div>
                                                <p className="mt-4 text-gray-600">Best for businesses advanced features and high support.</p>
                                                <ul className="mt-6 space-y-4">
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Advanced analytics
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        Dedicated account manager
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                        24/7 support
                                                    </li>
                                                </ul>
                                                <button className={`mt-8 w-full py-3 ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } text-white rounded-lg transition-colors duration-300`}>Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        default:
                            break;
                    }
                }
                return renderComponentDesignForPricing();
            // For the Blogs Section
            case 7:
                const renderComponentDesignForBlogs = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-400 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">BASIC</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Essential Features</h1>
                                                <p className="leading-relaxed mb-3">Get started with the basics. Perfect for individuals or small teams.</p>
                                                <a className={`${colorClass} inline-flex items-center`} href="#">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>500 Users
                                                    </span>
                                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>15 Features
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">STANDARD</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Professional Package</h1>
                                                <p className="leading-relaxed mb-3">Advanced features for growing teams. Enhance your productivity and collaboration.</p>
                                                <a className={`${colorClass} inline-flex items-center`} href="#">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>1K Users
                                                    </span>
                                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>30 Features
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 lg:w-1/3">
                                            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">PREMIUM</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Enterprise Solutions</h1>
                                                <p className="leading-relaxed mb-3">Complete package with all features and premium support for large organizations.</p>
                                                <a className={`${colorClass} inline-flex items-center`} href="#">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>5K Users
                                                    </span>
                                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>All Features
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-400 body-font overflow-hidden">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="-my-8 divide-y-2 divide-gray-800">
                                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold title-font text-white">NEWS</span>
                                                <span className="mt-1 text-gray-500 text-sm">22 Jul 2024</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-mediu ${colorClass} title-font mb-2`}>New Innovations in Tech Industry</h2>
                                                <p className="leading-relaxed">Explore the latest trends and breakthroughs in technology that are shaping the future. From AI advancements to green tech, stay updated with what’s new and exciting.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`} href="#">Read More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold title-font text-white">NEWS</span>
                                                <span className="mt-1 text-gray-500 text-sm">21 Jul 2024</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>Advancements in Renewable Energy</h2>
                                                <p className="leading-relaxed">Discover the latest developments in renewable energy sources and technologies. Learn how these innovations are impacting global sustainability efforts.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`} href="#">Read More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold title-font text-white">NEWS</span>
                                                <span className="mt-1 text-gray-500 text-sm">20 Jul 2024</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>The Future of Space Exploration</h2>
                                                <p className="leading-relaxed">Get insights into upcoming space missions and projects aimed at exploring beyond our planet. Understand the goals and challenges of future space exploration.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`} href="#">Read More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className="text-gray-400  body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -mx-4 -my-8">
                                        <div className="py-8 px-4 lg:w-1/3">
                                            <div className="h-full flex items-start">
                                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Jul</span>
                                                    <span className="font-medium text-lg leading-none text-gray-300 title-font">18</span>
                                                </div>
                                                <div className="flex-grow pl-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-xl font-medium ${colorClass} mb-3`}>The 400 Blows</h1>
                                                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <a className="inline-flex items-center">
                                                        <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                                        <span className="flex-grow flex flex-col pl-3">
                                                            <span className="title-font font-medium text-white">Alper Kamu</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-8 px-4 lg:w-1/3">
                                            <div className="h-full flex items-start">
                                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Jul</span>
                                                    <span className="font-medium text-lg leading-none text-gray-300 title-font">18</span>
                                                </div>
                                                <div className="flex-grow pl-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-xl font-medium ${colorClass} mb-3`}>Shooting Stars</h1>
                                                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <a className="inline-flex items-center">
                                                        <img alt="blog" src="https://dummyimage.com/102x102" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                                        <span className="flex-grow flex flex-col pl-3">
                                                            <span className="title-font font-medium text-white">Holden Caulfield</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-8 px-4 lg:w-1/3">
                                            <div className="h-full flex items-start">
                                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Jul</span>
                                                    <span className="font-medium text-lg leading-none text-gray-300 title-font">18</span>
                                                </div>
                                                <div className="flex-grow pl-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-xl font-medium ${colorClass} mb-3`}>Neptune</h1>
                                                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <a className="inline-flex items-center">
                                                        <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                                        <span className="flex-grow flex flex-col pl-3">
                                                            <span className="title-font font-medium text-white">Henry Letham</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        default:
                            break;
                    }
                }
                return renderComponentDesignForBlogs();

            // For the Steps Section
            case 8:
                const renderComponentDesignForSteps = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-400body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                    <div className="flex flex-wrap w-full">
                                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } inline-flex items-center justify-center text-white relative z-10`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className={`font-medium title-font text-sm ${colorClass} mb-1 tracking-wider`}>STEP 1</h2>
                                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                                </div>
                                            </div>
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>
                                                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                                </div>
                                            </div>
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <circle cx="12" cy="5" r="3"></circle>
                                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>
                                                    <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                                                </div>
                                            </div>
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 4</h2>
                                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                                </div>
                                            </div>
                                            <div className="flex relative">
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${colorClass === 'text-red-500' ? 'bg-red-500' :
                                                    colorClass === 'text-purple-500' ? 'bg-purple-500' :
                                                        colorClass === 'text-blue-500' ? 'bg-blue-500' :
                                                            colorClass === 'text-pink-500' ? 'bg-pink-500' :
                                                                colorClass === 'text-orange-500' ? 'bg-orange-500' :
                                                                    'bg-indigo-500 hover:bg-indigo-600'
                                                    } inline-flex items-center justify-center text-white relative z-10`}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                        <path d="M22 4L12 14.01l-3-3"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className={`font-medium title-font text-sm ${colorClass} mb-1 tracking-wider`}>FINISH</h2>
                                                    <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step" />
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                                    <div className="flex mx-auto flex-wrap mb-20">
                                        <a className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-400 inline-flex items-center leading-none ${colorClass === 'text-red-500' ? 'border-red-500' :
                                            colorClass === 'text-purple-500' ? 'border-purple-500' :
                                                colorClass === 'text-blue-500' ? 'border-blue-500' :
                                                    colorClass === 'text-pink-500' ? 'border-pink-500' :
                                                        colorClass === 'text-orange-500' ? 'border-orange-500' :
                                                            'border-indigo-500 hover:border-indigo-600'
                                            } ${colorClass} tracking-wider rounded-t`}>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                            STEP 1
                                        </a>
                                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 tracking-wider">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                            STEP 2
                                        </a>
                                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 tracking-wider">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <circle cx="12" cy="5" r="3"></circle>
                                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                            </svg>
                                            STEP 3
                                        </a>
                                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 tracking-wider">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            STEP 4
                                        </a>
                                    </div>
                                    <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                    <div className="flex flex-col text-center w-full">
                                        <h1 className={`text-xl font-medium title-font mb-4 ${colorClass}`}>Master Cleanse Reliac Heirloom</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                                    </div>
                                </div>
                            </section>



                        default:
                            break;
                    }
                }
                return renderComponentDesignForSteps();
            default:
                return ''

        }
    }

    return (

        <div>
            {RenderComponentsBasedOnTheValueOfTheComponent()}
        </div>
    );
};

export default Designone;
