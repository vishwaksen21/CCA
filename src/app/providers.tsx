
'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
      >
        {isMounted ? (
            <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{
                duration: 0.25,
                ease: 'easeInOut',
                }}
            >
                {children}
            </motion.div>
            </AnimatePresence>
        ) : (
            <>{children}</>
        )}
    </ThemeProvider>
  );
}
