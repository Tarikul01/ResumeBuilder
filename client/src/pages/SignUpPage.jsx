import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SignUpPage = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [img, setImg] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const userData = {
        fullName: fullName,
        email: email,
        password: password,
        img: img,
      };
      console.log(userData);
      // con
    } else {
      console.log("Password didn't match!");
    }
  };

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      className="w-full  h-auto  bg-indigo-400  text-center p-5 rounded-lg "
    >
      <div
        id="closeButton"
        className="w-full text-white flex justify-end cursor-pointer"
        onClick={() => onClose()}
      >
        <AiOutlineClose size={25} />
      </div>
      <h1 className="text-4xl font-bold text-white	">Registration</h1>
      <div className="flex flex-col gap-4 px-14 py-8">
        <input
          type="name"
          placeholder="FullName"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="file"
          placeholder="Profile Picture"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setImg(e.target.files[0])}
        />

        <button
          onClick={(e) => handleOnSubmit(e)}
          className="px-5 py-2 bg-gray-50 text-indigo-800 hover:bg-indigo-800 hover:text-gray-50 focus:outline-none duration-700"
        >
          Sign Up
        </button>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
