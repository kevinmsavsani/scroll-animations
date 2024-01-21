import React, { useState, useEffect, useRef } from "react";
import Card from "./Card"; // Import your Card component
import { cards } from "../utils/cards"; // Assuming you have a file with cards data

const CardContainer = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.clientWidth / 5; // Assuming you want to display 5 cards at a time

        // Calculate the index of the card at the center of the scroll
        const centerIndex = Math.round(container.scrollLeft / cardWidth);
        setHighlightedIndex(centerIndex);
      }
    };

    // Attach the scroll event listener
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    // Detach the event listener on component unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="mx-auto w-full h-[500px] border mt-40 border-gray-600 overflow-x-auto flex items-center"
    >
      <div
        className="flex"
        style={{
          transform: `translateX(-${highlightedIndex * 72}px)`, // Assuming 72 is the width of each card
          transition: "transform 0.3s ease",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-72 mx-2 ${
              index === highlightedIndex ? "opacity-100" : "opacity-50"
            } transition-opacity duration-300`}
          >
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
