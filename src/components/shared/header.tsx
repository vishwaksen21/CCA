
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

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-accent-foreground',
        pathname === href ? 'text-accent-foreground' : 'text-foreground/80'
      )}
      onClick={() => setIsSheetOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/80 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Shield className="h-8 w-8 text-white" />
          <div className='flex flex-col'>
            <span className="font-bold font-headline text-lg leading-tight text-white">PLACMENT & DEFENSE</span>
            <span className="text-xs text-primary-foreground/80 leading-tight">CAREERS CLUB</span>
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
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-primary text-primary-foreground">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <Shield className="h-8 w-8 text-white" />
                  <div className='flex flex-col'>
                    <span className="font-bold font-headline text-lg leading-tight text-white">PLACMENT & DEFENSE</span>
                    <span className="text-xs text-primary-foreground/80 leading-tight">CAREERS CLUB</span>
                  </div>
                </Link>
                <nav className="grid gap-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
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
