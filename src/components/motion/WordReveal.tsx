import { useEffect, useState, useRef } from 'react';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

export default function WordReveal({
  text,
  className = '',
  delay = 0,
  duration = 50,
  cursor = true,
  onComplete
}: WordRevealProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    // Reset on text change
    setDisplayedText('');
    setIsComplete(false);

    let currentIndex = 0;

    const typeNextLetter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutRef.current = window.setTimeout(typeNextLetter, duration);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    const startDelay = window.setTimeout(() => {
      typeNextLetter();
    }, delay);

    return () => {
      clearTimeout(startDelay);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay, duration, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    if (cursor && !isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    } else {
      setShowCursor(true);
    }
  }, [cursor, isComplete]);

  return (
    <span className={`inline ${className}`}>
      {displayedText}
      {cursor && showCursor && (
        <span className="animate-pulse text-[#e8a445]">|</span>
      )}
    </span>
  );
}