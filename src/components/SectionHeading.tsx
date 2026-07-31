import React from 'react';
import { GoldDivider } from './GoldDivider';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  showDivider?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  showDivider = true,
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C9A14A] uppercase mb-3 font-sans">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#FFFFFF] font-normal leading-[1.15]">
        {title}
      </h2>
      {showDivider && <GoldDivider className={align === 'center' ? 'mx-auto' : ''} />}
      {subtitle && (
        <p className="text-sm md:text-base lg:text-lg text-[#A6A6A6] max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
