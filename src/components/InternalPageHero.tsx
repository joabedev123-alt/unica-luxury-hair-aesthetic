import React from 'react';
import { GoldDivider } from './GoldDivider';

interface InternalPageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  bgImage?: string;
}

export const InternalPageHero: React.FC<InternalPageHeroProps> = ({
  title,
  subtitle,
  eyebrow = "ÚNICA LUXURY HAIR & AESTHETIC",
  bgImage = "/images/chay_castelo_hero.png",
}) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#050505] border-b border-[#C9A14A]/20">
      {/* Background Image with Dark Gradient Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 filter grayscale contrast-125 transition-all duration-700"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/90" />
      <div className="absolute inset-0 bg-dark-radial" />

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] text-[#C9A14A] uppercase mb-4 font-sans">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-[#FFFFFF] font-normal mb-4 leading-tight">
          {title}
        </h1>
        <GoldDivider className="mx-auto" />
        <p className="text-base md:text-xl text-[#E9E0D2] max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
