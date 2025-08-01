'use client';

import React from 'react';
import Image from 'next/image';

const values = [
  {
    number: '01',
    title: 'Quality',
    description:
      'We promise to deliver the highest quality work every single time and ensure that you get the results you want.',
  },
  {
    number: '02',
    title: 'Commitment',
    description:
      'We at WebCastle are incredibly proud of what we do while being 100% committed to meet your goals.',
  },
  {
    number: '03',
    title: 'Devotion',
    description:
      'Our priority is your satisfaction, and thus, each of us is devoted to making sure you are delivered the best.',
  },
  {
    number: '04',
    title: 'Integrity',
    description:
      'Each process of our company is completely transparent, and you can rely on us for the highest quality work.',
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-sm text-green-600 font-semibold mb-2">Our Values</h2>
        <h4 className="text-3xl text-black font-bold mb-5">Rules to Live By</h4>
        <p className="text-gray-600 mb-2">Our Values guide our actions</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, i) => (
          <div
            key={value.title}
            className="group relative p-6 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
          >
            {/* 🔽 Background Image only visible on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden duration-300">
              <Image
                src="/images/about/value-bg.webp"
                alt="Background"
                fill
                className="object-cover"
              />
            <div className="absolute inset-0 bg-[#239a48cc] mix-blend-multiply bg-opacity-2" />
            </div>

            {/* 🔼 Foreground Content */}
            <div className="relative z-10 transition-all group-hover:text-white">
              <div className="text-8xl font-bold mb-2 mt-20">{value.number}</div>
              <div className="border-l-2 border-dotted border-green-600 h-20 mx-4 group-hover:border-white transition-colors"></div>
              <h3 className="text-xl font-semibold mb-4 mt-5">{value.title}</h3>
              <p className="mb-4 mt-6">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
