'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const partners = [
  {
    name: 'Finlatics',
    logo: '/partners/finlatics.png',
    description: 'Finlatics is a platform that provides financial education and training programs, helping individuals develop skills in financial analysis, investment banking, and other areas of finance.',
  },
  {
    name: 'Bistro',
    logo: '/partners/bistro.png',
    description: 'Bistro is a modern food delivery application that allows users to order from a curated selection of local restaurants, offering a seamless and convenient dining experience.',
  },
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Partners</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          We are proud to collaborate with leading organizations to drive innovation and create impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={400}
                  height={225}
                  className="object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-2">{partner.name}</CardTitle>
                <p className="text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
