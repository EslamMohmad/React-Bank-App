import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const OurServices = () => {
  const imgs = [airbnb, binance, coinbase, dropbox];

  return (
    <div className="px-6 sm:px-16 xl:px-0 py-8 md:py-20 flex flex-col gap-y-16">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-16 sm:gap-16">
        {imgs.map((img, idx) => (
          <div className="w-full sm:w-[45%] lg:w-1/4" key={idx}>
            <img
              src={img}
              className="object-contain w-[100%] h-[30px] md:h-[50px]"
            />
          </div>
        ))}
      </div>
      <div className="bg-black-gradient-2 rounded-2xl p-8 md:p-16 flex flex-col sm:flex-row gap-8 justify-between items-center capitalize">
        <div className="flex flex-col gap-6 sm:w-2/3">
          <h1 className="text-4xl md:text-5xl leading-snug font-bold">
            let's try our service now!
          </h1>
          <p className="text-white/70 text-xl ">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="bg-blue-gradient rounded-xl font-poppins p-4 px-6 text-black self-center capitalize">
          get started
        </button>
      </div>
    </div>
  );
};

export default OurServices;
