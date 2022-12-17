import React from "react";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 sm:px-16 xl:px-0 py-8 md:py-20 gap-y-10 gap-x-8">
      <div className="w-full md:w-1/2 flex flex-col gap-y-8 md:order-2">
        <h1 className="capitalize text-4xl sm:text-5xl font-bold !leading-tight">
          Easily control your <br className="hidden md:block" /> billing &
          invoicing.
        </h1>
        <p className="font-poppins text-xl text-white/70 w-[80%]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-x-5">
          <img src={apple} />
          <img src={google} />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={bill} />
      </div>
    </div>
  );
};

export default Billing;
