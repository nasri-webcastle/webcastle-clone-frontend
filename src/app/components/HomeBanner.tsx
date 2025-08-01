'use client';

import React, { useRef, useEffect, useState } from 'react';
import HomeCounter from './HomeCounter';
import api from '@/lib/api'; // axios instance

interface HomeBannerData {
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  animateWords: string[];
  videos: string[];
}

const HomeBanner = () => {
  const [data, setData] = useState<HomeBannerData | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fetch banner data from Strapi
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        // Corrected API endpoint for Strapi Single Type: /api/home-banner (singular)
        const res = await api.get<{ data: HomeBannerData }>(
          '/api/home-banner?populate=*' // Changed from '/home-banner' to '/api/home-banner'
        );
        setData(res.data.data);
      } catch (err) {
        console.error('Failed to fetch home banner:', err);
      }
    };

    fetchBanner();
  }, []); // Empty dependency array means this runs once on mount


  // Rotate words every 2 seconds for animation
  useEffect(() => {
    if (!data?.animateWords || data.animateWords.length === 0) return;

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % data.animateWords.length);
    }, 2000);

    return () => clearInterval(interval); // Clear interval on unmount or data change
  }, [data]); // Re-run if data (specifically animateWords) changes

  // Switch video when the current one ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !data?.videos?.length) return;

    const handleEnded = () => {
      setVideoIndex((prev) => (prev + 1) % data.videos.length);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded); // Clean up event listener
  }, [videoIndex, data]); // Re-run if videoIndex or data (specifically videos) changes

  // Render nothing if data is not yet loaded
  if (!data) {
    return null;
  }

  return (
    <div
      className="relative w-full h-[680px]"
      style={{ marginRight: '10px' }} // Consider moving this to a CSS module or Tailwind class if possible
    >
      {/* Background Video */}
      {data.videos && data.videos.length > 0 && (
        <video
          ref={videoRef}
          key={videoIndex} // Key prop forces re-render when videoIndex changes, effectively switching the video
          src={data.videos[videoIndex]}
          className="absolute w-full h-full left-0 top-0 z-[1] object-cover"
          autoPlay
          muted
          playsInline // Important for mobile devices
          preload="metadata" // Useful for faster initial load without loading entire video
        />
      )}


      {/* Overlay Content */}
      <div className="relative z-[2] text-white px-30 py-45">
        <h2 className="text-4xl font-medium flex items-center gap-2">
          {data.title1}{' '}
          <span className="relative h-10 w-100"> {/* w-100 might be 'w-full' or a specific width in Tailwind */}
            <span
              key={wordIndex} // Key prop forces re-render and re-applies animation for the word
              className="absolute animate-slideDown whitespace-nowrap"
            >
              {data.animateWords[wordIndex]}
            </span>
          </span>
        </h2>
        <h2 className="text-4xl font-medium">{data.title2}</h2>
        <p className="max-w-2xl mt-4">{data.subtitle1}</p>
        <p className="max-w-2xl">{data.subtitle2}</p>
        <HomeCounter />
      </div>
    </div>
  );
};

export default HomeBanner;