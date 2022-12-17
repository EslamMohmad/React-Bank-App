import React from "react";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <div className="px-6 sm:px-16 xl:px-0 py-8 md:py-20 flex flex-col md:flex-row items-center gap-x-8 gap-y-8">
      <div className="w-full md:w-1/2 flex flex-col gap-y-8">
        <h1 className="capitalize text-4xl sm:text-5xl font-bold !leading-tight">
          Find a better card
          <br className="hidden xs:block" />
          deal in few easy steps.
        </h1>
        <p className="text-xl font-poppins text-white/70 w-[80%]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-blue-gradient self-start p-4 rounded-xl text-black capitalize px-6 font-poppins">
          get started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={card} />
      </div>
    </div>
  );
};

export default CardDeal;
