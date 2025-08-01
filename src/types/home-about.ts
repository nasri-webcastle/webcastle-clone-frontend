export interface ImageFormat {
  url: string;
}

export interface ImageData {
  id: number;
  name: string;
  url: string;
  formats: {
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

export interface HomeAboutType {
  title: string;
  heading: string;
  description: string;
  imageLeft: ImageData[];
  imageRight: ImageData[];
}
