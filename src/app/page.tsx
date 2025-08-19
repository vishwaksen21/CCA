'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Award, ShieldCheck, TrendingUp, BookOpen } from 'lucide-react';

import SplashScreen from '@/components/shared/splash-screen';

// ✅ achievers data as array for fixed order
const winnersData = [
  {
    year: 2024,
    groupImage: '/2024winners.png',
    names: ['Bhavani 🥳', 'Keerthika Sana 🎉', 'Hitesh L 🍻'],
  },
  {
    year: 2023,
    groupImage: 'https://placehold.co/600x400.png',
    names: ['Achiever Name 1 (2023)', 'Achiever Name 2 (2023)', 'Achiever Name 3 (2023)'],
  },
  {
    year: 2022,
    groupImage: 'https://placehold.co/600x400.png',
    names: ['Achiever Name 1 (2022)', 'Achiever Name 2 (2022)', 'Achiever Name 3 (2022)'],
  },
];

// Feature cards
const featureCards = [
  {
    icon: Award,
    title: 'Placement Preparation',
    description: 'Sharpen your skills with our resume building, group discussion, and interview preparation sessions.',
    color: 'text-accent',
  },
  {
    icon: BookOpen,
    title: 'Higher Studies Guidance',
    description: 'Gain insights into global education opportunities with exclusive workshops on admissions, scholarships, and career pathways.',
    color: 'text-accent',
  },
  {
    icon: ShieldCheck,
    title: 'Defense Awareness',
    description: 'Gain insights into the defense sector with exclusive workshops and seminars from industry experts.',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    title: 'Personality Development',
    description: 'Enhance your soft skills, leadership qualities, and professional etiquette to stand out.',
    color: 'text-accent',
  },
];

export default function TrainingPlacementCell() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y bg-gradient-to-b from-background to-muted/20">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Training and Placement Cell
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Guiding students towards successful careers with comprehensive training and placement support.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="#achievers">Meet Our Achievers</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Card className="p-6 h-full flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                  <CardTitle className="text-xl mb-2 font-headline">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievers */}
      {winnersData.map((winners, idx) => (
        <motion.div
          key={winners.year}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id={`winners-${winners.year}`}
          className={`w-full py-12 md:py-16 bg-card/50 rounded-lg ${idx === 0 ? 'mt-0' : 'mt-12'}`}
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">
            🎓 {winners.year} Achievers
          </h2>
          <div className="px-4 sm:px-6 flex justify-center">
            <Card className="p-4 sm:p-6 shadow-lg w-full max-w-3xl">
              <Image
                src={winners.groupImage}
                alt={`${winners.year} Achievers Group Photo`}
                width={800}
                height={400}
                unoptimized
                className="rounded-lg object-cover w-full h-[200px] md:h-[300px] mb-4"
              />
              <CardContent className="text-center">
                {winners.names.map((name, index) => (
                  <p key={index} className="text-lg font-semibold text-foreground">
                    {name}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
