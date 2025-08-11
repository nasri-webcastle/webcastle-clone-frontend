// utils/getTechnologySection.ts

export interface TechnologySection {
  title: string;
  heading1: string;
  heading2: string;
}

export async function getTechnologySection(): Promise<TechnologySection> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/technology-section`, {
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (!json?.data) {
    throw new Error(`Invalid technology section data: ${JSON.stringify(json)}`);
  }

  const { title, heading1, heading2 } = json.data;

  return {
    title,
    heading1,
    heading2,
  };
}

