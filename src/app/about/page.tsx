import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { InternalPageHero } from '@/components/InternalPageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { GoldDivider } from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'About Única and Chay Castelo | Guyana',
  description:
    'Learn about Única Hair Extensions and specialist Chay Castelo. Premium hair extensions, brow aesthetics and personalized care in Lusignan, Georgetown, Guyana.',
};

export default function AboutPage() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.defaultConsultation
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#F4EFE6]">
      {/* Banner */}
      <InternalPageHero
        title="About Única"
        subtitle="Luxury, personalization and a signature approach to beauty."
        bgImage="/images/salon_exterior.png"
      />

      {/* 1. Brand Introduction */}
      <section className="py-20 md:py-28 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="BRAND VISION"
                title="Beauty with Identity"
                align="left"
                showDivider={true}
              />
              <p className="text-base text-[#A6A6A6] font-light leading-relaxed mb-6">
                Única Hair Extensions was created as a space where each client can experience personalized beauty services in an elegant and welcoming environment. Every detail is designed to support confidence, individuality and refined results.
              </p>
              <p className="text-sm text-[#A6A6A6] font-light leading-relaxed">
                Whether you seek a subtle brow correction, an executive haircut, or a complete hair length transformation, Única guarantees precision, safety, and natural elegance.
              </p>
            </div>

            <div className="lg:col-span-6 relative h-[400px] border border-[#C9A14A]/40 shadow-luxury-card group overflow-hidden">
              <Image
                src="/images/salon_exterior.png"
                alt="Única Salon Facade"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Chay Castelo */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-y border-[#C9A14A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative h-[450px] border border-[#C9A14A]/40 shadow-luxury-card group overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/chay_castelo_hero.png"
                alt="Chay Castelo Specialist"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <SectionHeading
                eyebrow="THE SPECIALIST"
                title="The Signature Behind the Transformation"
                align="left"
                showDivider={true}
              />
              <p className="text-base text-[#A6A6A6] font-light leading-relaxed mb-6">
                Chay Castelo approaches each hair transformation with careful consultation, technical attention and an understanding of the client’s desired style. The focus is to achieve a result that looks sophisticated, balanced and naturally integrated.
              </p>
              <div className="bg-[#141414] border-l-2 border-[#C9A14A] p-6">
                <p className="font-serif text-lg text-[#FFFFFF] italic">
                  &ldquo;A true transformation respects natural movement, hair health, and individual personality.&rdquo;
                </p>
                <span className="block text-xs uppercase tracking-widest text-[#C9A14A] mt-2 font-semibold font-sans">
                  — Chay Castelo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy */}
      <section className="py-20 md:py-28 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="More Than a Service"
            subtitle="At Única, beauty is not treated as a standard formula. Each experience is adapted to the client, from the initial consultation to the final result and maintenance guidance."
          />
        </div>
      </section>

      {/* 4. Values */}
      <section className="py-20 bg-[#0B0B0B] border-t border-[#C9A14A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CORE PRINCIPLES"
            title="Our Values"
            subtitle="The fundamental commitments guiding every client interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Personalization", desc: "Every technique and formula is customized to your exact physical features and preferences." },
              { title: "Precision", desc: "Uncompromising attention to line symmetry, tension control, and application accuracy." },
              { title: "Care", desc: "Prioritizing hair structure preservation, skin safety, and post-service health." },
              { title: "Elegance", desc: "Sophisticated, understated beauty that radiates confidence without harsh exaggeration." },
              { title: "Confidence", desc: "Empowering every client to feel naturally beautiful and confident in their everyday life." },
              { title: "Exclusivity", desc: "Private consultation times and dedicated one-on-one attention during appointments." },
            ].map((val, idx) => (
              <div key={idx} className="bg-[#141414] border border-[#1D1D1D] p-8 hover:border-[#C9A14A]/60 transition-all duration-300">
                <div className="w-10 h-10 border border-[#C9A14A]/40 bg-[#0B0B0B] text-[#C9A14A] flex items-center justify-center font-serif text-lg mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-3">{val.title}</h3>
                <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Salon Experience */}
      <section className="py-20 md:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="SANCTUARY"
                title="Salon Experience"
                align="left"
                showDivider={true}
              />
              <p className="text-base text-[#A6A6A6] font-light leading-relaxed mb-6">
                Located in Lusignan, East Coast Demerara, Única welcomes clients looking for professional hair, aesthetic and grooming services in a premium setting.
              </p>
              <div className="text-sm text-[#F4EFE6] font-serif border-t border-[#1D1D1D] pt-4">
                <p className="text-[#C9A14A] font-semibold mb-1">Salon Address</p>
                <p>{siteConfig.contact.address.full}</p>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[380px] border border-[#C9A14A]/40 shadow-luxury-card group overflow-hidden">
              <Image
                src="/images/salon_exterior.png"
                alt="Única Salon Exterior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 bg-[#0B0B0B] border-t border-[#C9A14A]/30 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-[#FFFFFF] mb-4">
            Experience Única
          </h2>
          <GoldDivider className="mx-auto" />
          <p className="text-sm md:text-base text-[#A6A6A6] font-light max-w-xl mx-auto mb-8">
            Book your individual consultation with Chay Castelo today.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-4 px-8 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold items-center gap-3"
          >
            <i className="bi bi-whatsapp text-lg" />
            <span>Schedule a Consultation</span>
          </a>
        </div>
      </section>
    </div>
  );
}
