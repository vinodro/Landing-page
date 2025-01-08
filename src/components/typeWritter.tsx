"use client";

import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (text[index] ?? ""));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [text, speed]);

  return <div className="special-width text-gray-400 text-lg text-center w-[30ch] max-w-[30ch] lg:w-[50ch] lg:max-w-[50ch]">{displayedText}</div>;
};

export default Typewriter;
