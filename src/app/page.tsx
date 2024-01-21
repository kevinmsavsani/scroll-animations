"use client";
import React from "react";
import Header from "./components/Header";
import SectionLayout from "./components/SectionLayout";
import HorizontalWrapper from "./components/HorizontalWrapper";
import Card from "./components/Card";
import { cards } from "./utils/cards";
import Fullpage from "./components/Fullpage";
import TextSection from "./components/TextSection";
import ZoomSection from "./components/ZoomSection";
import CardContainer from "./components/CardContainer";
import CardContainerBlur from "./components/CardContainer-Blur";

export default function Home() {
  return (
    <div className="z-10">
      <Header />
      <main className="w-full">
        <CardContainer />
        <CardContainerBlur />
        <Fullpage />

        <SectionLayout>
          <HorizontalWrapper>
            <div className="absolute grid grid-cols-5 gap-4 w-[2500px]">
              {cards.slice(0, 5).map((card, index) => (
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
      </main>
    </div>
  );
}
