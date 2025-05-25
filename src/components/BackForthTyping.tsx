
import React, { useState, useEffect } from 'react';

interface BackForthTypingProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  className?: string;
  showCursor?: boolean;
}

export const BackForthTyping: React.FC<BackForthTypingProps> = ({
  text,
  speed = 80,
  pauseDuration = 2000,
  className = '',
  showCursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          setDisplayedText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isDeleting, isPaused, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="animate-blink text-blue-600 dark:text-blue-400">|</span>
      )}
    </span>
  );
};
