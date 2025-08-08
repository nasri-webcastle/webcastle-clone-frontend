import { fetchStrapi } from "@/lib/api";
import { ProjectsPageResponse } from "@/types/projects-page";

export async function getProjectsPage() {
  const res = await fetchStrapi<ProjectsPageResponse>("projects-page?populate=*");

  const data = res?.data;
  if (!data || !data.background) return null;

  return {
    title: data.title,
    description: data.description,
    subtitle: data.subtitle,
    description2: data.description2,
    background: {
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.background.url}`,
      alternativeText: data.background.alternativeText || "Projects Banner",
      formats: {
        small: data.background.formats?.small
          ? {
              url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.background.formats.small.url}`,
            }
          : undefined,
        medium: data.background.formats?.medium
          ? {
              url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.background.formats.medium.url}`,
            }
          : undefined,
        large: data.background.formats?.large
          ? {
              url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.background.formats.large.url}`,
            }
          : undefined,
      },
    },
  };
}

