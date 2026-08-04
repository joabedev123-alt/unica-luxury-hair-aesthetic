import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { InternalPageHero } from '@/components/InternalPageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { PriceCard } from '@/components/PriceCard';

export const metadata: Metadata = {
  title: 'Hair, Brow and Aesthetic Services | Única Guyana',
  description:
    'Explore complete services for Mega Hair Tela Technique, Microblading, Hybrid Brows, Lip Blush, Eyeliner Tattoo and Barber Grooming in Georgetown, Guyana.',
};

export default function ServicesPage() {
  const hairServices = siteConfig.services.filter((s) => s.category === 'hair');
  const browServices = siteConfig.services.filter((s) => s.category === 'brows');
  const lipEyeServices = siteConfig.services.filter((s) => s.category === 'lip-eye');
  const barberServices = siteConfig.services.filter((s) => s.category === 'barber');

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#F4EFE6]">
      {/* Banner */}
      <InternalPageHero
        title="Our Services"
        subtitle="Personalized beauty, hair and grooming services in Georgetown, Guyana."
        bgImage="/images/chay_castelo_hero.png"
      />

      {/* Internal Navigation Anchor Bar */}
      <div className="sticky top-[68px] z-30 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#C9A14A]/20 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto text-xs uppercase tracking-[0.2em]">
          <a href="#hair" className="text-[#A6A6A6] hover:text-[#C9A14A] transition-colors whitespace-nowrap">
            Hair Extensions
          </a>
          <span className="text-[#1D1D1D]">•</span>
          <a href="#brows" className="text-[#A6A6A6] hover:text-[#C9A14A] transition-colors whitespace-nowrap">
            Brows & PMU
          </a>
          <span className="text-[#1D1D1D]">•</span>
          <a href="#lip-eye" className="text-[#A6A6A6] hover:text-[#C9A14A] transition-colors whitespace-nowrap">
            Lip & Eye
          </a>
          <span className="text-[#1D1D1D]">•</span>
          <a href="#barber" className="text-[#A6A6A6] hover:text-[#C9A14A] transition-colors whitespace-nowrap">
            Barber Services
          </a>
        </div>
      </div>

      {/* 13.1 HAIR EXTENSIONS */}
      <section id="hair" className="py-20 md:py-28 bg-[#050505] relative border-b border-[#1D1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SPECIALIST EXTENSIONS"
            title="Chay Castelo Mega Hair Tela Technique"
            subtitle="Natural. Lightweight. Exclusive."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-6 relative h-[420px] border border-[#C9A14A]/40 shadow-luxury-card group overflow-hidden">
              <Image
                src="/images/chay_castelo_hero.png"
                alt="Mega Hair Tela Technique Application"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="lg:col-span-6">
              <p className="text-base text-[#A6A6A6] font-light leading-relaxed mb-6">
                A personalized hair extension service designed to add length, volume and movement while maintaining a refined and natural-looking finish. A consultation is required to evaluate the natural hair, desired result, application plan and maintenance routine.
              </p>

              <h4 className="text-xs uppercase tracking-widest text-[#C9A14A] font-semibold mb-4">
                Key Consultation & Service Benefits:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Personalized application plan",
                  "Natural-looking blend",
                  "Lightweight experience",
                  "Premium hair selection",
                  "Maintenance guidance",
                  "Consultation-based service",
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#E9E0D2]">
                    <i className="bi bi-check-circle-fill text-[#C9A14A]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {hairServices.map((service) => (
                <PriceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13.2 BROWS & PERMANENT MAKEUP */}
      <section id="brows" className="py-20 md:py-28 bg-[#0B0B0B] relative border-b border-[#1D1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PERMANENT BEAUTY"
            title="Brows & Permanent Makeup"
            subtitle="Refined brow design and micropigmentation tailored to your facial proportions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {browServices.map((service) => (
              <PriceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Brow Additional Information Box */}
          <div className="bg-[#141414] border border-[#C9A14A]/30 p-6 md:p-8 max-w-4xl mx-auto">
            <h4 className="text-xs uppercase tracking-widest text-[#C9A14A] font-semibold mb-3 flex items-center gap-2">
              <i className="bi bi-info-circle" /> Treatment Protocol Information
            </h4>
            <ul className="text-xs md:text-sm text-[#A6A6A6] space-y-2 font-light">
              <li>• Touch-up sessions are recommended approximately 45 days after the first session when applicable.</li>
              <li>• In-person initial consultations are complimentary to evaluate skin eligibility and shape preferences.</li>
              <li>• Final eligibility and custom treatment plans are confirmed during the initial assessment.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 13.3 LIP & EYE AESTHETICS */}
      <section id="lip-eye" className="py-20 md:py-28 bg-[#050505] relative border-b border-[#1D1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AESTHETIC DEFINITION"
            title="Lip & Eye Aesthetics"
            subtitle="Services designed to enhance definition and create a refined, balanced appearance. Consultation is required before treatment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lipEyeServices.map((service) => (
              <PriceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 13.4 BARBER SERVICES */}
      <section id="barber" className="py-20 md:py-28 bg-[#0B0B0B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GROOMING SUITE"
            title="Barber Services"
            subtitle="Professional grooming, haircuts, beard services and styling for men and children."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barberServices.map((service) => (
              <PriceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 13.5 AVISO SOBRE VALORES */}
      <section className="py-12 bg-[#050505] border-t border-[#C9A14A]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <i className="bi bi-shield-exclamation text-2xl text-[#C9A14A] mb-3 block" />
          <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed">
            Service availability, suitability and personalized estimates are confirmed directly with Única upon consultation before booking.
          </p>
        </div>
      </section>
    </div>
  );
}
