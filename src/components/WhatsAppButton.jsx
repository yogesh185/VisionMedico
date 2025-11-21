// src/components/WhatsAppButton.jsx
import React from 'react';
// Correctly importing the image asset
import WhatsAppIcon from '../assets/whatsapp.png';

function WhatsAppButton() {
  // IMPORTANT: Replace with your actual phone number in international format
  const phoneNumber = '9893251619';
  const message = "Hello! I'm interested in the Vision Medico Blood Bank.";

  // Construct the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* 
        The <img> tag was missing. Here it is, using the imported image.
        The animate-whatsapp-pulse class will apply the pulsing effect.
      */}
      <img
        src={WhatsAppIcon}
        alt="Chat on WhatsApp"
        className="h-12 w-12 animate-whatsapp-pulse"
      />
      
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 -translate-x-1/2 left-1/2 whitespace-nowrap rounded-md bg-slate-800 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;
