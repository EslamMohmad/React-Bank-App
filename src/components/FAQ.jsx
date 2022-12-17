import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/core";

import { feedback } from "../constants";
import { quotes } from "../assets";

import "swiper/css";

const FAQ = () => {
  const breakPointes = {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  };

  return (
    <div className="px-6 sm:px-16 xl:px-0 py-8 md:py-20 flex flex-col gap-x-8 gap-y-8 capitalize">
      <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-6">
        <h1 className="w-full md:w-1/2 md:backdrop:w-1/2 text-4xl sm:text-5xl font-bold !leading-tight">
          what people are <br className="hidden sm:block" /> saying about us
        </h1>
        <p className="font-poppins text-xl text-white/70 sm:w-[60%] md:w-[40%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="w-full mt-16">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={breakPointes}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {feedback.map(({ id, img, content, title, name }) => (
            <SwiperSlide key={id} className="rounded-2xl feedback-card">
              <div className="flex flex-col gap-y-8 capitalize justify-between min-h-[300px] p-4 py-8">
                <img src={quotes} width="50px" />
                <p className="font-popines text-lg w-[80%] md:w-[auto]">
                  {content}
                </p>
                <div className="flex items-center gap-x-5">
                  <div className="w-[50px] h-[50px] rounded-full ">
                    <img src={img} />
                  </div>
                  <div className="">
                    <h3 className="font-bold text-1xl">{name}</h3>
                    <p className="text-white/70 text-xl">{title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FAQ;
