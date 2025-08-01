'use client';

import { useEffect, useState } from 'react';
const stats = [
  { value: '16+', label: 'Years of Expertise' },
  { value: '800+', label: 'Clients Globally' },
  { value: '150+', label: 'Dedicated Castlers' },
  { value: '1000+', label: 'Completed Projects' },
];

export default function HomeCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
// Counter effect
  useEffect(() => {
    const duration = 1500;
    const frameDuration = 20;
    const totalFrames = Math.round(duration / frameDuration);

    const counters = stats.map((stat, index) => {
      let frame = 0;
      const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10);

      const interval = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const current = Math.floor(progress * numericValue);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });

        if (progress === 1) clearInterval(interval);
      }, frameDuration);

      return interval;
    });

    return () => counters.forEach(clearInterval);
  }, []);

  return (
    <section className="py-10 w-170">
      <div className="grid grid-cols-4 gap-2">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className=" p-3 rounded-xl bg-white/20  border-0 text-white max-w-lg"
          >
            <p className="text-3xl font-semibold ">
              {counts[idx]}
              {item.value.includes('+') && '+'}
            </p>
            <p className="text-sm font-normal mt-1  ">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
