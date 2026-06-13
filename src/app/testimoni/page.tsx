import Image from 'next/image';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'));

export default function TestimoniPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/background_tabtestimoni.jpeg"
          alt="Testimoni Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Testimoni Jamaah</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Apa kata mereka yang telah mempercayakan perjalanannya bersama kami.
          </p>
        </div>
      </section>

      <TestimonialsSection hideTitle />
    </main>
  );
}
