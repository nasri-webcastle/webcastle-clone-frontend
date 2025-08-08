export interface ImageFormat {
  url: string;
}

export interface BackgroundImage {
  url: string;
  alternativeText?: string;
  formats?: {
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

export interface ProjectsPageData {
  id: number;
  title: string;
  description: string;
  background: BackgroundImage;
  subtitle: string;
  description2: string;
}

export interface ProjectsPageResponse {
  data: ProjectsPageData;
}
