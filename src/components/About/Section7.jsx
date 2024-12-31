import React from "react";

const Section7 = () => {
  return (
    <div
      className="flex flex-col md:flex-row bg-blue-600 md:px-16 lg:px-20 px-5 py-12 justify-between md:items-center
    md:mx-20 m-5 gap-3 "
    >
      <div className="">
        <h6 className="font-medium text-white">Find Your Next Dream App</h6>
        <h1 className="text-4xl w-[250px] md:w-[300px] font-bold text-white">
          Get started with our free trial
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <button className="rounded-md bg-white text-blue-600 px-0 py-2 font-medium w-[150px]">
          Get Pro Version{" "}
        </button>
        <button className="rounded-md bg-green-600 text-white px-0 py-2 font-medium w-[150px]">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

export default Section7;
