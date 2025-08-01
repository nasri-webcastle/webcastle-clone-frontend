'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const awards = [
  {
    image: '/images/about/dubai-best-1-1.svg',
    title: '2nd Best web Designing Company in Dubai',
  },
  {
    image: '/images/about/IOT.svg',
    title: 'Top IOT Company in Dubai (UAE)',
  },
  {
    title: 'Top Ecommerce Company In Dubai',
    image: '/images/about/TopFirm-Blog-Ecommerce-1.svg',
  },
  {
    title: 'Best Mobile Application Development Company',
    image: '/images/about/Website-Design-new-1.webp',
  },
  {
    title: 'Top Web Design & Development Company',
    image: '/images/about/6949a5af98af0a1c12e32935d58412db_3-2-1-1.svg',
  },
];

export default function AwardsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollStep = 400;

  // Autoplay effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      // Check if scroll can continue to the right
      if (
        container.scrollLeft + container.offsetWidth <
        container.scrollWidth
      ) {
        container.scrollBy({ left: scrollStep, behavior: 'smooth' });
      } else {
        // Go back to start (loop-like but finite in direction)
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const manualScroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    setIsPaused(true);

    if (dir === 'left') {
      container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }

    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section className="relative bg-[#E4F7E7] text-white   md:px-10   rounded-2xl overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold px-15 text-[#000000] mt-20 mb-5">
        Awards & Recognition
      </h2>      
      <section className="relative bg-[##E4F7E7] text-white py-6 px-5 md:px-10  rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-3 w-full relative">

          {/* Left Arrow */}
          <button
            onClick={() => manualScroll('left')}
            className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-8 h-8 font-thin text-[#dfe4e2]" />
          </button>

          {/* Scrollable Items */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar w-full px-10 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="w-[280px] bg-white flex-shrink-0 p-4 rounded-2xl text-center  scroll-snap-start"
              >
                <div className="relative w-full h-28 mb-8 mt-6">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold text-sm text-gray-700 mb-6">{award.title}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => manualScroll('right')}
            className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-8 h-8 text-[#dfe4e2]" />
          </button>
        </div>

        <section className="px-8 md:px-10 my-15">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Get In Touch Section */}
            <div className="flex-1  py-5 px-6 text-center ">
              <h2 className="text-2xl  font-bold  text-black mb-4">
                What can we help you achieve?
              </h2>
              <p className="text-gray-800 text-medium max-w-80 mx-auto mb-8">
                Tell us your idea and we’ll help turn them into reality
              </p>             
              <button
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="relative inline-flex items-center justify-center px-10 py-3 border border-black  font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
                {/* Sliding Background */}
                <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
                {/* Text stays on top */}
                <a  href="" className="relative no-underline text-black z-10 hover:border-gray-700 transition-colors duration-700 ease-in-out group-hover:text-white">
                Get In Touch
                </a>
              </button>
            </div>

            <div className="hidden md:block w-px h-60 mt-5 bg-green-400"></div>

            {/* Careers Section */}
            <div className="flex-1  py-5 px-6 text-center ">
              <h2 className="text-2xl  font-bold  text-black mb-4">
                Where will your career take you?
              </h2>
              <p className="text-gray-800 text-medium max-w-80 mx-auto mb-8">
                Webcastle is a place where you can grow & realize your potential
              </p>       
              <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}              
              className="relative inline-flex items-center justify-center px-10 py-3 border border-black  font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
                {/* Sliding Background */}
                <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
                {/* Text stays on top */}
                <a  href="" className="relative  text-black no-underline z-10 hover:border-gray-700 transition-colors duration-700 ease-in-out group-hover:text-white">
                  Work With Us
                </a>
              </button>
            </div>
          </div>
        </section>
      </section>      
    </section>     
  );
}
