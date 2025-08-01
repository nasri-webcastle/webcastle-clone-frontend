'use client';

import { useEffect, useState } from "react";
import { HomeTechnologiesHead } from "@/types/home-technologies-head";
import { getHomeTechnologiesHead } from "@/utils/home-technologies-head";

export default function HomeServiceHead() {
  const [data, setData] = useState<HomeTechnologiesHead | null>(null);
useEffect(() => {
  getHomeTechnologiesHead().then((res) => {
    if (res) {
      setData(res);
    }
  });
}, []);


  if (!data) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="bg-[#f1f2f1] pt-20 justify-center px-10 pb-8">
      <div className="flex items-center justify-between px-5">
        <div>
          <h1 className="text-sm font-semibold mb-4 text-green-600">
            {data.heading_top}
          </h1>
          <h6 className="text-3xl font-bold mb-3">
            {data.heading_main_line1}
          </h6>
          <h6 className="text-3xl font-bold">
            {data.heading_main_line2}
          </h6>
        </div>
        <div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="relative inline-flex items-center mr-6 justify-center px-12 py-3 border border-black  font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
              <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
              <a  href="" className="relative no-underline z-10 transition-colors duration-700 ease-in-out hover:border-gray-700 group-hover:text-white">
              View All
              </a>
          </button>
        </div> 
      </div>
    </div>
  );
}
