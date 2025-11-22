
'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { dataStore, useDataSync } from '@/lib/data-store';
import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cardVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export default function UpdatesPage() {
  const [announcements, setAnnouncements] = useState(dataStore.getAnnouncements());

  // Subscribe to data changes
  useEffect(() => {
    const cleanup = useDataSync(() => {
      setAnnouncements(dataStore.getAnnouncements());
    });
    return cleanup;
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Updates & Announcements
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Stay informed about the latest news, events, and deadlines.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">{announcement.title}</CardTitle>
                  <CardDescription className="text-sm">{new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{announcement.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
