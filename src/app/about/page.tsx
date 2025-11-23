'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTeamMembers } from '@/lib/data-store';
import { Linkedin } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  const { teamMembers, loading } = useTeamMembers();

  return (
    <div className="bg-gradient-to-b from-background via-background/60 to-background/20">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        
        {/* ---------- About Us ---------- */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-headline font-bold text-primary tracking-tighter">
            About Us
          </h1>
          <motion.p
            variants={fadeIn}
            className="mx-auto max-w-[420px] text-accent font-semibold italic mt-3 mb-5 text-base sm:text-lg"
          >
            &quot;It’s okay to not KNOW,<br /> but it’s not okay to not TRY.&quot;
          </motion.p>
          <p className="mx-auto max-w-[650px] text-foreground/80 md:text-lg text-sm mt-3 leading-relaxed">
            The Centre for Cognitive Activities (CCA) is a student-led club at CMRIT that
            hosts theme-based events to guide students on how to prepare and what to prepare
            for — whether it’s placements, defense, or higher studies.
          </p>
        </motion.section>

        {/* ---------- Mission ---------- */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-12 md:py-20"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="flex justify-center order-last lg:order-first"
            >
              <div className="relative group">
                <img
                  src="/group.png"
                  alt="Students collaborating"
                  className="rounded-xl shadow-2xl w-[85%] sm:w-auto mx-auto"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                CCA bridges the gap between academics and real-world readiness by nurturing
                aptitude, communication, and cognitive growth through creative, skill-based
                events.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ---------- Journey / Timeline ---------- */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full py-10 md:py-20 relative"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center text-primary mb-12">
            Our Journey
          </h2>
          <div className="max-w-xl mx-auto space-y-8 relative">
            <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-primary/30" />
            {[
              {
                year: '2021',
                event: 'Club Founded',
                description:
                  'CCA began with the vision to build awareness and direction for students exploring various career paths.',
              },
              {
                year: '2021',
                event: 'Skill Events',
                description:
                  'Hosted cognitive and aptitude-based events to build reasoning, teamwork, and awareness.',
              },
              {
                year: '2022',
                event: 'Domain Guidance',
                description:
                  'Expanded to theme-based events helping students understand how and what to prepare for.',
              },
              {
                year: '2023',
                event: 'Growth & Recognition',
                description:
                  'Evolved into a leading initiative guiding hundreds toward confident, informed career choices.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 relative"
              >
                <div className="w-5 h-5 rounded-full bg-gray-700 border-2 border-primary flex-shrink-0 z-10"></div>
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-semibold">
                      {milestone.year}
                    </span>
                    <h3 className="text-base font-semibold">{milestone.event}</h3>
                  </div>
                  <p className="text-foreground/80 text-sm leading-snug">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------- Meet the Team ---------- */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-12 md:py-20"
        >
          <h2 className="text-3xl font-bold tracking-wider text-center font-headline mb-20 uppercase text-amber-500">
            Meet Our Team
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-20 md:grid-cols-3 md:gap-x-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-full group relative"
                >
                  {/* Base Card */}
                  <div className="relative transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                    <div className="bg-slate-800 rounded-xl shadow-lg pt-14 md:pt-16 pb-6 px-4">
                      <h3 className="text-base md:text-lg font-bold text-center text-amber-400">{member.name}</h3>
                      <p className="text-center text-white/80 mt-1 text-sm md:text-base">{member.role}</p>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img
                        src={member.imageUrl || '/placeholder.png'}
                        alt={member.name}
                        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-slate-700 shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-xl opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                      <div 
                          className="absolute inset-0 bg-cover bg-center rounded-xl blur-sm scale-110"
                          style={{ backgroundImage: `url(${member.imageUrl || '/placeholder.png'})` }}
                      />
                      <div className="absolute inset-0 bg-black/70 rounded-xl"/>
                      <div className="relative flex flex-col items-center justify-center">
                          <h3 className="text-lg font-bold text-amber-400 text-center">{member.name}</h3>
                          <p className="text-white/90 text-sm text-center">{member.role}</p>
                          {member.linkedin && (<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400 text-amber-400 transition-colors hover:bg-amber-400 hover:text-slate-800" onClick={(e) => e.stopPropagation()}>
                              <Linkedin className="h-6 w-6" />
                          </a>)}
                      </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ---------- CTA ---------- */}
        <div className="flex justify-center mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-7 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg shadow-md font-semibold text-sm sm:text-base hover:shadow-lg transition-all"
          >
            Ready to Connect?
          </motion.a>
        </div>
      </div>
    </div>
  );
}
