import React from "react";
const Card = ({ imageSrc, title, content }) => {
  return (
    <>
    <div className="w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl
     p-4 flex flex-col items-center justify-center text-center">
      <img className=" rounded mb-4" src={imageSrc} alt={title} />
      <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
      <p className="text-gray-600 text-base">{content}</p>
    </div>
    </>
  );
};

export default Card;
