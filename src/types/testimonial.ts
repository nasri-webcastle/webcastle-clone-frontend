export interface TestimonialPage {
  id: number;
  title: string;
  description: string;
  background: string;
}
export interface QuoteImage {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  message: string;
  quotesImage: string | null; // full URL
}

// Matches your Strapi flat API response
export interface StrapiTestimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  message: string;
  quotes_image?: QuoteImage[];
}

export interface StrapiCollectionResponse<T> {
  data: T[];
}