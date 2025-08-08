// // utils/getTechnologies.ts

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;


// export interface Technology {
//   id: number;
//   name: string;
//   iconName: string;
//   iconColor: string;
// }

// interface RawTechnology {
//   id: number;
//   name: string;
//   iconName: string;
//   iconColor: string;
// }

// export async function getTechnologies(): Promise<Technology[]> {
//   const res = await fetch(`${STRAPI_URL}/api/technologies`, {
//     next: { revalidate: 60 },
//   });

//   const json = await res.json();

//   if (!json.data || !Array.isArray(json.data)) {
//     console.error('Invalid data from Strapi:', json);
//     return []; // return an empty array instead of breaking
//   }

//   return (json.data as RawTechnology[]).map((item) => ({
//     id: item.id,
//     name: item.name,
//     iconName: item.iconName?.trim() || '',
//     iconColor: item.iconColor,
//   }));
// }
// utils/getTechnologies.ts

export interface Technology {
  id: number;
  name: string;
  iconName: string;
  iconColor: string;
}

interface RawTechnology {
  id: number;
  name: string;
  iconName: string;
  iconColor: string;
}

export async function getTechnologies(): Promise<Technology[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/technologies`, {
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (!json?.data) {
    throw new Error(`Invalid technologies list data: ${JSON.stringify(json)}`);
  }

  return (json.data as RawTechnology[]).map((item) => ({
    id: item.id,
    name: item.name,
    iconName: item.iconName.trim(), // trimming in case of extra space
    iconColor: item.iconColor,
  }));
}
