import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function UploadProgressPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center relative">
      <div className="absolute top-24 left-4 md:left-12">
        <Link href="/galeri" className="inline-flex items-center text-sm font-medium hover:underline text-muted-foreground hover:text-foreground transition-colors bg-secondary/50 px-4 py-2 rounded-full backdrop-blur-md">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Galeri
        </Link>
      </div>
      <div className="text-center p-8">
        <h1 className="text-2xl md:text-3xl font-medium text-foreground">
          Upload in Progress
        </h1>
        <p className="text-muted-foreground mt-4">
          Foto-foto dokumentasi untuk perjalanan ini sedang dalam proses unggah. Silakan kembali lagi nanti.
        </p>
      </div>
    </main>
  );
}
