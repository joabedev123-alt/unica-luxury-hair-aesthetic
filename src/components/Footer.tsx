import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#C9A14A]/20 text-[#F4EFE6] relative overflow-hidden">
      {/* Background Watermark Monogram */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[280px] text-[#C9A14A] font-bold">Ú</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden border border-[#C9A14A]/40">
                <Image
                  src="/images/logo.jpeg"
                  alt="ÚNICA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] text-[#FFFFFF] font-bold">
                  ÚNICA
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C9A14A] uppercase font-sans">
                  Hair Extensions
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm text-[#A6A6A6] font-light leading-relaxed">
              Luxury hair, aesthetic and grooming services with a personalized signature experience in Georgetown, Guyana.
            </p>
            <div className="flex items-center gap-4 text-lg text-[#A6A6A6] pt-2">
              <a
                href={siteConfig.socials.chayInstagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chay Castelo Instagram"
                className="w-9 h-9 flex items-center justify-center border border-[#1D1D1D] rounded-full hover:border-[#C9A14A] hover:text-[#C9A14A] transition-all"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href={siteConfig.socials.unicaInstagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Única Instagram"
                className="w-9 h-9 flex items-center justify-center border border-[#1D1D1D] rounded-full hover:border-[#C9A14A] hover:text-[#C9A14A] transition-all"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-[#1D1D1D] rounded-full hover:border-[#C9A14A] hover:text-[#C9A14A] transition-all"
              >
                <i className="bi bi-facebook" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center border border-[#1D1D1D] rounded-full hover:border-[#C9A14A] hover:text-[#C9A14A] transition-all"
              >
                <i className="bi bi-tiktok" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C9A14A] font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-[#A6A6A6] hover:text-[#D8B86A] transition-colors flex items-center gap-2"
                  >
                    <i className="bi bi-chevron-right text-[10px] text-[#C9A14A]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C9A14A] font-semibold mb-6">
              Signature Services
            </h3>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-[#A6A6A6]">
              <li>
                <Link href="/services#hair" className="hover:text-[#D8B86A] transition-colors flex items-center gap-2">
                  <i className="bi bi-diamond-fill text-[8px] text-[#C9A14A]" />
                  Hair Extensions & Tela
                </Link>
              </li>
              <li>
                <Link href="/services#brows" className="hover:text-[#D8B86A] transition-colors flex items-center gap-2">
                  <i className="bi bi-diamond-fill text-[8px] text-[#C9A14A]" />
                  Brows & Permanent Makeup
                </Link>
              </li>
              <li>
                <Link href="/services#lip-eye" className="hover:text-[#D8B86A] transition-colors flex items-center gap-2">
                  <i className="bi bi-diamond-fill text-[8px] text-[#C9A14A]" />
                  Lip & Eye Aesthetics
                </Link>
              </li>
              <li>
                <Link href="/services#barber" className="hover:text-[#D8B86A] transition-colors flex items-center gap-2">
                  <i className="bi bi-diamond-fill text-[8px] text-[#C9A14A]" />
                  Barber & Grooming
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C9A14A] font-semibold mb-6">
              Contact & Location
            </h3>
            <div className="flex flex-col gap-4 text-xs md:text-sm text-[#A6A6A6]">
              <div className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-[#C9A14A] text-base mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.area}, {siteConfig.contact.address.city}, Guyana
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-whatsapp text-[#C9A14A] text-base" />
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D8B86A] transition-colors"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-person text-[#C9A14A] text-base" />
                <span>Specialist: {siteConfig.specialist}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-[#1D1D1D] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-[#A6A6A6]">
          <p>© {currentYear} Única Hair Extensions. All rights reserved.</p>
          <p className="text-[11px] text-[#A6A6A6]/70">
            Georgetown, Guyana • Designed with Precision & Elegance
          </p>
        </div>
      </div>
    </footer>
  );
};
