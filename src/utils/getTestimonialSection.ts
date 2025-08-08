// utils/getTestimonialSection.ts

export interface TestimonialSectionContent {
  title: string;
  heading: string;
}

export async function getTestimonialSection(): Promise<TestimonialSectionContent> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/testimonial-section`, {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) throw new Error('Failed to fetch testimonial section');

  const json = await res.json();

  const { title, heading } = json.data;

  return {
    title,
    heading,
  };
}
