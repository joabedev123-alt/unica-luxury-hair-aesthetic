import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from './SectionHeading';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#080808] border-t border-b border-[#C9A14A]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="GEORGETOWN, GUYANA"
          title="Visit Única Salon"
          subtitle="An exclusive boutique atmosphere crafted for natural transformations and personalized attention."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Salon Photo Column */}
          <div className="lg:col-span-5 relative h-96 lg:h-[450px] overflow-hidden border border-[#C9A14A]/40 shadow-luxury-card group">
            <Image
              src="/images/salon_exterior.png"
              alt="Única Luxury Hair & Aesthetic Salon Exterior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#050505]/90 backdrop-blur-md border border-[#C9A14A]/30">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A14A] font-semibold block mb-1">
                Luxury Salon Destination
              </span>
              <p className="text-xs text-[#F4EFE6] font-serif">
                Lot 211, Lusignan, East Coast Demerara, Georgetown
              </p>
            </div>
          </div>

          {/* Location Info & Embedded Map Column */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full gap-8">
            <div className="bg-[#0B0B0B] border border-[#1D1D1D] p-6 md:p-8 flex flex-col gap-6 shadow-luxury-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C9A14A] font-semibold mb-2 flex items-center gap-2">
                    <i className="bi bi-geo-alt text-base" /> Salon Address
                  </h4>
                  <p className="text-sm text-[#F4EFE6] font-light leading-relaxed">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.area}<br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.region}<br />
                    {siteConfig.contact.address.country}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C9A14A] font-semibold mb-2 flex items-center gap-2">
                    <i className="bi bi-telephone text-base" /> Direct Phone & WhatsApp
                  </h4>
                  <p className="text-sm text-[#F4EFE6] font-light mb-2">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-xs text-[#A6A6A6] font-light">
                    Specialist: <span className="text-[#C9A14A] font-medium">{siteConfig.specialist}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#1D1D1D]">
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 btn-gold-outline text-xs uppercase tracking-[0.18em] font-semibold text-center flex items-center justify-center gap-2"
                >
                  <i className="bi bi-compass text-base" />
                  Get Directions
                </a>
                <a
                  href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessages.defaultConsultation)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 btn-gold-primary text-xs uppercase tracking-[0.18em] font-semibold text-center flex items-center justify-center gap-2"
                >
                  <i className="bi bi-whatsapp text-base" />
                  Contact on WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="relative h-64 w-full bg-[#141414] border border-[#1D1D1D] overflow-hidden shadow-luxury-card">
              <iframe
                title="Única Salon Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
