// // import {
// //   FaShopify,
// //   FaLaravel,
// //   FaPython,
// //   FaWordpress,
// //   FaMagento,
// //   FaAndroid,
// //   FaApple,
// //   FaNodeJs,
// // } from 'react-icons/fa';
// // import { SiFlutter, SiNextdotjs, SiWebflow, SiStrapi } from 'react-icons/si';

// // const technologies = [
// //   { name: 'Shopify', icon: <FaShopify className="text-[#88BA49]" /> },
// //   { name: 'Flutter', icon: <SiFlutter className="text-sky-500" /> },
// //   { name: 'iOS', icon: <FaApple className="text-black" /> },
// //   { name: 'Laravel', icon: <FaLaravel className="text-red-600" /> },
// //   { name: 'Magento', icon: <FaMagento className="text-orange-600" /> },
// //   { name: 'Node JS', icon: <FaNodeJs className="text-green-700" /> },
// //   { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
// //   { name: 'WordPress', icon: <FaWordpress className="text-blue-600" /> },
// //   { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
// //   { name: 'Webflow', icon: <SiWebflow className="text-indigo-500" /> },
// //   { name: 'Strapi', icon: <SiStrapi className="text-purple-500" /> },
// //   { name: 'Android', icon: <FaAndroid className="text-green-500" /> },
// // ];

// // export default function TechnologiesSection() {
// //   return (
// //     <section className="py-10 px-6 md:px-10 bg-white text-center rounded-2xl my-10">
// //       <div className="max-w-6xl mx-auto px-4 text-center">
// //         <p className="text-md font-semibold text-green-700 dark:text-gray-300 mb-3">
// //           TECHNOLOGIES
// //         </p>
// //         <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
// //           Speed Up your Workflow With Our 
// //         </h2>
// //         <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
// //           Technologies 
// //         </h2>
        
// //       {/* Grid */}
// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
// //         {technologies.map((tech, index) => (
// //           <div
// //             key={index}
// //             className="flex flex-raw  bg-[#f8f5f5] text-[#242424] px-1  rounded-4xl shadow hover:shadow-md transition"
// //           >
// //             <div className="text-3xl mb-3 bg-white border-0 ml-1 rounded-full p-5 mr-2 mt-2">{tech.icon}</div>
// //             <div className="text-medium  font-bold ml-4 items-center mt-8">{tech.name}</div>
// //           </div>      
// //         ))}
// //       </div>
// //       </div>
// //     </section>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { iconMap } from '@/utils/icon-map';
// import {  Technology } from '@/utils/getTechnologies';
// import { getTechnologySection,  } from '@/utils/getTechnologySection';

// export default function TechnologiesSection() {
//   const [technologies, setTechnologies] = useState<Technology[]>([]);
//   const [sectionData, setSectionData] = useState<Awaited<ReturnType<typeof getTechnologySection>> | null>(null);

//   useEffect(() => {
//     getTechnologySection().then(setSectionData).catch(console.error);
//   }, []);

//   if (!sectionData) return null;

//   return (
//     <section className="py-10 px-6 md:px-10 bg-white text-center rounded-2xl my-10">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <p className="text-md font-semibold text-green-700 dark:text-gray-300 mb-3">
//           {sectionData.title}
//         </p>
//         <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
//           {sectionData.heading1}
//         </h2>
//         <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
//           {sectionData.heading2}
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
//           {technologies.map((tech) => {
//             const IconComponent = iconMap[tech.iconName];
//             return (
//               <div
//                 key={tech.id}
//                 className="flex flex-row bg-[#f8f5f5] text-[#242424] px-1 rounded-4xl shadow hover:shadow-md transition"
//               >
//                 <div
//                   className={`text-3xl mb-3 bg-white border-0 ml-1 rounded-full p-5 mr-2 mt-2 ${tech.iconColor}`}
//                 >
//                   {IconComponent && <IconComponent />}
//                 </div>
//                 <div className="text-medium font-bold ml-4 items-center mt-8">{tech.name}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { getTechnologies, Technology } from '@/utils/getTechnologies';
import { getTechnologySection, TechnologySection } from '@/utils/getTechnologySection';

import { iconMap } from '@/utils/icon-map';

export default function TechnologiesGrid() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [section, setSection] = useState<TechnologySection | null>(null);

  useEffect(() => {
    getTechnologies().then(setTechnologies).catch(console.error);
        getTechnologySection().then(setSection).catch(console.error);

  }, []);

return (
  <section className="max-w-9xl mx-auto py-16 px-4 justify-items-center">
    {section ? (
      <>
        <h3 className="text-medium font-semibold text-green-700 tracking-widest mb-4">
          {section.title}
        </h3>
        <h2 className="text-3xl font-bold text-primary mb-3">
          {section.heading1} 
        </h2>
        <h2 className="text-3xl font-bold text-primary mb-4">
          {section.heading2} 
        </h2>
      </>
    ) : (
      <div className="text-center text-gray-500">Loading section...</div>
    )}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-6xl mx-auto mt-15">
      {technologies.map((tech) => {
        const IconComponent = iconMap[tech.iconName.trim()];
        return (
          <div
            key={tech.id}
            className="flex flex-row bg-[#f8f5f5] text-[#242424] hover:bg-[#fff8f8] px-1 rounded-4xl  transition"
          >
            <div
              className={`text-3xl mb-3 bg-white border-0 ml-1 rounded-full p-5 mr-2 mt-2 ${tech.iconColor}`}
            >
              {IconComponent ? <IconComponent /> : <span>?</span>}
            </div>
            <div className="text-medium  font-bold ml-4 items-center mt-8">{tech.name}</div>
          </div>
        );
      })}
    </div>
  </section>
);
}