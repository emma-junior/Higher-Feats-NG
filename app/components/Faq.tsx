"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import { faq } from "../data/data";

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
      <h1 className="font-playfair text-center text-primary-color text-4xl md:text-5xl lg:text-6xl leading-12 md:leading-16">
        FAQ
      </h1>
      <ul className=" mt-5 md:mt-16">
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
