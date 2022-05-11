import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
      <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div className="flex flex-col md:flex-row items-strech justify-between py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 banner">
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-orange-500">
              Best Cocktail of the City
            </h1>
            <p className="text-base lg:text-xl text-orange-800 mt-2">
              Have you tried out best{" "}
              <span className="font-bold">cocktail</span>
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              src="https://www.thecocktaildb.com/images/cocktail_left.png"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative banner">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-orange-500 mb-2">
              Incredible Wine
            </h1>
            <p className="text-base lg:text-xl text-orange-800">
              Great Wine you <br /> ever
              <span className="font-bold"> Tried</span>
            </p>
          </div>
          <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="	https://www.thecocktaildb.com/images/ingredients/Black%20Rum.png
"
              alt=""
              className="md:w-32 md:h-32 lg:w-64 lg:h-48 -ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
