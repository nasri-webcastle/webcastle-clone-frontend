
export async function getOurWorksContent() {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  const res = await fetch(`${BASE_URL}/api/our-work`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const json = await res.json();
  const data = json.data;

  return {
    title: data?.title || '',
    subtitle: data?.subtitle || '',
    description: data?.description || '',
  };
}
