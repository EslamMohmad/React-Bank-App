import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex justify-between gap-x-16 px-6 sm:px-16 xl:px-0 flex-col sm:flex-row">
      {stats.map(({ id, title, value }) => (
        <div
          key={id}
          className="flex w-full sm:w-1/3 items-center h-[100px] xs:h-[140px] justify-unset text-center flex-row xs:flex-col md:flex-row"
        >
          <h3 className="mr-0 md:mr-3 font-bold text-2xl md:text-4xl mb-2 md:mb-0">
            {value}
          </h3>
          <p className="text-gradient  font-semibold text-xl uppercase">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
