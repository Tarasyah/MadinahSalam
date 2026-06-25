"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export function PackageSearch() {
  const router = useRouter();
  const [packageType, setPackageType] = useState('umrah');
  const [month, setMonth] = useState('september-2026');
  const [duration, setDuration] = useState('12');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate searching and redirect to the specific package
    // For now, it redirects to /paket/1 based on user requirement
    router.push('/paket/1');
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="mt-8 flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl max-w-4xl"
    >
      <div className="flex-1 w-full">
        <label className="block text-xs font-medium text-white/80 mb-1 ml-1 uppercase tracking-wider">
          Tipe Paket
        </label>
        <select 
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="w-full bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer [&>option]:text-black"
        >
          <option value="umrah">Umrah Reguler</option>
          <option value="umrah-plus">Umrah Plus Wisata</option>
          <option value="haji">Haji Khusus</option>
          <option value="haji-furoda">Haji Furoda</option>
        </select>
      </div>

      <div className="flex-1 w-full">
        <label className="block text-xs font-medium text-white/80 mb-1 ml-1 uppercase tracking-wider">
          Bulan Keberangkatan
        </label>
        <select 
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer [&>option]:text-black"
        >
          <option value="any">Kapan Saja</option>
          <option value="september-2026">September 2026</option>
          <option value="oktober-2026">Oktober 2026</option>
          <option value="november-2026">November 2026</option>
          <option value="desember-2026">Desember 2026</option>
          <option value="ramadhan-2027">Ramadhan 2027</option>
        </select>
      </div>

      <div className="flex-1 w-full">
        <label className="block text-xs font-medium text-white/80 mb-1 ml-1 uppercase tracking-wider">
          Durasi
        </label>
        <select 
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer [&>option]:text-black"
        >
          <option value="any">Semua Durasi</option>
          <option value="9">9 Hari</option>
          <option value="12">12 Hari</option>
          <option value="15">15 Hari</option>
        </select>
      </div>

      <div className="w-full md:w-auto mt-5 md:mt-0 md:self-end flex items-center">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full md:w-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto text-lg gap-2"
        >
          <Search className="w-5 h-5" />
          Cari
        </Button>
      </div>
    </form>
  );
}
