
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/updates', label: 'Updates' },
  { href: '/events', label: 'Events' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/faq', label: 'FAQ' },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center gap-3">
          <Image src="/logo2-.png" alt="CCA Logo" width={64} height={64} className="h-16 w-16" priority />
          <div className='flex flex-col'>
            <span className="font-bold font-headline text-xl leading-tight">CCA</span>
            <span className="text-xs text-muted-foreground leading-tight -mt-1">Center for Cognitive Activities</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex ml-auto">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:bg-muted/50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
               <div className="p-4 pt-8">
                 <Link href="/" className="mb-10 flex items-center gap-3" onClick={() => setIsSheetOpen(false)}>
                    <Image src="/logo2-.png" alt="CCA Logo" width={64} height={64} className="h-16 w-16" />
                     <div className='flex flex-col'>
                        <span className="font-bold font-headline text-xl leading-tight">CCA</span>
                        <span className="text-xs text-muted-foreground leading-tight -mt-1">Center for Cognitive Activities</span>
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
