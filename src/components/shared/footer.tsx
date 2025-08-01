import Link from 'next/link';
import { Facebook, Twitter, CheckSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-4 md:px-0">
          <div className="flex gap-2 text-muted-foreground">
             <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
            </Link>
             <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Givestreed
          </p>
           <p className="text-center text-sm text-muted-foreground md:text-left">
            Bon Sarntect.com
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <p>Copyright stinoo</p>
            <div className="flex items-center gap-1">
                <CheckSquare className="h-4 w-4" />
                <p>treuey</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
