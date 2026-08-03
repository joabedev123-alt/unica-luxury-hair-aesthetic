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

      {/* 2. Founders Biography Section */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-y border-[#C9A14A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BIOGRAPHY & FOUNDERS"
            title="One Vision, One Journey"
            subtitle="Revolutionizing hair extensions and aesthetic beauty through science, precision, and passion."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Charley Castelo Card */}
            <div className="bg-[#141414] border border-[#C9A14A]/40 p-8 md:p-10 relative flex flex-col justify-between shadow-luxury-card group hover:border-[#C9A14A] transition-all duration-500">
              <div>
                <div className="relative h-80 sm:h-96 w-full mb-6 overflow-hidden border border-[#C9A14A]/30 bg-[#050505]">
                  <Image
                    src="/images/chay_castelo_hero.png"
                    alt="Charley Castelo Specialist"
                    fill
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#050505]/90 border border-[#C9A14A]/40 text-[#C9A14A] text-[10px] uppercase tracking-widest px-3 py-1 font-semibold backdrop-blur-md">
                    {siteConfig.founders.chay.role}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-serif text-[#FFFFFF] font-bold">
                    {siteConfig.founders.chay.name}
                  </h3>
                </div>

                <p className="text-xs uppercase tracking-widest text-[#C9A14A] mb-4 font-semibold">
                  Origin: {siteConfig.founders.chay.origin} • {siteConfig.founders.chay.titleRecognition}
                </p>

                <p className="text-sm text-[#A6A6A6] font-light leading-relaxed mb-6">
                  {siteConfig.founders.chay.bio}
                </p>

                <div className="border-t border-[#1D1D1D] pt-4 mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#C9A14A] block mb-2 font-semibold">
                    Specialized Credentials & International Academies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.founders.chay.credentials.map((cred, i) => (
                      <span key={i} className="text-xs bg-[#0B0B0B] border border-[#C9A14A]/30 px-3 py-1 text-[#E9E0D2]">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0B0B] border-l-2 border-[#C9A14A] p-4 mt-4">
                <p className="font-serif text-sm text-[#F4EFE6] italic">
                  &ldquo;Persistence turns the impossible into global achievements. Every extension set is a signature of confidence.&rdquo;
                </p>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A14A] mt-2 font-semibold font-sans">
                  — Charley Castelo
                </span>
              </div>
            </div>

            {/* Dr. Nirza García Valdéz Card */}
            <div className="bg-[#141414] border border-[#C9A14A]/40 p-8 md:p-10 relative flex flex-col justify-between shadow-luxury-card group hover:border-[#C9A14A] transition-all duration-500">
              <div>
                <div className="relative h-80 sm:h-96 w-full mb-6 overflow-hidden border border-[#C9A14A]/30 bg-[#050505]">
                  <Image
                    src="/images/couple_founders.jpeg"
                    alt="Dr. Nirza García Valdéz & Charley Castelo"
                    fill
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#050505]/90 border border-[#C9A14A]/40 text-[#C9A14A] text-[10px] uppercase tracking-widest px-3 py-1 font-semibold backdrop-blur-md">
                    {siteConfig.founders.nirza.role}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-serif text-[#FFFFFF] font-bold">
                    {siteConfig.founders.nirza.name}
                  </h3>
                </div>

                <p className="text-xs uppercase tracking-widest text-[#C9A14A] mb-4 font-semibold">
                  Origin: {siteConfig.founders.nirza.origin} • {siteConfig.founders.nirza.languages}
                </p>

                <p className="text-sm text-[#A6A6A6] font-light leading-relaxed mb-6">
                  {siteConfig.founders.nirza.bio}
                </p>

                <div className="border-t border-[#1D1D1D] pt-4 mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#C9A14A] block mb-2 font-semibold">
                    Medical Background & Specialization:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.founders.nirza.credentials.map((cred, i) => (
                      <span key={i} className="text-xs bg-[#0B0B0B] border border-[#C9A14A]/30 px-3 py-1 text-[#E9E0D2]">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0B0B] border-l-2 border-[#C9A14A] p-4 mt-4">
                <p className="font-serif text-sm text-[#F4EFE6] italic">
                  &ldquo;Combining medical science with advanced aesthetics delivers safety, clinical precision, and refined natural beauty.&rdquo;
                </p>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A14A] mt-2 font-semibold font-sans">
                  — Dr. Nirza García Valdéz
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Impact Press & Media Recognition Section */}
      <section className="py-20 md:py-28 bg-[#050505] relative border-b border-[#C9A14A]/30 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A14A]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0B0B0B] border border-[#C9A14A]/40 text-xs font-semibold tracking-[0.25em] text-[#C9A14A] uppercase mb-4 shadow-luxury-card">
              <i className="bi bi-award-fill text-[#C9A14A]" />
              <span>IMPRENSA INTERNACIONAL & FORBES</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-[#FFFFFF] font-normal leading-tight mb-4">
              Conforme divulgado na imprensa internacional
            </h2>
            <p className="text-lg md:text-2xl font-serif italic text-[#D8B86A] max-w-3xl mx-auto leading-relaxed">
              &ldquo;Una pareja, una visión: revolucionar el mundo del cabello y la belleza estética&rdquo;
            </p>
            <GoldDivider className="mx-auto mt-6" />
          </div>

          {/* Forbes Spotlight Hero Box */}
          <div className="bg-gradient-to-r from-[#141414] via-[#0B0B0B] to-[#141414] border-2 border-[#C9A14A] p-8 md:p-10 mb-12 shadow-gold-glow relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[#C9A14A] text-[#050505] text-[10px] uppercase font-bold tracking-widest px-4 py-1">
              Destaque Especial • Forbes
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold tracking-[0.3em] text-[#C9A14A] uppercase block mb-2 font-sans">
                  FORBES LATINA
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#FFFFFF] mb-3 leading-snug">
                  Una pareja, una visión: revolucionar el mundo del cabello y la belleza estética
                </h3>
                <p className="text-sm text-[#A6A6A6] font-light leading-relaxed mb-4">
                  Confira a reportagem em destaque na Forbes Latina sobre a trajetória da Dra. Nirza García Valdéz e Charley Castelo, unindo ciência cirúrgica, estética avançada e a técnica exclusiva Mega Hair Tela.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="https://forbeslatina.com/una-pareja-una-vision-revolucionar-el-mundo-del-cabello-y-la-belleza-estetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-3 shadow-lg"
                >
                  <i className="bi bi-box-arrow-up-right text-sm" />
                  <span>Ler Matéria na Forbes</span>
                </a>
              </div>
            </div>
          </div>

          {/* Complete 12 Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {siteConfig.pressArticles.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 flex flex-col justify-between transition-all duration-300 group shadow-luxury-card border ${
                  article.isFeatured
                    ? 'bg-[#141414] border-[#C9A14A] hover:border-[#D8B86A]'
                    : 'bg-[#0B0B0B] border-[#1D1D1D] hover:border-[#C9A14A]/70 hover:bg-[#141414]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C9A14A] font-bold">
                      {article.portal}
                    </span>
                    <i className="bi bi-box-arrow-up-right text-xs text-[#A6A6A6] group-hover:text-[#C9A14A] transition-colors" />
                  </div>
                  <h4 className="text-xs text-[#E9E0D2] font-serif leading-relaxed group-hover:text-[#FFFFFF] transition-colors mb-4">
                    &ldquo;Una pareja, una visión: revolucionar el mundo del cabello y la belleza estética&rdquo;
                  </h4>
                </div>

                <div className="pt-4 border-t border-[#1D1D1D] flex items-center justify-between text-xs font-semibold text-[#C9A14A] uppercase tracking-wider group-hover:text-[#D8B86A] transition-colors">
                  <span>Ler</span>
                  <i className="bi bi-arrow-right text-sm transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
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
