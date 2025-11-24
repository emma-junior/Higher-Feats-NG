"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import { faq } from "../data/data";

export interface faqType {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [active, setActive] = useState<number | null>(null);

  function handleToggle(index: number) {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  }

  return (
    <div className="w-[85%]">
      <h1 className="font-playfair text-center text-primary-color text-6xl">
        FAQ
      </h1>
      <ul className="mt-16">
        {faq.map((faq) => (
          <Accordion
            key={faq.id}
            item={faq}
            active={active}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default Faq;
