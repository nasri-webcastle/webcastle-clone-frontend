'use client';

import Image from 'next/image';

const teamData = [
  {
    icon: '/images/team/Jabir_ML.webp',
    name: 'Jabir ML',
    position: 'Co-Founder & CEO',
  },
  {
    icon: '/images/team/Jenson_Thomas.webp',
    name: 'Jenson Thomas',
    position: 'Director & COO',
  },
  {
    icon: '/images/team/Remiz_Rahnas.webp',
    name: 'Remiz Rahnas',
    position: 'Co-Founder & CTO',
  },
  {
    icon: '/images/team/Mohamed_Shafi.webp',
    name: 'Mohamed Shafi',
    position: 'Director of Technology',
  },
];


export default function TeamSection() {
  return (
    <section className="bg-white max-w-9xl py-10 ">
      <div className="text-center mb-16">
        <h2 className="text-sm text-green-600 font-semibold mb-3">Our Team</h2>
        <h3 className="text-4xl text-black font-bold mb-3">Meet Our Team of Experts</h3>
        <p className="text-gray-600  mb-10">Our visionary leaders</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative inline-flex items-center justify-center px-9 py-3 border border-black text-black text-semibold rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>

          {/* Text stays on top */}
          <span className="relative z-10 transition-colors duration-700 ease-in-out group-hover:text-white">
            Contact Us
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="shadow-sm hover:shadow-lg transition hover:bg-[#239a48] hover:text-white text-center"
          >
            <div className="w-full h-100 relative">
              <Image
                  src={member.icon}
                  alt={member.name}
                  fill
                  className="object-cover"
              />
            </div>
            <div className="mt-8 mb-8">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm">{member.position}</p>
            </div>            
          </div>
        ))}
      </div>
    </section>
  );
}

