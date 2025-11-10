'use client';

import { useState } from 'react';
import { Instagram, Linkedin, AtSign, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/cca-cmrit/',
    icon: Linkedin,
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    href: 'https://www.instagram.com/cca_cmrit',
    icon: Instagram,
    hoverColor: 'hover:text-[#E1306C]',
  },
  {
    href: 'https://chat.whatsapp.com/FUYiGlm7jFG9iNJrFOnKNE',
    icon: FaWhatsapp,
    hoverColor: 'hover:text-[#25D366]',
  },
];

const fabVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const iconListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const iconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function SocialSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center gap-5 fixed right-2 top-1/2 -translate-y-1/2 bg-card p-3 rounded-l-xl shadow-lg border border-border z-50">
        {socialLinks.map(({ href, icon: Icon, hoverColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'text-muted-foreground transition-all hover:scale-110 duration-200',
              hoverColor
            )}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>

      {/* Mobile FAB */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <div className="relative flex flex-col items-center gap-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col items-center gap-4 mb-4"
                variants={iconListVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {socialLinks
                  .slice()
                  .reverse()
                  .map(({ href, icon: Icon, hoverColor }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'bg-card text-[#B8860B] dark:text-[#FFD700] p-3 rounded-full shadow-lg border border-border transition-colors',
                        hoverColor
                      )}
                      variants={iconVariants}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            size="icon"
            className={cn(
              'rounded-full w-14 h-14 shadow-lg transition-colors',
              'bg-slate-900 text-[#FFD700] hover:bg-slate-800', // Light mode
              'dark:bg-[#FFD700] dark:text-slate-900 dark:hover:bg-[#FFD700]/90' // Dark mode
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isOpen ? 'x' : 'at'}
                variants={fabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {isOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <AtSign className="h-8 w-8" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </>
  );
}
