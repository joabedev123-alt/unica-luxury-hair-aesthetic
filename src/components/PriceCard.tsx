import React from 'react';
import { ServiceItem, siteConfig } from '@/config/siteConfig';

interface PriceCardProps {
  service: ServiceItem;
}

export const PriceCard: React.FC<PriceCardProps> = ({ service }) => {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.serviceBooking(service.title)
  )}`;

  return (
    <div
      className={`relative bg-[#0B0B0B] border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-luxury-card ${
        service.isPopular
          ? 'border-[#C9A14A] bg-gradient-to-b from-[#141414] to-[#0B0B0B]'
          : 'border-[#1D1D1D] hover:border-[#C9A14A]/50'
      }`}
    >
      {/* Popular Badge */}
      {service.isPopular && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#9C762C] via-[#C9A14A] to-[#D8B86A] text-[#050505] text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 shadow-md">
          Popular Choice
        </div>
      )}

      <div>
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-[#1D1D1D]">
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-[#FFFFFF] leading-snug">
              {service.title}
            </h3>
            {service.requiresConsultation && (
              <span className="inline-block mt-2 text-[10px] uppercase tracking-widest text-[#C9A14A] font-medium">
                <i className="bi bi-info-circle mr-1" /> Consultation Required
              </span>
            )}
          </div>

          <div className="text-left sm:text-right shrink-0">
            {service.price ? (
              <div className="text-xl md:text-2xl font-serif font-bold text-[#C9A14A]">
                {service.currency && service.currency === 'GYD' ? `GYD ${service.price}` : service.price}
              </div>
            ) : (
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A14A] font-semibold border border-[#C9A14A]/40 px-2.5 py-1 inline-block bg-[#050505]">
                Upon Consultation
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Extra Notes */}
        {service.notes && (
          <div className="text-[11px] text-[#D8B86A]/80 italic mb-6 flex items-start gap-1.5">
            <i className="bi bi-asterisk text-[9px] mt-0.5" />
            <span>{service.notes}</span>
          </div>
        )}
      </div>

      {/* Booking CTA Button */}
      <div className="mt-6 pt-4 border-t border-[#1D1D1D]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 btn-gold-outline text-xs uppercase tracking-[0.18em] font-semibold text-center flex items-center justify-center gap-2"
        >
          <i className="bi bi-whatsapp text-sm" />
          <span>Book This Service</span>
        </a>
      </div>
    </div>
  );
};
