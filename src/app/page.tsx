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
import { Award, ShieldCheck, TrendingUp, BookOpen } from 'lucide-react'; // ✅ fixed import

import SplashScreen from '@/components/shared/splash-screen';

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
    icon: TrendingUp,
    title: 'Defense Awareness',
    description: 'Gain insights into the defense sector with exclusive workshops and seminars from industry experts.',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    title: 'Personality Development',
    description: 'Enhance your soft skills, leadership qualities, and professional etiquette to stand out.',
    color: 'text-green-500',
  },
];

const upcomingWorkshops = [
  {
    title: 'CCA Freshers’ Orientation 2025',
    date: '2nd week of Sept. 2025',
    description: 'Kickstarting your journey towards success with CCA’s guidance and opportunities.',
    image: '/orientation.png',
  },
];

const winnersData = {
  2022: {
    groupImage: 'https://placehold.co/600x400.png',
    names: ['Achiever Name 1 (2022)', 'Achiever Name 2 (2022)', 'Achiever Name 3 (2022)'],
  },
  2023: {
    groupImage: 'https://placehold.co/600x400.png',
    names: ['Achiever Name 1 (2023)', 'Achiever Name 2 (2023)', 'Achiever Name 3 (2023)'],
  },
  2024: {
    groupImage: '/2024winners.png',
    names: ['Bhavani 🥳', 'Keerthika Sana 🎉', 'Hitesh L 🍻'],
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  if (loading) {
    return <SplashScreen onAnimationComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] text-white">
        <Image
          src="/display2.png"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-center items-center h-full text-center p-4"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline"
          >
            Centre for Cognitive Activities
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl text-lg text-gray-200"
          >
            Your premier resource for launching a successful career in the defense and technology sectors.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
            className="mt-8"
          >
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    '0 0 0 0px rgba(255, 193, 7, 0.7)',
                    '0 0 0 10px rgba(255, 193, 7, 0)',
                    '0 0 0 0px rgba(255, 193, 7, 0)'
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="rounded-full"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-5 text-base md:px-10 md:py-6 md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {/* Features */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="features"
          className="w-full mt-16 md:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="text-center p-8 h-full shadow-lg border-t-4 border-accent">
                  <motion.div className="inline-block mb-4">
                    <feature.icon className={`w-16 h-16 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-headline mt-8">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Workshops */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="workshops"
          className="w-full py-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">
            📅 Upcoming Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="p-6 shadow-lg">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    width={800}
                    height={400}
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <CardTitle className="font-headline text-xl mb-1">{workshop.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{workshop.date}</p>
                  <p className="text-base text-foreground">{workshop.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="relative w-full flex justify-center my-8">
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>

        {/* Achievers */}
        {Object.entries(winnersData).map(([year, winners], idx) => (
          <motion.div
            key={year}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            id={`winners-${year}`}
            className={`w-full py-12 md:py-16 bg-card/50 rounded-lg ${idx === 0 ? 'mt-0' : 'mt-12'}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">
              🎓 {year} Achievers
            </h2>
            <div className="px-4 sm:px-6 flex justify-center">
              <Card className="p-4 sm:p-6 shadow-lg w-full max-w-3xl">
                <Image
                  src={winners.groupImage}
                  alt={`${year} Achievers Group Photo`}
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
    </div>
  );
}
