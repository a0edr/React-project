import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-700  px-5 md:px-16 lg:px-20 py-20 ">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="font-bold text-white ">
            <h1 className="text-2xl md:w-[350px] w-[300px]">
              Signup for latest news and insights from TailGrids UI
            </h1>
          </div>
          <div className="gap-5 flex flex-col md:flex-row mb-10">
            <input
              className="rounded shadow-md w-[250px]  text-center h-[50px]"
              type="text"
              placeholder="Enter Your Email Adreess "
            />
            <input
              className="rounded shadow-md w-[150px] bg-white font-medium  text-center h-[50px]"
              type="button"
              value="Subscribe"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-white gap-5">
          <div>
            <div className="space-y-3">
              <img src="public/images/logo.svg" alt="" />
              <p className="text-white font-medium md:w-[200px]">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <img src="public/images/social.PNG" alt="" />
            </div>
          </div>

          <div className="py- space-y-4">
            <h5 className="font-bold text-lg text-white">Latest blog</h5>
            <div className="flex gap-3">
              <img src="public/images/ph.PNG" alt="" />
              <p>I think really important to design...</p>
            </div>
            <div className="flex gap-3">
              <img src="public/images/phh.PNG" alt="" />
              <p>Recognizing the need is the primary...</p>
            </div>
          </div>

          <div className="no-underline text-whit space-y-3 mb-0">
            <h5 className="font-bold text-lg text-white">Company</h5>
            <a className="block" href="#">
              About Company
            </a>
            <a className="block" href="#">
              Company Services
            </a>
            <a className="block" href="#">
              Job Opportunities
            </a>
            <a className="block" href="#">
              Creative People
            </a>
          </div>

          <div className="no-underline text-whit space-y-3 ">
            <h5 className="font-bold text-white text-lg">Customer</h5>
            <a className="block" href="#">
              Client Support
            </a>
            <a className="block" href="#">
              Latest News
            </a>
            <a className="block" href="#">
              Company Stories
            </a>
            <a className="block" href="#">
              Pricing Packages
            </a>
          </div>

          <div className="space-y-3 ">
            <h5 className="font-bold text-white ">Contact Info</h5>
            <div className="flex gap-2">
              <img src="public/images/a.PNG" alt="" />
              <p>info@yourmail.com</p>
            </div>
            <div className="flex gap-2">
              <img src="public/images/b.PNG" alt="" />
              <p>+885 543 4565</p>
            </div>
            <div className="flex gap-2">
              <img src="public/images/c.PNG" alt="" />
              <p>401 Broadway, 24th</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
