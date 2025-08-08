// "use client";

// import React from "react";
// // import CenterSlider from "./BannerSlider";

// const OurWorks: React.FC = () => {
//   return (
//     <section className="px-6  py-16 bg-white text-center">
//       <h3 className="text-green-600 text-sm font-semibold tracking-widest mb-2">
//         OUR WORKS
//       </h3>
//       <h2 className="text-3xl md:text-4xl font-bold mb-4">
//         Explore Our Exceptional Work
//       </h2>
//       <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-medium">
//         Discover the outstanding projects we have delivered across various industries,
//         showcasing our commitment to innovation and excellence.
//       </p>
//       {/* <CenterSlider/> */}
//       <div>
//         <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//          className="relative inline-flex items-center mr-30 justify-center px-13 py-3 border border-black  font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
//           {/* Sliding Background */}
//           <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
//           {/* Text stays on top */}
//           <a  href="" className="relative no-underline z-10 hover:border-gray-700 transition-colors duration-700 ease-in-out group-hover:text-white">
//             View All
//           </a>
//         </button>
//       </div> 
//     </section>
//   );
// };

// export default OurWorks;
'use client';

import React, { useEffect, useState } from 'react';
import { getOurWorksContent } from '@/utils/getOurWorksContent';
import CenterSlider from "./BannerSlider";


interface OurWorksContent {
  title: string;
  subtitle: string;
  description: string;
}

const OurWorks: React.FC = () => {
  const [content, setContent] = useState<OurWorksContent>({
    title: '',
    subtitle: '',
    description: '',
  });

   const [isLoading, setIsLoading] = useState(true); // 👈 add this

  useEffect(() => {
    const fetchContent = async () => {
      const data = await getOurWorksContent();
      setContent(data);
      setIsLoading(false); // 👈 set loading false after fetch
    };

    fetchContent();
  }, []);

  if (isLoading) {
    return (
      <section className="px-6 py-16 bg-white text-center">
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  if (!content) {
    return (
      <section className="px-6 py-16 bg-white text-center">
        <p className="text-red-500">Failed to load content.</p>
      </section>
    );
  }


  return (
    <section className="px-6 py-16 bg-white text-center">
      <h3 className="text-green-500 text-sm font-semibold tracking-widest mb-4">
        {content.title}
      </h3>
      <h2 className="text-3xl md:text-3xl font-bold mb-4 text-black">
        {content.subtitle}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-medium">
        {content.description}
      </p>
      
      <CenterSlider/>

      {/* View All Button */}
      <div>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="relative inline-flex items-center justify-center px-13 py-3 border border-black font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400"
        >
          <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0" />
          <a
            href="#"
            className="relative no-underline z-10 transition-colors duration-700 ease-in-out group-hover:text-white"
          >
            View All
          </a>
        </button>
      </div>
    </section>
  );
};

export default OurWorks;
