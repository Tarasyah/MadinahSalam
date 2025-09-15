"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  comment: z.string().optional(),
});

const ContactSection = () => {
    const contactImage = PlaceHolderImages.find(img => img.id === 'contact-bg');
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Request Sent!",
            description: "Thank you for your interest. We will get back to you shortly.",
        });
        form.reset();
    }

    return (
        <section id="contact" className="relative py-16 lg:py-24">
             {contactImage && (
                <Image
                    src={contactImage.imageUrl}
                    alt={contactImage.description}
                    data-ai-hint={contactImage.imageHint}
                    fill
                    className="object-cover"
                />
            )}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container relative z-10 max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">Want to join us, but still have questions?</h2>
                    <p className="text-white/80 mt-2">Leave a request</p>
                </div>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/30">
                    <CardContent className="p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white/80">Your name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} className="bg-background/70 border-border/50 text-foreground" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white/80">Phone number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+1 (555) 000-0000" {...field} className="bg-background/70 border-border/50 text-foreground"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white/80">Comment</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Any questions or special requests?" {...field} className="bg-background/70 border-border/50 text-foreground" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full rounded-full">Send</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ContactSection;
