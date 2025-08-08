// 'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAwardsSection } from '@/utils/getAwardsSection';

export default function AwardsSection() {
  const [data, setData] = useState<Awaited<ReturnType<typeof getAwardsSection>> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    getAwardsSection().then(setData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const offset = scrollDirection === 'left' ? -300 : 300;
        scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });

        // Toggle scroll direction
        setScrollDirection((prev) => (prev === 'left' ? 'right' : 'left'));
      }
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, [scrollDirection]);

  const manualScroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <section className="relative bg-[#E4F7E7] text-white py-20 md:px-10 rounded-2xl overflow-hidden">
      <h2 className="text-3xl font-bold text-[#000000] mb-6">{data.sectionTitle}</h2>

      {/* Awards Scrollable Section */}
      <div className="relative py-6 px-5 md:px-10 rounded-2xl">
        <button
          onClick={() => manualScroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 bg-white shadow rounded-full"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar w-full px-10 scroll-smooth scroll-snap-x scroll-snap-mandatory"
        >
          {data.awards.map((award) => (
            <div
              key={award.id}
              className="w-[280px] bg-white flex-shrink-0 p-4 rounded-2xl text-center scroll-snap-start"
            >
              <div className="relative w-full h-28 mb-8 mt-6 flex justify-center items-center">
                <Image
                  src={award.image.url}
                  alt={award.image.alt}
                  width={125}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-sm text-gray-700 mb-6">{award.title}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => manualScroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 bg-white shadow rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* CTA Cards */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 relative">
        {data.ctas.map((cta, index) => (
          <div key={cta.id} className="p-3 text-center relative">
            <h3 className="text-2xl font-bold mb-4 text-black">{cta.title}</h3>
            <p className="text-gray-800 text-medium max-w-80 mx-auto mb-8">{cta.description}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative inline-flex items-center justify-center px-10 py-3 border border-black font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400"
            >
              <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
              <a href="" className="relative text-black no-underline z-10 group-hover:text-white">
                {cta.buttonlabel}
              </a>
            </button>

            {index === 0 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-px bg-green-500"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
