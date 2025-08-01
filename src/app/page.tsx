'use client';

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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] text-white">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="relative h-full">
            <Image
              src="https://placehold.co/800x1200.png"
              alt="Military Drone"
              fill
              className="h-full w-full object-cover"
              data-ai-hint="military drone"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full hidden md:block">
            <Image
              src="https://placehold.co/800x1200.png"
              alt="Students in formal wear"
              fill
              className="h-full w-full object-cover"
              data-ai-hint="students formal"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full hidden md:block">
            <Image
              src="https://placehold.co/800x1200.png"
              alt="Meeting with defense personnel"
              fill
              className="h-full w-full object-cover"
              data-ai-hint="meeting defense"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
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
            Placement &amp; Defense Careers Club
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
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link href="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <main className="container mx-auto px-4 md:px-6 py-12">
        {/* Featured Opportunities Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="featured-opportunities"
          className="w-full py-12 md:py-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline text-gray-800">
            Featured Opportunities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <motion.div whileHover={{ scale: 1.1, filter: 'grayscale(0)' }} className="flex justify-center grayscale transition-all duration-300">
              <Image src="https://placehold.co/150x50.png" alt="Lockheed Martin Logo" width={150} height={50} data-ai-hint="Lockheed Martin logo" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, filter: 'grayscale(0)' }} className="flex justify-center grayscale transition-all duration-300">
              <Image src="https://placehold.co/150x50.png" alt="Raytheon Logo" width={150} height={50} data-ai-hint="Raytheon logo" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, filter: 'grayscale(0)' }} className="flex justify-center grayscale transition-all duration-300">
              <Image src="https://placehold.co/150x50.png" alt="Deloitte Logo" width={150} height={50} data-ai-hint="Deloitte logo" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, filter: 'grayscale(0)' }} className="flex justify-center grayscale transition-all duration-300">
              <Image src="https://placehold.co/150x50.png" alt="Northrop Grumman Logo" width={150} height={50} data-ai-hint="Northrop Grumman logo" />
            </motion.div>
          </div>
        </motion.section>

        {/* Upcoming Workshops Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="workshops"
          className="w-full py-12 md:py-16 bg-gray-50 -mx-4 px-4 md:-mx-6 md:px-6"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline text-gray-800">
              Upcoming Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="shadow-lg rounded-lg overflow-hidden transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 p-6">
                    <Image src="https://placehold.co/80x80.png" alt="Workshop Icon" width={60} height={60} className="rounded-md" data-ai-hint="company logo"/>
                    <div>
                      <CardTitle className="font-headline text-xl text-gray-900">Resume Building for Government Contracts</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-600">Learn the keys to crafting a resume that stands out for competitive government and defense contract roles.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="shadow-lg rounded-lg overflow-hidden transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 p-6">
                    <Image src="https://placehold.co/80x80.png" alt="Raytheon Logo" width={60} height={60} className="rounded-md" data-ai-hint="company logo" />
                    <div>
                      <CardTitle className="font-headline text-xl text-gray-900">Networking in the Defense Sector</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-600">Gain practical tips and strategies for building your professional network within the defense industry.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Success Stories Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="success-stories"
          className="w-full py-12 md:py-16"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline text-gray-800">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="text-center p-6 shadow-md rounded-lg transition-shadow">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-200">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Alumni headshot" data-ai-hint="man portrait professional"/>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-lg text-gray-900">John Doe</CardTitle>
                  <p className="text-primary font-semibold">Systems Engineer, Raytheon</p>
                  <p className="text-gray-600 mt-2 text-sm">"The club was instrumental in my career search, providing the workshops and connections I needed to land my dream job."</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="text-center p-6 shadow-md rounded-lg transition-shadow">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-200">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Alumni headshot" data-ai-hint="woman portrait professional"/>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-lg text-gray-900">Jane Smith</CardTitle>
                  <p className="text-primary font-semibold">Consultant, Deloitte</p>
                  <p className="text-gray-600 mt-2 text-sm">"The interview prep sessions were a game-changer. I felt confident and prepared for every stage of the hiring process."</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="text-center p-6 shadow-md rounded-lg transition-shadow">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-200">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Alumni headshot" data-ai-hint="person portrait professional" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-lg text-gray-900">Sam Armas</CardTitle>
                  <p className="text-primary font-semibold">Project Manager, Lockheed Martin</p>
                  <p className="text-gray-600 mt-2 text-sm">"From networking events to mentorship, the club offered a comprehensive support system that was invaluable."</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
