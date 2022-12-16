import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const NavLinks = () => {
  const [linksState, setLinksState] = useState({
    home: true,
    features: false,
    product: false,
    clients: false,
  });

  const [menuState, setMenuState] = useState(false);

  const navLinksHandling = (linkTitle) => {
    //clone & make all value false
    const cloneObejct = { ...linksState };
    for (const key in cloneObejct) {
      cloneObejct[`${key}`] = false;
    }
    //setState
    setLinksState({ ...cloneObejct, [linkTitle]: true });
  };

  return (
    <div className="">
      <ul className="hidden sm:block">
        {navLinks.map(({ id, title }) => (
          <li
            onClick={() => navLinksHandling(id)}
            className={`text-lg inline-block transition ease-in hover:text-white pr-10 last:pr-0 cursor-pointer ${
              linksState[id] ? "text-white" : "text-white/70"
            }`}
            key={id}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="block sm:hidden" onClick={() => setMenuState(!menuState)}>
        <img
          src={menuState ? close : menu}
          width="20px"
          className="cursor-pointer"
        />
      </div>
      <ul
        className={`${
          menuState ? "block" : "hidden"
        } absolute rounded-lg right-[20px] top-[80px] sidebar bg-black-gradient z-10`}
      >
        {navLinks.map(({ id, title }) => (
          <li
            onClick={() => navLinksHandling(id)}
            className={`text-lg list-none text-center transition ease-in hover:text-white px-10 pt-4 last:pb-4 cursor-pointer ${
              linksState[id] ? "text-white" : "text-white/70"
            }`}
            key={id}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
