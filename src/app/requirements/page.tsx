import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, ShieldAlert } from 'lucide-react';

const requirementsList = [
    "Original passport with a minimum of 6 months validity.",
    "Passport-size photographs with a white background.",
    "Valid residence permit (for non-citizens of their country of departure).",
    "Proof of vaccination against Meningitis (ACYW-135).",
    "Proof of vaccination against COVID-19 (as per Saudi regulations).",
    "For female pilgrims under 45, proof of relationship with a Mahram (e.g., marriage or birth certificate).",
    "Completed visa application form."
];

const processSteps = [
    "Submit all required documents to our team.",
    "We will process your visa application with the Saudi embassy.",
    "Once the visa is approved, we will book your flights and accommodation.",
    "Receive your complete travel package including tickets, visa, and hotel vouchers.",
    "Attend a pre-departure seminar to prepare for your journey."
];

export default function RequirementsPage() {
    const pageImage = PlaceHolderImages.find(img => img.id === 'requirements-hero');

    return (
        <>
            <section className="relative h-64 md:h-80 w-full flex items-center justify-center text-white">
                {pageImage && (
                    <Image
                        src={pageImage.imageUrl}
                        alt={pageImage.description}
                        data-ai-hint={pageImage.imageHint}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center p-4">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Umrah Requirements</h1>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center">
                                <Check className="mr-2 h-6 w-6 text-primary" />
                                Required Documents
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-muted-foreground">
                                {requirementsList.map((item, index) => (
                                    <li key={index} className="flex">
                                        <span className="text-primary font-bold mr-2">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Application Process</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                    {processSteps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>

                        <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
                           <div className="flex">
                             <div className="flex-shrink-0">
                               <ShieldAlert className="h-5 w-5 text-yellow-500" />
                             </div>
                             <div className="ml-3">
                               <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Important Note</h3>
                               <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-400">
                                 <p>Requirements are subject to change based on regulations set by the Ministry of Hajj and Umrah of Saudi Arabia. Please contact us for the most up-to-date information.</p>
                               </div>
                             </div>
                           </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    );
}
