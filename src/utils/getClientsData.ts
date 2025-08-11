const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
export interface ClientLogo {
  id: number;
  name: string;
  src: string;
}

export interface ClientLogoSection {
  title: string;
  heading: string;
  description: string;
  logos: ClientLogo[];
}
interface RawClientLogo {
  id: number;
  name: string;
  logo: {
    url: string;
  } | null;
}


export async function getClientLogoSection(): Promise<ClientLogoSection> {
  const sectionRes = await fetch(`${STRAPI_URL}/api/client-logo-section`);
  const logosRes = await fetch(`${STRAPI_URL}/api/client-logos?populate=*`);

  if (!sectionRes.ok || !logosRes.ok) throw new Error("Fetch failed");

  const sectionJson = await sectionRes.json();
const logosJson = await logosRes.json();
const logos: RawClientLogo[] = logosJson.data;
  const section = sectionJson.data;

  return {
  title: section.title,
  heading: section.heading,
  description: section.description,
  logos: logos.map((logo) => ({
    id: logo.id,
    name: logo.name,
    src: `${STRAPI_URL}${logo.logo?.url ?? ""}`,
  })),
};
}
