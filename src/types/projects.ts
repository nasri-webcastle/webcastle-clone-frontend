export interface ImageFormat {
  ext: string;
  url: string;
  mime: string;
  name: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  url: string;
  formats?: ImageFormats;
}

export interface Project {
  id: number;
  title: string;
  description?: string | null;
  documentId?: string;
  image?: Image;
  categories?: Category[]; // populated from /projects
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  documentId?: string;
  projects?: Project[]; // populated from /categories
}
