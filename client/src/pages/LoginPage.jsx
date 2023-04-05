import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
  };
  return (
    <div className="w-full h-screen container mx-auto flex justify-center items-center">
      <div className="w-1/3 h-auto bg-black text-teal-600	 text-center p-5 rounded-lg ">
        <h1 className="text-4xl font-bold text-teal-400	">Login</h1>
        <div className="flex flex-col gap-4 px-14 py-8">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={(e) => handleOnSubmit(e)}
            className="px-5 py-2 bg-gray-50 hover:bg-slate-800 hover:text-gray-50 duration-700"
          >
            Login
          </button>
          <span className="text-white">
            If you haven't account then{" "}
            <Link to="/registration" className="text-cyan-800 font-bold">
              Sign Up{" "}
            </Link>{" "}
            first!!
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
