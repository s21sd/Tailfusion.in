import { renderColor } from "@/app/utils/RenderColor/RenderColor";
import React from "react";
const Designone = ({
  valueOfTheComponent,
  codevalue,
  selectColor,
}: {
  valueOfTheComponent: number;
  codevalue: number;
  selectColor: string;
}) => {
  const colorClass = renderColor(selectColor);
  // Same thing I will do here will the valueOfTheComponent prop I will Add a swich case Of this
  const RenderComponentsBasedOnTheValueOfTheComponent = () => {
    switch (valueOfTheComponent) {
      case 0:
        const renderComponentDesignForCard = () => {
          switch (codevalue) {
            case 0:
              return (
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1
                            className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}
                          >
                            Raclette Blueberry Nextious Level
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <a
                            className={`${colorClass} inline-flex items-center`}
                          >
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
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1
                            className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}
                          >
                            Ennui Snackwave Thundercats
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <a
                            className={`${colorClass} inline-flex items-center`}
                          >
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
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1
                            className={`title-font sm:text-2xl text-xl font-medium ${colorClass} mb-3`}
                          >
                            Selvage Poke Waistcoat Godard
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <a
                            className={`${colorClass} inline-flex items-center`}
                          >
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
              );
            case 1:
              return (
                <section className="text-gray-400 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                          <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://dummyimage.com/720x400"
                            alt="blog"
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                              CATEGORY
                            </h2>
                            <h1
                              className={`title-font text-lg font-medium ${colorClass} mb-3`}
                            >
                              The Catalyzer
                            </h1>
                            <p className="leading-relaxed mb-3">
                              Photo booth fam kinfolk cold-pressed sriracha
                              leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <div className="flex items-center flex-wrap ">
                              <a
                                className={`${colorClass} text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}
                              >
                                Learn More
                                <svg
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                1.2K
                              </span>
                              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                      <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                          <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://dummyimage.com/721x401"
                            alt="blog"
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                              CATEGORY
                            </h2>
                            <h1
                              className={`title-font text-lg font-medium ${colorClass} mb-3`}
                            >
                              The 400 Blows
                            </h1>
                            <p className="leading-relaxed mb-3">
                              Photo booth fam kinfolk cold-pressed sriracha
                              leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <div className="flex items-center flex-wrap">
                              <a
                                className={`${colorClass} text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}
                              >
                                Learn More
                                <svg
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                1.2K
                              </span>
                              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                      <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                          <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://dummyimage.com/722x402"
                            alt="blog"
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                              CATEGORY
                            </h2>
                            <h1
                              className={`title-font text-lg font-medium ${colorClass} mb-3`}
                            >
                              Shooting Stars
                            </h1>
                            <p className="leading-relaxed mb-3">
                              Photo booth fam kinfolk cold-pressed sriracha
                              leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <div className="flex items-center flex-wrap ">
                              <a
                                className={`${colorClass} text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}
                              >
                                Learn More
                                <svg
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                1.2K
                              </span>
                              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                  </div>
                </section>
              );
            case 2:
              return (
                <section className="text-gray-600 body-font">
                  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                      <h1
                        className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorClass}`}
                      >
                        Before they sold out
                        <div className="hidden lg:inline-block">
                          {" "}
                          readymade gluten
                        </div>
                      </h1>
                      <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                      </p>
                      <div className="flex justify-center">
                        <button
                          className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${
                            colorClass === "text-red-500"
                              ? "bg-red-500"
                              : colorClass === "text-purple-500"
                              ? "bg-purple-500"
                              : colorClass === "text-blue-500"
                              ? "bg-blue-500"
                              : colorClass === "text-pink-500"
                              ? "bg-pink-500"
                              : colorClass === "text-orange-500"
                              ? "bg-orange-500"
                              : "bg-indigo-500 hover:bg-indigo-600"
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
                      <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/720x600"
                      />
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
                          <img
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src="https://dummyimage.com/1201x501"
                          />
                        </div>
                        <h2
                          className={`${colorClass} title-font text-2xl font-medium mt-6 mb-3`}
                        >
                          Buy YouTube Videos
                        </h2>
                        <p className="leading-relaxed text-base">
                          Williamsburg occupy sustainable snackwave gochujang.
                          Pinterest cornhole brunch, slow-carb neutra irony.
                        </p>
                        <button
                          className={`flex ${
                            colorClass === "text-red-500"
                              ? "bg-red-500"
                              : colorClass === "text-purple-500"
                              ? "bg-purple-500"
                              : colorClass === "text-blue-500"
                              ? "bg-blue-500"
                              : colorClass === "text-pink-500"
                              ? "bg-pink-500"
                              : colorClass === "text-orange-500"
                              ? "bg-orange-500"
                              : "bg-indigo-500 hover:bg-indigo-600"
                          } mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded`}
                        >
                          Button
                        </button>
                      </div>
                      <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                          <img
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src="https://dummyimage.com/1202x502"
                          />
                        </div>
                        <h2
                          className={`${colorClass} title-font text-2xl font-medium mt-6 mb-3`}
                        >
                          The Catalyzer
                        </h2>
                        <p className="leading-relaxed text-base">
                          Williamsburg occupy sustainable snackwave gochujang.
                          Pinterest cornhole brunch, slow-carb neutra irony.
                        </p>
                        <button
                          className={`flex ${
                            colorClass === "text-red-500"
                              ? "bg-red-500"
                              : colorClass === "text-purple-500"
                              ? "bg-purple-500"
                              : colorClass === "text-blue-500"
                              ? "bg-blue-500"
                              : colorClass === "text-pink-500"
                              ? "bg-pink-500"
                              : colorClass === "text-orange-500"
                              ? "bg-orange-500"
                              : "bg-indigo-500 hover:bg-indigo-600"
                          } mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded`}
                        >
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              );
          }
        };
        return renderComponentDesignForCard();

      case 1:
        const renderComponentDesignForNavbar = () => {
          switch (codevalue) {
            case 0:
              return (
                <header className="text-white body-font">
                  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a
                      className={`flex title-font font-medium items-center ${colorClass} mb-4 md:mb-0`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="ml-3 text-xl">TailFusion</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className="mr-5 hover:text-gray-900">First Link</a>
                      <a className="mr-5 hover:text-gray-900">Second Link</a>
                      <a className="mr-5 hover:text-gray-900">Third Link</a>
                      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button
                      className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${
                        colorClass === "text-red-500"
                          ? "bg-red-500"
                          : colorClass === "text-purple-500"
                          ? "bg-purple-500"
                          : colorClass === "text-blue-500"
                          ? "bg-blue-500"
                          : colorClass === "text-pink-500"
                          ? "bg-pink-500"
                          : colorClass === "text-orange-500"
                          ? "bg-orange-500"
                          : "bg-indigo-500 hover:bg-indigo-600"
                      } `}
                    >
                      Button
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </header>
              );
          }
        };
        return renderComponentDesignForNavbar();

      case 2:
        const renderComponentDesignForFooter = () => {
          switch (codevalue) {
            case 0:
              return (
                <footer className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className={`${colorClass} ml-3 text-xl`}>
                          TailFusion
                        </span>
                      </a>
                      <p className="mt-2 text-sm text-gray-500">
                        Air plant banjo lyft occupy retro adaptogen indego
                      </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2
                          className={`${colorClass} title-font font-medium tracking-widest text-sm mb-3`}
                        >
                          CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              First Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Second Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Third Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Fourth Link
                            </a>
                          </li>
                        </nav>
                      </div>
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2
                          className={`${colorClass} title-font font-medium tracking-widest text-sm mb-3`}
                        >
                          CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              First Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Second Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Third Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Fourth Link
                            </a>
                          </li>
                        </nav>
                      </div>
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2
                          className={`${colorClass} title-font font-medium tracking-widest text-sm mb-3`}
                        >
                          CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              First Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Second Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Third Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Fourth Link
                            </a>
                          </li>
                        </nav>
                      </div>
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2
                          className={`${colorClass} title-font font-medium tracking-widest text-sm mb-3`}
                        >
                          CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              First Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Second Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Third Link
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800">
                              Fourth Link
                            </a>
                          </li>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                      <p className={`${colorClass} text-sm text-center sm:text-left`}>
                        © 2020 TailFusion —
                        <a
                          href="https://twitter.com/knyttneve"
                          rel="noopener noreferrer"
                          className="text-gray-600 ml-1"
                          target="_blank"
                        >
                          @knyttneve
                        </a>
                      </p>
                      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </footer>
              );
          }
        };
        return renderComponentDesignForFooter();
      default:
        return "";
    }
  };

  return <div>{RenderComponentsBasedOnTheValueOfTheComponent()}</div>;
};

export default Designone;
