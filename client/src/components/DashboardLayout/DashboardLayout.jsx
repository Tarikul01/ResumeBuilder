import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div className="flex justify-start items-start ">
      {" "}
      <nav className="w-[26rem] h-screen bg-gray-800 p-10 text-white duration-1000 ">
        <div className="w-full flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">ResumeCraft</h2>
          </div>
          {!toggle ? (
            <div
              className="p-2 bg-white text-gray-800 rounded-xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <AiOutlineArrowLeft size={25} />
            </div>
          ) : (
            <div
              className="p-2 bg-white text-gray-800 rounded-xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <AiOutlineArrowRight size={25} />
            </div>
          )}
        </div>

        <ul>
          <li>
            <Link to="/Dashboard/Preview">Preview</Link>
          </li>
          <li>
            <Link to="/Dashboard">Create</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
