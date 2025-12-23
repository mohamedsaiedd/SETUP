import { useState, useEffect } from "react";

const words = ["WORLD." , "CAREER." , "SUCCESS." ];

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
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
      {text}
    </span>
  );
}
