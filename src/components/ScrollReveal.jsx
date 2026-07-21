import React, { useEffect, useRef, useState } from 'react';
import '../styles/ScrollReveal.css';

const ScrollReveal = ({ text, className = '', tag: Tag = 'h2', delay = 0.08 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split text by \n or \r\n explicitly
  const lines = typeof text === 'string' ? text.split(/\r?\n/) : text;

  return (
    <Tag ref={elementRef} className={`word-reveal-heading ${className}`}>
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          <span className="reveal-line">
            {line.split(' ').map((word, wordIdx) => {
              const globalWordIndex = lineIdx * 10 + wordIdx;
              return (
                <span key={wordIdx} className="word-wrapper">
                  <span
                    className={`word-inner ${isVisible ? 'animate' : ''}`}
                    style={{ animationDelay: `${globalWordIndex * delay}s` }}
                  >
                    {word}&nbsp;
                  </span>
                </span>
              );
            })}
          </span>
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default ScrollReveal;
