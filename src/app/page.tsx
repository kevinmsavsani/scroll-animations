"use client";
import React from "react";
import Header from "./components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLayout from "./components/SectionLayout";
import HorizontalWrapper from "./components/HorizontalWrapper";
import Card from "./components/Card";
import { cards } from "./utils/cards";
import Fullpage from "./components/Fullpage";
import TextSection from "./components/TextSection";
import ZoomSection from "./components/ZoomSection";

export default function Home() {
  const video = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <div className="z-10">
      <Header />
      <main className="w-full">
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="grid grid-cols-5 gap-4">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <Fullpage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="grid grid-cols-5 gap-4" style={{ right: 0 }}>
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>



        <SectionLayout>
          <ZoomSection />
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>
      </main>
    </div>
  );
}
