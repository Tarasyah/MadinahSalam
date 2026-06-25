"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div 
        className="fixed inset-0" 
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-50 w-[90%] max-w-md md:max-w-lg lg:max-w-xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 -top-3 z-10 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg hover:bg-zinc-100 transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl">
          {/* Replace with your actual umrah poster image */}
          <div className="relative aspect-[3/4] w-full bg-zinc-100">
            <Image 
              src="/images/poster-umrah.jpg" 
              alt="Promo Umrah Madinah Salam"
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback text if image doesn't exist yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"><h3 class="text-2xl font-bold text-amber-600 mb-4">PROMO UMRAH</h3><p class="text-zinc-600">Simpan gambar poster-umrah.jpg di folder public/images/ untuk menampilkan poster.</p></div>';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
