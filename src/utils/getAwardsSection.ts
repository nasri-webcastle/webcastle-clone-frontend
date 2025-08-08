// lib/getAwardsSection.ts
import { fetchStrapi } from 'lib/api';
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;


interface AwardItem {
  id: number;
  title: string;
  image: {
    url: string;
    alt: string;
  };
}

interface CTAItem {
  id: number;
  title: string;
  description: string;
  buttonlabel: string;
}

interface RawStrapiAward {
  id: number;
  sectionTitle: string;
  Award: {
    id: number;
    title: string;
    image: {
      url: string;
      alternativeText: string;
    };
  }[];
}

interface RawStrapiCTA {
  id: number;
  cta: CTAItem[];
}

export async function getAwardsSection(): Promise<{
  sectionTitle: string;
  awards: AwardItem[];
  ctas: CTAItem[];
} | null> {
  const [awardsRes, ctaRes] = await Promise.all([
    fetchStrapi<{ data: RawStrapiAward[] }>('awards-sections?populate=Award.image'),
    fetchStrapi<{ data: RawStrapiCTA[] }>('awards-sections?populate=cta'),
  ]);

  const awardData = awardsRes?.data?.[0];
  const ctaData = ctaRes?.data?.[0];

  if (!awardData || !ctaData) return null;

  return {
    sectionTitle: awardData.sectionTitle,
    awards: awardData.Award.map((item) => ({
      id: item.id,
      title: item.title,
      image: {
        url: item.image?.url ? `${STRAPI_URL}${item.image.url}` : '',
        alt: item.image?.alternativeText ?? item.title,
      },
    })),
    ctas: ctaData.cta.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      buttonlabel: item.buttonlabel,
    })),
  };
}
