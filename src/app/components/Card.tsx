import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className="relative bg-gray-800 h-full p-6 rounded border border-gray-700 transition duration-300 ease-in-out hover:transform hover:scale-105">
      <p className="absolute top-6 right-6 z-5 bg-blue-800 text-white px-2 py-1 rounded font-semibold text-sm">
        New
      </p>
      <div className="text absolute bottom-6 left-6 z-5">
        <h3 className="inline-block bg-gray-800 text-orange-500 px-4 py-2 rounded-full border border-gray-700 mb-2">
          {title}
        </h3>
        <p>{description}</p>
      </div>

      <Image
        src={image}
        alt="image"
        className="w-full h-full object-cover object-center rounded"
      />

      <div className="overlay absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent rounded-b"></div>
    </div>
  );
}

export default Card;
