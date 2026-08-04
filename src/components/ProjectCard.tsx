import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/config/siteConfig';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative bg-[#0B0B0B] border border-[#1D1D1D] hover:border-[#C9A14A]/60 transition-all duration-500 overflow-hidden cursor-pointer shadow-luxury-card flex flex-col justify-between"
    >
      <div>
        {/* Image Container */}
        <div className="relative h-80 md:h-[360px] w-full overflow-hidden bg-[#050505]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
          
          {/* Top Category Tag */}
          <div className="absolute top-4 left-4 bg-[#050505]/85 backdrop-blur-md px-3 py-1 border border-[#C9A14A]/40 text-[10px] uppercase tracking-[0.2em] text-[#C9A14A] font-semibold">
            {project.categoryLabel}
          </div>

          {/* Expand Icon */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#050505]/85 border border-[#C9A14A]/40 text-[#C9A14A] flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform scale-100 sm:scale-90 sm:group-hover:scale-100">
            <i className="bi bi-arrows-angle-expand text-xs" />
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 flex flex-col justify-between">
          <h3 className="text-xl font-serif text-[#FFFFFF] group-hover:text-[#D8B86A] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-[#A6A6A6] font-light leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-6 pb-6 pt-0 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C9A14A] font-semibold">
        <span>View Transformation</span>
        <i className="bi bi-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
