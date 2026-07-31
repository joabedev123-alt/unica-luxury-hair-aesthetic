'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#050505]/95 backdrop-blur-xl border-l border-[#C9A14A]/20 text-[#F4EFE6] transition-all duration-300">
      {/* Header Bar inside Mobile Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#C9A14A]/20">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded border border-[#C9A14A]/40">
            <Image
              src="/images/logo.jpeg"
              alt="ÚNICA Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest text-[#F4EFE6] font-bold">
              ÚNICA
            </span>
            <span className="text-[9px] tracking-widest text-[#C9A14A] uppercase">
              Luxury Hair & Aesthetic
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="w-10 h-10 flex items-center justify-center text-[#C9A14A] border border-[#C9A14A]/30 rounded-full hover:bg-[#C9A14A]/10 transition-colors"
        >
          <i className="bi bi-x-lg text-xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col gap-6">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`text-xl font-serif tracking-wider transition-colors flex items-center justify-between pb-3 border-b border-[#1D1D1D] ${
                  isActive ? 'text-[#C9A14A] font-semibold' : 'text-[#E9E0D2] hover:text-[#C9A14A]'
                }`}
              >
                <span>{link.name}</span>
                <i className={`bi bi-chevron-right text-xs ${isActive ? 'text-[#C9A14A]' : 'text-[#A6A6A6]'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions & Details */}
        <div className="mt-8 flex flex-col gap-6">
          {/* WhatsApp CTA */}
          <a
            href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessages.defaultConsultation)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-6 btn-gold-primary rounded-none tracking-widest uppercase text-xs text-center flex items-center justify-center gap-2"
          >
            <i className="bi bi-whatsapp text-base" />
            Book a Consultation
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-[#C9A14A]/20">
            <a
              href={siteConfig.socials.chayInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chay Castelo Instagram"
              className="text-[#A6A6A6] hover:text-[#C9A14A] text-xl transition-colors"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href={siteConfig.socials.unicaInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Única Instagram"
              className="text-[#A6A6A6] hover:text-[#C9A14A] text-xl transition-colors"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#A6A6A6] hover:text-[#C9A14A] text-xl transition-colors"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#A6A6A6] hover:text-[#C9A14A] text-xl transition-colors"
            >
              <i className="bi bi-tiktok" />
            </a>
          </div>

          {/* Address */}
          <div className="text-center text-xs text-[#A6A6A6] flex items-center justify-center gap-2">
            <i className="bi bi-geo-alt text-[#C9A14A]" />
            <span>{siteConfig.contact.address.full}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
