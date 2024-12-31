const Section1 = () => {
  return (
    <div className="flex flex-col md:px-16 lg:px-20  lg:flex-row lg:justify-between lg:items-center">
      <div className="px-4 ">
        <h1 className="text-4xl font-bold py-4 w-[250px] md:w-full lg:w-[350px]">
          Startup Site Templet Bulit- With TailGrids Componets
        </h1>
        <p className="font-medium text-gray-500 lg:w-[500px] ">
          With TailGrids, business and students thrive together. Business can
          perfectly match their staffing to changing demand throughout the
          dayed.
        </p>
        <div className="flex gap-5 py-5 ">
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500">
            Get Started
          </button>
          <a href="#" className="flex items-center">
            {" "}
            <img src="public/images/img download.png" alt="" />
            Download App
          </a>
        </div>
        <p className="text-sm py-5">Used by Thriving Brands----</p>
        <img src="public/images/3 img.png" alt="" />
      </div>

      <div className=" mt-10 ">
        <img src="public/images/img man.png" alt="" />
      </div>
    </div>
  );
};

export default Section1;
