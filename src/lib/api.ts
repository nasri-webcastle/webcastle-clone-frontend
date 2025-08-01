const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;


import axios from 'axios';

export async function getNavbarData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/navbar?populate=*`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const json = await res.json();
  return json.data; // ✅ returns the object you showed
}

export async function getHomeAboutData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-about?populate=*`);
  const json = await res.json();
  const data = json.data?.attributes;

  return {
    title: data?.title || '',
    heading: data?.heading || '',
    description: data?.description || '',
    imageLeft: data?.imageLeft?.data?.attributes?.url || '',
    imageRight: data?.imageRight?.data?.attributes?.url || '',
  };
}


// lib/api.ts

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export async function fetchStrapi<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // disable caching for fresh data
    });

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return await res.json();
  } catch (err) {
    console.error(`[Strapi fetch error] ${endpoint}:`, err);
    return null;
  }
}
