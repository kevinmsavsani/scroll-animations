import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cards } from "../utils/cards";
import clsx from "clsx";

const CardContainer = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(2); // Initially highlighting the middle image
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const numVisibleImages = 5;
      const scrollPosition = scrollRef.current?.scrollLeft || 0;
      const middleIndex = Math.round(scrollPosition / 72) + Math.floor(numVisibleImages / 2);

      // Update the highlighted index
      setHighlightedIndex(middleIndex);
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
      className="mx-auto w-[650px] mt-40 overflow-x-auto flex items-center relative"
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
                index === highlightedIndex && "skew-y-0 z-10",
                index > highlightedIndex &&
                  `scale-75 -skew-y-6 z-[${zIndex}] ml-[-150px] mr-0`,
                index < highlightedIndex &&
                  `scale-75 skew-y-6 z-[${zIndex}] mr-[-150px] ml-0`,
              ])}
            >
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src={card.image}
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;