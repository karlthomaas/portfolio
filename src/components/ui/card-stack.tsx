"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "../homepage/testimonials";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let interval: any;
export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Testimonial[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Testimonial[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Testimonial[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 7000);
  };

  return (
    <div className="relative h-[300px] w-full">
      {cards.map((card, index) => {
        return (
          <motion.a
            key={card.id}
            className="absolute bg-background text-neutral-200 w-full h-full rounded-3xl p-5 sm:p-8 shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
            href={card.link}
            target="_blank"
          >
            <div className="font-normal text-neutral-200 max-h-[250px] overflow-ellipsis">
              {card.content}
            </div>
            <div>
              <p className="font-medium text-white">
                {card.name}
              </p>
              <p className=" font-normal text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
};
