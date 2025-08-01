'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/ourWorks/WC-Chavara-matrimony-scaled.webp',
  '/images/ourWorks/WC-Haeal-scaled.webp',
  '/images/ourWorks/WC-porject-01-Route-Auto_20_24-size-increase.webp',
  '/images/ourWorks/WhatsApp-Image-2022-12-14-at-11.05.58-PM.webp',
  '/images/ourWorks/WC-TT-Devassy-website-app-scaled.webp',
];

const CenterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const endX = useRef(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay every 2 seconds — never stops
  useEffect(() => {
    intervalRef.current = setInterval(next, 3000); // Run forever

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Swipe / Drag — but doesn’t pause autoplay
  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    endX.current = e.clientX;
    const diff = endX.current - startX.current;

    if (diff > 50) {
      prev();
    } else if (diff < -50) {
      next();
    }
  };

  return (
    <div className="relative w-full max-w-9xl  overflow-hidden py-10 bg-white">
      <div
        className="relative flex items-center justify-center h-[450px] transition-all duration-800"
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Left Peek Image */}
        <div className="absolute left-0 ml-0 w-[180px] h-[350px] overflow-hidden z-10 rounded-xl shadow opacity-20 transition-opacity duration-500">
          <Image
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            fill
            className="object-cover object-right"
          />
        </div>

        {/* Main Image */}
        <div className="relative w-[900px] h-[400px] rounded-xl overflow-hidden shadow-2xl transition-all duration-800 px-2">
          <Image
            src={images[currentIndex]}
            alt="Main"
            fill
            className="object-cover transition-all duration-700"
          />

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#315549] rounded-full p-2 shadow hover:bg-gray-100 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#315549] rounded-full p-2 shadow hover:bg-gray-100 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Right Peek Image */}
        <div className="absolute right-0 mr-0 w-[180px] h-[350px] overflow-hidden z-10 rounded-xl shadow opacity-20 transition-opacity duration-500">
          <Image
            src={images[(currentIndex + 2) % images.length]}
            alt="Next"
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </div>
  );
};

export default CenterSlider;
