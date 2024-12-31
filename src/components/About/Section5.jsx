import React from "react";

const section5 = () => {
  return (
    <>
      <div className="bg-slate-50 ">
        <div className="text-center py-10">
          <h5 className="font-semibold text-blue-500">Our Team</h5>
          <h1 className="font-bold text-4xl  ">Our Team Members</h1>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className=" rounded-md bg-white shadow-2xl p-10 lg:w-[800px] lg:justify-center lg:ml-52 md:px-16 lg:px-20 flex flex-col md:flex-row items-center text-center justify-center gap-5 ">
          <div className="">
            <img src="public/images/img-1.PNG" alt="" />
            <h3 className="font-medium">Melissa Tatcher</h3>
            <p className="text-sm ">MARKETING</p>
          </div>

          <div>
            <img src="public/images/img-g2.PNG" alt="" />
            <h3 className="font-medium">Stuard Ferrel</h3>
            <p className="text-sm">DIGITAL MARKETER</p>
          </div>

          <div>
            <img src="public/images/img-g3.PNG" alt="" />
            <h3 className="font-medium">Eva Hudson</h3>
            <p className="text-sm">UI/UX DESIGNER</p>
          </div>

          <div>
            <img src="public/images/img-g4.PNG" alt="" />
            <h3 className="font-medium">Martin Ethariam</h3>
            <p className="text-sm">GRAPHIC DESIGNER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default section5;
