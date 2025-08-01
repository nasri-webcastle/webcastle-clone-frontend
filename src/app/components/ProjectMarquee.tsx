'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ClientLogo {
  id: number;
  name: string;
  logo: {
    url: string;
    name: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
  };
}

const ProjectMarquee = () => {
  const [logos, setLogos] = useState<ClientLogo[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/client-logos?populate=*`);
        const json = await res.json();
        setLogos(json.data || []);
      } catch (error) {
        console.error('Error fetching logos:', error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div className="w-full py-10 relative">
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap gap-20 animate-marqueeLeft">
          {[...logos, ...logos]
            .filter((item) => item.logo?.url)
            .map((item, index) => (
              <Image
                key={`${item.id}-${index}`}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.logo.url}`}
                alt={item.name}
                width={60}
                height={60}
                className="w-auto object-contain rounded-lg"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMarquee;
