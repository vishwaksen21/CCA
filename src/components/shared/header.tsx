
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/career-paths', label: 'Career Paths' },
  { href: '/employer-partnerships', label: 'Employer Partnerships' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname === href ? 'text-primary' : 'text-gray-600',
        isMobile && 'text-lg text-gray-700 hover:text-primary'
      )}
      onClick={() => setIsSheetOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <div className='flex flex-col'>
            <span className="font-bold font-headline text-xl leading-tight text-gray-900">CCA</span>
            <span className="text-xs text-gray-500 leading-tight -mt-1">Centre for Cognitive Activities</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex ml-auto">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-800 hover:bg-gray-100">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white">
               <div className="p-4 pt-8">
                 <Link href="/" className="mb-10 flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                     <div className='flex flex-col'>
                        <span className="font-bold font-headline text-xl leading-tight text-gray-900">CCA</span>
                        <span className="text-xs text-gray-500 leading-tight -mt-1">Centre for Cognitive Activities</span>
                    </div>
                </Link>
                <nav className="grid gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} isMobile={true} />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
