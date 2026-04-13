import React from "react";
import { NavLink } from "react-router";

import { CiHome } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

const NavBar = () => {
  return (
    <div className="shadow-sm">
      <div className="container mx-auto navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-2xl">
            <span className="text-[#1F2937] font-bold">Keen</span>Keeper
          </h1>
        </div>
        <div className="">
          <ul className="flex items-center gap-5 px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` flex items-center gap-2 ${isActive ? " py-2 px-4 rounded-sm bg-[#244D3F] text-white" : ""}`
                }
                to={"/"}
              >
                {" "}
                <CiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) =>
                  ` flex items-center gap-2 ${isActive ? " py-2 px-4 rounded-sm bg-[#244D3F] text-white" : ""}`
                } to={"/timeline"}>
                <MdAccessTime /> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) =>
                  ` flex items-center gap-2 ${isActive ? " py-2 px-4 rounded-sm bg-[#244D3F] text-white" : ""}`
                } to={"/stats"}>
                <ImStatsDots /> Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
