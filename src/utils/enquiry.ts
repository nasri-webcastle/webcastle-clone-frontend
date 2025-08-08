// lib/api.ts

// export async function fetchStrapi<T>(path: string): Promise<T> {
//   const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';
//   const res = await fetch(`${baseUrl}/api/${path}`);

//   if (!res.ok) {
//     throw new Error(`Failed to fetch ${path}`);
//   }

//   return res.json();
// }// lib/api.ts or wherever you're fetching
import { fetchStrapi } from "@/lib/api";
import type { EnquirySectionData, ContactDetail, SocialLink } from "@/types/enquiry";


export async function getEnquirySection(): Promise<EnquirySectionData | null> {
  const res = await fetchStrapi<{ data: EnquirySectionData }>("enquiry-section");

  if (!res || !res.data) {
    console.warn("No enquiry section data returned");
    return null;
  }

  return res.data;
}

// 2. Get Contact Details
export async function getContactDetails(): Promise<ContactDetail[]> {
  const res = await fetchStrapi<{ data: ContactDetail[] }>("contact-details");
  return res?.data ?? [];
}

// 3. Get Social Links
export async function getSocialLinks(): Promise<SocialLink[]> {
  const res = await fetchStrapi<{ data: SocialLink[] }>("social-links");
  return res?.data ?? [];
}

