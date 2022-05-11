import React, { useState } from "react";

export default function Navbar() {
  let arr = [true, false, false, false, false, false];
  const [style, setStyle] = useState(arr);
  const [dropDown, setDropDown] = useState(true);
  const [text, setText] = useState("");

  const selected = (props) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = false;
    }
    newArr[props] = true;
    setStyle(newArr);
  };

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-white rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABQElEQVRIie3WLUsEQRjA8Z8vhyLCBUEQRDBYDOJbtQhi8TNY7X4AbWqwmbTYDCaL4AtosBg8sRsUsQgqGA/hNNwsnseet3vuGeT+MDA8PPP8Z2bZmaHFf6ctJjaP8Yw9Nziul/SCj4zbc7WkM0a8hs3QP8V10mVVMYm50F9POmjL10xHGpAO4ynU2EkzsAMHYeAd+kN8WbotPhS/qz/Sg8tQ4ALdIb6dUFpAb1ppxADuQ6F9tCOHszrSRww2Ko0YxWsouBFifbitIX3D2G+lEbMohsJLITYRIy2G3ExZRAnvWMBMlbQUcprCqtrfdaVZUspH7G6MdE/88ZspOZxUSM/R1WxpRL5CnP8raUQkboj2DCfSErfE30hzVw5hGlOhRRwpX4EFXOEhs9kpP9SSXv51H3Uk3+o0/2spRW6L5vMJVYOGw2JI3H8AAAAASUVORK5CYII=" />

            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              Bar
            </h2>
          </div>
          {/* For medium and plus sized devices */}
          <ul className="hidden md:flex justify-center flex-auto space-x-2">
            <li
              onClick={() => selected(0)}
              className={`${
                style[0]
                  ? "text-white bg-red-400"
                  : "text-gray-600 border border-white bg-gray-50"
              }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded flex items-center justify-center`}
            >
              Collections
            </li>
            <li
              onClick={() => selected(1)}
              className={`${
                style[1]
                  ? "text-white bg-red-400"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded flex items-center justify-center`}
            >
              Mojito
            </li>
            <li
              onClick={() => selected(2)}
              className={`${
                style[2]
                  ? "text-white bg-red-400"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded flex items-center justify-center`}
            >
              Whiskey
            </li>
            <li
              onClick={() => selected(3)}
              className={`${
                style[3]
                  ? "text-white bg-red-400"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded flex items-center justify-center`}
            >
              Martini
            </li>
            <li
              onClick={() => selected(4)}
              className={`${
                style[4]
                  ? "text-white bg-red-400"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded flex items-center justify-center`}
            >
              Vodka
            </li>
            <li
              onClick={() => selected(5)}
              className={`${
                style[5]
                  ? "text-white bg-red-400"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded flex items-center justify-center`}
            >
              Masala Chai
            </li>
          </ul>
          <div className=" flex space-x-5 justify-center items-center pl-2">
            <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
              <input
                type="text"
                id="hero-field"
                placeholder="search"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
          </div>
        </nav>
        {/* for smaller devcies */}
        <div className="block md:hidden w-full mt-5 ">
          <div
            onClick={() => setDropDown(!dropDown)}
            className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full"
          >
            <div className="flex space-x-2">
              <span
                id="s1"
                className={`${
                  text.length != 0 ? "" : "hidden"
                } font-semibold text-sm leading-3`}
              >
                Selected:{" "}
              </span>
              <p
                id="textClicked"
                className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
              >
                {text ? text : "Collections"}
              </p>
            </div>
            <svg
              id="ArrowSVG"
              className={`${
                dropDown ? "" : "rotate-180"
              } transform duration-100`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className=" relative">
            <ul
              id="list"
              className={`${
                dropDown ? "hidden" : "block"
              } font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}
            >
              <li
                onClick={() => setSelectedText("Arts")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              >
                Mojito
              </li>
              <li
                onClick={() => setSelectedText("Space")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              >
                Whiskey
              </li>
              <li
                onClick={() => setSelectedText("Game")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              >
                Martini
              </li>
              <li
                onClick={() => setSelectedText("Utility")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              >
                Vodka
              </li>
              <li
                onClick={() => setSelectedText("Cards")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              >
                Masala Chai
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
