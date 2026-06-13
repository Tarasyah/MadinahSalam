import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'));

export default function TestimoniPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 pb-8 bg-secondary">
      <TestimonialsSection />
    </main>
  );
}
