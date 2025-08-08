// // // lib/getTechnologySection.ts
// // export interface TechnologySectionContent {
// //   title: string;
// //   heading1: string;
// //   heading2: string;
// // }

// // export async function getTechnologySection(): Promise<TechnologySectionContent | null> {
// //   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/technology-section`, {
// //     next: { revalidate: 60 },
// //   });

// //   if (!res.ok) return null;

// //   const json = await res.json();
// //   const data = json.data?.attributes;

// //   return {
// //     title: data.title,
// //     heading1: data.heading1,
// //     heading2: data.heading2,
// //   };
// // }
// // utils/getTechnologySection.ts

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

