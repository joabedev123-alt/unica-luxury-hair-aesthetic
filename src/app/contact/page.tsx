import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { InternalPageHero } from '@/components/InternalPageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Única Luxury Hair & Aesthetic | Georgetown',
  description:
    'Schedule a consultation with Chay Castelo at Única Luxury Hair & Aesthetic in Lusignan, East Coast Demerara, Georgetown, Guyana. Direct WhatsApp and location directions.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#F4EFE6]">
      {/* Banner */}
      <InternalPageHero
        title="Contact Única"
        subtitle="Book a consultation or speak directly with our team."
        bgImage="/images/salon_exterior.png"
      />

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Book Your Signature Appointment"
            subtitle="We look forward to welcoming you to our luxury salon in Lusignan, Georgetown."
          />

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessages.defaultConsultation)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0B0B] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <i className="bi bi-[#C9A14A] bi-whatsapp text-2xl text-[#25D366] mb-4 block" />
                <h4 className="text-lg font-serif text-[#FFFFFF] group-hover:text-[#D8B86A] transition-colors mb-1">
                  WhatsApp Direct
                </h4>
                <p className="text-xs text-[#A6A6A6] font-light">{siteConfig.contact.phone}</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A14A] font-semibold mt-4 block">
                Message Now →
              </span>
            </a>

            {/* Visit Salon */}
            <a
              href={siteConfig.contact.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0B0B] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <i className="bi bi-geo-alt text-2xl text-[#C9A14A] mb-4 block" />
                <h4 className="text-lg font-serif text-[#FFFFFF] group-hover:text-[#D8B86A] transition-colors mb-1">
                  Visit the Salon
                </h4>
                <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.area}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A14A] font-semibold mt-4 block">
                Get Directions →
              </span>
            </a>

            {/* Chay Instagram */}
            <a
              href={siteConfig.socials.chayInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0B0B] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <i className="bi bi-instagram text-2xl text-[#C9A14A] mb-4 block" />
                <h4 className="text-lg font-serif text-[#FFFFFF] group-hover:text-[#D8B86A] transition-colors mb-1">
                  Chay Castelo
                </h4>
                <p className="text-xs text-[#A6A6A6] font-light">@chaycastelo</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A14A] font-semibold mt-4 block">
                Follow Instagram →
              </span>
            </a>

            {/* Única Instagram */}
            <a
              href={siteConfig.socials.unicaInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0B0B] border border-[#1D1D1D] p-6 hover:border-[#C9A14A]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <i className="bi bi-instagram text-2xl text-[#C9A14A] mb-4 block" />
                <h4 className="text-lg font-serif text-[#FFFFFF] group-hover:text-[#D8B86A] transition-colors mb-1">
                  Única Guyana
                </h4>
                <p className="text-xs text-[#A6A6A6] font-light">@unicaguyana</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A14A] font-semibold mt-4 block">
                Follow Instagram →
              </span>
            </a>
          </div>

          {/* Form & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Interactive Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Salon Info & Map Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#0B0B0B] border border-[#1D1D1D] p-8">
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
                    <span className="block text-white font-medium mb-1">WhatsApp & Call</span>
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="relative h-72 w-full bg-[#141414] border border-[#1D1D1D] overflow-hidden shadow-luxury-card">
                <iframe
                  title="Única Salon Location Map"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
