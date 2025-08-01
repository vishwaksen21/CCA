import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {new Date().getFullYear()} CCA. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
             <span className="sr-only">Twitter</span>
          </Link>
           <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
             <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
