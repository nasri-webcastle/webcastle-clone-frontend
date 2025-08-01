'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Black outer circle */}
      <div
        className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-black transition-transform duration-79"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />

      {/* Green inner circle */}
      <div
        className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-green-600 transition-transform duration-75"
        style={{ transform: `translate(${position.x + 2}px, ${position.y + 2}px)`, }}
      />
    </>
  );
}
