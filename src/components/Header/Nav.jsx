import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggler = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <nav className="">
      <div className="px-5 py-2 md:px-16 lg:px-20 w-full  flex justify-between items-center lg:shadow-md lg:py-4">
        <div>
          <img src="public/images/logo.svg" alt="" />
        </div>
        {/* desctop menu */}
        <div className="hidden md:flex-1 md:flex justify-between items-center">
          <ul className="flex ml-20 items-center gap-4">
            <li>
              <a
                href="#"
                className="hover:text-blue-700 text-gray-600 font-medium text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 text-gray-600 font-medium text-lg"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 text-gray-600 font-medium text-lg"
              >
                Payment
              </a>
            </li>
          </ul>
          <div>
            <button className="px-5 py-2  text-black mr-1 hover:bg-blue-500 duration-500 rounded-md hover:text-white">
              Login
            </button>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:hidden ">
          <button onClick={menuToggler}>{isOpen ? "Close" : < FaAlignJustify/> }</button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`flex flex-col justify-center items-center gap-2 p-3  shadow-md transition-all duration-500 ease-in ${
          isOpen ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Payment</a>
          </li>
        </ul>
        <button className="px-5 py-2 bg-blue-500 text-white rounded-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
