import { SliderImage, SliderImageRaw } from "@/types/ourWorksSlides";

export async function getSliderImages(): Promise<SliderImage[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/our-work-slides?populate=image`, {
      cache: 'no-store',
    });

    const json = await res.json();
    const data: SliderImageRaw[] = json.data;

    return data.map((item) => ({
      id: item.id,
      alt: item.alt || '',
      image: {
        url: item.image?.url || '',
        formats: item.image?.formats || {},
      },
    }));
  } catch (error) {
    console.error('Failed to fetch slider images', error);
    return [];
  }
}
