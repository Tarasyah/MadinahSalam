import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutUsPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-hero');

  return (
    <>
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center text-white">
        {aboutImage && (
          <Image
            src={aboutImage.imageUrl}
            alt={aboutImage.description}
            data-ai-hint={aboutImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Umrah Journey</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto">
          <div className="prose lg:prose-lg max-w-none text-foreground/80">
            <h2 className="font-headline text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p>
              At Umrah Journey, our mission is to provide an unparalleled spiritual experience for every pilgrim. We are dedicated to delivering exceptional service, comfort, and guidance, ensuring that your journey to the holy cities of Makkah and Madinah is both spiritually enriching and completely seamless. We believe that by handling all the worldly arrangements with meticulous care, we allow you to focus entirely on your devotion.
            </p>

            <h2 className="font-headline text-3xl font-bold mt-12 mb-4 text-foreground">Our Story</h2>
            <p>
              Founded by a group of passionate individuals with decades of experience in the travel and Hajj & Umrah sectors, Umrah Journey was born from a desire to make the holy pilgrimage accessible, comfortable, and memorable for everyone. We saw a need for a service that combines deep respect for the religious significance of the journey with modern standards of hospitality and organization.
            </p>
            <p>
              From our humble beginnings, we have grown into a trusted name, having served thousands of pilgrims from across the globe. Our team on the ground in Saudi Arabia and in our home offices works tirelessly to ensure every detail is perfect.
            </p>

            <h2 className="font-headline text-3xl font-bold mt-12 mb-4 text-foreground">Why Choose Us?</h2>
            <ul>
              <li><strong>Expertise:</strong> Our team's deep knowledge ensures a smooth and authentic pilgrimage experience.</li>
              <li><strong>Trust:</strong> We operate with complete transparency and integrity in all our dealings.</li>
              <li><strong>Comfort:</strong> We select the best hotels and transportation to ensure your utmost comfort.</li>
              <li><strong>Support:</strong> Our multilingual staff are available 24/7 to assist you throughout your journey.</li>
            </ul>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
                <Link href="/#packages">Discover Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
