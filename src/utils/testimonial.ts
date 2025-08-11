import { fetchStrapi } from "@/lib/api";
import { TestimonialPage } from "@/types/testimonial";

interface StrapiResponse {
  data: {
    id: number;
    title: string;
    description: string;
    background: string;
  };
}

export async function getTestimonialPage(): Promise<TestimonialPage | null> {
  const res = await fetchStrapi<StrapiResponse>("testimonial-page");
  if (!res) return null;

  return {
    id: res.data.id,
    title: res.data.title,
    description: res.data.description,
    background: res.data.background,
  };
}


import type {
  Testimonial,
  QuoteImage,
  StrapiTestimonial,
  StrapiCollectionResponse
} from "@/types/testimonial";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338";

export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await fetchStrapi<StrapiCollectionResponse<StrapiTestimonial>>(
    "client-feedbacks?populate=quotes_image"
  );

  if (!res) return [];

  return res.data.map(item => {
    const imgData: QuoteImage | undefined = item.quotes_image?.[0];
    const imgUrl = imgData ? `${BASE_URL}${imgData.url}` : null;

    return {
      id: item.id,
      name: item.name,
      designation: item.designation,
      company: item.company,
      message: item.message,
      quotesImage: imgUrl,
    };
  });
}
