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
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
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
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
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
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
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
                    }
                }
                return renderComponentDesignForAuth();
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
