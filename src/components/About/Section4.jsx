import React from "react";

const plans = [
  {
    title: "personal",
    price: "59$",
    desc: "Perfect for using in a personal website or a client project.",
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    button: "personal",
  },

  {
    title: "Business",
    price: "$199",
    desc: "Perfect for using in a personal website or a client project.",
    features: [
      "5 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 3 (one) project",
      "4 Months support",
    ],
    button: "Business",
  },

  {
    title: "Professional",
    price: "$256",
    desc: "Perfect for using in a Professional website or a client project.",
    features: [
      "Unlimited User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on Unlimited project",
      "12 Months support",
    ],
    button: "Professional",
  },
];

const Section4 = () => {
  return (
    <>
      <div className="text-center">
        <h5 className="font-medium text-blue-500">Pricing Table</h5>
        <h2 className="font-bold text-4xl py-2">Our Pricing Plan</h2>
        <p className="text-gray-500 pb-10  ">
          There are many variations of passages of Lorem Ipsum available <br />{" "}
          but the majority have suffered alteration in some form.
        </p>
      </div>
      <div className=" md:px-16 lg:px-20 gap-2 px-5 flex md:flex-row flex-col justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-6 w-full md:w-1/3 bg-white"
          >
            <h3 className="text-lg font-semibold text-blue-600">
              {plan.title}
            </h3>
            <h2 className="text-4xl font-bold mt-4 ">{plan.price}</h2>
            <p className="mt-2 text-gray-600">{plan.desc}</p>
            <hr className="my-4" />
            <ul>
              {plan.features.map((features, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-gray-500 font-medium mr-2">
                    {features}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section4;
