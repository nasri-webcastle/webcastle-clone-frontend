'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getTestimonials, Testimonial } from '@/utils/getTestimonials';
import { getTestimonialSection, TestimonialSectionContent } from '@/utils/getTestimonialSection';

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [section, setSection] = useState<TestimonialSectionContent | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const [testimonialData, sectionData] = await Promise.all([
          getTestimonials(),
          getTestimonialSection(),
        ]);
        setTestimonials(testimonialData);
        setSection(sectionData);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      }
    }

    fetchData();
  }, []);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  if (!testimonials.length || !section) return null;

  const { quote, name, role, video } = testimonials[index];

  return (
    <section className=" py-10 rounded-2xl my-5 text-center">
      <h2 className="text-medium text-[#05a127] font-semibold uppercase tracking-wider mb-4">
        {section.title}
      </h2>
      <h3 className="text-3xl font-bold text-black mb-10">
        {section.heading}
      </h3>

      <div className="relative max-w-9xl mt-10 mx-auto bg-white">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 mt-20 mb-10 overflow-hidden">
              <iframe
                src={video}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-3xl md:w-1/2 text-left">
            <div className="w-lg flex flex-col justify-between">
              <div className="min-w-[24px] mt-0 mb-6">
                <Image
                  src="/images/home/quote.svg"
                  alt="Quote Icon"
                  width={65}
                  height={65}
                />
              </div>
              <p className="text-medium text-gray-700 mb-10">{quote}</p>
              <p className="text-[#000000] text-xl font-semibold mb-3">{name}</p>
              <p className="text-black text-medium mb-10">{role}</p>
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className={`p-3 rounded-full border border-black hover:bg-green-600 hover:text-white hover:border-0 transition ${
                  index === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ChevronLeft />
              </button>

              <button
                onClick={handleNext}
                disabled={index === testimonials.length - 1}
                className={`p-3 rounded-full border border-black hover:bg-green-600 hover:text-white transition ${
                  index === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
