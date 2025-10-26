'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Award, Shield, TrendingUp, BookOpen } from 'lucide-react';
import SplashScreen from '@/components/shared/splash-screen';

// 🔹 Fade-up animation variants
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
};

// 🔹 Hero images for slideshow
const heroImages = ['/slide1.png', '/slide2.png', '/slide3.png', '/slide4.png', '/slide5.png'];

// 🔹 Slideshow Component
function HeroSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Hero Image"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

const featureCards = [
  { icon: Award, title: 'Placement Preparation', description: 'Sharpen your skills with resume building, group discussions, and interview prep sessions.', color: 'text-accent' },
  { icon: BookOpen, title: 'Higher Studies Guidance', description: 'Get clarity on admissions, scholarships, and career pathways in India and abroad.', color: 'text-accent' },
  { icon: Shield, title: 'Defense Awareness', description: 'Explore NDA, CDS, and other defense career opportunities with expert sessions.', color: 'text-accent' },
  { icon: TrendingUp, title: 'Personality Development', description: 'Enhance soft skills, leadership, and professional etiquette to stand out.', color: 'text-green-500' },
];

const upcomingWorkshops = [
  { title: 'CCA Freshers’ Orientation 2025', date: '23rd & 27th September 2025', description: 'Kickstarting your journey towards success with CCA’s guidance and opportunities.', image: '/orientation2.png' },
  { title: 'CCA x Bistro', date: '25th October 2025', description: 'CCA Club x Bistro — where innovation meets flavor, serving creativity with a slice of deliciousness!', image: '/bistro.png' },
];

const winnersData = {
  2024: { groupImage: '/2024winners.png', names: ['Bhavani 🥳', 'Keerthika Sana 🎉', 'Hitesh L 🍻'] },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => { if (!loading) window.scrollTo(0, 0); }, [loading]);

  if (loading) return <SplashScreen onAnimationComplete={() => setLoading(false)} />;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] text-white overflow-hidden">
        <HeroSlideshow images={heroImages} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial="initial" animate="animate" variants={fadeUp} className="relative z-10 flex flex-col justify-center items-center h-full text-center p-4">
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
            Center for Cognitive Activities
          </motion.h1>
          <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-4 max-w-2xl text-lg text-gray-200">
            Building brighter careers at CMRIT through aptitude, personality and skill development.
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }} className="mt-8">
            <Link href="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-5 text-base md:px-10 md:py-6 md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {/* Features */}
        <motion.section variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} id="features" className="w-full mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
            {featureCards.map((feature, index) => (
              <motion.div key={index} variants={fadeUp} whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)' }} transition={{ type: 'spring', stiffness: 300 }} className="w-full">
                <Card className="text-center p-4 sm:p-6 md:p-8 h-full shadow-lg border-t-4 border-accent">
                  <motion.div className="inline-block mb-3 sm:mb-4">
                    <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-accent" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline mt-4 sm:mt-6 md:mt-8">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Workshops */}
        <motion.section variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} id="workshops" className="w-full py-20">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">📅 Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div key={index} variants={fadeUp} whileHover={{ y: -5, scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="p-6 shadow-lg">
                  <Image src={workshop.image} alt={workshop.title} width={800} height={400} className="rounded-lg w-full h-[200px] object-cover mb-4" />
                  <h3 className="font-headline text-xl mb-1">{workshop.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{workshop.date}</p>
                  <p className="text-base text-foreground">{workshop.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="relative w-full flex justify-center my-8">
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>

        {/* Achievers */}
        {Object.entries(winnersData).sort((a,b) => Number(b[0])-Number(a[0])).map(([year,winners], idx) => (
          <motion.div key={year} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} id={`winners-${year}`} className={`w-full py-8 md:py-12 bg-card/50 rounded-lg ${idx===0?'mt-0':'mt-12'}`}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center mb-6 md:mb-8 font-headline">🎓 {year} Achievers</h2>
            <div className="px-2 sm:px-4 md:px-6 flex justify-center">
              <Card className="p-3 sm:p-4 md:p-6 shadow-lg w-full max-w-3xl">
                <Image src={winners.groupImage} alt={`${year} Achievers Group Photo`} width={800} height={400} unoptimized className="rounded-lg object-cover w-full h-[150px] sm:h-[200px] md:h-[300px] mb-4" />
                <CardContent className="text-center">
                  {winners.names.map((name,index)=>(
                    <p key={index} className="text-sm sm:text-base md:text-lg font-semibold text-foreground">{name}</p>
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
