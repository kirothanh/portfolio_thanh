import { useEffect, useState } from 'react';

const useTypewriter = (text, speed = 50, loop = false) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      // Reset để lặp lại
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [text, index, speed, loop]);

  return displayText;
};

export default function Typewriter({ text, speed = 50, loop = true }) {
  const displayText = useTypewriter(text, speed, loop);

  return <p>{displayText}</p>;
}
