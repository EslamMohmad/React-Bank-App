import React from "react";
import { logo } from "../assets";
import { footerLinks } from "./../constants/index";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="px-6 sm:px-16 xl:px-0 py-8 md:py-20 flex flex-col md:flex-row gap-10 justify-between">
        <div className="w-full md:w-[40%]">
          <div className="w-[80%] mb-5">
            <img src={logo} />
          </div>
          <p className="text-white/70 font-popoins capitalize text-lg !leading-relaxed w-[50%] md:w-full">
            A new way to make the payments
            <br /> easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 md:w-[70%]">
          {footerLinks.map(({ title, links }) => (
            <div
              key={title}
              className="w-[45%] xs:w-[30%] md:w-auto md:flex flex-col"
            >
              <h4 className="capitalize text-xl mb-4">{title}</h4>
              <ul className="list-none">
                {links.map(({ name, link }) => (
                  <li
                    key={name}
                    className="text-white/50 hover:text-white mb-2"
                  >
                    <a href={link} onClick={(e) => e.preventDefault()}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
