
'use client';

import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { teamMembers, milestones } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.section
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          About Us
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Your partner in building a successful career in the defense sector and beyond.
        </p>
      </motion.section>

      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        id="mission"
        className="w-full py-12 md:py-24"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline">
              Our Mission
            </h2>
            <p className="text-foreground/80">
              Our mission is to bridge the gap between academic learning and the professional world, providing students with the resources, skills, and networking opportunities necessary to secure fulfilling careers in the defense industry and other competitive sectors. We are dedicated to fostering a community of driven individuals prepared to become the next generation of leaders.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team discussing"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="team mission"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        id="timeline"
        className="w-full py-12 md:py-24"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
          Our Journey
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8 flex justify-between items-center w-full"
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-lg font-bold font-headline text-primary">{milestone.year}</p>
                <h3 className="text-xl font-semibold mb-1">{milestone.event}</h3>
                <p className="text-foreground/70">{milestone.description}</p>
              </div>
              <div className="z-10 flex items-center order-2 bg-primary p-3 rounded-full shadow-lg">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        id="team"
        className="w-full py-12 md:py-24 bg-card/50 -mx-4 px-4 md:-mx-6 md:px-6 rounded-lg"
      >
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
            Meet the Team
          </h2>
          <div className="mx-auto grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  className="text-center hover:shadow-lg transition-shadow border-0 bg-transparent"
                >
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/50">
                      <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-headline text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold text-sm">{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
