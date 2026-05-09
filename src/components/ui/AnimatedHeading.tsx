import { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  initialDelay?: number;
  charDelay?: number;
}

export const AnimatedHeading = ({
  text,
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4" style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split('').map((char, charIndex) => {
            const delay = (lineIndex * line.length * charDelay) + (charIndex * charDelay);
            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                style={{
                  display: 'inline-block',
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateX(0)' : 'translateX(-18px)',
                  transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
};
