"use client";

import React from "react";
import CenterSlider from "./BannerSlider";

const OurWorks: React.FC = () => {
  return (
    <section className="px-6  py-16 bg-white text-center">
      <h3 className="text-green-600 text-sm font-semibold tracking-widest mb-2">
        OUR WORKS
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Explore Our Exceptional Work
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-medium">
        Discover the outstanding projects we have delivered across various industries,
        showcasing our commitment to innovation and excellence.
      </p>
      <CenterSlider/>
      <div>
        <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         className="relative inline-flex items-center mr-30 justify-center px-13 py-3 border border-black  font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
          {/* Text stays on top */}
          <a  href="" className="relative no-underline z-10 hover:border-gray-700 transition-colors duration-700 ease-in-out group-hover:text-white">
            View All
          </a>
        </button>
      </div> 
    </section>
  );
};

export default OurWorks;


