import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cards } from "../utils/cards";
import clsx from "clsx";

const CardContainerBlur = () => {
  const numVisibleImages = 5;
  const initialHighlightedIndex = 0; // Start with the first image highlighted

  const [highlightedIndex, setHighlightedIndex] = useState(initialHighlightedIndex);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollRef.current?.scrollLeft || 0;
      const middleIndex = Math.floor((scrollPosition + 36) / 72);

      // Update the highlighted index, but ensure it's at least 1
      setHighlightedIndex(middleIndex+3);
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

  const getTransformValue = (index: number) => {
    const distance = Math.abs(index - highlightedIndex);
    const tilt = distance <= 1 ? -6 * distance : 0;
    return `translateX(${72 * (index - highlightedIndex)}px) rotateY(${tilt}deg)`;
  };

  return (
    <div
      ref={scrollRef}
      className="mx-auto w-[650px] mt-40 overflow-x-auto flex items-center relative"
    >
      <div
        className="flex relative"
        style={{
          transform: getTransformValue(initialHighlightedIndex),
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
                index !== highlightedIndex && "opacity-75", // Reduce opacity for non-highlighted cards
                index > highlightedIndex &&
                  `scale-75 -skew-y-6 z-[${zIndex}] ml-[-150px] mr-0`,
                index < highlightedIndex &&
                  `scale-75 skew-y-6 z-[${zIndex}] mr-[-150px] ml-0`,
              ])}
              style={{ transform: getTransformValue(index) }}
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

export default CardContainerBlur;
