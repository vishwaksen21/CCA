'use client';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container flex flex-col gap-4 py-8">
        {/* Top row: Two images close together */}
        <div className="flex items-center justify-center gap-x-6">
          <img
            src="/cmrit-logo.png"
            alt="CMRIT Logo"
            width={80}
            className="w-[80px] h-auto"
          />
          <img
            src="/logo2-.png"
            alt="Right Logo"
            width={70}
            className="w-[80px] h-auto"
          />
        </div>
        {/* Center: Copyright */}
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © {new Date().getFullYear()} CCA. All Rights Reserved.
        </p>
        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.instagram.com/cca_cmrit" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link href="mailto:cmritcca@gmail.com" className="text-gray-500 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Gmail</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
