'use client';

import React, { useState } from 'react';
import { siteConfig, ProjectItem } from '@/config/siteConfig';
import { InternalPageHero } from '@/components/InternalPageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { FilterTabs } from '@/components/FilterTabs';
import { ProjectCard } from '@/components/ProjectCard';
import { ImageLightbox } from '@/components/ImageLightbox';
import { GoldDivider } from '@/components/GoldDivider';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Work' },
    { id: 'hair', label: 'Hair Extensions' },
    { id: 'brows', label: 'Brows & PMU' },
    { id: 'lip-eye', label: 'Lip & Eye' },
    { id: 'barber', label: 'Barber' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeCategory);

  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.defaultConsultation
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#F4EFE6]">
      {/* Banner */}
      <InternalPageHero
        title="Signature Work"
        subtitle="Hair, beauty and grooming transformations by Única."
        bgImage="/images/chay_castelo_hero.png"
      />

      {/* Internal Dev Note */}
      {/* DEVELOPER NOTE: Replace placeholders only with real client images authorized for public use. */}

      {/* Projects Gallery Section */}
      <section className="py-20 md:py-28 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TRANSFORMATION GALLERY"
            title="Explore Our Work"
            subtitle="Click on any transformation to view details and service specifications."
          />

          {/* Filter Tabs */}
          <FilterTabs
            tabs={tabs}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
            className="mb-14"
          />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-[#0B0B0B] border border-[#1D1D1D]">
              <p className="text-sm text-[#A6A6A6]">No transformations found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Step Process Section */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-t border-b border-[#C9A14A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* CTA Banner */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif text-[#FFFFFF] mb-4">Ready for your transformation?</h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-4 px-8 btn-gold-primary text-xs uppercase tracking-[0.2em] font-semibold items-center gap-3"
            >
              <i className="bi bi-whatsapp text-lg" />
              <span>Start Your Transformation</span>
            </a>
          </div>
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
