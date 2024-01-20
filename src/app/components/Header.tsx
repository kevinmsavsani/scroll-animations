import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "./Button";
import { FaRocket, FaWallet } from "react-icons/fa";
import hover3d from "../utils/hover";

function Header() {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <header ref={hero} className=" text-white relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-8">
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p className="text-gray-400">
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="">
          <div
            className="rounded bg-gray-700 border border-gray-600"
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src="/images/monkey.png"
              width={600}
              height={600}
              alt="hero"
              style={{
                transform: imageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
