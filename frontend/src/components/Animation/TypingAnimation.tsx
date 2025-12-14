import React, { useState, useEffect } from "react";

const words = ["ACADEMY"];

export default function TypingAnimation() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[index];
      if (!isDeleting) {
        setText(currentWord.slice(0, subIndex + 1));
        setSubIndex(subIndex + 1);
        if (subIndex + 1 === currentWord.length) setIsDeleting(true);
      } else {
        setText(currentWord.slice(0, subIndex - 1));
        setSubIndex(subIndex - 1);
        if (subIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 400 : 300);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mt-10">
      {text}
      <span className="border-r-2 border-black animate-pulse ml-1"></span>
    </div>
  );
}
