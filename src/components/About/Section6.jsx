import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Section6 = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const cards = [
    {
      question: "How long does it take to deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. This includes the in-depth research and creation of your monthly content marketing strategy that we do before writing your first blog post.",
    },
    {
      question: "How long does it take to deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. This includes the in-depth research and creation of your monthly content marketing strategy that we do before writing your first blog post.",
    },
    {
      question: "How long does it take to deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. This includes the in-depth research and creation of your monthly content marketing strategy that we do before writing your first blog post.",
    },
    {
      question: "How long does it take to deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. This includes the in-depth research and creation of your monthly content marketing strategy that we do before writing your first blog post.",
    },
    {
      question: "How long does it take to deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. This includes the in-depth research and creation of your monthly content marketing strategy that we do before writing your first blog post.",
    },
    {
      question: "How long does it take to deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. This includes the in-depth research and creation of your monthly content marketing strategy that we do before writing your first blog post.",
    },
  ];

  return (
    <>
      <div className="text-center mt-28">
        <h5 className="text-blue-700">FAQ</h5>
        <h1 className="font-bold text-3xl my-5">Any Questions? Look Here</h1>
        <p className="md:w-[500px] md:ml-96 ">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="max-w-4xl mx-auto my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {cards.map((card, index) => (
            <div key={index} className="mb-4">
              {/* Card Header */}
              <button
                onClick={() => toggleCard(index)}
                className="md:w-[450px] text-right bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`transform transition-transform ${
                      openCardIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  ></span>
                  <span>
                    {" "}
                    <FaCaretDown />{" "}
                  </span>
                  <span className="text-lg font-medium">{card.question}</span>
                </div>
              </button>

              {/* Card Content */}
              {openCardIndex === index && (
                <div className="mt-2 bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">{card.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section6;
