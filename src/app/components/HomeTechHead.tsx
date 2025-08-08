// 'use client';

// import { useEffect, useState } from "react";
// import { HomeTechnologiesHead } from "@/types/home-technologies-head";
// import { getHomeTechnologiesHead } from "@/utils/home-technologies-head";

// export default function HomeTechHead() {
//   const [data, setData] = useState<HomeTechnologiesHead | null>(null);

//   useEffect(() => {
//     getHomeTechnologiesHead().then(setData);
//   }, []);

//   if (!data) return null;

//   return (
//     <div className="bg-[#f1f2f1] pt-20 pb-10">
//       <div className="flex items-center justify-between px-10 ml-23">
//             {/* Left: Headings */}
//             <div>
//                 <h1 className="text-medium font-semibold mb-4 text-green-600">
//                     {data.heading_top}
//                 </h1>
//                 <h6 className="text-4xl font-semibold">
//                     {data.heading_main_line1}
//                 </h6>
//                 <h6 className="text-4xl font-semibold">
//                     {data.heading_main_line2}
//                 </h6>
//             </div>

//             {/* Right: Button */}              
//             <div>
//                 <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//                  className="relative inline-flex items-center mr-30 justify-center px-13 py-3 border border-black  font-medium rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
//                   {/* Sliding Background */}
//                   <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>
//                   {/* Text stays on top */}
//                   <a  href="" className="relative no-underline z-10 transition-colors duration-700 ease-in-out hover:border-gray-700 group-hover:text-white">
//                     View All
//                   </a>
//                 </button>
//             </div> 
//       </div>
//                   {/* <ServicesSection/>             */}
      
//     </div>
//   );
// }
