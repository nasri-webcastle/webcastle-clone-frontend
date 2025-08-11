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
