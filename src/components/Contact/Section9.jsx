import React from "react";

const Section9 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between md:px-16 lg:px-20 md:py-24 px-5   ">
        <div className="">
          <div className="md:mb-5">
            <h6 className="text-blue-600">Contact Us</h6>
            <h1 className="text-3xl font-bold py-2">GET IN TOUCH WITH US</h1>
            <p className="md:w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>
          </div>

          <div className="flex flex-col md:flex-row  md:gap-2 md:mb-5">
            <div>
              <img src="public/images/adreess1.PNG" alt="" />
            </div>
            <div>
              <h5 className="font-medium">Our Location</h5>
              <p className="md:w-[250px]">99 S.t Jomblo Park Pekanbaru </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  md:gap-2 md:mb-5">
            <div>
              <img src="public/images/phonenum.PNG" alt="" />
            </div>
            <div>
              <h5 className="font-medium">Phone Number</h5>
              <p className="md:w-[250px]">(+62)81 414 257 9980</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  md:gap-2">
            <div>
              <img src="public/images/email.PNG" alt="" />
            </div>
            <div>
              <h5 className="font-medium">Email Address</h5>
              <p className="md:w-[250px]">info@yourdomain.com</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 flex flex-col md:w-[350px] text-center rounded-lg h-[450px] shadow-lg mt-5    ">
          <form className="py-5 space-y-6  ">
            <input
              className="rounded shadow-md w-[300px] h-[50px] text-center"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="rounded shadow-md w-[300px] h-[50px] text-center"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="rounded shadow-md w-[300px] h-[50px] text-center"
              type="text"
              placeholder="Your Phone"
            />
            <input
              className="rounded shadow-md w-[300px]  text-center h-[100px]"
              type=""
              placeholder="Your Message"
            />
          </form>
          <button className="px-5 w-[250px] ml-5 md:ml-14 md py-2 text-center  bg-blue-700 text-white rounded-md">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Section9;
