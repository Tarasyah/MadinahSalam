"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export function PackageSearch() {
  const router = useRouter();
  const [packageType, setPackageType] = useState('');
  const [month, setMonth] = useState('');
  const [duration, setDuration] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (packageType || month || duration) {
        router.push('/paket/1');
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="mt-6 flex flex-col md:flex-row items-end gap-3 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl max-w-2xl"
    >
      <div className="flex-1 w-full">
        <label className="block text-[10px] font-semibold text-white/70 mb-1 ml-1 uppercase tracking-wider">
          Tipe Paket
        </label>
        <select 
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="w-full bg-white/10 hover:bg-white/20 text-white placeholder-white/50 border border-white/20 rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer [&>option]:text-black"
        >
          <option value="" disabled>Pilih Tipe</option>
          <option value="umrah">Umrah Reguler</option>
        </select>
      </div>

      <div className="flex-1 w-full">
        <label className="block text-[10px] font-semibold text-white/70 mb-1 ml-1 uppercase tracking-wider">
          Bulan
        </label>
        <select 
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full bg-white/10 hover:bg-white/20 text-white placeholder-white/50 border border-white/20 rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer [&>option]:text-black"
        >
          <option value="" disabled>Pilih Bulan</option>
          <option value="september-2026">September 2026</option>
        </select>
      </div>

      <div className="flex-1 w-full">
        <label className="block text-[10px] font-semibold text-white/70 mb-1 ml-1 uppercase tracking-wider">
          Durasi
        </label>
        <select 
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full bg-white/10 hover:bg-white/20 text-white placeholder-white/50 border border-white/20 rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer [&>option]:text-black"
        >
          <option value="" disabled>Pilih Durasi</option>
          <option value="12">12 Hari</option>
        </select>
      </div>

      <div className="w-full md:w-auto mt-2 md:mt-0 flex items-center">
        <Button 
          type="submit" 
          className="w-full md:w-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 h-[42px] text-sm gap-2 transition-all"
        >
          <Search className="w-4 h-4" />
          Cari
        </Button>
      </div>
    </form>
  );
}
