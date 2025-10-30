
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { contactSubmissions } from '@/lib/mock-data';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.location.href = `mailto:cmritcca@gmail.com?subject=Contact Form Submission&body=Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0AMessage: ${values.message}`;

    console.log('Contact form submitted with values:', values);
    console.log('Updated Submissions:', contactSubmissions);

    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <Image src="/whatsapp1.png" alt="WhatsApp" width={64} height={64} className="mx-auto" />,
      href: 'https://chat.whatsapp.com/FUYiGlm7jFG9iNJrFOnKNE',
    },
    {
      name: 'Instagram',
      icon: <Image src="/instagram.png" alt="Instagram" width={64} height={64} className="mx-auto" />,
      href: 'https://www.instagram.com/cca_cmrit/',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Connect With Us
        </h1>
        <p className="text-lg text-foreground/80 mt-4 mb-8">
          Join us on our social media to get the latest updates!
        </p>
        <div className="flex justify-center gap-8 md:gap-12">
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-4"
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </Link>
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <Button>Click to Connect</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center mt-20 mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
          Send us an Email
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Have a question, a suggestion, or want to partner with us? We'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto p-8 border rounded-lg shadow-lg bg-card"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full sm:w-auto sm:ml-auto">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
