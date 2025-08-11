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

export async function getContactDetails(): Promise<ContactDetail[]> {
  const res = await fetchStrapi<{ data: ContactDetail[] }>("contact-details");
  return res?.data ?? [];
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const res = await fetchStrapi<{ data: SocialLink[] }>("social-links");
  return res?.data ?? [];
}

