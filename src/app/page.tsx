
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Award, Shield, TrendingUp, BookOpen, GraduationCap, Lightbulb, Building } from 'lucide-react';
import SplashScreen from '@/components/shared/splash-screen';

// 🔹 Fade-up animation variants
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
};

// 🔹 Hero images for slideshow
const heroImages = ['/slide1.png', '/slide2.png', '/slide3.png', '/slide4.png', '/slide5.png', '/slide6.png'];

// 🔹 Slideshow Component
function HeroSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
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

// 🔹 Feature Cards
const featureCards = [
  {
    icon: Award,
    title: 'Placement Preparation',
    description: 'Sharpen your skills with resume building, group discussions, and interview prep sessions.',
    image: '/place.png',
  },
  {
    icon: BookOpen,
    title: 'Higher Studies Guidance',
    description: 'Get clarity on admissions, scholarships, and career pathways in India and abroad.',
    image: '/study.png',
  },
  {
    icon: Shield,
    title: 'Defense Awareness',
    description: 'Explore NDA, CDS, and other defense career opportunities with expert sessions.',
    image: '/defense1.png',
  },
  {
    icon: TrendingUp,
    title: 'Personality Development',
    description: 'Enhance soft skills, leadership, and professional etiquette to stand out.',
    image: '/soft.png',
  },
];

// 🔹 Cognitive Boosters
const cognitiveBoosters = [
  {
    title: 'Orientation',
    image: '/ori.png',
    description: "Fuel your imagination and step into a world where creativity knows no bounds!",
  },
  {
    title: 'CCA x Bistro',
    image: '/bistro.png',
    description:'Mixing creativity and cuisine to serve up fresh ideas.',
  },
  {
    title: 'Recuitment',
    image: '/recu.png',
    description: 'Join forces with peers and mentors to bring ambitious projects to life through teamwork.',
  },
];

// 🔹 Previous Year Achievers
const winnersData = {
  2024: {
    groupImage: '/2024winners.png',
    names: ['Bhavani', 'Keerthika Sana', 'Hitesh L'],
  },
};

// 🔹 Main Page
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    if (!loading) window.scrollTo(0, 0);
  }, [loading]);

  if (loading) return <SplashScreen onAnimationComplete={() => setLoading(false)} />;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative w-full h-[80vh] text-white overflow-hidden">
        <HeroSlideshow images={heroImages} />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="relative z-10 flex flex-col justify-center items-center h-full text-center p-4"
        >
          {/* Logo + Title */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 120 }}
            className="-mb-2"
          >
            <Image
              src="/logo2-.png"
              alt="CCA Logo"
              width={70}
              height={70}
              className="rounded-full shadow-lg shadow-black/30 border border-white/20"
            />
          </motion.div>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline drop-shadow-lg"
          >
            Center for Cognitive Activities
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 max-w-2xl text-lg text-gray-200"
          >
            Building brighter careers at CMRIT through aptitude, personality, and skill development.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
            className="mt-6"
          >
            <Link href="/about">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-5 text-base md:px-10 md:py-6 md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    <main className="flex-1 bg-[#FDFBF2]">
      <div className="container mx-auto px-4 md:px-6">

        {/* ------------------ FEATURES ------------------ */}
        <motion.section
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="features"
          className="w-full pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-full"
              >
                <Card
                  className="relative text-center p-8 h-full shadow-lg border-t-4 border-black overflow-hidden group min-h-[250px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <feature.icon className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-headline mt-4 text-white">{feature.title}</h3>
                    <p className="text-base text-white/80 mt-2">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* ------------------ WHAT IS CCA? ------------------ */}
        <motion.section
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-16 mt-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 font-headline uppercase text-accent">
              WHAT IS CCA?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
              The Center for Cognitive Activities (CCA) drives student growth through dynamic workshops, speaker sessions, and innovative initiatives. We empower students by helping them develop crucial skills, boost their career prospects, and connect with a strong professional network.
            </p>
          </div>
          <div className="relative mt-12 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0">
                <Image
                    src="/slide2.png"
                    alt="Community background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative grid grid-cols-3 gap-4 text-white text-center py-16">
                <div className="flex flex-col items-center">
                    <GraduationCap className="h-10 w-10 md:h-16 md:w-16 mb-4" />
                    <h3 className="text-2xl md:text-4xl font-bold">1000+</h3>
                    <p className="text-sm md:text-lg font-semibold">Students</p>
                </div>
                <div className="flex flex-col items-center">
                    <Lightbulb className="h-10 w-10 md:h-16 md:w-16 mb-4" />
                    <h3 className="text-2xl md:text-4xl font-bold">50+</h3>
                    <p className="text-sm md:text-lg font-semibold">Events</p>
                </div>
                <div className="flex flex-col items-center">
                    <Building className="h-10 w-10 md:h-16 md:w-16 mb-4" />
                    <h3 className="text-2xl md:text-4xl font-bold">4</h3>
                    <p className="text-sm md:text-lg font-semibold">Domains</p>
                </div>
            </div>
        </div>
        </motion.section>

        {/* ------------------ OUR COGNITIVE BOOSTERS ------------------ */}
        <motion.section
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="cognitive-boosters"
          className="w-full py-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline uppercase text-yellow-500">
            OUR COGNITIVE BOOSTERS
          </h2>

          <div className="flex flex-col lg:flex-row h-[500px] w-full border-2 border-black divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black rounded-md overflow-hidden">
            {cognitiveBoosters.map((booster, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden cursor-pointer group h-full"
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                animate={{
                  flex: activeCard === index ? 3 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Image
                  src={booster.image}
                  alt={booster.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/70" />

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6 text-center">
                  <AnimatePresence>
                    {activeCard === index ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <h3 className="text-2xl lg:text-4xl font-bold font-headline text-yellow-400 mb-4">{booster.title}</h3>
                        <p className="text-base lg:text-lg max-w-md mx-auto">{booster.description}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center w-full h-full"
                      >
                        <h3 className="text-2xl font-bold font-headline tracking-wider text-center">
                          {booster.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ------------------ ACHIEVERS ------------------ */}
        {Object.entries(winnersData)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, winners], idx) => (
            <motion.div
              key={year}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              id={`winners-${year}`}
              className={`w-full py-12 ${ idx !== 0 ? 'mt-12' : ''}`}
            >
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">
                <GraduationCap className="inline-block mb-1 mr-2 h-8 w-8" />{year} Achievers
              </h2>
              <div className="flex justify-center">
                <Card className="p-6 shadow-lg w-full max-w-4xl bg-background">
                  <Image
                    src={winners.groupImage}
                    alt={`${year} Achievers`}
                    width={800}
                    height={400}
                    unoptimized
                    className="rounded-lg object-cover w-full h-auto mb-6"
                  />
                  <CardContent className="text-center p-0">
                    <div className="flex justify-center items-center gap-x-8 gap-y-2 flex-wrap">
                    {winners.names.map((name, index) => (
                      <p key={index} className="text-lg font-semibold text-foreground">
                        {name}
                      </p>
                    ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
      </div>
    </main>
    </div>
  );
}
