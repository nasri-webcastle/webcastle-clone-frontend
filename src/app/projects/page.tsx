// "use client";

// import Image from "next/image";

// export default function AboutBanner() {
//   return (
//     <section className="relative w-full h-[550px] flex items-center justify-start text-left">
//       {/* ✅ Background Image */}
//       <Image
//         src="/images/works banner.webp"
//         alt="About Banner"
//         fill
//         className="object-cover z-0"
//         priority
//       />
//       <div className="relative z-20 max-w-6xl px-6 md:px-30">
//         <p className="text-white text-6xl font-bold">Our Works</p>
//         <p className="text-white text-medium max-w-xl">
//          From web design & development through to digital marketing . We’ll increase traffic by 50%, generate more leads and boost sales
//         </p>
//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProjectsPage } from '@/utils/projects-page';
import ProjectsPage from "@/app/components/Projects"; 
import EnquirySection from '../components/Enquiry';


interface Props {
  title: string;
  description: string;
  subtitle: string;
  description2: string;
}

export default function ProjectsBanner({}: Props) {
  const [data, setData] = useState<Awaited<ReturnType<typeof getProjectsPage>> | null>(null);

  useEffect(() => {
    getProjectsPage().then(setData);
  }, []);

  if (!data) return null;

  const { background, title, description, subtitle, description2 } = data;

  return (
    <div>
        <section className="relative w-full h-[550px] flex items-center justify-start text-left">
            {/* ✅ Background Image */}
            <Image
                src={background.url}
                alt={background.alternativeText || 'Projects Banner'}
                fill
                className="object-cover z-0"
                priority
            />
            <div className="absolute inset-0 bg-[#4f4c5fcc] mix-blend-multiply bg-opacity-2" />
            <div className="relative z-20 max-w-6xl px-6 md:px-30 space-y-4">
                <p className="text-white text-4xl md:text-6xl font-bold mb-6">{title}</p>
                <p className="text-white text-md max-w-2xl">{description}</p>
            </div>
        </section> 
        <section className="px-6 py-10 mt-13 bg-white text-center">
            <h2 className="text-3xl  font-bold mb-4 text-black">
                {subtitle}             
            </h2>
            <p className="text-gray-900 max-w-xl mx-auto text-base md:text-medium">
                {description2}
            </p>              
        </section>
        <ProjectsPage/>
        <EnquirySection/>
    </div>
  );
}