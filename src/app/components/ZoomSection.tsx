import React, { useRef } from "react";
import hover3d from "../utils/hover";
import Image from "next/image";

function ZoomSection() {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });

  return (
    <div
      ref={hero}
      className="relative overflow-hidden border rounded-lg border-gray-600"
    >
      <div className="image" style={{ height: "50rem", width: "100%" }}>
        <Image
          src="/images/spiral.svg"
          alt="bulb tree"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transform scale-120 transition-transform"
          style={{ transform: hover.transform, transition: hover.transition }}
        />

        <div className="flex absolute py-20 px-16 w-full h-[600px] gap-6 z-10">
          <Image
            src="/images/arm2.jpg"
            alt="bulb tree"
            className="object-cover object-center transition-transform"
            width={500}
            height={500}
            style={{
              transform: hover2.transform,
              transition: hover2.transition,
            }}
          />

          <Image
            src="/images/arm.jpg"
            alt="bulb tree"
            className="object-cover object-center transition-transform"
            width={500}
            height={500}
            style={{
              transform: hover3.transform,
              transition: hover3.transition,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ZoomSection;
