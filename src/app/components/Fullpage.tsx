import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Fullpage() {
  const secRef = React.useRef<HTMLDivElement>(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    //target is the element that we want to track
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <div ref={secRef} className="relative overflow-hidden">
      <motion.img
        src="/images/rover.jpg"
        alt="monkey"
        className="w-full h-1000px object-cover object-center rounded-md border-1 border-solid border-border transition duration-300 ease-in-out"
        style={{
          scale: scale,
          x: xTransform,
        }}
      />
    </div>
  );
}

export default Fullpage;
