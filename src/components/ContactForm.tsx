'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Mega Hair Tela Technique',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const serviceOptions = [
    'Mega Hair Tela Technique',
    'Hair Extensions',
    'Microblading',
    'Hybrid Brows',
    'Brow Shading',
    'Brow Neutralization',
    'Brow Lamination',
    'Lip Blush',
    'Eyeliner Tattoo',
    'Men’s Haircut',
    'Beard Grooming',
    'Kids Haircut',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone or WhatsApp number.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please accept the consent terms to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message cleanly
    const messageText = siteConfig.whatsappMessages.customAppointment(formData);
    const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="bg-[#0B0B0B] border border-[#1D1D1D] p-6 md:p-10 shadow-luxury-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A14A]/5 rounded-full blur-2xl pointer-events-none" />

      <h3 className="text-2xl md:text-3xl font-serif text-[#FFFFFF] mb-2">
        Request a Consultation
      </h3>
      <p className="text-xs md:text-sm text-[#A6A6A6] font-light mb-8">
        Fill out your details below to schedule your signature appointment via WhatsApp.
      </p>

      {errorMessage && (
        <div className="mb-6 p-4 bg-[#2A1010] border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <i className="bi bi-exclamation-circle text-base text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="mb-6 p-4 bg-[#102A14] border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
          <i className="bi bi-check-circle text-base text-emerald-400" />
          <span>Opening WhatsApp... Your message details have been formatted.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              required
              className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +592 700 0000"
              required
              className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email & Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. sarah@example.com"
              className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
              Service of Interest *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0B0B0B] text-[#F4EFE6]">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
              Preferred Time
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="e.g. Morning / 2:00 PM"
              className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#C9A14A] font-medium mb-2">
            Additional Message / Hair Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your desired look, current hair condition, or any specific questions..."
            className="w-full bg-[#141414] border border-[#1D1D1D] focus:border-[#C9A14A] text-[#F4EFE6] px-4 py-3 text-sm rounded-none outline-none transition-colors resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 accent-[#C9A14A] w-4 h-4 cursor-pointer"
          />
          <label htmlFor="consent" className="text-xs text-[#A6A6A6] cursor-pointer leading-relaxed">
            I agree to send this request to Única Hair Extensions via WhatsApp and understand that final eligibility & appointment availability will be confirmed upon review.
          </label>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 btn-gold-primary text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 font-semibold mt-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <i className="bi bi-arrow-repeat animate-spin text-base" />
              <span>Formatting Request...</span>
            </>
          ) : (
            <>
              <i className="bi bi-whatsapp text-lg" />
              <span>Send Appointment Request</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
