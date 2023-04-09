import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "modal") onClose();
  };
  return (
    <div
      id="modal"
      className="fixed inset-0  bg-black bg-opacity-25  backdrop-blur-lg	 flex justify-center items-center "
      onClick={(e) => handleClose(e)}
    >
      <div className="w-[600px] flex flex-col">
        <div
          className="text-white place-self-end cursor-pointer "
          onClick={() => onClose()}
        >
          <i>
            <AiOutlineClose size={25} />
          </i>
        </div>
        <div className=" rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
