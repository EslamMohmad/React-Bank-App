import React from "react";
import { features } from "../constants";

const Business = () => {
  return (
    <div className="flex flex-col md:flex-row  px-6 sm:px-16 xl:px-0 py-10 md:py-20 capitalize gap-y-10 md:gap-x-10 justify-between">
      <div className="w-full md:w-1/2 flex flex-col justify-evenly gap-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold leading-relaxed ">
          you do the business <br /> we'll handle the money
        </h1>
        <p className="font-poppins w-[90%] text-white/70 text-lg">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-blue-gradient rounded-xl text-black text-lg font-poppins  w-[auto] p-4 px-6 capitalize self-start">
          get started
        </button>
      </div>
      <div className="w-full md:w-[45%] flex flex-col gap-y-8 items-center slef-end">
        {features.map(({ id, icon, title, content }) => (
          <div
            className="w-full flex items-center gap-x-5 hover:bg-gradient-to-r from-zinc-800 to-white/10 p-5 rounded-3xl"
            key={id}
          >
            <div className="min-w-[70px] h-[70px] rounded-full bg-dimBlue">
              <img src={icon} width="50%" className="m-auto mt-[17.5px]" />
            </div>
            <div>
              <h4 className="text-xl mb-2 font-bold">{title}</h4>
              <p className="text-md font-poppins text-white/70">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
