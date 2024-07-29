// Till Now This is for the cards 
import React from 'react'

const RenderDeviceComponents = ({ valueOfTheComponent, codevalue, colorClass, selectBtnColorClass, selectColorBorder }: any) => {
    // If the valueOfTheComponent=== 0 Then I will Render This otherWise I will Render Somthig Else Component


    const RenderComponentsBasedOnTheValueOfTheComponent = () => {
        switch (valueOfTheComponent) {
            case 0:
                const renderDeviceComponents = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-12 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 ">
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
                                        <div className="p-4 ">
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
                                        <div className="p-4">
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
                                        <div className="p-4 ">
                                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>The Catalyzer</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass}  inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
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
                                        <div className="p-4 ">
                                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>The 400 Blows</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap">
                                                        <a className={`${colorClass}  inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
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
                                        <div className="p-4 ">
                                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                                    <h1 className={`title-font text-lg font-medium ${colorClass} mb-3`}>Shooting Stars</h1>
                                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className={`${colorClass}  inline-flex items-center md:mb-2 lg:mb-0`}>Learn More
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
                                    <div className="container flex justify-between items-center flex-col gap-7 px-5 py-12">
                                        <div className="items-center text-center">
                                            <h1 className={`title-font  text-3xl mb-4 font-medium ${colorClass}`}>
                                                Before they sold out
                                                <div className="hidden lg:inline-block"> readymade gluten</div>
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button
                                                    className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${selectBtnColorClass}`}
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
                                        <div className="-mx-4 -mb-10 text-center">
                                            <div className=" mb-10 px-4">
                                                <div className="rounded-lg h-64 overflow-hidden">
                                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                                                </div>
                                                <h2 className={`${colorClass} title-font text-2xl font-medium mt-6 mb-3`}>Buy YouTube Videos</h2>
                                                <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                                                <button className={`flex ${selectBtnColorClass} mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded`}>Button</button>
                                            </div>
                                            <div className=" mb-10 px-4">
                                                <div className="rounded-lg h-64 overflow-hidden">
                                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                                                </div>
                                                <h2 className={`${colorClass} title-font text-2xl font-medium mt-6 mb-3`}>The Catalyzer</h2>
                                                <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                                                <button className={`flex ${selectBtnColorClass} mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded`}>Button</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                    }
                }
                return renderDeviceComponents();
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
                                    <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${selectBtnColorClass} `}>Button
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
                                    <a className={`mr-5 hover:${colorClass}`}>SignUp</a>
                                </nav>
                                <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${selectBtnColorClass} `}>Button
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
                                    <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${selectBtnColorClass} `}>Button
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
                                        <button className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${selectBtnColorClass} `}>Learn

                                        </button>
                                    </div>

                                </div>
                            </header>
                    }
                }
                return renderComponentDesignForNavbar();
            case 2:
                const renderComponentDesignForHeroSection = () => {
                    switch (codevalue) {
                        case 0:
                            return (
                                <section className="text-gray-600 body-font">
                                    <div className="container flex justify-between items-center flex-col gap-7 px-5 py-12">
                                        <div className="items-center text-center">
                                            <h1 className={`title-font  text-3xl mb-4 font-medium ${colorClass}`}>
                                                Before they sold out
                                                <div className="hidden lg:inline-block"> readymade gluten</div>
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button
                                                    className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${selectBtnColorClass}`}
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
                        case 1:
                            return (
                                <section className="text-gray-600 body-font">
                                    <div className="container flex justify-between items-center flex-col gap-7 px-5 py-12">
                                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                        </div>
                                        <div className="items-center text-center">
                                            <h1 className={`title-font  text-3xl mb-4 font-medium ${colorClass}`}>
                                                Before they sold out
                                                <div className="hidden lg:inline-block"> readymade gluten</div>
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button
                                                    className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${selectBtnColorClass}`}
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
                                                className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${selectBtnColorClass}`}
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
                                <div className="container mx-auto grid px-5 py-24 md:flex-row flex-col items-center">
                                    <div className="m-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                    </div>
                                    <div className="lg:flex-grow m-auto flex flex-col items-center text-center mt-8">
                                        <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}>Knausgaard typewriter readymade marfa</h1>
                                        <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                                        <div className="flex w-full md:justify-center justify-center items-end">
                                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">

                                                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <button className={`inline-flex text-white ${selectBtnColorClass}  border-0 py-2 px-6 focus:outline-none  rounded text-lg`}>Button</button>
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
                        default:
                            break;
                    }
                }
                return renderComponentDesignForHeroSection();
            case 3:
                const renderComponentDesignForAuth = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 grid justify-center items-center body-font">
                                <div>
                                    <img className="w-[90%] flex mt-10 mx-auto rounded-md h-[470px] object-cover object-center" src="https://dummyimage.com/400x400" alt="blog" />
                                </div>
                                <div className="container px-5 py-24 mx-auto flex">
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
                                        <button className={`${selectBtnColorClass} bg-indigo-500 border-0 py-2 px-6 focus:outline-none text-white hover:bg-indigo-600 rounded text-lg`}>Submit</button>
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
                                    <button className={`rounded-full ${selectBtnColorClass} text-white py-3 shadow-md `}>Log in</button>
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
                            return <div className="w-80 mt-[90px] mx-auto h-128 bg-[#c0bcbc] rounded-lg p-8">
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
                                    <button className={`rounded-full ${selectBtnColorClass} text-white py-3 shadow-md `}>Register</button>
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
                                        <p className="mx-auto leading-relaxed text-base">Reach out to us for any inquiries or feedback. We're here to help!</p>
                                    </div>
                                    <div className="mx-auto">
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
                                                <button className={`flex mx-auto text-white ${selectBtnColorClass} border-0 py-2 px-8 focus:outline-none  rounded text-lg`}>Send Message</button>
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
                                    <div className="grid">
                                        <div className="w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>Shooting Stars</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Immerse yourself in the beauty of the night sky. Join our stargazing events and learn about the wonders of the universe.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} >
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>The Catalyzer</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Explore innovative ideas and join our workshops to catalyze your creativity and bring your visions to life.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} >
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>Neptune</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Dive into the world of marine life. Join our underwater adventures and discover the hidden treasures of the ocean.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} >
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                            <h2 className={`text-lg sm:text-xl ${colorClass} font-medium title-font mb-2`}>Melanchole</h2>
                                            <p className="leading-relaxed text-base mb-4">
                                                Experience the calming effects of nature. Join our retreat programs and find peace in serene landscapes.
                                            </p>
                                            <a className={`${colorClass} inline-flex items-center`} >
                                                Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <button className={`flex mx-auto mt-16 text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg ${selectBtnColorClass}`}>
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
                                            <div className={`h-1 w-20 ${selectBtnColorClass} rounded`}></div>
                                        </div>
                                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">We offer a variety of cutting-edge solutions designed to meet the unique needs of today's fast-paced world. From advanced technology to sustainable practices, our services are tailored to help you succeed.</p>
                                    </div>
                                    <div className="grid -m-4">
                                        <div className="w-full p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="Innovative Technology" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>TECHNOLOGY</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Innovative Technology</h2>
                                                <p className="leading-relaxed text-base">Discover the latest advancements in technology designed to improve efficiency and drive success in your business.</p>
                                            </div>
                                        </div>
                                        <div className="w-full p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="Sustainable Solutions" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>SUSTAINABILITY</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Sustainable Solutions</h2>
                                                <p className="leading-relaxed text-base">Implement eco-friendly practices that reduce your environmental impact and promote long-term sustainability.</p>
                                            </div>
                                        </div>
                                        <div className="w-full p-4">
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="Expert Consulting" />
                                                <h3 className={`tracking-widest ${colorClass} text-xs font-medium title-font text-indigo-500`}>CONSULTING</h3>
                                                <h2 className={`text-lg ${colorClass} text-gray-900 font-medium title-font mb-4`}>Expert Consulting</h2>
                                                <p className="leading-relaxed text-base">Benefit from our expertise with personalized consulting services that address your specific challenges and opportunities.</p>
                                            </div>
                                        </div>
                                        <div className="w-full p-4">
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
                                    <div className="flex w-full mb-20 flex-col items-center text-center">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${colorClass} `}>Dynamic Solutions for Modern Challenges</h1>
                                        <p className=" w-full leading-relaxed text-gray-500">Explore our range of innovative solutions designed to tackle contemporary challenges with creativity and efficiency.</p>
                                    </div>
                                    <div className="-m-4">
                                        <div className="w-full p-4">
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
                                        <div className="w-full p-4">
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
                                        <div className="w-full p-4">
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
                                        <div className="w-full p-4">
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
                                        <div className="w-full p-4">
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
                                        <div className="w-full p-4">
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
                                    <button className={`flex mx-auto mt-16 text-white ${selectBtnColorClass} border-0 py-2 px-8 focus:outline-none rounded text-lg`}>Learn More</button>
                                </div>
                            </section>
                        case 3:
                            return <section className="text-gray-900 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className=" -m-4">
                                        <div className="p-4 w-full">
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
                                        <div className="p-4 w-full">
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
                                        <div className="p-4 w-full">
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
                                    <div className="-m-12">
                                        <div className="p-12 w-full flex flex-col items-start">
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
                                        <div className="p-12 w-full flex flex-col items-start">
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
                                        <div className="py-8">
                                            <div className="md:w-24 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className={`font-semibold title-font ${colorClass}`}>BUSINESS</span>
                                                <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
                                            </div>
                                            <div className="md:flex-grow mt-6">
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
                                        <div className="py-8  ">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className={`font-semibold title-font ${colorClass}`}>TECHNOLOGY</span>
                                                <span className="mt-1 text-gray-500 text-sm">18 Jul 2023</span>
                                            </div>
                                            <div className="md:flex-grow mt-6">
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
                                        <div className="py-8 ">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className={`font-semibold title-font ${colorClass}`}>DESIGN</span>
                                                <span className="text-sm text-gray-500">25 Aug 2023</span>
                                            </div>
                                            <div className="md:flex-grow mt-6">
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
                                    <div className=" mx-auto">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                                        </div>
                                        <div className=" mt-10">
                                            <div className="text-center">
                                                <div className={`w-20 h-20 rounded-full inline-flex items-center justify-center ${selectBtnColorClass} text-white`}>
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-center text-center justify-center mt-4">
                                                    <h2 className={`font-medium title-font ${colorClass} text-lg`}>John Doe</h2>
                                                    <div className={`w-12 h-1 ${selectBtnColorClass} rounded mt-2 mb-4`}></div>
                                                    <p className="text-base text-gray-700">Experienced Business Analyst | Strategic Planner</p>
                                                </div>
                                            </div>
                                            <div className="sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                <p className="leading-relaxed text-lg mb-4">Seasoned business analyst with a track record of delivering strategic insights and solutions that drive business growth. Proven expertise in market analysis, competitive benchmarking, and strategic planning. Strong analytical skills combined with a deep understanding of industry trends and customer behavior.</p>
                                                <a className={`${colorClass} inline-flex items-center`}>Read More
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
                                    <div className="mx-auto">
                                        <div className="flex flex-wrap w-full bg-gray-100 py-4 px-4 relative mb-4">
                                            <img
                                                alt="gallery"
                                                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                                src="https://dummyimage.com/240x160"
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
                                        <div className="flex flex-wrap -mx-2 gap-3">
                                            <div className="px-2 ">
                                                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                                    <img
                                                        alt="gallery"
                                                        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                                        src="https://dummyimage.com/240x160"
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
                                            <div className="px-2">
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
                                        <div className=" p-1">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">INSPIRATION</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believe in Yourself</h1>
                                                    <p className="leading-relaxed">"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" p-1">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MOTIVATION</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Stay Positive</h1>
                                                    <p className="leading-relaxed">"Keep your face always toward the sunshine—and shadows will fall behind you." - Walt Whitman</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" p-1">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">PERSEVERANCE</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Never Give Up</h1>
                                                    <p className="leading-relaxed">"The best way to predict the future is to create it." - Peter Drucker</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" p-1">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">GROWTH</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Embrace Challenges</h1>
                                                    <p className="leading-relaxed">"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Ralph Waldo Emerson</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" p-1">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365" />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RESILIENCE</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Bounce Back</h1>
                                                    <p className="leading-relaxed">"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" p-1">
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
                                        <div className="p-4">
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
                                        <div className="p-4 ">
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
                                        <div className="p-4">
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
                                        <div className="p-4">
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
                                        <div className="p-4">
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
                                        <div className="p-4">
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
                                        <div className="p-4 ">
                                            <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/600x360" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Alper Kamu</h1>
                                                    <p className="leading-relaxed mb-3">Elegant and modern design, perfect for adding a touch of sophistication to any space.</p>
                                                    <a className={`${colorClass} inline-flex items-center`} >Learn More
                                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/601x361" alt="item" />
                                                <div className="p-6">
                                                    <h2 className={`tracking-widest text-xs title-font font-medium ${colorClass} mb-1`}>CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">Neptune</h1>
                                                    <p className="leading-relaxed mb-3">Stylish and functional, this piece is designed to enhance your everyday experience.</p>
                                                    <a className={`${colorClass} inline-flex items-center`} >Learn More
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
                                        <div className={`flex mx-auto border-2 ${selectColorBorder} rounded overflow-hidden mt-6`}>

                                            <button className={`py-1 px-4 ${selectBtnColorClass} text-white focus:outline-none`}>Monthly</button>
                                            <button className="py-1 px-4 focus:outline-none">Annually</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 w-full">
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
                                        <div className="p-4 w-full">
                                            <div className={`h-full p-6 rounded-lg border-2 ${selectColorBorder} flex flex-col relative overflow-hidden`}>
                                                <span className={`${selectBtnColorClass} text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}>POPULAR</span>
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
                                                <button className={`flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none ${selectBtnColorClass} rounded`}>Button
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
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
                                        <div className="p-4 w-full">
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
                                <div className="container px-5 py-24 ">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-2 ${colorClass}`}>Pricing</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                            Discover the perfect plan for your needs. Choose the best speed, storage, and price that suits you.
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <table className="table-auto w-full whitespace-no-wrap border border-1 border-gray-700">
                                            <thead>
                                                <tr>
                                                    <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                                                    <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                                                    <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                                                    <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="px-3 py-3">Basic</td>
                                                    <td className="px-3 py-3">5 Mb/s</td>
                                                    <td className="px-3 py-3">15 GB</td>
                                                    <td className="px-3 py-3 text-lg text-gray-200">Free</td>
                                                    <td className="w-10 text-center">
                                                        <input className='mr-2' name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">Standard</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                                    <td className={`border-t-2 border-gray-200 px-4 py-3 text-lg ${colorClass}`}>$20</td>
                                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                                        <input className='mr-2' name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">Premium</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">50 Mb/s</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3">50 GB</td>
                                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-200">$40</td>
                                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                                        <input className='mr-2' name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Ultimate</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">100 Mb/s</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">200 GB</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-200">$60</td>
                                                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                                        <input className='mr-2' name="plan" type="radio" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-between items-center pl-4 mt-4 w-full mx-auto">
                                        <a className={`${colorClass} inline-flex items-center md:mb-2 lg:mb-0`}>
                                            Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <button className={`flex ml-auto text-white  border-0 py-2 px-6 focus:outline-none ${selectBtnColorClass} rounded`}>
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
                                            <button className={`py-2 px-6 ${selectBtnColorClass} text-white rounded-l-lg focus:outline-none`}>Monthly</button>
                                            <button className="py-2 px-6 text-gray-600 bg-white rounded-r-lg focus:outline-none">Yearly</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-4">
                                        <div className="w-full px-4 mb-8">
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
                                                <button className={`mt-8 w-full py-3 ${selectBtnColorClass} text-white rounded-lg transition-colors duration-300`}>Sign Up</button>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-8">
                                            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                                                <span className={`absolute top-0 right-0 px-3 py-1 ${selectBtnColorClass} text-white text-xs font-bold rounded-bl-lg`}>POPULAR</span>
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
                                                <button className={`mt-8 w-full py-3 ${selectBtnColorClass} text-white rounded-lg transition-colors duration-300`}>Sign Up</button>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-8">
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
                                                <button className={`mt-8 w-full py-3 ${selectBtnColorClass} text-white rounded-lg transition-colors duration-300`}>Sign Up</button>
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
                                    <div className="flex flex-wrap">
                                        <div className="p-4">
                                            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">BASIC</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Essential Features</h1>
                                                <p className="leading-relaxed mb-3">Get started with the basics. Perfect for individuals or small teams.</p>
                                                <a className={`${colorClass} inline-flex items-center`} >Learn More
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
                                        <div className="p-4 ">
                                            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">STANDARD</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Professional Package</h1>
                                                <p className="leading-relaxed mb-3">Advanced features for growing teams. Enhance your productivity and collaboration.</p>
                                                <a className={`${colorClass} inline-flex items-center`} >Learn More
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
                                        <div className="p-4">
                                            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">PREMIUM</h2>
                                                <h1 className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}>Enterprise Solutions</h1>
                                                <p className="leading-relaxed mb-3">Complete package with all features and premium support for large organizations.</p>
                                                <a className={`${colorClass} inline-flex items-center`} >Learn More
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
                                            <div className="md:w-24 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold title-font text-white">NEWS</span>
                                                <span className="mt-1 text-gray-500 text-sm">22 Jul 2024</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-mediu ${colorClass} title-font mb-2`}>New Innovations in Tech Industry</h2>
                                                <p className="leading-relaxed">Explore the latest trends and breakthroughs in technology that are shaping the future. From AI advancements to green tech, stay updated with what’s new and exciting.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`} >Read More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                            <div className="md:w-24 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold title-font text-white">NEWS</span>
                                                <span className="mt-1 text-gray-500 text-sm">21 Jul 2024</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>Advancements in Renewable Energy</h2>
                                                <p className="leading-relaxed">Discover the latest developments in renewable energy sources and technologies. Learn how these innovations are impacting global sustainability efforts.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`} >Read More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                            <div className="md:w-24 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold title-font text-white">NEWS</span>
                                                <span className="mt-1 text-gray-500 text-sm">20 Jul 2024</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className={`text-2xl font-medium ${colorClass} title-font mb-2`}>The Future of Space Exploration</h2>
                                                <p className="leading-relaxed">Get insights into upcoming space missions and projects aimed at exploring beyond our planet. Understand the goals and challenges of future space exploration.</p>
                                                <a className={`${colorClass} inline-flex items-center mt-4`} >Read More
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
                                        <div className="py-8 px-4">
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
                                        <div className="py-8 px-4 ">
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
                                        <div className="py-8 px-4 ">
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
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col-reverse w-full">
                                        <div className="md:pr-10 md:py-6">
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${selectBtnColorClass} inline-flex items-center justify-center text-white relative z-10`}>
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
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${selectBtnColorClass} inline-flex items-center justify-center text-white relative z-10`}>
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
                                        <img className="object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step" />
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                                    <div className="flex mx-auto flex-wrap mb-20">
                                        <a className={`sm:px-6 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-400 inline-flex items-center leading-none ${selectColorBorder} ${colorClass} tracking-wider rounded-t`}>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                            STEP 1
                                        </a>
                                        <a className="sm:px-6 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 tracking-wider">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                            STEP 2
                                        </a>
                                        <a className="sm:px-6 py-3  sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 tracking-wider">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                                <circle cx="12" cy="5" r="3"></circle>
                                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                            </svg>
                                            STEP 3
                                        </a>
                                        <a className="sm:px-6 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 tracking-wider">
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
                        case 2:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div className="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div className={"flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"}>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow sm:pl-2 mt-6 sm:mt-0">
                                                <h2 className={`font-medium title-font ${colorClass} mb-1 text-xl`}>Step One</h2>
                                                <p className="leading-relaxed">This is the updated content for step one. It provides detailed information about the first step of the process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div className="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div className={"flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"}>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className={`font-medium title-font ${colorClass} mb-1 text-xl`}>Step Two</h2>
                                                <p className="leading-relaxed">This is the updated content for step two. It provides detailed information about the second step of the process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div className="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div className={"flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"}>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"></circle>
                                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className={`font-medium title-font ${colorClass} mb-1 text-xl`}>Step Three</h2>
                                                <p className="leading-relaxed">This is the updated content for step three. It provides detailed information about the third step of the process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div className="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div className={"flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"}>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className={`font-medium title-font ${colorClass} mb-1 text-xl`}>Step Four</h2>
                                                <p className="leading-relaxed">This is the updated content for step four. It provides detailed information about the fourth step of the process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 3:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded">
                                                <div className={`inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full  ${selectBtnColorClass} text-white flex-shrink-0`}>
                                                    <span className="text-lg font-medium">1</span>
                                                </div>
                                                <h2 className={`text-lg font-medium title-font mb-2 ${colorClass}`}>Step 1: Initial Planning</h2>
                                                <p className="leading-relaxed text-base">Start by outlining the main objectives and scope of the project. Ensure all stakeholders are aligned and understand their roles.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded">
                                                <div className={`inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full  ${selectBtnColorClass} text-white flex-shrink-0`}>
                                                    <span className="text-lg font-medium">2</span>
                                                </div>
                                                <h2 className={`text-lg font-medium title-font mb-2 ${colorClass}`}>Step 2: Research</h2>
                                                <p className="leading-relaxed text-base">Conduct thorough research on the market, competitors, and user needs to gather essential information for the project.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded">
                                                <div className={`inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full  ${selectBtnColorClass} text-white flex-shrink-0`}>
                                                    <span className="text-lg font-medium">3</span>
                                                </div>
                                                <h2 className={`text-lg font-medium title-font mb-2 ${colorClass}`}>Step 3: Design</h2>
                                                <p className="leading-relaxed text-base">Create initial designs and prototypes. Gather feedback from stakeholders and iterate to refine the designs.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded">
                                                <div className={`inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full  ${selectBtnColorClass} text-white flex-shrink-0`}>
                                                    <span className="text-lg font-medium">4</span>
                                                </div>
                                                <h2 className={`text-lg font-medium title-font mb-2 ${colorClass}`}>Step 4: Development</h2>
                                                <p className="leading-relaxed text-base">Begin the development process. Follow best practices and ensure code quality through regular reviews and testing.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded">
                                                <div className={`inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full  ${selectBtnColorClass} text-white flex-shrink-0`}>
                                                    <span className="text-lg font-medium">5</span>
                                                </div>
                                                <h2 className={`text-lg font-medium title-font mb-2 ${colorClass}`}>Step 5: Testing</h2>
                                                <p className="leading-relaxed text-base">Perform extensive testing to identify and fix bugs. Ensure the application meets all functional and non-functional requirements.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded">
                                                <div className={`inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full  ${selectBtnColorClass} text-white flex-shrink-0`}>
                                                    <span className="text-lg font-medium">6</span>
                                                </div>
                                                <h2 className={`text-lg font-medium title-font mb-2 ${colorClass}`}>Step 6: Launch</h2>
                                                <p className="leading-relaxed text-base">Prepare for the launch by finalizing all documentation and marketing materials. Deploy the application to production.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 4:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorClass}`}>Project Timeline</h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Follow these steps to ensure a successful project completion.</p>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded-lg border shadow-md flex flex-col items-center text-center">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full   ${selectBtnColorClass} text-white mb-5 flex-shrink-0`}>
                                                    <span className="text-lg font-medium">1</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} text-lg title-font font-medium mb-3`}>Ideation</h2>
                                                    <p className="leading-relaxed text-base">Brainstorm and generate ideas for your project. Discuss with your team to identify the best concept to pursue.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded-lg border shadow-md flex flex-col items-center text-center">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full   ${selectBtnColorClass} text-white mb-5 flex-shrink-0`}>
                                                    <span className="text-lg font-medium">2</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} text-lg title-font font-medium mb-3`}>Planning</h2>
                                                    <p className="leading-relaxed text-base">Create a detailed plan including timelines, resources, and roles. Ensure everyone is clear about their tasks.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded-lg border shadow-md flex flex-col items-center text-center">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full   ${selectBtnColorClass} text-white mb-5 flex-shrink-0`}>
                                                    <span className="text-lg font-medium">3</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} text-lg title-font font-medium mb-3`}>Design</h2>
                                                    <p className="leading-relaxed text-base">Develop wireframes and prototypes. Iterate on the design based on feedback until you reach the final version.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded-lg border shadow-md flex flex-col items-center text-center">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full   ${selectBtnColorClass} text-white mb-5 flex-shrink-0`}>
                                                    <span className="text-lg font-medium">4</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} text-lg title-font font-medium mb-3`}>Development</h2>
                                                    <p className="leading-relaxed text-base">Start coding the project. Follow best practices and ensure regular code reviews to maintain quality.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded-lg border shadow-md flex flex-col items-center text-center">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full   ${selectBtnColorClass} text-white mb-5 flex-shrink-0`}>
                                                    <span className="text-lg font-medium">5</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} text-lg title-font font-medium mb-3`}>Testing</h2>
                                                    <p className="leading-relaxed text-base">Thoroughly test the project to catch any bugs. Perform both functional and user acceptance testing.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 w-full">
                                            <div className="h-full bg-gray-400 p-8 rounded-lg border shadow-md flex flex-col items-center text-center">
                                                <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full   ${selectBtnColorClass} text-white mb-5 flex-shrink-0`}>
                                                    <span className="text-lg font-medium">6</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} text-lg title-font font-medium mb-3`}>Launch</h2>
                                                    <p className="leading-relaxed text-base">Deploy the project to production. Monitor the launch and be ready to address any issues that arise.</p>
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
                return renderComponentDesignForSteps();
            // For the Ecommerce Section
            case 9:
                const renderComponentDesignForEcommerce = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x260" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ELECTRONICS</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Smartphone</h2>
                                                <p className="mt-1">$299.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FASHION</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Designer Dress</h2>
                                                <p className="mt-1">$149.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOME</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Modern Lamp</h2>
                                                <p className="mt-1">$39.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GADGETS</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Wireless Headphones</h2>
                                                <p className="mt-1">$89.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BOOKS</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Best Seller</h2>
                                                <p className="mt-1">$24.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FASHION</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Luxury Watch</h2>
                                                <p className="mt-1">$199.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOME</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Cozy Sofa</h2>
                                                <p className="mt-1">$499.99</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GADGETS</h3>
                                                <h2 className={`${colorClass} title-font text-lg font-medium`}>Smart Watch</h2>
                                                <p className="mt-1">$129.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font overflow-hidden">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className=" mx-auto flex  flex-col-reverse">
                                        <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                            <h1 className={`${colorClass} text-3xl title-font font-medium mb-4`}>Eco-Friendly Reusable Bottle</h1>
                                            <div className="flex mb-4">
                                                <a className={`flex-grow ${colorClass} border-b-2 ${selectColorBorder} py-2 text-lg px-1`}>Description</a>
                                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                                            </div>
                                            <p className="leading-relaxed mb-4">This eco-friendly reusable bottle is perfect for those who care about the environment. Made from sustainable materials, it helps reduce plastic waste and keeps your beverages at the right temperature for hours.</p>
                                            <div className="flex border-t border-gray-200 py-2">
                                                <span className="text-gray-500">Color</span>
                                                <span className="ml-auto text-gray-900">Green</span>
                                            </div>
                                            <div className="flex border-t border-gray-200 py-2">
                                                <span className="text-gray-500">Size</span>
                                                <span className="ml-auto text-gray-900">750ml</span>
                                            </div>
                                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                                <span className="text-gray-500">Quantity</span>
                                                <span className="ml-auto text-gray-900">1</span>
                                            </div>
                                            <div className="flex">
                                                <span className={`title-font font-medium text-2xl ${colorClass}`}>$25.00</span>
                                                <button className={`flex ml-auto text-white ${selectBtnColorClass} border-0 py-2 px-6 focus:outline-none rounded`}>Add to Cart</button>
                                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <img alt="ecommerce" className=" w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className="text-gray-600 body-font overflow-hidden">
                                <div className="container py-24 mx-auto">
                                    <div className="mx-auto flex flex-col">
                                        <img alt="ecommerce" className=" w-full h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                                        <div className=" w-full mt-6 lg:mt-0">
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest">LIFESTYLE BRAND</h2>
                                            <h1 className={`${colorClass} text-3xl title-font font-medium mb-1`}>Eco-Friendly Bamboo Toothbrush</h1>
                                            <div className="flex mb-4">
                                                <span className="flex items-center">
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                                </span>
                                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                            <p className="leading-relaxed">This eco-friendly bamboo toothbrush is a perfect choice for those who want to reduce their plastic footprint. Made from sustainable bamboo, it offers a natural and comfortable brushing experience.</p>
                                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                                <div className="flex">
                                                    <span className="mr-3">Color</span>
                                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                                </div>
                                                <div className="flex ml-6 items-center">
                                                    <span className="mr-3">Size</span>
                                                    <div className="relative">
                                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                            <option>Standard</option>
                                                            <option>Medium</option>
                                                            <option>Large</option>
                                                            <option>Extra Large</option>
                                                        </select>
                                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                                <path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span className={`title-font font-medium text-2xl ${colorClass}`}>$12.00</span>
                                                <button className={`flex ml-auto text-white ${selectBtnColorClass} border-0 py-2 px-6 focus:outline-none rounded`}>Add to Cart</button>
                                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 3:
                            return <section className="flex flex-col p-10 text-gray-600">
                                <h1 className={`text-3xl ${colorClass}`}>Product Category Page Title</h1>
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
                                    <span className="text-sm font-semibold">1-8 of 148 Products</span>
                                    <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
                                        <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
                                            <span className="font-medium">
                                                Popular
                                            </span>
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
                                            <a className="w-full px-4 py-2 text-left" >Popular</a>
                                            <a className="w-full px-4 py-2 text-left" >Featured</a>
                                            <a className="w-full px-4 py-2 text-left" >Newest</a>
                                            <a className="w-full px-4 py-2 text-left" >Lowest Price</a>
                                            <a className="w-full px-4 py-2 text-left" >Highest Price</a>
                                        </div>
                                    </button>
                                </div>
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a className="block h-64 rounded-lg shadow-lg bg-gray-300"></a>
                                        <div className="flex items-center justify-between mt-3">
                                            <div>
                                                <a className="font-medium">Product Name</a>
                                                <a className="flex items-center" >
                                                    <span className="text-xs font-medium text-gray-600">by</span>
                                                    <span className={`text-xs font-medium ml-1 ${colorClass}`}>Store Name</span>
                                                </a>
                                            </div>
                                            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-center mt-10 space-x-1">
                                    <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <button className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400" disabled>
                                        Prev
                                    </button>
                                    <button className="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600" disabled>
                                        1
                                    </button>
                                    <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
                                        2
                                    </button>
                                    <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
                                        3
                                    </button>
                                    <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
                                        Next
                                    </button>
                                    <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </section>
                        case 4:
                            return <section className="py-9 px-4">
                                <div id="viewerBox" className="lg:p-10 md:p-6 p-4 ">
                                    <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col items-strech justify-center">
                                        <div className=" flex justify-between items-strech px-2 py-20 md:py-6">
                                            <div className="flex items-center">
                                                <button aria-label="slide back"
                                                    className="focus:outline-none">
                                                    <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M40 16L24 32L40 48" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="slider">
                                                <div className="slide-ana">
                                                    <div className="flex">
                                                        <img alt="ecommerce" className="w-full h-full object-cover object-center rounded" src="https://dummyimage.com/400x400" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <button aria-label="slide forward"
                                                    className="focus:outline-none ">
                                                    <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 16L40 32L24 48" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col justify-center mt-7 ">
                                            <h1 className={`text-3xl lg:text-4xl font-semibold ${colorClass}`}>Bar Stool</h1>
                                            <p className="text-base leading-normal text-gray-600 mt-2">You don't just want to be
                                                comfortable sitting in a bar stool—you want to be comfortable shimmying it up to the bar, closer to
                                                your lover, or back slightly to include a third person in the conversation.</p>
                                            <p className="text-3xl font-medium text-gray-600 mt-8 md:mt-10"></p>
                                            <div
                                                className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                                                <button
                                                    className={`w-full  font-medium leading-none text-white uppercase py-6   ${selectBtnColorClass}  `}>Add
                                                    to Cart</button>
                                                <button
                                                    className="w-full  border border-gray-200 text-base font-medium leading-none text-gray-600  uppercase py-6 bg-transparent hover:bg-gray-800 hover:text-white  ">View
                                                    Details</button>
                                            </div>
                                            <div className="mt-6">
                                                <button
                                                    className="text-xl underline text-gray-600 capitalize hover:text-gray-500">add
                                                    to wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        default:
                            break;
                    }
                }
                return renderComponentDesignForEcommerce();
            // For the CTA Section
            case 10:
                const renderComponentDesignForCTA = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className=" flex flex-col gap-4 items-center mx-auto">
                                        <h1 className={`text-2xl font-medium title-font text-gray-600`}>
                                            Enhance your online shopping experience with our versatile and high-performing eCommerce sections.
                                        </h1>
                                        <button className={`flex-shrink-0 text-white ${selectBtnColorClass} border-0 py-2 px-8 focus:outline-none mx-auto mt-20 rounded text-lg sm:mt-0`}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                                    <div className="lg:pr-0 pr-0">
                                        <h1 className={`title-font font-medium text-3xl ${colorClass}`}>
                                            Discover our high-quality, engaging, and efficient eCommerce solutions.
                                        </h1>
                                        <p className="leading-relaxed mt-4">
                                            Explore a variety of sections designed to enhance your online shopping experience with versatility and performance.
                                        </p>
                                    </div>
                                    <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-20 md:mt-10">
                                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                                        <div className="relative mb-4">
                                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <div className="relative mb-4">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <button className={`text-white border-0 py-2 px-8 ${selectBtnColorClass} focus:outline-none rounded text-lg`}>
                                            Sign Up
                                        </button>
                                        <p className="text-xs text-gray-500 mt-3">
                                            Join our community and start enjoying the benefits of seamless online shopping.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-12">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorClass}`}>
                                            Enhance Your Shopping Experience
                                        </h1>
                                        <p className=" mx-auto leading-relaxed text-base">
                                            Discover our curated collection of eCommerce solutions designed to provide a seamless and engaging shopping experience. Join us and explore the future of online shopping.
                                        </p>
                                    </div>
                                    <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                        <div className="relative flex-grow w-full">
                                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <div className="relative flex-grow w-full">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <button className={`text-white ${selectBtnColorClass} border-0 py-2 px-8 focus:outline-none rounded text-lg`}>
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </section>
                        case 3:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto grid items-center">
                                    <div className="grid md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                                        <h2 className={`text-xs ${colorClass} tracking-widest font-medium title-font mb-1`}>E-COMMERCE SOLUTIONS</h2>
                                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-600">
                                            Enhance Your Online Shopping Experience
                                        </h1>
                                    </div>
                                    <div className="flex mt-10 mx-auto items-center flex-shrink-0 space-x-4">
                                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                                <span className="title-font font-medium">Google Play</span>
                                            </span>
                                        </button>
                                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
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
                            </section>
                        case 4:
                            return <div className="m-auto px-6 py-40">
                                <div className=" items-center justify-between relative w-100 h-auto md:h-64  shadow-2xl shadow-gray-50 rounded-lg p-8">
                                    <div className="text-2xl">
                                        <span className="flex">We are team of developers with houndreds hours spend on coding, we create professional apps, webs.</span>
                                    </div>
                                    <div className={`relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer ${selectBtnColorClass} rounded text-lg text-center w-48`}>
                                        <span className={`absolute w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 ${selectBtnColorClass}`}>
                                        </span>
                                        Call now
                                    </div>
                                </div>
                            </div>


                        default:
                            break;
                    }
                }
                return renderComponentDesignForCTA();
            // For the Teams Sections
            case 11:
                const renderComponentDesignForTeams = () => {
                    switch (codevalue) {
                        case 0:
                            return <div className="mb-16">
                                <div className="container flex justify-center mx-auto pt-16">
                                    <div>
                                        <p className={`${colorClass} text-lg text-center font-normal pb-3`}>BUILDING TEAM</p>
                                        <h1 className="xl:text-xl text-2xl text-center text-gray-600 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                                            The Talented People Behind the Scenes of the Organization
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full pt-10">
                                    <div className="container mx-auto">
                                        <div
                                            role="list"
                                            aria-label="Behind the scenes People"
                                            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                                        >
                                            {[
                                                {
                                                    name: 'Andres Berlin',
                                                    position: 'Chief Executive Officer',
                                                    description:
                                                        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
                                                    img: 'https://dummyimage.com/120x120',
                                                },
                                                {
                                                    name: 'Silene Tokyo',
                                                    position: 'Product Design Head',
                                                    description:
                                                        'The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.',
                                                    img: 'https://dummyimage.com/120x120',
                                                },
                                                {
                                                    name: 'Johnson Stone',
                                                    position: 'Manager Development',
                                                    description:
                                                        'Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.',
                                                    img: 'https://dummyimage.com/120x120',
                                                },

                                            ].map((person, index) => (
                                                <div
                                                    key={index}
                                                    role="listitem"
                                                    className="relative mt-16 mb-32 sm:mb-24 "
                                                >
                                                    <div className="rounded-xl overflow-hidden shadow-md border border-gray-600">
                                                        <div className="absolute -mt-20 w-full flex justify-center">
                                                            <div className="h-32 w-42">
                                                                <img
                                                                    src={person.img}
                                                                    alt={`Display Picture of ${person.name}`}
                                                                    role="img"
                                                                    className="rounded-full object-cover h-full w-full shadow-md"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="px-6 mt-16">
                                                            <h1 className={`font-bold text-3xl text-center ${colorClass} mb-1`}>{person.name}</h1>
                                                            <p className="text-white text-sm text-center">{person.position}</p>
                                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                                                {person.description}
                                                            </p>
                                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                                <h1 className="mx-5">
                                                                    <div aria-label="Github" role="img">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="#718096"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="feather feather-github"
                                                                        >
                                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                                        </svg>
                                                                    </div>
                                                                </h1>
                                                                <h1 className="mx-5">
                                                                    <div aria-label="Twitter" role="img">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="#718096"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="feather feather-twitter"
                                                                        >
                                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </h1>
                                                                <h1 className="mx-5">
                                                                    <div aria-label="Instagram" role="img">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="#718096"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="feather feather-instagram"
                                                                        >
                                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                                        </svg>
                                                                    </div>
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        case 1:
                            return <section className="text-gray-400 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorClass}`}>Our Team</h1>
                                        <p className="mx-auto leading-relaxed text-base">
                                            Meet the dedicated team behind our success. Our talented professionals are committed to delivering exceptional results and pushing the boundaries of innovation.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                                <img
                                                    alt="team"
                                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                    src="https://dummyimage.com/80x80"
                                                />
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} title-font font-medium`}>Alice Johnson</h2>
                                                    <p className="text-gray-600">UI Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                                <img
                                                    alt="team"
                                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                    src="https://dummyimage.com/84x84"
                                                />
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} title-font font-medium`}>Bob Smith</h2>
                                                    <p className="text-gray-600">CTO</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                                <img
                                                    alt="team"
                                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                    src="https://dummyimage.com/88x88"
                                                />
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} title-font font-medium`}>Charlie Brown</h2>
                                                    <p className="text-gray-600">Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                                <img
                                                    alt="team"
                                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                    src="https://dummyimage.com/90x90"
                                                />
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} title-font font-medium`}>David Williams</h2>
                                                    <p className="text-gray-600">DevOps</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                                <img
                                                    alt="team"
                                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                    src="https://dummyimage.com/94x94"
                                                />
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} title-font font-medium`}>Eva Thompson</h2>
                                                    <p className="text-gray-600">Software Engineer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                                <img
                                                    alt="team"
                                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                    src="https://dummyimage.com/94x94"
                                                />
                                                <div className="flex-grow">
                                                    <h2 className={`${colorClass} title-font font-medium`}>Eva Thompson</h2>
                                                    <p className="text-gray-600">Software Engineer</p>
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
                                        <h1 className={`text-2xl font-medium title-font mb-4 ${colorClass} tracking-widest`}>OUR TEAM</h1>
                                        <p className="mx-auto leading-relaxed text-base">
                                            Our diverse and dedicated team brings a wealth of experience and expertise, committed to delivering exceptional results and fostering innovation.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4">
                                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                                                <div className="flex-grow sm:pl-8">
                                                    <h2 className={`title-font font-medium text-lg ${colorClass}`}>Alice Johnson</h2>
                                                    <h3 className="text-gray-500 mb-3">Lead UI Developer</h3>
                                                    <p className="mb-4">Alice has a knack for creating stunning user interfaces and a passion for pixel-perfect design.</p>
                                                    <span className="inline-flex">
                                                        <a className="text-gray-500" href="https://facebook.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://twitter.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://linkedin.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201" />
                                                <div className="flex-grow sm:pl-8">
                                                    <h2 className={`title-font font-medium text-lg ${colorClass}`}>Bob Smith</h2>
                                                    <h3 className="text-gray-500 mb-3">CTO</h3>
                                                    <p className="mb-4">Bob's technical expertise and leadership drive our innovative solutions and strategic growth.</p>
                                                    <span className="inline-flex">
                                                        <a className="text-gray-500" href="https://facebook.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://twitter.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://linkedin.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 ">
                                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204" />
                                                <div className="flex-grow sm:pl-8">
                                                    <h2 className={`title-font font-medium text-lg ${colorClass}`}>Charlie Brown</h2>
                                                    <h3 className="text-gray-500 mb-3">UX Researcher</h3>
                                                    <p className="mb-4">Charlie excels in understanding user needs and translating them into impactful designs.</p>
                                                    <span className="inline-flex">
                                                        <a className="text-gray-500" href="https://facebook.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://twitter.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://linkedin.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/207x207" />
                                                <div className="flex-grow sm:pl-8">
                                                    <h2 className={`title-font font-medium text-lg ${colorClass}`}>Dana White</h2>
                                                    <h3 className="text-gray-500 mb-3">Content Strategist</h3>
                                                    <p className="mb-4">Dana develops compelling content strategies that engage and resonate with our audience.</p>
                                                    <span className="inline-flex">
                                                        <a className="text-gray-500" href="https://facebook.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://twitter.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a className="ml-2 text-gray-500" href="https://linkedin.com">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 3:
                            return <section className="py-6 text-gray-800">
                                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                                    <h1 className={`text-4xl font-bold leading-none text-center ${colorClass} sm:text-5xl`}>Our team</h1>
                                    <p className="max-w-2xl text-center text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                                    <div className="flex flex-row flex-wrap-reverse justify-center">
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://dummyimage.com/200x200" />
                                            <p className={`text-xl font-semibold leading-tight ${colorClass}`}>Leroy Jenkins</p>
                                            <p className="text-gray-600">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://dummyimage.com/200x200" />
                                            <p className={`text-xl font-semibold leading-tight ${colorClass}`}>Leroy Jenkins</p>
                                            <p className="text-gray-600">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://dummyimage.com/200x200" />
                                            <p className={`text-xl font-semibold leading-tight ${colorClass}`}>Leroy Jenkins</p>
                                            <p className="text-gray-600">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://dummyimage.com/200x200" />
                                            <p className={`text-xl font-semibold leading-tight ${colorClass}`}>Leroy Jenkins</p>
                                            <p className="text-gray-600">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://dummyimage.com/200x200" />
                                            <p className={`text-xl font-semibold leading-tight ${colorClass}`}>Leroy Jenkins</p>
                                            <p className="text-gray-600">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://dummyimage.com/200x200" />
                                            <p className={`text-xl font-semibold leading-tight ${colorClass}`}>Leroy Jenkins</p>
                                            <p className="text-gray-600">Visual Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        default:
                            break;
                    }
                }
                return renderComponentDesignForTeams();
            // For the Features Section
            case 12:
                const renderComponentDesignForFeatures = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className='text-gray-600'>
                                <div className="px-6 py-10 mx-auto">
                                    <h1 className={`text-3xl font-semibold capitalize lg:text-2xl ${colorClass}`}>explore our <br></br> awesome
                                        <span className="underline decoration-gray-400">Components</span></h1>

                                    <p className="mt-4 text-gray-500 xl:mt-6">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                    </p>

                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-1 xl:grid-cols-1">
                                        <div className="p-8 space-y-3 border-2 border-gray-600 rounded-xl">
                                            <span className={`inline-block ${colorClass}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                </svg>
                                            </span>

                                            <h1 className="text-2xl font-semibold text-gray-600 capitalize">elegant Dark Mode</h1>

                                            <p className="text-gray-500 ">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                                                corrupti doloribus voluptatum eveniet
                                            </p>

                                            <p
                                                className={`inline-flex p-2 ${colorClass} capitalize transition-colors duration-200 transform bg-gray-300 rounded-full  `}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </p>
                                        </div>

                                        <div className="p-8 space-y-3 border-2 border-gray-600  rounded-xl">
                                            <span className={`inline-block ${colorClass}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                                </svg>
                                            </span>

                                            <h1 className="text-2xl font-semibold text-gray-600 capitalize ">Easy to customiztions</h1>

                                            <p className="text-gray-500 ">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                                                corrupti doloribus voluptatum eveniet
                                            </p>

                                            <p
                                                className={`inline-flex p-2 ${colorClass} capitalize transition-colors duration-200 transform bg-gray-300 rounded-full  `}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </p>
                                        </div>

                                        <div className="p-8 space-y-3 border-2 border-gray-600  rounded-xl">
                                            <span className={`inline-block ${colorClass}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </span>

                                            <h1 className="text-2xl font-semibold text-gray-600 capitalize ">Simple & clean designs</h1>

                                            <p className="text-gray-500 ">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                                                corrupti doloribus voluptatum eveniet
                                            </p>

                                            <p
                                                className={`inline-flex p-2 ${colorClass} capitalize transition-colors duration-200 transform bg-gray-300 rounded-full  `}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1: <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="text-center mb-20">
                                    <h1 className={`sm:text-3xl text-2xl font-medium text-center title-font ${colorClass} mb-4`}>Our Unique Features</h1>
                                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the key features that set our product apart. From seamless integration to user-friendly design, we provide everything you need for success.</p>
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-600 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={`${colorClass} w-6 h-6 flex-shrink-0 mr-4`} viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium text-white">Seamless Integration</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-600 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={`${colorClass} w-6 h-6 flex-shrink-0 mr-4`} viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium text-white">User-Friendly Design</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-600 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={`${colorClass} w-6 h-6 flex-shrink-0 mr-4`} viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium text-white">Advanced Security</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-600 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={`${colorClass} w-6 h-6 flex-shrink-0 mr-4`} viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium text-white">Customizable Options</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-600 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={`${colorClass} w-6 h-6 flex-shrink-0 mr-4`} viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium text-white">24/7 Support</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-600 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={`${colorClass} w-6 h-6 flex-shrink-0 mr-4`} viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium text-white">Scalable Solutions</span>
                                        </div>
                                    </div>
                                </div>
                                <button className={`flex mx-auto mt-16 text-white ${selectBtnColorClass} border-0 py-2 px-8 focus:outline-none  rounded text-lg`}>Learn More</button>
                            </div>
                        </section>

                        case 2:
                            return <section className="text-gray-400 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <h1 className={`sm:text-3xl text-2xl font-medium title-font text-center ${colorClass} mb-20`}>Our Premium Services
                                        <p className="hidden sm:block">Designed for Excellence </p>
                                    </h1>
                                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                                        <div className="p-4 flex">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className={`${colorClass} text-lg title-font font-medium mb-2`}>Web Development</h2>
                                                <p className="leading-relaxed text-base">We provide cutting-edge web development services tailored to meet your business needs. Our expertise ensures your website is fast, responsive, and visually appealing.</p>
                                                <a className={`mt-3 ${colorClass} inline-flex items-center`}>Learn More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-4 flex">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <circle cx="6" cy="6" r="3"></circle>
                                                    <circle cx="6" cy="18" r="3"></circle>
                                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className={`${colorClass} text-lg title-font font-medium mb-2`}>App Development</h2>
                                                <p className="leading-relaxed text-base">Our team specializes in creating high-performance mobile applications. We turn your ideas into innovative, user-friendly apps that engage your audience effectively.</p>
                                                <a className={`mt-3 ${colorClass} inline-flex items-center`}>Learn More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-4 flex">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className={`${colorClass} text-lg title-font font-medium mb-2`}>Digital Marketing</h2>
                                                <p className="leading-relaxed text-base">Our digital marketing strategies are designed to boost your online presence. We leverage SEO, social media, and content marketing to drive traffic and increase conversions.</p>
                                                <a className={`mt-3 ${colorClass} inline-flex items-center`}>Learn More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        case 3:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className={`${colorClass} text-lg title-font font-medium mb-2`}>Web Design</h2>
                                            <p className="leading-relaxed text-base">Our web design services focus on creating visually stunning and user-friendly websites that captivate your audience and enhance your online presence.</p>
                                            <a className={`mt-3 ${colorClass} inline-flex items-center`}>Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className={`${colorClass} text-lg title-font font-medium mb-2`}>E-commerce Solutions</h2>
                                            <p className="leading-relaxed text-base">We offer comprehensive e-commerce solutions that help you build and manage your online store, from product listings to payment processing and customer support.</p>
                                            <a className={`mt-3 ${colorClass} inline-flex items-center`}>Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                                <circle cx="6" cy="6" r="3"></circle>
                                                <circle cx="6" cy="18" r="3"></circle>
                                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center mx-auto sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className={`${colorClass} text-lg title-font font-medium mb-2`}>SEO Optimization</h2>
                                            <p className="leading-relaxed text-base">Our SEO services are designed to improve your website's visibility on search engines, driving more traffic and increasing your online reach.</p>
                                            <a className={`mt-3 ${colorClass} inline-flex items-center`}>Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <button className={`flex mx-auto mt-20 text-white  border-0 py-2 px-8 focus:outline-none ${selectBtnColorClass} rounded text-lg`}>Get Started</button>
                                </div>
                            </section>
                        case 4:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24">
                                    <div className="text-center mb-20">
                                        <h1 className={`sm:text-3xl text-2xl font-medium  title-font ${colorClass} mb-4`}>Unique Handcrafted Items</h1>
                                        <p className="text-base leading-relaxed mx-auto">Discover a range of unique, handcrafted items that blend tradition with modernity. Our collection includes bespoke pieces that are perfect for any occasion.</p>
                                    </div>
                                    <div className="flex flex-wrap w-full gap-4">
                                        <div className="flex justify-between item-center">
                                            <div className="p-4">
                                                <h2 className={`font-medium title-font tracking-widest ${colorClass} mb-4 text-sm text-center `}>Artisanal Jewelry</h2>
                                                <nav className="flex flex-col sm:items-start text-center items-center -mb-1 space-y-2.5">
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Necklaces
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Rings
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Bracelets
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Earrings
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Custom Orders
                                                    </a>
                                                </nav>
                                            </div>
                                            <div className="p-4 ">
                                                <h2 className={`font-medium title-font tracking-widest ${colorClass} mb-4 text-sm text-center sm:text-left`}>Handmade Decor</h2>
                                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Wall Art
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Sculptures
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Planters
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Furniture
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Textiles
                                                    </a>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="flex justify-between item-center">
                                            <div className="p-4 ">
                                                <h2 className={`font-medium title-font tracking-widest ${colorClass} mb-4 text-sm text-center sm:text-left`}>Eco-Friendly Products</h2>
                                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Reusable Bags
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Bamboo Products
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Zero Waste Kits
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Recycled Stationery
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Organic Clothing
                                                    </a>
                                                </nav>
                                            </div>
                                            <div className="p-4 ">
                                                <h2 className={`font-medium title-font tracking-widest ${colorClass} mb-4 text-sm text-center sm:text-left`}>Gourmet Treats</h2>
                                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Handmade Chocolates
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Organic Teas
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Artisanal Spices
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Homemade Jams
                                                    </a>
                                                    <a>
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>Gourmet Sauces
                                                    </a>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        default:
                            break;
                    }
                }
                return renderComponentDesignForFeatures();
            // For the Footer Section
            case 13:
                const renderComponentDesignForFooter = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className="text-gray-600">
                                <div className="w-full px-4 py-16 sm:px-6 ">
                                    <div className="lg:flex grid">

                                        <div className="mt-8 gap-8 ">
                                            <div className="col-span-2">
                                                <div>
                                                    <h2 className={`text-2xl font-bold ${colorClass}`}>Get the latest news!</h2>

                                                    <p className="mt-4 text-gray-600">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                                                        molestias.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                                                <form className="w-full">
                                                    <label htmlFor="UserEmail" className="sr-only"> Email </label>

                                                    <div
                                                        className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                                    >
                                                        <input
                                                            type="email"
                                                            id="UserEmail"
                                                            placeholder="john@rhcp.com"
                                                            className="w-full border-none p-4 rounded-sm bg sm:text-sm"
                                                        />

                                                        <button
                                                            className={`mt-1 w-full ${selectBtnColorClass} rounded-sm  px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none  sm:mt-0 sm:w-auto sm:shrink-0`}
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <p className={`font-medium ${colorClass}`}>Services</p>

                                                <ul className="mt-6 space-y-4 text-sm">
                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> Company Review </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> Accounts Review </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> HR Consulting </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <p className={`font-medium ${colorClass}`}>Company</p>

                                                <ul className="mt-6 space-y-4 text-sm">
                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> About </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> Meet the Team </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> Accounts Review </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <p className={`font-medium ${colorClass}`}>Helpful Links</p>

                                                <ul className="mt-6 space-y-4 text-sm">
                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> Contact </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> FAQs </p>
                                                    </li>

                                                    <li>
                                                        <p className="text-gray-700 transition hover:opacity-75"> Live Chat </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <p className={`font-medium ${colorClass}`}>Legal</p>

                                                <ul className="mt-6 space-y-4 text-sm">
                                                    <li>
                                                        <a className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
                                                    </li>

                                                    <li>
                                                        <a className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
                                                    </li>

                                                    <li>
                                                        <a className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
                                                    </li>

                                                    <li>
                                                        <a className="text-gray-700 transition hover:opacity-75"> Hiring Statistics </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <p className={`font-medium ${colorClass}`}>Downloads</p>

                                                <ul className="mt-6 space-y-4 text-sm">
                                                    <li>
                                                        <a className="text-gray-700 transition hover:opacity-75"> Marketing Calendar </a>
                                                    </li>

                                                    <li>
                                                        <a className="text-gray-700 transition hover:opacity-75"> SEO Infographics </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                                                <li>
                                                    <a

                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        <span className="sr-only">Facebook</span>

                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a

                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        <span className="sr-only">Instagram</span>

                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a

                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        <span className="sr-only">Twitter</span>

                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path
                                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a

                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        <span className="sr-only">GitHub</span>

                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a

                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        <span className="sr-only">Dribbble</span>

                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t border-gray-100 pt-8">
                                        <div className="sm:flex sm:justify-between">
                                            <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>

                                            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                                                <li>
                                                    <p className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </p>
                                                </li>

                                                <li>
                                                    <p className="text-gray-500 transition hover:opacity-75"> Privacy Policy </p>
                                                </li>

                                                <li>
                                                    <p className="text-gray-500 transition hover:opacity-75"> Cookies </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        case 1:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto grid md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
                                    <div className=" text-center ">
                                        <a className="flex title-font font-medium items-center justify-center text-gray-900">

                                            <span className={`ml-3 text-xl ${colorClass}`}>TailFusion</span>
                                        </a>
                                        <p className="mt-2 text-sm text-gray-600">Creating beautiful UIs with ease and efficiency.</p>
                                    </div>
                                    <div className="flex-grow flex flex-wrap mt-10 text-center">
                                        <div className="w-1/2 px-4">
                                            <h2 className={`title-font font-medium ${colorClass} tracking-widest text-sm mb-3`}>CONTACT INFORMATION</h2>
                                            <nav className="list-none mb-10">
                                                <li>
                                                    <a href="mailto:info@tailfusion.com" className="text-gray-600 hover:text-gray-800">info@tailfusion.com</a>
                                                </li>
                                                <li>
                                                    <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800">+1 (234) 567-890</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.google.com/maps/place/TailFusion" target="_blank" className="text-gray-600 hover:text-gray-800">123 TailFusion St, UI City</a>
                                                </li>
                                            </nav>
                                        </div>
                                        <div className="w-1/2 px-4">
                                            <h2 className={`title-font font-medium ${colorClass} tracking-widest text-sm mb-3`}>QUICK LINKS</h2>
                                            <nav className="list-none mb-10">
                                                <li>
                                                    <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/services" className="text-gray-600 hover:text-gray-800">Services</a>
                                                </li>
                                                <li>
                                                    <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                                </li>
                                                <li>
                                                    <a href="/terms-of-service" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
                                                </li>
                                            </nav>
                                        </div>
                                        <div className="w-1/2 px-4">
                                            <h2 className={`title-font font-medium ${colorClass} tracking-widest text-sm mb-3`}>SOCIAL MEDIA</h2>
                                            <nav className="list-none mb-10">
                                                <li>
                                                    <a href="https://facebook.com/tailfusion" target="_blank" className="text-gray-600 hover:text-gray-800">Facebook</a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/tailfusion" target="_blank" className="text-gray-600 hover:text-gray-800">Twitter</a>
                                                </li>
                                                <li>
                                                    <a href="https://linkedin.com/company/tailfusion" target="_blank" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
                                                </li>
                                                <li>
                                                    <a href="https://instagram.com/tailfusion" target="_blank" className="text-gray-600 hover:text-gray-800">Instagram</a>
                                                </li>
                                            </nav>
                                        </div>
                                        <div className="w-1/2 px-4">
                                            <h2 className={`title-font font-medium ${colorClass} tracking-widest text-sm mb-3`}>NEWSLETTER</h2>
                                            <nav className="list-none mb-10">
                                                <li>
                                                    <p className="text-gray-600">Sign up for our newsletter to stay updated with the latest news and special offers.</p>
                                                </li>
                                                <li>
                                                    <form action="#" method="post" className="mt-4">
                                                        <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none" required />
                                                        <button type="submit" className={`mt-2 px-4 py-2 text-white rounded-lg ${selectBtnColorClass}`}>Subscribe</button>
                                                    </form>
                                                </li>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 TailFusion —
                                            <a href="https://twitter.com/tailfusion" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@tailfusion</a>
                                        </p>
                                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                            <a className="text-gray-500 hover:text-gray-800" href="https://facebook.com/tailfusion" target="_blank">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-3 text-gray-500 hover:text-gray-800" href="https://twitter.com/tailfusion" target="_blank">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-3 text-gray-500 hover:text-gray-800" href="https://linkedin.com/company/tailfusion" target="_blank">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-3 text-gray-500 hover:text-gray-800" href="https://instagram.com/tailfusion" target="_blank">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </section>
                        case 2:
                            return <section className="text-gray-600 body-font">
                                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                                    <a className={`flex title-font font-medium items-center md:justify-start justify-center ${colorClass}`}>
                                        <span className="ml-3 text-xl">TailFusion</span>
                                    </a>
                                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 TailFusion —
                                        <a href="https://github.com/s21sd/Tailfusion.io" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@s21sd</a>
                                    </p>
                                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </section>
                        case 3:
                            return <section className="flex flex-col items-center text-center text-surface">
                                <div className="container p-6">
                                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                                        <div className="mb-6 lg:mb-0">
                                            <img
                                                src="https://dummyimage.com/200x100"
                                                className="w-full rounded-md shadow-lg" />
                                        </div>
                                        <div className="mb-6 lg:mb-0">
                                            <img
                                                src="https://dummyimage.com/200x100"
                                                className="w-full rounded-md shadow-lg" />
                                        </div>
                                        <div className="mb-6 lg:mb-0">
                                            <img
                                                src="https://dummyimage.com/200x100"
                                                className="w-full rounded-md shadow-lg" />
                                        </div>
                                        <div className="mb-6 lg:mb-0">
                                            <img
                                                src="https://dummyimage.com/200x100"
                                                className="w-full rounded-md shadow-lg" />
                                        </div>
                                        <div className="mb-6 lg:mb-0">
                                            <img
                                                src="https://dummyimage.com/200x100"
                                                className="w-full rounded-md shadow-lg" />
                                        </div>
                                        <div className="mb-6 lg:mb-0">
                                            <img
                                                src="https://dummyimage.com/200x100"
                                                className="w-full rounded-md shadow-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full ${colorClass} p-4 text-center`}>
                                    © 2024 Copyright:
                                    TailFusion
                                </div>
                            </section>
                        case 4:
                            return <div className="w-full min-h-screen flex items-center justify-center">
                                <div className=" w-full px-4 flex flex-col">
                                    <div className="w-full text-7xl md:text-4xl font-bold">
                                        <h1 className={`w-full ${colorClass}`}>How can we help you. get
                                            in touch</h1>
                                    </div>
                                    <div className="grid mt-8  md:flex-row md:justify-between">
                                        <p className="w-full text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                                        <div className="w-44 mt-4 pt-6 md:pt-0">
                                            <a className={`${selectBtnColorClass} justify-center text-center rounded-lg shadow px-10 py-3 flex items-center`}>Contact US</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex mt-24 mb-12 flex-row justify-between">
                                            <div className="md:text-xl">
                                                <h1 className="hidden md:block text-2xl md:text-xl cursor-pointer text-gray-600 hover:text-white uppercase">TailFusion</h1>
                                            </div>
                                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase md:text-sm">About</a>
                                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase md:text-sm">Services</a>
                                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase md:text-sm">Why us</a>
                                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase md:text-sm">Contact</a>
                                            <div className="flex flex-row space-x-8 items-center justify-between">
                                                <a>
                                                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z" fill="white" />
                                                    </svg>
                                                </a>
                                                <a>
                                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z" fill="white" />
                                                        <path d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z" fill="white" />
                                                        <path d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z" fill="white" />
                                                    </svg>
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="white" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <hr className="border-gray-600" />
                                        <p className={`w-full text-center my-12 ${colorClass}`}>Copyright © 2024 TailFusion</p>
                                    </div>
                                </div>
                            </div>

                        case 14:
                            const renderComponentDesignForStatics = () => {
                                switch (codevalue) {
                                    case 0:
                                        return <section className={`${colorClass} body-font`}>
                                            <div className="container px-5 py-24 mx-auto">
                                                <div className="flex flex-wrap -m-4 text-center">
                                                    <div className="p-4 sm:w-1/4 w-1/2">
                                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">5.1K</h2>
                                                        <p className="leading-relaxed">Active Users</p>
                                                    </div>
                                                    <div className="p-4 sm:w-1/4 w-1/2">
                                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">3.2K</h2>
                                                        <p className="leading-relaxed">Monthly Subscriptions</p>
                                                    </div>
                                                    <div className="p-4 sm:w-1/4 w-1/2">
                                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">120</h2>
                                                        <p className="leading-relaxed">Total Downloads</p>
                                                    </div>
                                                    <div className="p-4 sm:w-1/4 w-1/2">
                                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">8</h2>
                                                        <p className="leading-relaxed">Products Launched</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>


                                    default:
                                        break;
                                }
                            }
                            return renderComponentDesignForStatics();

                        default:
                            break;
                    }
                }
                return renderComponentDesignForFooter();
            // For the Statistics Section
            case 14:
                const renderComponentDesignForStatics = () => {
                    switch (codevalue) {
                        case 0:
                            return <section className={`${colorClass} body-font`}>
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap">
                                        <div className="p-4 md:text-sm">
                                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">5.1K</h2>
                                            <p className="leading-relaxed">Active Users</p>
                                        </div>
                                        <div className="p-4 md:text-sm">
                                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">3.2K</h2>
                                            <p className="leading-relaxed">Monthly Subscriptions</p>
                                        </div>
                                        <div className="p-4 md:text-sm">
                                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">120</h2>
                                            <p className="leading-relaxed">Total Downloads</p>
                                        </div>
                                        <div className="p-4 md:text-sm">
                                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-500">8</h2>
                                            <p className="leading-relaxed">Products Launched</p>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        default:
                            break;
                    }
                }
                return renderComponentDesignForStatics();
            default:
                return ''
        }
    }
    return (
        <>
            {RenderComponentsBasedOnTheValueOfTheComponent()}
        </>
    );
};


export default RenderDeviceComponents