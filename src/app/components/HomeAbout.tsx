'use client';

import { useEffect, useState } from 'react';
import { getHomeAboutData } from '@/utils/home-about';
import { HomeAboutType } from '@/types/home-about';
import Image from 'next/image';

export default function HomeAbout() {
  const [aboutData, setAboutData] = useState<HomeAboutType>({
    title: "",
    heading: "",
    description: "",
    imageLeft: [],
    imageRight: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomeAboutData();
        console.log('✅ Fetched Home About data:', data);
        setAboutData(data);
      } catch (error) {
        console.error('❌ Error fetching Home About:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <section className="flex w-full h-[600px] mx-auto bg-white mt-2 mb-20">
      {/* Image section */}
      <div className="flex items-start justify-start w-1/2 p-14">
        <div className="relative w-full max-w-4xl h-[600px] mx-auto">
          {/* Right Image (bottom-right, behind) */}
          {aboutData.imageRight[0] && (
            <div className="absolute bottom-41 right-9 z-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${aboutData.imageRight[0].formats?.small?.url || aboutData.imageRight[0].url}`}
                alt={aboutData.imageRight[0].name}
                width={250}
                height={350}
                className="object-cover rounded-xl"
                unoptimized
              />
            </div>
          )}

          {/* Left Image (top-left, on top) */}
          {aboutData.imageLeft[0] && (
            <div className="absolute top-0 left-18 z-10">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${aboutData.imageLeft[0].formats?.medium?.url || aboutData.imageLeft[0].url}`}
                alt={aboutData.imageLeft[0].name}
                width={350}
                height={500}
                className="object-cover rounded-[2rem] border-[10px] border-white shadow-xl"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex items-end justify-end w-1/2 pt-4">
        <div className="py-16 px-6 md:px-20 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-medium font-semibold mb-4 text-green-600">{aboutData.title}</h2>
            <p className="text-3xl font-semibold mb-4">{aboutData.heading}</p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
              {aboutData.description}
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative inline-flex items-center justify-center px-9 py-3 border border-black text-black text-semibold rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400"
            >
              <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
              <span className="relative z-10 transition-colors duration-700 ease-in-out group-hover:text-white">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
