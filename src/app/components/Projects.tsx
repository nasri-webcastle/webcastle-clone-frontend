'use client';

import { useEffect, useState } from 'react';
import { Project, Category } from '@/types/projects';
import { getProjects, getCategories } from '@/utils/projects';
import Image from 'next/image';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      const [projectData, categoryData] = await Promise.all([
        getProjects(),
        getCategories(),
      ]);
      setProjects(projectData);
      setCategories(categoryData);
      setFilteredProjects(projectData);
    }
    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: number | null) => {
    setActiveCategory(categoryId);
    if (categoryId === null) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.categories?.some((cat) => cat.id === categoryId)
        )
      );
    }
  };
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';

  return (
    <section className="px-4 pb-10  md:px-8 justify-items-center max-w-screen-xl mx-auto">

      <div className="flex flex-wrap gap-0 mb-10">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-10 py-3 text-lg font-semibold  rounded-xl  ${
            activeCategory === null ? 'bg-green-700 text-white' : 'bg-white text-black'
          }`}
        >
          All Projects
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-10 py-3 text-lg font-semibold  rounded-xl  ${
              activeCategory === cat.id ? 'bg-green-700 text-white' : 'bg-white text-black'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="  overflow-hidden"
          >
            {project.image?.url ? (
              <Image
                src={`${STRAPI_URL}${project.image?.url}`}
                alt={project.image?.alternativeText || project.title}
                width={550}
                height={300}
                className=" rounded-xl "
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <div className="py-3 text-black">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              {project.description && (
                <p className="text-medium  mt-2">{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
