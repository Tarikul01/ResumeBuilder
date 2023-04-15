import React from "react";

const FeatureItem = ({ imgURL, title, desc, type }) => {
  console.log(desc);
  return (
    <div className="w-[18rem]  ">
      <img
        className="w-full rounded ease-linear duration-300 cursor-pointer hover:scale-110"
        src={imgURL}
        alt={title}
      />
      <div className="text-left mt-5">
        <h3 className="text-xl font-semibold">{title ? title : type}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
