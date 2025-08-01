// utils/api.ts
export async function fetchServices() {
  const res = await fetch("http://localhost:1337/api/service-sections?populate=*", {
    next: { revalidate: 3600 }, // for ISR caching, optional
  });
  const data = await res.json();
  return data.data;
}
