import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className="relative w-full h-full p-6 rounded border border-gray-700 transition duration-300 ease-in-out hover:transform hover:scale-105">
      <p className="absolute top-6 right-6 m-2 z-5 bg-blue-800 text-white px-2 py-1 rounded font-semibold text-sm">
        New
      </p>
      <div className="text absolute bottom-6 left-6 z-5 p-4">
        <h3 className="inline-block bg-gray-800 text-orange-500 px-4 py-2 rounded-full border border-gray-700 mb-2">
          {title}
        </h3>
        <p className="text-white">{description}</p>
      </div>

      <Image
        src={image}
        alt="image"
        className="w-full h-full object-cover object-center rounded"
      />
    </div>
  );
}

export default Card;
