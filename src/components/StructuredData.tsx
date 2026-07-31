import React from 'react';
import { siteConfig } from '@/config/siteConfig';

export const StructuredData: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    description: siteConfig.positioning,
    image: 'https://unicaguyana.com/images/logo.jpeg',
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.area,
      addressCountry: 'GY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.811389,
      longitude: -58.077222,
    },
    url: 'https://unicaguyana.com',
    priceRange: 'GYD 4000 - GYD 60000',
    employee: {
      '@type': 'Person',
      name: siteConfig.specialist,
      jobTitle: 'Hair Extension & Aesthetic Specialist',
    },
    sameAs: [
      siteConfig.socials.chayInstagram,
      siteConfig.socials.unicaInstagram,
      siteConfig.socials.facebook,
      siteConfig.socials.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
