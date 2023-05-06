import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-start items-start ">
      {" "}
      <nav
        className={
          toggle
            ? "w-[10rem] h-screen bg-gray-800  px-10 py-10 text-white ease-in duration-500 "
            : "w-[26rem] h-screen bg-gray-800 px-10 py-10  text-white ease-out duration-500 "
        }
      >
        <div className="w-full flex items-center justify-between">
          <div>
            {toggle ? (
              <HiOutlineDesktopComputer size={25} />
            ) : (
              <h2
                className={toggle ? "font-bold text-xl" : "font-bold text-xl"}
              >
                ResumeCraft
              </h2>
            )}
          </div>
          <div className="relative">
            {!toggle ? (
              <div
                className="absolute top-[-1.2rem] right-[-3.5rem] p-2 bg-white text-gray-800 rounded-xl cursor-pointer shadow-xl "
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineArrowLeft size={25} />
              </div>
            ) : (
              <div
                className="absolute top-[-1.2rem] right-[-2.8rem] p-2 bg-white text-gray-800 rounded-xl cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineArrowRight size={25} />
              </div>
            )}
          </div>
        </div>

        <ul className="mt-20 flex flex-col gap-8">
          <li>
            <NavLink to="/Dashboard/Preview" className="text-lg">
              Preview
            </NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard" className="text-lg">
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
