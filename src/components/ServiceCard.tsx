import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

interface ServiceCardProps {
  title: string;
  categoryName: string;
  description: string;
  image: string;
  icon: string;
  linkHref?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  categoryName,
  description,
  image,
  icon,
  linkHref = "/services",
}) => {
  return (
    <div className="group relative bg-[#0B0B0B] border border-[#1D1D1D] hover:border-[#C9A14A]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-luxury-card">
      <div>
        {/* Image Header */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-[#050505]/80 backdrop-blur-md px-3 py-1 border border-[#C9A14A]/40 text-[10px] uppercase tracking-[0.2em] text-[#C9A14A]">
            {categoryName}
          </div>

          {/* Icon Badge */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#0B0B0B]/90 backdrop-blur-md border border-[#C9A14A]/40 flex items-center justify-center text-[#C9A14A] text-lg">
            <i className={`bi ${icon}`} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-serif text-[#FFFFFF] group-hover:text-[#D8B86A] transition-colors mb-3 leading-snug">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed mb-6">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A14A] font-semibold hover:text-[#D8B86A] transition-colors group-hover:translate-x-1 duration-300"
        >
          <span>View Services</span>
          <i className="bi bi-arrow-right" />
        </Link>
      </div>
    </div>
  );
};
