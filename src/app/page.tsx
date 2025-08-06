'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Award, ShieldCheck, TrendingUp } from 'lucide-react';

import SplashScreen from '@/components/shared/splash-screen';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Defense Awareness',
    description: 'Gain insights into the defense sector with exclusive workshops and seminars from industry experts.',
    color: 'text-primary',
  },
  {
    icon: Award,
    title: 'Placement Preparation',
    description: 'Sharpen your skills with our resume building, group discussion, and interview preparation sessions.',
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
    title: 'Resume Building for Government Contracts',
    date: 'September 12, 2025',
    description: 'Craft job-winning resumes tailored to government and defense sector requirements.',
    image: '/resume3.png',
  },
  {
    title: 'Networking in the Defense Sector',
    date: 'October 3, 2025',
    description: 'Master the art of networking and build key connections in the defense ecosystem.',
    image: '/defense.png',
  },
];

const winnersData = {
  2022: [
    { name: 'Aarav Mehta', role: 'Final Year, ECE', quote: "The workshops made all the difference in my journey.", image: "https://placehold.co/100x100.png", fallback: 'AM' },
    { name: 'Diya Sharma', role: 'Core Member, Mechanical', quote: "A life-changing platform for career growth.", image: "https://placehold.co/100x100.png", fallback: 'DS' },
    { name: 'Rohan Iyer', role: 'Placed at DRDO', quote: "Helped me land my dream role in defense tech.", image: "https://placehold.co/100x100.png", fallback: 'RI' }
  ],
  2023: [
    { name: 'Keerthika Sana', role: '3rd Year, CS-DS', quote: "The club helped me find my dream opportunity.", image: "/keerthika.png", fallback: 'KS' },
    { name: 'Jane Smith', role: 'Consultant, Deloitte', quote: "Interview prep sessions were a game-changer.", image: "https://placehold.co/100x100.png", fallback: 'JS' },
    { name: 'Sam Armas', role: 'Project Manager, Lockheed Martin', quote: "The mentorship was invaluable.", image: "https://placehold.co/100x100.png", fallback: 'SA' }
  ],
  2024: [
    { name: 'Neha Verma', role: 'Intern, ISRO', quote: "Grateful for the guidance and exposure I received.", image: "https://placehold.co/100x100.png", fallback: 'NV' },
    { name: 'Aryan Kapoor', role: 'Cybersecurity Analyst', quote: "Networking events opened up new doors.", image: "https://placehold.co/100x100.png", fallback: 'AK' },
    { name: 'Meera Raj', role: 'AI Researcher, BharatTech', quote: "The resume reviews were top-notch.", image: "https://placehold.co/100x100.png", fallback: 'MR' }
  ]
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
        <div className="absolute inset-0">
          <Image
            src="/display2.png"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
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
  {/* Features Section */}
  <motion.section
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    id="features"
    className="w-full mt-16 md:mt-24"
  >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <motion.div className="inline-block mb-8">
                    <feature.icon className={`w-16 h-16 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-headline mt-8">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Workshops Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="workshops"
          className="w-full py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
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
          </div>
        </motion.section>

        {/* Success Stories Section - Year Specific */}
        {Object.entries(winnersData).map(([year, winners]) => (
          <motion.div
            key={year}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            id={`winners-${year}`}
            className="w-full py-12 md:py-16 bg-card/50 -mx-4 px-4 md:-mx-6 md:px-6 rounded-lg mt-12"
          >
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">
                🎓 {year} Achievers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {winners.map((winner, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="text-center p-6 shadow-md rounded-lg transition-shadow h-full">
                      <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                        <AvatarImage src={winner.image} alt={winner.name} />
                        <AvatarFallback>{winner.fallback}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="font-headline text-lg">{winner.name}</CardTitle>
                      <p className="text-primary font-semibold">{winner.role}</p>
                      <p className="text-muted-foreground mt-2 text-sm italic">"{winner.quote}"</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
