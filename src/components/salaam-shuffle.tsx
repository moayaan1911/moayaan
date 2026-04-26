"use client";

import { useEffect, useRef, useState } from "react";

const greetings = [
  "ٱلسَّلَامُ عَلَيْكُمْ",
  "Assalamualaikum",
  "अस्सलामु अलैकुम",
  "Selamün Aleyküm",
  "আসসালামু আলাইকুম",
  "Assalamou Alaykoum",
  "Ассаляму алейкум",
  "愿主赐你平安",
  "As-salamu alaykum",
  "سلام علیکم",
  "アッサラーム・アライクム",
];

export function SalaamShuffle() {
  const [index, setIndex] = useState(1);
  const lastStoppedIndex = useRef(1);

  useEffect(() => {
    let shuffleTimer: number | undefined;
    let phaseTimer: number | undefined;
    let isActive = true;

    const nextStopIndex = () => {
      const next = Math.floor(Math.random() * greetings.length);
      return next === lastStoppedIndex.current
        ? (next + 1) % greetings.length
        : next;
    };

    const startCycle = () => {
      shuffleTimer = window.setInterval(() => {
        setIndex((current) => (current + 1) % greetings.length);
      }, 120);

      phaseTimer = window.setTimeout(() => {
        if (shuffleTimer) window.clearInterval(shuffleTimer);
        const stopIndex = nextStopIndex();
        lastStoppedIndex.current = stopIndex;
        setIndex(stopIndex);

        phaseTimer = window.setTimeout(() => {
          if (isActive) startCycle();
        }, 1000);
      }, 2000);
    };

    startCycle();

    return () => {
      isActive = false;
      if (shuffleTimer) window.clearInterval(shuffleTimer);
      if (phaseTimer) window.clearTimeout(phaseTimer);
    };
  }, []);

  return <span className="salaam-text">{greetings[index]}</span>;
}
