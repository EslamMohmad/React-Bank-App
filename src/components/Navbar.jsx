import React from "react";
import { logo } from "../assets";
import { NavLinks } from "./";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="logo">
        <img src={logo} width="120px" />
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
