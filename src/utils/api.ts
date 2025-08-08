// utils/api.ts
export async function fetchServices() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/service-sections?populate=*`, {
    next: { revalidate: 3600 }, // for ISR caching, optional
  });
  const data = await res.json();
  return data.data;
}
