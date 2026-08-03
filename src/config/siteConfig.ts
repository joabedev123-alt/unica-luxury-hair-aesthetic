export interface ServiceItem {
  id: string;
  title: string;
  category: 'hair' | 'brows' | 'lip-eye' | 'barber';
  price?: string;
  currency?: string;
  description: string;
  notes?: string;
  isPopular?: boolean;
  requiresConsultation?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'hair' | 'brows' | 'lip-eye' | 'barber' | 'behind-scenes';
  categoryLabel: string;
  image: string;
  description: string;
  serviceUsed: string;
}

export const siteConfig = {
  name: "ÚNICA",
  subtitle: "Hair Extensions",
  fullName: "Única Hair Extensions",
  specialist: "Chay Castelo",
  slogan: "More than beauty. A signature experience.",
  positioning: "A premium hair and aesthetics destination focused on personalized service, natural-looking transformations, precision and exclusivity.",
  
  contact: {
    phone: "+592 766 2775",
    whatsappNumber: "5927662775",
    whatsappDisplay: "+592 766 2775",
    whatsappLink: "https://wa.me/5927662775",
    address: {
      street: "Lot 211, Lusignan",
      area: "East Coast Demerara",
      city: "Georgetown",
      region: "Region 4",
      country: "Guyana",
      full: "Lot 211, Lusignan, East Coast Demerara, Georgetown, Region 4, Guyana",
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.828476711585!2d-58.077222!3d6.811389!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnNDEuMCJOIDU4wrAwNCczOC4wIlc!5e0!3m2!1sen!2sgy!4v1700000000000!5m2!1sen!2sgy",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Lusignan+East+Coast+Demerara+Georgetown+Guyana",
  },

  socials: {
    chayInstagram: "https://www.instagram.com/chaycastelo?igsh=MXIxOTZ3bmFuYzkyYg%3D%3D&utm_source=qr",
    unicaInstagram: "https://www.instagram.com/unicaguyana?igsh=eHl6M24zOGtqbmtn",
    facebook: "https://www.facebook.com/share/1EmosJCFqt/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@unicaluxuryhair?_r=1&_t=ZS-98Te4ZPtBYr",
  },

  whatsappMessages: {
    defaultConsultation: "Hello Única, I would like to book a consultation.",
    generalInfo: "Hello Única, I would like more information about your services.",
    serviceBooking: (serviceName: string) => `Hello Única, I would like more information about ${serviceName}.`,
    customAppointment: (data: {
      name: string;
      phone: string;
      email: string;
      service: string;
      preferredDate: string;
      preferredTime: string;
      message: string;
    }) => 
`Hello Única, I would like to request an appointment.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Service: ${data.service}
Preferred date: ${data.preferredDate || 'Flexible'}
Preferred time: ${data.preferredTime || 'Flexible'}
Message: ${data.message || 'No additional message'}`,
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Technique", href: "#technique" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  services: [
    // Hair Extensions
    {
      id: "mega-hair-tela",
      title: "Chay Castelo Mega Hair Tela Technique",
      category: "hair",
      description: "A personalized hair extension service designed to add length, volume and movement while maintaining a refined and natural-looking finish. A consultation is required to evaluate natural hair health, desired result, application plan and maintenance routine.",
      requiresConsultation: true,
      isPopular: true,
      notes: "Requires mandatory in-salon assessment before application.",
    },

    // Brows & Permanent Makeup
    {
      id: "microblading-hair-stroke",
      title: "Microblading — Hair Stroke",
      category: "brows",
      description: "First session brow design utilizing fine hyper-realistic hair strokes tailored to your facial structure.",
      notes: "Touch-up session recommended ~45 days after treatment.",
    },
    {
      id: "micro-simple",
      title: "Micro Simple — Hair Stroke Only",
      category: "brows",
      description: "Touch-up service focusing exclusively on hair strokes to refresh existing microblading.",
      notes: "Maintenance service.",
    },
    {
      id: "hybrid-brows",
      title: "Microblading + Shading — Hybrid Brows",
      category: "brows",
      description: "Combines hair stroke technique with soft powder shading for defined yet natural depth.",
      isPopular: true,
    },
    {
      id: "shading-full",
      title: "Shading",
      category: "brows",
      description: "Full brow powder shading technique creating a soft makeup look with seamless gradients.",
    },
    {
      id: "micro-shading-combo",
      title: "Micro + Shading",
      category: "brows",
      description: "Combined touch-up treatment for existing microblading and shading.",
      notes: "Touch-up session available.",
    },
    {
      id: "shading-basic",
      title: "Shading — Basic",
      category: "brows",
      description: "Essential shading service for subtle density enhancement.",
      notes: "Touch-up session available.",
    },
    {
      id: "brow-neutralization",
      title: "Brow Neutralization",
      category: "brows",
      description: "Color correction service designed to neutralize unwanted blue, red, or purple tones in existing pigment.",
    },
    {
      id: "brow-lamination-combo",
      title: "Brow Lamination + Waxing + Tint",
      category: "brows",
      description: "Complete brow transformation package including keratin lamination, precise waxing, and custom tinting.",
      isPopular: true,
    },

    // Lip & Eye Aesthetics
    {
      id: "lip-blush",
      title: "Lip Blush",
      category: "lip-eye",
      description: "Aesthetic lip pigmentation service designed to enhance natural lip definition, balance symmetry, and restore youthful blush tones.",
      isPopular: true,
    },
    {
      id: "eyeliner-tattoo",
      title: "Eyeliner Tattoo",
      category: "lip-eye",
      description: "Refined aesthetic eyeliner permanent makeup creating subtle lash line enhancement and eye definition.",
    },

    // Barber Services
    {
      id: "mens-haircut",
      title: "Men’s Haircut — Simple Cut",
      category: "barber",
      description: "Professional men's haircut tailored to individual style and head shape.",
    },
    {
      id: "beard-grooming",
      title: "Beard Grooming & Line Up",
      category: "barber",
      description: "Precision beard sculpting, razor line up, and hydrating beard treatment.",
    },
    {
      id: "hair-wash-style",
      title: "Hair Wash & Style",
      category: "barber",
      description: "Refreshing scalp wash, massage, and professional blow-dry styling.",
    },
    {
      id: "kids-haircut",
      title: "Kids Haircut",
      category: "barber",
      description: "Gentle and stylish haircut for children in a comfortable environment.",
    },
    {
      id: "shape-up",
      title: "Shape Up / Edge Up",
      category: "barber",
      description: "Quick razor edge alignment for hairline and beard contours.",
    },
    {
      id: "full-grooming-package",
      title: "Full Grooming Package — Haircut + Beard",
      category: "barber",
      description: "Complete signature grooming experience including haircut, beard sculpting, line up, and styling.",
      isPopular: true,
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "project-1",
      title: "Signature Tela Extension Transformation",
      category: "hair",
      categoryLabel: "Hair Extensions",
      image: "/images/chay_castelo_hero.png",
      description: "Seamless length and volume addition using Chay Castelo's specialized Tela Technique with undetectable blend.",
      serviceUsed: "Chay Castelo Mega Hair Tela Technique",
    },
    {
      id: "project-2",
      title: "Hyper-Realistic Hybrid Brow Sculpting",
      category: "brows",
      categoryLabel: "Brows & PMU",
      image: "/images/brow_aesthetic.png",
      description: "Custom hair strokes combined with micro shading to create balanced facial harmony.",
      serviceUsed: "Microblading + Shading — Hybrid Brows",
    },
    {
      id: "project-3",
      title: "Natural Lip Blush Color Restoration",
      category: "lip-eye",
      categoryLabel: "Lip & Eye Aesthetics",
      image: "/images/lip_eye_aesthetic.png",
      description: "Soft velvet lip pigmentation enhancing natural symmetry and restoring healthy tone.",
      serviceUsed: "Lip Blush",
    },
    {
      id: "project-4",
      title: "Executive Men's Grooming & Beard Line Up",
      category: "barber",
      categoryLabel: "Barber Services",
      image: "/images/barber_service.png",
      description: "Sharp precision fade haircut paired with crisp razor beard edging.",
      serviceUsed: "Full Grooming Package — Haircut + Beard",
    },
    {
      id: "project-5",
      title: "Precision Brow Lamination & Tint",
      category: "brows",
      categoryLabel: "Brows & PMU",
      image: "/images/brow_aesthetic.png",
      description: "Structured lamination alignment giving full, fluffy, natural brow shape.",
      serviceUsed: "Brow Lamination + Waxing + Tint",
    },
    {
      id: "project-6",
      title: "Exclusive Salon Ambience & Consultation Space",
      category: "behind-scenes",
      categoryLabel: "Behind the Scenes",
      image: "/images/salon_exterior.png",
      description: "A peek inside Única's welcoming luxury atmosphere in Lusignan, East Coast Demerara.",
      serviceUsed: "In-Salon Consultation",
    },
  ] as ProjectItem[],
};
