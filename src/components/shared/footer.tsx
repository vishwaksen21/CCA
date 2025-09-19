'use client';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container flex flex-col gap-4 py-8">
        {/* Top row: Left and right images */}
        <div className="flex w-full items-center justify-between">
          {/* Left: College Logo */}
          <img
            src="/cmrit-logo.png"
            alt="CMRIT Logo"
            width={100}
            className="w-[100px] h-auto"
          />
          {/* Right: Another image (replace with your image) */}
          <img
            src="/logo2-.png" // Change to your actual image filename
            alt="Right Logo"
            width={100}
            className="w-[100px] h-auto"
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
