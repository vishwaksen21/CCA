'use client';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container flex flex-col gap-2 py-4 px-3 sm:gap-3 sm:py-6 sm:px-6 md:gap-4 md:py-8 md:px-8">
        {/* Top row: Two images close together */}
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6">
          <img
            src="/cmrit-logo.png"
            alt="CMRIT Logo"
            className="w-14 sm:w-16 md:w-20 h-auto"
          />
          <img
            src="/logo2-.png"
            alt="Right Logo"
            className="w-12 sm:w-14 md:w-16 h-auto"
          />
        </div>

        {/* Center: Copyright */}
        <p className="text-center text-xs sm:text-sm leading-snug text-gray-500 md:text-left">
          © {new Date().getFullYear()} CCA. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://www.instagram.com/cca_cmrit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="mailto:cmritcca@gmail.com"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" />
              <span className="sr-only">Gmail</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="#"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
