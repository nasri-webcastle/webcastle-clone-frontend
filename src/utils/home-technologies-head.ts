import { HomeTechnologiesHead } from "@/types/home-technologies-head";

export async function getHomeTechnologiesHead(): Promise<HomeTechnologiesHead | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-technologies-head`);

    if (!res.ok) {
      console.error("Response not OK:", res.status);
      return null;
    }

    const json = await res.json();
    console.log("Strapi response:", json);

    return json?.data ?? null; // ✅ Return full data directly
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}

