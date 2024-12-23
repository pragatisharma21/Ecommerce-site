import React from "react";

const Card = ({id, title, description, image, price    }) => {
  return (
    <div className="border border-red-500 rounded-lg p-4 bg-gray-500 flex flex-col justify-center items-center">
      <img
        className="w-24"
        src={image || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
        alt={id}
      />
      <h1 className="text-lg text-white mt-2">${price}</h1>
      <p className="text-white text-base">{title}</p>
      <p className="text-sm overflow-hidden text-ellipsis w-full line-clamp-1">{description}</p>
    </div>
  );
};

export default Card;