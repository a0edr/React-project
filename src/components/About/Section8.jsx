import React from "react";

const Section8 = () => {
  return (
    <div className="md:px-16 lg:px-20 px-5 md:mt-16 ">
      <div className="mb-20  ">
        <h6 className="font-medium text-blue-600">Testimonials</h6>
        <h1 className="font-bold text-3xl my-2">What our Clients Says</h1>
        <p className="md:w-[500px]  w-[250px] ">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:mb-12 ">
        <div className="rounded-md border shadow-md p-5 mb-5">
          <div className=" flex items-center gap-5 mb-5 ">
            <div className="">
              <img src="public/images/im1.PNG" alt="" />
            </div>
            <div>
              <h1 className="font-bold ">Jason Keys</h1>
              <h5 className="text-sm">Founder @ Dreampeet.</h5>
            </div>
          </div>
          <p className="md:w-[500px] text-gray-700 w-[250px] mb-3">
            “I believe in lifelong learning and Learn. is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            and familys.”
          </p>
        </div>

        <div className="rounded-md border shadow-md p-5 mb-5">
          <div className=" flex items-center gap-5 mb-5 ">
            <div className="">
              <img src="public/images/im2.PNG" alt="" />
            </div>
            <div>
              <h1 className="font-bold ">Anee Doe</h1>
              <h5 className="text-sm">CEO @ Trorex..</h5>
            </div>
          </div>
          <p className="md:w-[500px] text-gray-700">
            “I believe in lifelong learning and Learn. is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            and familys.”
          </p>
        </div>
      </div>
      {/* second row */}
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="rounded-md border shadow-md p-5 mb-5">
          <div className=" flex items-center gap-5 mb-5 ">
            <div className="">
              <img src="public/images/im3.PNG" alt="" />
            </div>
            <div>
              <h1 className="font-bold ">Dipali Dow</h1>
              <h5 className="text-sm">Founder @ Dreampeet.</h5>
            </div>
          </div>
          <p className="md:w-[500px] text-gray-700 w-[250px] mb-3">
            “I believe in lifelong learning and Learn. is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            and familys.”
          </p>
        </div>

        <div className="rounded-md border shadow-md p-5 mb-5">
          <div className=" flex items-center gap-5 mb-5 ">
            <div className="">
              <img src="public/images/im4.PNG" alt="" />
            </div>
            <div>
              <h1 className="font-bold ">John Doe</h1>
              <h5 className="text-sm">Founder @ Poettry..</h5>
            </div>
          </div>
          <p className="md:w-[500px] text-gray-700">
            “I believe in lifelong learning and Learn. is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            and familys.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
