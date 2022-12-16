import React from "react";
import { robot, discount, arrowUp } from "../assets";

const Header = () => {
  const getStartedElement = (mobile) => (
    <div
      className={`${
        mobile ? "block sm:hidden my-16" : "hidden sm:block"
      } cursor-pointer sm:self-end md:self-center xl:self-start relative rounded-full bg-blue-gradient w-[140px] h-[140px]`}
    >
      <div className="font-bold text-lg absolute flex justify-center items-center flex-col w-[96%] rounded-full h-[96%] bg-primary top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-gradient flex">
          get
          <img src={arrowUp} className="ml-2" />
        </div>
        <span className="text-gradient">started</span>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="pt-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-1/2  pr-6 sm:pr-16 md:pr-0 pl-6 sm:pl-16 xl:pl-0 sm:justify-center xl:justify-start flex flex-col pt-0 sm:pt-16 py-16 capitalize relative">
          <div className="flex mb-3 px-5 p-2 rounded-xl bg-gradient-to-r from-zinc-800 to-white/10 text-lg font-medium max-w-[380px]">
            <img src={discount} width="30px" height="100%" className="mr-3" />
            <div>
              <span className="mr-1.5">20%</span>
              <span className="text-white/50">discount for</span>
              <span className="mx-1.5">1 month</span>
              <span className="text-white/50">acount</span>
            </div>
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl font-bold !leading-tight">
            <div className="flex justify-between gap-5">
              <div>
                the next <br className="hidden sm:block" />
                <span className="text-gradient">generation</span>
              </div>
              {getStartedElement(false)}
            </div>
            <div>payment method.</div>
          </h1>
          <p className="text-white/70 w-[100%] sm:w-[75%] text-xl mt-6 normal-case">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img src={robot} className="z-[1] relative" />
          <div className="absolute top-[0px] right-[100px] w-[200px] h-[200px] pink__gradient ...  "></div>
          <div className="absolute top-[25%] right-[100px] w-[500px] h-[500px] white__gradient ... "></div>
          <div className="absolute bottom-[25px] right-[0px] w-[500px] h-[500px] blue__gradient ... z-[0]"></div>
        </div>
        {getStartedElement(true)}
      </div>
    </div>
  );
};

export default Header;
