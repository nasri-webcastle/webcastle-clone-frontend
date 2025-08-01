// utils/home-about.ts
export async function getHomeAboutData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-about?populate=*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Home About data");
  }

  const json = await res.json();
  return json.data; // ✅ return directly, NO `.attributes`
}
