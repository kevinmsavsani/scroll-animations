import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { cards } from "../utils/cards";
import clsx from "clsx";

const CardContainer = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.clientWidth / 5;
        const centerIndex = Math.round(container.scrollLeft / cardWidth);
        setHighlightedIndex(centerIndex + 3);
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
      className="mx-auto w-[720px] h-[500px] mt-40 overflow-x-auto flex items-center relative"
    >
      <div
        className="flex relative"
        style={{
          transform: `translateX(-${highlightedIndex * 72}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        {cards.map((card, index) => {
          const zIndex =
            index === highlightedIndex
              ? 10
              : 10 - Math.abs(highlightedIndex - index);

          return (
            <div
              key={index}
              className={clsx([
                "w-72 transform transition-transform duration-300",
                index === highlightedIndex && "scale-110 skew-y-0 z-10",
                index > highlightedIndex && `scale-90 -skew-y-6 z-[${zIndex}] ml-[-120px] mr-0`,
                index < highlightedIndex && `scale-90 skew-y-6 z-[${zIndex}] mr-[-120px] ml-0`,
              ])}
            >
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
                border={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
