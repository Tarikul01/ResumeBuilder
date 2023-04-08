import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log("toggle", toggle);
  const loginHandler = () => {};
  return (
    <>
      <nav className="h-20 w-full flex flex-row justify-center items-center bg-indigo-400 ">
        <div className="container px-5 md:px-0 flex justify-between items-center ">
          <div>
            <h1 className="font-semibold">ResumeCraft</h1>
          </div>
          <div className="hidden lg:block">
            <ui className="list-none flex items-center gap-6 text-white">
              <li>
                <Link to="/">Resume Templates</Link>
              </li>
              <li>
                <Link to="/">CV Templates</Link>
              </li>
              <li>
                <Link to="/">Cover Letters</Link>
              </li>
              <li>
                <Link to="/">Career Blog </Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ui>
          </div>
          <div>
            <ui className="list-none flex items-center gap-6">
              <li>
                <button className="px-6 py-1 text-md bg-white hover:bg-gray-200  text-indigo-600 rounded-3xl shadow-lg transition-colors duration-400">
                  Sign Up
                </button>
              </li>
              <li>
                <button className="px-6 py-1 text-md bg-indigo-500 hover:bg-indigo-700 text-white rounded-3xl shadow-lg transition-colors duration-400">
                  Login
                </button>
              </li>
              <li>
                <i
                  className="text-white cursor-pointer "
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <AiOutlineClose size={25} />
                  ) : (
                    <AiOutlineMenu size={25} />
                  )}
                </i>
              </li>
            </ui>
          </div>
        </div>
      </nav>
      {/* // Mobile Version */}
      <nav
        className={
          toggle
            ? `w-1/3 h-screen bg-white z-10 transition duration-500`
            : `hidden`
        }
      >
        <div className="container flex flex-col justify-start items-center pt-16">
          <div>
            <ui className="list-none flex flex-col items-center gap-6">
              <li>
                <button className="px-12 py-1 text-md bg-white hover:bg-gray-200  text-indigo-600 rounded-3xl shadow-lg transition-colors duration-400">
                  Sign Up
                </button>
              </li>
              <li>
                <button className="px-12 py-1 text-md bg-indigo-500 hover:bg-indigo-700 text-white rounded-3xl shadow-lg transition-colors duration-400">
                  Login
                </button>
              </li>
              <li>
                <i
                  className="text-white cursor-pointer "
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <AiOutlineClose size={25} />
                  ) : (
                    <AiOutlineMenu size={25} />
                  )}
                </i>
              </li>
            </ui>
          </div>
          <hr />
          <div>
            <ui className="list-none flex flex-col items-center gap-6 text-black">
              <li>
                <Link to="/">Resume Templates</Link>
              </li>
              <li>
                <Link to="/">CV Templates</Link>
              </li>
              <li>
                <Link to="/">Cover Letters</Link>
              </li>
              <li>
                <Link to="/">Career Blog </Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ui>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
