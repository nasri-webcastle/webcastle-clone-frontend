// 'use client';

// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from "next/image";

// const testimonials = [
//   {
//     quote: "WebCastle WebCastle has met our eCommerce needs perfectly, delivering a tailored application with great support from their energetic team. We highly recommend them and look forward to future collaborations. Thank you, WebCastle, for your exceptional work! Our digital presence. Their team is responsive, skilled, and reliable.",
//     name: "JAYAPRAKASH R",
//     role: "Chief Manager- IT , AVS Kottakkal",
//     video: "https://www.youtube.com/embed/HKkXG2jLs3o?autoplay=1&mute=1&loop=1&playlist=HKkXG2jLs3o",
//   },
//   {
//     quote: "Geepas Academy found the perfect partner, Webcastle, who expertly blended technical skills with a deep understanding of our business needs. A stunning website that resonates with our goals, receiving positive customer feedback and outstanding after-sale support. Highly recommended!",
//     name: "Thomas Joseph Nellissery",
//     role: "Director, Geepas Academy, IIM-A Former CEO, Western International LLC",
//     video: "https://www.youtube.com/embed/jT4cnQmqLFU?autoplay=1&mute=1&loop=1&playlist=jT4cnQmqLFU",
//   },
//   {
//     quote: "I'm impressed with WebCastle's milestones and their support in creating a fantastic learning app. They have turned my dreams into reality, making them an ideal partner for anyone looking to bring their ideas to life.",
//     name: "Arjun R Shanker",
//     role: "IAS Mentor, CEO & Founder, LearnStroke",
//     video: "https://www.youtube.com/embed/n7quEhrfR4Q?autoplay=1&mute=1&loop=1&playlist=n7quEhrfR4Q",
//   },
// ];

// export default function TestimonialSlider() {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   const handleNext = () => {
//     if (index < testimonials.length - 1) setIndex(index + 1);
//   };

//   const { quote, name, role, video } = testimonials[index];

//   return (
//     <section className=" pt-10 py-5 rounded-2xl my-10 text-center">
//       <h2 className="text-sm text-[#05a127] font-semibold uppercase tracking-wider mb-4">
//         TESTIMONIAL
//       </h2>
//       <h3 className="text-3xl  font-bold text-black mb-10">
//         What Our Client Says
//       </h3>

//       <div className="relative max-w-9xl mx-auto bg-white ">
//             {/* Row layout */}
//             <div className="flex flex-col md:flex-row items-center gap-20">
//                 {/* Video */}
//                 <div className="w-full md:w-1/2">
//                     <div className="relative w-full h-64 md:h-80 mt-30 mb-10 overflow-hidden">
//                         <iframe
//                             src={video}
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                             className="w-full h-full "
//                         ></iframe>
//                         {/* <span className="absolute bottom-4 left-4 bg-white text-[#315549] px-4 py-1 text-xs font-semibold rounded-full shadow">
//                             WATCH VIDEO
//                         </span> */}
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 text-left">
//                     {/* Text + Arrows Container */}
//                     <div className="w-full  flex flex-col justify-between">
//                         <div className="min-w-[24px] mt-0 mb-6">
//                             <Image
//                             src="/images/home/quote.svg" 
//                             alt="Quote Icon"
//                             width={65}
//                             height={65}
//                             />
//                         </div>
//                         <p className="text-medium text-gray-700 mb-15">{quote}</p>
//                         <p className="text-[#000000] text-3xl font-semibold mb-3">{name}</p>
//                         <p className="text-black text-medium mb-15">{role}</p>
//                     </div>

//                     {/* Arrows inside the same box */}
//                     <div className="flex gap-4 ">
//                         <button
//                         onClick={handlePrev}
//                         disabled={index === 0}
//                         className={`p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition ${
//                             index === 0 ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                         >
//                         <ChevronLeft />
//                         </button>

//                         <button
//                         onClick={handleNext}
//                         disabled={index === testimonials.length - 1}
//                         className={`p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition ${
//                             index === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                         >
//                         <ChevronRight />
//                         </button>
//                     </div>
//                 </div>                            
//             </div>
//       </div>
//     </section>
//   );
// }

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
