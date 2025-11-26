"use client";

import { useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faqType } from "../data/data";

interface AccordionItemProps {
  item: faqType;
  active: number | null;
  handleToggle: (id: number) => void;
}

const Accordion = ({ item, active, handleToggle }: AccordionItemProps) => {
  const contentEl = useRef<HTMLDivElement | null>(null);

  return (
    <li className="border-b-solid border-b py-5">
      <div
        onClick={() => handleToggle(item.id)}
        className="flex justify-between"
      >
        <p className="font-mulish text-lg font-semibold text-primary-dark">
          {item.question}
        </p>
        <p>{item.id === active ? <AiOutlineMinus /> : <AiOutlinePlus />}</p>
      </div>
      <div
        ref={contentEl}
        className={`relative overflow-hidden transition-[height] duration-350 ease
  ${active === item.id ? "h-auto" : "h-0"}`}
        style={
          active === item.id
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="font-mulish text-base text-primary-dark pt-4">
          {item.answer}
        </p>
      </div>
    </li>
  );
};

export default Accordion;
