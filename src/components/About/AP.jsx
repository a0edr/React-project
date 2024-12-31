// src/components/AP.js
import React from "react";
import Card from "./Card";

function AP() {
  const cardData = [
    {
      id: 1,
      title: "Marketing Solutions",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageSrc: "/images/card-1.PNG",
    },
    {
      id: 2,
      title: "Business Analytics",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageSrc: "/images/card-2.PNG",
    },
    {
      id: 3,
      title: "UX & UI Design",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageSrc: "/images/card-3.PNG",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly py-10 px-4 space-y-8 md:space-y-0 md:space-x-8">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
}

export default AP;
