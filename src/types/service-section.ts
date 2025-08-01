// types/service-section.ts
export interface ServiceSection {
  id: number;
  title: string;
  description: string;
  icon: string;
  techIcon: {
    id: number;
    reactIcon: string;
  }[];
}
