"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    category: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded">
            {project.category} 
          </span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={project.link}
          target="_blank"
          className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center"
        >
          View Project
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;