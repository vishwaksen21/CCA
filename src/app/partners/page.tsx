'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Finlatics',
    logo: '/partners/finlatics.png',
    description: 'Financial education platform for aspiring professionals.',
  },
  {
    name: 'Bistro',
    logo: '/partners/bistro.png',
    description: 'Modern food delivery app for curated local restaurants.',
  },
  {
    name: 'Career Labs',
    logo: '/partners/carrerlabs.png',
    description: 'AI-powered interview prep for students and professionals.',
  },
  {
    name: 'FF21',
    logo: '/partners/ff21.png',
    description: 'Community-centric co-living spaces for a modern lifestyle.',
  },
  {
    name: 'Delta',
    logo: '/partners/delta.png',
    description: 'Student-run organization fostering innovation and tech skills.',
  },
  {
    name: 'Zivame',
    logo: '/partners/zivame.png',
    description: 'Leading online lingerie retailer for women of all sizes.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
};

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

  const handlePartnerClick = (index: number) => {
    setSelectedPartner(selectedPartner === index ? null : index);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Our Partners</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            We are proud to collaborate with these amazing organizations.
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-12 items-start justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="cursor-pointer flex flex-col items-center group w-full max-w-[220px] sm:max-w-[250px]"
              onClick={() => handlePartnerClick(index)}
            >
              {/* Logo */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-60 lg:h-60 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 240px"
                  priority
                />
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {selectedPartner === index && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full mt-4 text-center overflow-hidden"
                  >
                    <h3 className="text-lg font-semibold text-primary">{partner.name}</h3>
                    <p className="text-muted-foreground text-sm leading-snug px-2">
                      {partner.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
