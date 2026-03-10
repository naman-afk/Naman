import { useEffect, useState } from "react";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function useNameReorder(text, duration = 1200) {
  const letters = text.split("");
  const [display, setDisplay] = useState(shuffle(letters));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay(letters);
    }, duration);

    return () => clearTimeout(timeout);
  }, [text, duration]);

  return display;
}
