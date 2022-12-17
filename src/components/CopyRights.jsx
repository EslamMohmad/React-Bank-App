import React from "react";
import { socialMedia } from "../constants";

const CopyRights = () => {
  return (
    <div className="px-6 sm:px-16 xl:px-0 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-5">
        <h3 className="text-xl capitalze text-center">
          2021 HooBank. All Rights Reserved.
        </h3>
        <div className="flex flex-row gap-8">
          {socialMedia.map(({ icon, id, link }) => (
            <img key={id} width="20px" src={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CopyRights;
