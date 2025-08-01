'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const awards = [
  {
    title: 'Best Digital Agency Award 2019',
    image: '/images/about/Group-14925-3.png',
    description: 'WebCastle Technologies is the Best Digital Agency at the Smart SMB Summit and Awards 2019',
  },
  {
    title: 'Best Mobile Application Development Company Award',
    image: '/images/about/Website-Design-new-1.webp',
    description: 'WebCastle Media wins Best Mobile Application Development Company Award',
  },
  {
    title: 'Second Best Web Designing Company In Dubai',
    image: '/images/about/dubai-best-1-1.svg',
    description: 'WebCastle Technologies ranked as the Second Best Web Designing Company in Dubai',
  },
  {
    title: 'Top Web Design & Development Company',
    image: '/images/about/6949a5af98af0a1c12e32935d58412db_3-2-1-1.svg',
    description: 'WebCastle Technologies ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
  {
    title: 'Top Ecommerce Company In Dubai',
    image: '/images/about/TopFirm-Blog-Ecommerce-1.svg',
    description: 'WebCastle Technologies ranked as Top eCommerce Companies in Dubai.',
  },
];

const stats = [
  { value: '16+', label: 'Years of Expertise' },
  { value: '800+', label: 'Clients Globally' },
  { value: '150+', label: 'Dedicated Castlers' },
  { value: '1000+', label: 'Projects Completed' },
];

export default function AwardsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 260;
    const delay = 2000;

    const interval = setInterval(() => {
      if (isPaused || !container) return;

      container.scrollBy({ left: scrollStep, behavior: 'smooth' });

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - scrollStep
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'auto' });
        }, 600);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Manual scroll
  const manualScroll = (direction: 'left' | 'right') => {
    setIsPaused(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
    setTimeout(() => setIsPaused(false), 5000); // resume after 5s
  };

  // Counter effect
  useEffect(() => {
    const duration = 1500;
    const frameDuration = 20;
    const totalFrames = Math.round(duration / frameDuration);

    const counters = stats.map((stat, index) => {
      let frame = 0;
      const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10);

      const interval = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const current = Math.floor(progress * numericValue);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });

        if (progress === 1) clearInterval(interval);
      }, frameDuration);

      return interval;
    });

    return () => counters.forEach(clearInterval);
  }, []);

  return (
    <div className="text-gray-800">
      {/* === AWARDS SECTION === */}
      <section className="relative bg-[#13042c] text-white py-16 px-6 md:px-10 mx-30 mt-20 mb-20 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-start gap-4 w-full">
          {/* Heading & Controls */}
          <div className="flex flex-col min-w-max pr-6 z-0">
            <h2 className="text-4xl font-bold leading-tight">Our</h2>
            <h2 className="text-4xl font-bold leading-tight">Achievements</h2>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => manualScroll('left')}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="p-3 rounded-full hover:bg-green-700 transition border"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => manualScroll('right')}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="p-3 rounded-full hover:bg-green-700 transition border"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Awards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll no-scrollbar w-full"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
            }}
          >
            {[...awards, ...awards].map((award, idx) => (
              <div
                key={idx}
                className="w-[280px] flex-shrink-0 p-4 gap-20 rounded-md text-center shadow-md scroll-snap-start"
              >
                <div className="relative w-full h-28 mb-4">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold text-xl text-white mb-4">{award.title}</p>
                <p className="font-medium text-sm text-white">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === COUNTERS SECTION === */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-4 gap-8 text-center">
          {stats.map((item, idx) => (
            <div key={idx}>
              <p className="text-6xl font-medium text-green-600">
                {counts[idx]}
                {item.value.includes('+') && '+'}
              </p>
              <p className="text-xl font-light mt-1 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
