"use client";

import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-start text-left">
      {/* ✅ Background Image */}
      <Image
        src="/images/about/about-banner.webp"
        alt="About Banner"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="relative z-20 max-w-6xl px-6 md:px-30">
        <h1 className="text-lg mb-2 mt-5 font text-white">About Us</h1>
        <div className="mb-3 gap-0">
          <div className="flex flex-wrap text-6xl font-bold leading-[74px] ">
            <p className="text-white mr-2">We believe in</p>
            <p className="text-green-600">crafting</p>
          </div>
          <div className="flex flex-wrap text-6xl font-bold leading-[74px]">
            <p className="text-white mr-2">sweet</p>
            <p className="text-green-600">experiences</p>
          </div>
        </div>
        <p className="text-white text-medium max-w-xl">
          WebCastle is committed to connecting businesses across the world towards
          digitalisation highlighting the knowledge of skills. We, the ideal digital
          agency, provide bespoke solutions to meet all your digital needs. WebCastle
          aims to expand, innovate, or enhance businesses and propel your projects to
          new heights. WebCastle holds the power for better experiences.
        </p>
      </div>
    </section>
  );
}
