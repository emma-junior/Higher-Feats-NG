"use client";

import { useGSAP } from "@gsap/react";

interface marqueeImagesProps {
  eventImages: string[];
}

const MarqueeImgSlider = ({ eventImages }: marqueeImagesProps) => {
  console.log(eventImages, "event image");
  useGSAP(() => {
    // Get container safely
    const container = document.querySelector<HTMLElement>(".marquee-inner");
    if (!container) return; // prevent null errors

    // Clone safely
    const clones = container.cloneNode(true) as HTMLElement;
    container.appendChild(clones);

    let scrollAmount = 0;
    let isPaused = false;

    function marqueeScroll() {
      if (!container) return; // prevent null errors

      if (!isPaused) {
        scrollAmount += 1; // speed
        container.style.transform = `translateX(-${scrollAmount}px)`;

        // Reset when half width is scrolled
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(marqueeScroll);
    }

    marqueeScroll();

    // Wrapper for hover pause
    const wrapper = document.querySelector<HTMLElement>(".marquee-wrapper");
    if (!wrapper) return;

    wrapper.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    wrapper.addEventListener("mouseleave", () => {
      isPaused = false;
    });
  });
  return (
    <div className="marquee-wrapper">
      <div className="marquee-inner">
        {eventImages.map((pic, index) => (
          <div
            key={pic}
            className={`ratio ratio-1x1 w-[320px] md:w-[450px] ${
              index % 2 === 0
                ? "h-[350px] md:h-[400px]"
                : "h-[420px] md:h-[470px]"
            } `}
          >
            <img className="w-full h-full" src={pic} alt="event-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeImgSlider;
