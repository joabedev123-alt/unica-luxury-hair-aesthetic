'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ProjectItem, siteConfig } from '@/config/siteConfig';

interface ImageLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.serviceBooking(project.title)
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-md">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative z-10 bg-[#0B0B0B] border border-[#C9A14A]/40 max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox Modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#050505]/80 text-[#C9A14A] border border-[#C9A14A]/40 flex items-center justify-center hover:bg-[#C9A14A]/20 transition-colors"
        >
          <i className="bi bi-x-lg text-xl" />
        </button>

        {/* Image Side */}
        <div className="relative w-full md:w-3/5 h-80 md:h-[450px] bg-[#050505]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#1D1D1D]">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#C9A14A] font-semibold mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl font-serif text-[#FFFFFF] mb-3">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="text-xs text-[#E9E0D2] border-t border-[#1D1D1D] pt-3 mt-3">
              <span className="text-[#A6A6A6] block text-[10px] uppercase tracking-wider mb-1">Service Provided</span>
              <span className="font-medium text-[#C9A14A]">{project.serviceUsed}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1D1D1D]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 btn-gold-primary text-xs uppercase tracking-[0.18em] text-center flex items-center justify-center gap-2"
            >
              <i className="bi bi-whatsapp text-sm" />
              Book Similar Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
