import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<Array<{ x: number; y: number; timestamp: number }>>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update cursor position
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Add to trail
      trailRef.current.push({
        x: clientX,
        y: clientY,
        timestamp: Date.now()
      });

      // Remove old trail points
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 500);
    };

    const handleMouseEnter = () => {
      cursor.style.display = 'block';
    };

    const handleMouseLeave = () => {
      cursor.style.display = 'none';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        width: '20px',
        height: '20px',
        transform: 'translate(-50%, -50%)',
        display: 'none'
      }}
    >
      <div className="w-full h-full bg-white rounded-full opacity-80 animate-pulse shadow-lg shadow-cyan-400/50" />
    </div>
  );
};

export default CustomCursor;