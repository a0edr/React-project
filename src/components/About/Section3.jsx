import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-wrap py-20 ">
      <div className="bg-indigo-500 py-20 text-white w-full sm:w-1/2 px-2 lg:px-20">
        <h5 className="font-semibold py-">Watch Our Intro Video</h5>
        <h2 className="text-4xl font-bold py-5 lg:w-[400px]">
          Making world a better place for you and us
        </h2>
        <p className="pb-5 lg:w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam
          fringilla, scelerisque nisl in, accumsan diam. Quisque sollicitudin
          risus eu tortor euismod imperdiet.
        </p>
        <button className="bg-white text-black py-2 px-6 rounded-3xl '>">
          Know More
        </button>
      </div>
      <div className="w-full sm:w-1/2">
        <img src="public/images/image-01.jpg" alt="" />
      </div>
    </div>
  );
};

export default Section3;
