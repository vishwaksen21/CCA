'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ WhatsApp icon

const socialLinks = [
  { href: 'https://www.linkedin.com', icon: Linkedin },
  { href: 'https://www.instagram.com/cca_cmrit', icon: Instagram },
  {
    href: 'https://chat.whatsapp.com/FUYiGlm7jFG9iNJrFOnKNE?embedded=0',
    icon: FaWhatsapp,
  },
];

const initiatives = [
  'Placement Prep',
  'Higher Studies',
  'Defense Awareness',
  'Personality Development',
];

const usefulLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Events', href: '#cognitive-boosters' },
  { name: 'Our Partners', href: '/partners' },
  { name: 'Contact Us', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#212738] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Logo, Subscription, Socials */}
          <div>
            <Image
              src="/logo2-.png"
              alt="CCA Logo"
              width={80}
              height={80}
              className="mb-4 rounded-full"
            />
            <h3 className="text-lg font-semibold text-white mb-2">
              Want to message us?
            </h3>

            {/* ✅ Email form that opens mail to ccacmrit@gmail.com */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.currentTarget.email.value.trim();
                if (email) {
                  const mailto = `mailto:ccacmrit@gmail.com?subject=Message from ${email}&body=Hello, I would like to get in touch.`;
                  window.location.href = mailto;
                }
              }}
              className="flex mb-4"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-gray-700 border-gray-600 text-white rounded-r-none"
              />
              <Button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 rounded-l-none px-3"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>

            <h3 className="text-lg font-semibold text-white mb-2">
              Connect with us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Our Initiatives */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wider mb-4">
              Our Initiatives
            </h3>
            <ul className="space-y-2">
              {initiatives.map((name) => (
                <li key={name}>
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wider mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="flex items-start space-x-3 mb-3">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>CMR Institute of Technology, Bengaluru, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:cca.club@cmrit.ac.in"
                className="hover:text-yellow-400 transition-colors"
              >
                cca.club@cmrit.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Center for Cognitive Activities. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
