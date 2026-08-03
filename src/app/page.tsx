'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, ProjectItem, ServiceItem } from '@/config/siteConfig';
import { SectionHeading } from '@/components/SectionHeading';
import { GoldDivider } from '@/components/GoldDivider';
import { PriceCard } from '@/components/PriceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterTabs } from '@/components/FilterTabs';
import { ImageLightbox } from '@/components/ImageLightbox';
import { ContactForm } from '@/components/ContactForm';
import { LocationSection } from '@/components/LocationSection';

export default function LandingPage() {
  // Services category state
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>('all');
  
  // Projects state
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const whatsappHeroUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.defaultConsultation
  )}`;

  const serviceTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Extensions' },
    { id: 'brows', label: 'Brows & PMU' },
    { id: 'lip-eye', label: 'Lip & Eye' },
    { id: 'barber', label: 'Barber Services' },
  ];

  const projectTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'hair', label: 'Hair Extensions' },
    { id: 'brows', label: 'Brows & PMU' },
    { id: 'lip-eye', label: 'Lip & Eye' },
    { id: 'barber', label: 'Barber' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
  ];

  const filteredServices =
    activeServiceCategory === 'all'
      ? siteConfig.services
      : siteConfig.services.filter((s) => s.category === activeServiceCategory);

  const filteredProjects =
    activeProjectCategory === 'all'
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeProjectCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#F4EFE6]">
      
      {/* ================================================== */}
      {/* 1. HERO SECTION (#home) */}
      {/* ================================================== */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chay_castelo_hero.png"
            alt="Chay Castelo applying Mega Hair Tela Technique at Única Salon"
            fill
            className="object-cover object-center filter contrast-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
          <div className="absolute inset-0 bg-dark-radial opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B0B0B]/80 backdrop-blur-md border border-[#C9A14A]/40 text-xs font-semibold tracking-[0.25em] text-[#C9A14A] uppercase mb-6">
              <i className="bi bi-geo-alt text-[#C9A14A]" />
              <span>Georgetown, Guyana</span>
            </div>

            <span className="block text-xs md:text-sm font-semibold tracking-[0.3em] text-[#D8B86A] uppercase mb-3 font-sans">
              ÚNICA HAIR EXTENSIONS
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FFFFFF] font-normal leading-[1.1] mb-6 tracking-tight">
              Luxury Beauty, <br />
              <span className="italic text-gold-metallic">Made Uniquely Yours.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#E9E0D2] font-light leading-relaxed mb-8">
              Discover personalized hair and aesthetic services designed to enhance your natural beauty with elegance, precision and a signature touch.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold text-center flex items-center justify-center gap-3"
              >
                <i className="bi bi-whatsapp text-lg" />
                <span>Book Your Consultation</span>
              </a>

              <a
                href="#services"
                className="py-4 px-8 btn-gold-outline text-xs uppercase tracking-[0.2em] font-semibold text-center flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <i className="bi bi-arrow-down text-sm" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9A14A] opacity-75 animate-bounce z-10">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <i className="bi bi-chevron-down text-sm" />
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. POSITIONING BANNER */}
      {/* ================================================== */}
      <section className="bg-[#0B0B0B] border-y border-[#C9A14A]/25 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 px-2">
              <i className="bi bi-person-check text-xl text-[#C9A14A]" />
              <span className="text-xs uppercase tracking-widest text-[#E9E0D2] font-medium">
                Personalized Service
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 px-2 border-l border-[#1D1D1D]">
              <i className="bi bi-shield-check text-xl text-[#C9A14A]" />
              <span className="text-xs uppercase tracking-widest text-[#E9E0D2] font-medium">
                Safe Process
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 px-2 border-l border-[#1D1D1D]">
              <i className="bi bi-award text-xl text-[#C9A14A]" />
              <span className="text-xs uppercase tracking-widest text-[#E9E0D2] font-medium">
                Experience & Excellence
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 px-2 border-l border-[#1D1D1D]">
              <i className="bi bi-gem text-xl text-[#C9A14A]" />
              <span className="text-xs uppercase tracking-widest text-[#E9E0D2] font-medium">
                Signature Results
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. ABOUT BRAND & SPECIALIST (#about) */}
      {/* ================================================== */}
      <section id="about" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Vision Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 relative h-[420px] md:h-[500px] border border-[#C9A14A]/40 shadow-luxury-card group overflow-hidden">
              <Image
                src="/images/salon_exterior.png"
                alt="Única Hair Extensions Destination"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute top-6 left-6 w-16 h-16 border border-[#C9A14A]/60 bg-[#050505]/80 backdrop-blur-md flex items-center justify-center">
                <i className="bi bi-gem text-2xl text-[#C9A14A]" />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <SectionHeading
                eyebrow="WELCOME TO ÚNICA"
                title="Where Beauty Becomes a Signature."
                align="left"
                showDivider={true}
              />
              <p className="text-sm md:text-base text-[#A6A6A6] font-light leading-relaxed mb-6">
                At Única Hair Extensions, every service is approached with care, personalization and attention to detail. From premium hair transformations to refined aesthetic treatments, our goal is to create results that feel elegant, natural and uniquely yours.
              </p>
              <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed mb-8">
                Única Hair Extensions was created as a space where each client can experience personalized beauty services in an elegant and welcoming environment. Every detail is designed to support confidence, individuality and refined results.
              </p>
              <a
                href="#services"
                className="py-3.5 px-7 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Discover Our Services
              </a>
            </div>
          </div>

          {/* Specialist Highlight: Chay Castelo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <SectionHeading
                eyebrow="THE SIGNATURE SPECIALIST"
                title="Meet Chay Castelo"
                align="left"
                showDivider={true}
              />
              <p className="text-sm md:text-base text-[#A6A6A6] font-light leading-relaxed mb-6">
                Chay Castelo brings a personalized approach to hair transformation, combining technique, precision and a refined aesthetic vision. Every consultation is designed to understand the client’s desired result, lifestyle and natural hair before creating a tailored experience.
              </p>

              <div className="w-full bg-[#141414] border-l-2 border-[#C9A14A] p-6 mb-8">
                <p className="font-serif text-xl md:text-2xl text-[#FFFFFF] italic">
                  &ldquo;More than mega hair. It’s a signature.&rdquo;
                </p>
                <span className="block text-xs uppercase tracking-widest text-[#C9A14A] mt-2 font-sans font-semibold">
                  — Chay Castelo
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[450px] border border-[#C9A14A]/40 shadow-luxury-card group overflow-hidden">
              <Image
                src="/images/chay_castelo_hero.png"
                alt="Chay Castelo Specialist"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="mt-24 pt-16 border-t border-[#1D1D1D]">
            <SectionHeading
              eyebrow="CORE PRINCIPLES"
              title="Our Philosophy & Values"
              subtitle="At Única, beauty is not treated as a standard formula. Each experience is adapted to the client."
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
                <div key={idx} className="bg-[#0B0B0B] border border-[#1D1D1D] p-8 hover:border-[#C9A14A]/60 transition-all duration-300">
                  <div className="w-10 h-10 border border-[#C9A14A]/40 bg-[#141414] text-[#C9A14A] flex items-center justify-center font-serif text-lg mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-serif text-[#FFFFFF] mb-3">{val.title}</h3>
                  <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. MEGA HAIR TELA TECHNIQUE (#technique) */}
      {/* ================================================== */}
      <section id="technique" className="py-20 md:py-28 bg-[#0B0B0B] border-y border-[#C9A14A]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CHAY CASTELO UNIQUE SIGNATURE"
            title="Mega Hair Tela Technique"
            subtitle="Natural. Lightweight. Exclusive."
          />

          <p className="text-center text-sm md:text-base text-[#A6A6A6] max-w-3xl mx-auto mb-14 font-light leading-relaxed">
            A personalized extension technique created to unite beauty, comfort and natural movement. Each application is carefully planned to achieve a seamless and sophisticated finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#141414] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/40 bg-[#0B0B0B] text-[#C9A14A] flex items-center justify-center text-xl mb-4">
                  <i className="bi bi-[#C9A14A] bi-feather" />
                </div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">1. Lightweight & Comfortable</h3>
                <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">
                  Designed to provide comfort without unnecessary weight or excessive tension on the natural hair.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/40 bg-[#0B0B0B] text-[#C9A14A] flex items-center justify-center text-xl mb-4">
                  <i className="bi bi-eye-slash" />
                </div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">2. Natural & Undetectable</h3>
                <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">
                  Carefully blended for a seamless, discreet and refined finish.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/40 bg-[#0B0B0B] text-[#C9A14A] flex items-center justify-center text-xl mb-4">
                  <i className="bi bi-hourglass-split" />
                </div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">3. Long-Lasting</h3>
                <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">
                  Created for extended wear with appropriate care and professional maintenance.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/40 bg-[#0B0B0B] text-[#C9A14A] flex items-center justify-center text-xl mb-4">
                  <i className="bi bi-star" />
                </div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">4. Premium Hair</h3>
                <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">
                  Selected for quality, shine, softness and natural movement.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessages.serviceBooking("Mega Hair Tela Technique"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-4 px-8 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold items-center gap-3"
            >
              <i className="bi bi-whatsapp text-lg" />
              <span>Book a Hair Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. SERVICES CATALOG (#services) */}
      {/* ================================================== */}
      <section id="services" className="py-20 md:py-28 bg-[#050505] relative border-b border-[#1D1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SERVICES & CATALOG"
            title="Luxury Services, Personalized for You"
            subtitle="Explore our complete menu of hair extensions, permanent aesthetics, and grooming in Georgetown, Guyana."
          />

          {/* Filter Tabs for Services */}
          <FilterTabs
            tabs={serviceTabs}
            activeTab={activeServiceCategory}
            onTabChange={setActiveServiceCategory}
            className="mb-12"
          />

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredServices.map((service) => (
              <PriceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Treatment Protocol Box */}
          <div className="bg-[#0B0B0B] border border-[#C9A14A]/30 p-6 md:p-8 max-w-4xl mx-auto mb-10">
            <h4 className="text-xs uppercase tracking-widest text-[#C9A14A] font-semibold mb-3 flex items-center gap-2">
              <i className="bi bi-info-circle" /> Brow & Aesthetic Treatment Protocol
            </h4>
            <ul className="text-xs md:text-sm text-[#A6A6A6] space-y-2 font-light">
              <li>• Touch-up sessions are recommended approximately 45 days after the first session when applicable.</li>
              <li>• In-person initial consultations are complimentary to evaluate skin eligibility and shape preferences.</li>
              <li>• Final eligibility and custom treatment plans are confirmed during the initial assessment.</li>
            </ul>
          </div>

          {/* Consultation Disclaimer */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#A6A6A6] font-light italic">
              Service availability, suitability and personalized estimates are confirmed directly with Única upon consultation before booking.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. PROJECTS & TRANSFORMATIONS GALLERY (#projects) */}
      {/* ================================================== */}
      <section id="projects" className="py-20 md:py-28 bg-[#0B0B0B] border-b border-[#1D1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TRANSFORMATION GALLERY"
            title="Signature Transformations"
            subtitle="Explore selected hair, brow, aesthetic and grooming work by Única."
          />

          {/* Filter Tabs for Projects */}
          <FilterTabs
            tabs={projectTabs}
            activeTab={activeProjectCategory}
            onTabChange={setActiveProjectCategory}
            className="mb-14"
          />

          {/* Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

          {/* 5-Step Methodology */}
          <div className="pt-16 border-t border-[#1D1D1D]">
            <SectionHeading
              eyebrow="OUR METHODOLOGY"
              title="Every Result Begins with a Personalized Plan."
              subtitle="Our step-by-step approach ensures safety, aesthetic perfection, and lasting beauty."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
              {[
                { step: "01", title: "Consultation", desc: "Evaluating hair condition, facial shape, and desired outcomes." },
                { step: "02", title: "Personalized Planning", desc: "Customizing colors, extension strands, or pigment undertones." },
                { step: "03", title: "Professional Service", desc: "Executing with precise technique and luxury standard safety." },
                { step: "04", title: "Final Styling", desc: "Blending, cutting, and styling for a natural flawless finish." },
                { step: "05", title: "Care Guidance", desc: "Providing tailored home maintenance instructions for longevity." },
              ].map((s, idx) => (
                <div key={idx} className="bg-[#141414] border border-[#1D1D1D] p-6 text-center hover:border-[#C9A14A]/60 transition-all duration-300">
                  <span className="inline-block text-2xl font-serif font-bold text-[#C9A14A] mb-3">
                    {s.step}
                  </span>
                  <h4 className="text-base font-serif text-[#FFFFFF] mb-2">{s.title}</h4>
                  <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. WHY CHOOSE ÚNICA */}
      {/* ================================================== */}
      <section className="py-20 md:py-28 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE ÚNICA EXPERIENCE"
            title="A Beauty Experience Designed Around You"
            subtitle="Every appointment begins with understanding your goals. Our approach is centered on clear communication, thoughtful recommendations and a result that complements your individual beauty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Personalized Consultation", desc: "Thorough assessment of hair type, facial features, and personal goals before treatment.", icon: "bi-chat-left-text" },
              { title: "Attention to Detail", desc: "Meticulous execution in every stitch of extension, brow stroke, and razor line.", icon: "bi-bullseye" },
              { title: "Premium Experience", desc: "Relaxing, quiet, and sophisticated atmosphere focused on your comfort.", icon: "bi-gem" },
              { title: "Natural-Looking Results", desc: "Enhancements designed to seamlessly integrate without harsh or artificial finishes.", icon: "bi-flower1" },
              { title: "Professional Care", desc: "Guided maintenance routines to preserve beauty and health long after leaving.", icon: "bi-shield-check" },
              { title: "Elegant Environment", desc: "A boutique sanctuary located in Lusignan, East Coast Demerara.", icon: "bi-building" },
            ].map((diff, idx) => (
              <div key={idx} className="bg-[#0B0B0B] border border-[#1D1D1D] p-8 hover:border-[#C9A14A]/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-none border border-[#C9A14A]/40 bg-[#141414] text-[#C9A14A] flex items-center justify-center text-xl mb-6">
                  <i className={`bi ${diff.icon}`} />
                </div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-3">{diff.title}</h3>
                <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 8. LOCATION & MAP */}
      {/* ================================================== */}
      <LocationSection />

      {/* ================================================== */}
      {/* 9. CONTACT FORM (#contact) */}
      {/* ================================================== */}
      <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-[#C9A14A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Book Your Signature Appointment"
            subtitle="Fill out your appointment preferences below or chat directly with our team on WhatsApp."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#141414] border border-[#1D1D1D] p-8">
                <h4 className="text-xs uppercase tracking-widest text-[#C9A14A] font-semibold mb-4">
                  Business Information
                </h4>
                <div className="space-y-4 text-xs md:text-sm text-[#A6A6A6]">
                  <div>
                    <span className="text-[#FFFFFF] font-serif block text-base mb-1">{siteConfig.fullName}</span>
                    <span className="text-[#C9A14A]">Specialist: {siteConfig.specialist}</span>
                  </div>
                  <div className="pt-3 border-t border-[#1D1D1D]">
                    <span className="block text-white font-medium mb-1">Address</span>
                    <span>{siteConfig.contact.address.full}</span>
                  </div>
                  <div className="pt-3 border-t border-[#1D1D1D]">
                    <span className="block text-white font-medium mb-1">WhatsApp & Direct Phone</span>
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Card */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141414] border border-[#1D1D1D] p-6 hover:border-[#25D366]/60 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-2xl">
                    <i className="bi bi-whatsapp" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors block">
                      Chat Directly on WhatsApp
                    </span>
                    <span className="text-xs text-[#A6A6A6]">Fast response & consultation</span>
                  </div>
                </div>
                <i className="bi bi-arrow-right text-lg text-[#C9A14A] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10. FINAL CTA BANNER */}
      {/* ================================================== */}
      <section className="py-24 bg-[#050505] border-t border-[#C9A14A]/30 relative overflow-hidden text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="font-serif text-[400px] text-[#C9A14A] font-bold">Ú</span>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C9A14A] uppercase mb-4 block">
            BEAUTY WITH IDENTITY
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#FFFFFF] mb-6">
            Your Signature Transformation Starts Here.
          </h2>
          <GoldDivider className="mx-auto" />
          <p className="text-base md:text-lg text-[#A6A6A6] font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Book a personalized consultation and discover the service that best fits your beauty goals.
          </p>
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-4 px-10 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold items-center gap-3"
          >
            <i className="bi bi-whatsapp text-lg" />
            <span>Book Your Consultation</span>
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
