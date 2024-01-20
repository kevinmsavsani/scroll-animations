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

export default function Home() {
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
      </main>
    </div>
  );
}
