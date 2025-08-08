// 'use client';

// import Image from 'next/image';

// const clientLogos = [
//     {
//     src: '/images/clients/bharathyTmt.svg',
//     alt: 'Bharathy Tmt',
//   },  
//   {
//     src: '/images/clients/josco.svg',
//     alt: 'Josco',
//   },
//   {
//     src: '/images/clients/chavara.svg',
//     alt: 'Chavara Matrimony',
//   },
//   {
//     src: '/images/clients/kottakkal.svg',
//     alt: 'Kottakkal',
//   },
//   {
//     src: '/images/clients/lulu.svg',
//     alt: 'Lulu',
//   },
//   {
//     src: '/images/clients/kutukaran-1-1.svg',
//     alt: 'Muthoot',
//   },
  
//   {
//     src: '/images/clients/reporter.png',
//     alt: 'Reporter',
//   },
//   {
//     src: '/images/clients/centreal-Bazaar.svg',
//     alt: 'Centreal Bazaar',
//   },
//   {
//     src: '/images/clients/24Connect.webp',
//     alt: '24 Connect',
//   },
//   {
//     src: '/images/clients/Bhima-jewellers.png',
//     alt: 'Bhima',
//   },
//   {
//     src: '/images/clients/vaidhyaratnam.svg',
//     alt: 'Vaidhyaratnam',
//   },
//    {
//     src: '/images/clients/flowers.webp',
//     alt: 'Flowers TV',
//   },
//   {
//     src: '/images/clients/Logo_DubaiPolice-1-1-1.svg',
//     alt: 'Dubai Police',
//   },
//   {
//     src: '/images/clients/dev.png',
//     alt: 'Dev',
//   },
// ];

// export default function ClientsTrustUs() {
//   return (
//     <section className="bg-[#f5f8f6] py-16 px-6 md:px-10 text-center rounded-2xl">
//         {/* Heading */}
//         <div className="text-center mb-12">
//             <h2 className="text-sm text-green-600 font-semibold uppercase tracking-widest mb-2">
//             CLIENTS
//             </h2>
//             <h3 className="text-4xl  font-bold text-black mb-4">
//             They Trust Us
//             </h3>
//             <p className="text-black max-w-2xl mx-auto text-base md:text-medium">
//             Join the ranks of our satisfied clients who trust WebCastle for exceptional web development and digital solutions.
//             </p>
//         </div>      

//         {/* Logo Grid */}
//         <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 max-w-6xl p-4 mx-auto mb-10">
//           {clientLogos.map((logo, index) => (
//           <div
//           key={index}
//           className="flex items-center justify-center border border-gray-300  p-7 bg-white shadow-sm hover:shadow transition duration-300"
//           >
//            <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={60}
//               className="object-contain"
//            />
//           </div>
//           ))}
            
//            <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className=" right-5 z-50 px-1 py-2  border border-gray-300 hover:text-white hover:bg-green-700 transition"
//             >
//               <a
//               href=""
//               className="inline-block ml-0 justify-center text-black  p-10  hover:text-white text-lg font-medium transition"
//               >
//                 View All
//               </a>
//             </button>
//         </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getClientLogoSection, ClientLogoSection } from "@/utils/getClientsData";

export default function ClientsTrustUs() {
  const [data, setData] = useState<ClientLogoSection | null>(null);

  useEffect(() => {
    getClientLogoSection().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="bg-[#f5f8f6] py-16 px-6 md:px-10 text-center rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-sm text-green-600 font-semibold uppercase tracking-widest mb-3">
          {data.title}
        </h2>
        <h3 className="text-3xl font-bold text-black mb-4">
          {data.heading}
        </h3>
        <p className="text-gray-800 max-w-2xl mx-auto text-base md:text-medium">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 max-w-6xl p-4 mx-auto mb-10">
        {data.logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center border-1 border-gray-300 px-3 py-5 bg-white shadow-sm hover:shadow transition"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
        ))}

        <div className="col-span-full md:col-span-1 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-full border border-gray-300 hover:bg-green-700 hover:text-white py-2 text-black font-medium transition"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
