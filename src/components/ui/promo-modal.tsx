"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handlePosterClick = () => {
    setIsOpen(false);
    router.push('/paket/1');
  };

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
      <div className="relative z-50 flex max-h-[85vh] max-w-[90vw] md:max-w-md lg:max-w-lg flex-col animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 -top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-xl hover:bg-zinc-100 transition-colors border border-gray-200"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        <div 
          className="relative overflow-hidden rounded-xl bg-white shadow-2xl flex justify-center items-center cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={handlePosterClick}
        >
          <img 
            src="/poster-umrah.jpeg" 
            alt="Promo Umrah Madinah Salam"
            className="w-full h-auto max-h-[85vh] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<div class="flex flex-col items-center justify-center p-8 text-center w-full min-h-[300px]"><h3 class="text-2xl font-bold text-amber-600 mb-4">PROMO UMRAH</h3><p class="text-zinc-600">Simpan gambar poster-umrah.jpeg di folder public/ untuk menampilkan poster.</p></div>';
            }}
          />
        </div>
      </div>
    </div>
  );
}
