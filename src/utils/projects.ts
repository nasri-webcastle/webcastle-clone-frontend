import { Category, Project } from '@/types/projects';
import { fetchStrapi } from '@/lib/api';

interface StrapiCollection<T> {
  data: T[];
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetchStrapi<StrapiCollection<Project>>('projects?populate=*');
  return res?.data || [];
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetchStrapi<StrapiCollection<Category>>('categories?populate=*');
  return res?.data || [];
}
