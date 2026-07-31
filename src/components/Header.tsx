'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-3.5 border-b border-[#C9A14A]/25 shadow-luxury-card'
            : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 overflow-hidden border border-[#C9A14A]/40 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpeg"
                alt="ÚNICA Official Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-[#FFFFFF] font-bold group-hover:text-[#D8B86A] transition-colors">
                ÚNICA
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-[#C9A14A] uppercase font-sans">
                Luxury Hair & Aesthetic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 ${
                    isActive ? 'text-[#C9A14A]' : 'text-[#E9E0D2] hover:text-[#C9A14A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessages.defaultConsultation)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex py-2.5 px-5 btn-gold-primary text-xs uppercase tracking-[0.18em] rounded-none items-center gap-2"
            >
              <i className="bi bi-calendar-check text-sm" />
              Book a Consultation
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#C9A14A] border border-[#C9A14A]/30 rounded-none hover:bg-[#C9A14A]/10 transition-colors"
            >
              <i className="bi bi-list text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
