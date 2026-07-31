'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.generalInfo
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on Desktop */}
      <div
        className={`hidden md:block mr-3 px-3.5 py-2 bg-[#0B0B0B]/95 text-[#F4EFE6] text-xs rounded border border-[#C9A14A]/40 shadow-luxury-card backdrop-blur-md transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="font-medium text-[#C9A14A]">Chat on WhatsApp</span>
        <span className="block text-[10px] text-[#A6A6A6]">Bookings & Inquiries</span>
      </div>

      {/* Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Única"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#C9A14A]/60 hover:border-[#D8B86A] transition-all duration-300 transform hover:scale-105"
      >
        <i className="bi bi-whatsapp text-2xl" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C9A14A] rounded-full border-2 border-[#050505]" />
      </a>
    </div>
  );
};
