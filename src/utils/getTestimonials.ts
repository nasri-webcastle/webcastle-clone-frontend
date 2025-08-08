// utils/getTestimonials.ts

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  video: string;
}
export interface ItemType {
  id: number;
  documentId: string;
  quote: string;
  name: string;
  role: string;
  video: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/testimonials`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch testimonials');

  const json = await res.json();

return json.data.map((item: ItemType) => ({
    id: item.id,
    quote: item.quote,
    name: item.name,
    role: item.role,
    video: item.video,
  }));
}
