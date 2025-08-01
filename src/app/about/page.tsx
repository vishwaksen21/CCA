
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
    <div className="bg-background/50">
       <div
        className="absolute inset-0 z-[-10] h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10"
      ></div>
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
             <div className="flex justify-center order-last lg:order-first">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative group"
                >
                  <Image
                    src="/group.png"
                    alt="Team discussing"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="team meeting"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter font-headline">
                Our Mission
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Our mission is to bridge the gap between academic learning and the professional world, providing students with the resources, skills, and networking opportunities necessary to secure fulfilling careers in the defense industry and other competitive sectors. We are dedicated to fostering a community of driven individuals prepared to become the next generation of leaders.
              </p>
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
          <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-16">
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
                <div className="z-10 flex items-center order-2 bg-primary p-3 rounded-full shadow-lg border-4 border-background">
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
          className="w-full py-12 md:py-24"
        >
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
              Meet the Team
            </h2>
            <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center group"
                >
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Avatar className="w-24 h-24 border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
