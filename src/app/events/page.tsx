'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEvents } from '@/lib/data-store';
import { useToast } from '@/hooks/use-toast';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

type EventType = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  registrations: string[];
  registrationUrl?: string;
  isRegistered: boolean;
};

export default function EventsPage() {
  const { events: firestoreEvents, loading } = useEvents();
  const [events, setEvents] = useState<EventType[]>([]);
  const { toast } = useToast();

  // Convert Firestore events to local EventType format
  useEffect(() => {
    setEvents(firestoreEvents.map(e => ({ ...e, isRegistered: false })));
  }, [firestoreEvents]);

  // Divide events into past and upcoming, sort by date descending (newest first)
  const today = new Date();
  const { upcoming, past } = useMemo(() => {
    const sortDesc = (arr: EventType[]) =>
      arr.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const upcoming = sortDesc(events.filter(e => new Date(e.date) >= today));
    const past = sortDesc(events.filter(e => new Date(e.date) < today));
    return { upcoming, past };
  }, [events]);

  const handleRegister = (eventId: string) => {
    setEvents(curr =>
      curr.map(event => {
        if (event.id === eventId && !event.isRegistered) {
          toast({
            title: 'Registration Successful!',
            description: `You are now registered for "${event.title}".`,
          });
          return { ...event, isRegistered: true };
        }
        return event;
      })
    );
  };

  const renderEventCard = (event: EventType, index: number) => (
    <motion.div
      key={event.id}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          {event.imageUrl && (
  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-md mb-4">
    <Image
      src={event.imageUrl}
      alt={`${event.title} poster`}
      fill
      className="object-contain p-2 transition-transform duration-300 hover:scale-[1.02]"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={index === 0}
    />
  </div>
)}
          <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </CardContent>
        <CardFooter>
          {new Date(event.date) >= today ? (
            <Button
              className="w-full"
              onClick={() => {
                if (event.registrationUrl) {
                  window.open(event.registrationUrl, '_blank');
                } else {
                  handleRegister(event.id);
                }
              }}
            >
              {event.isRegistered ? 'Registered' : 'Register Now'}
            </Button>
          ) : (
            <Button className="w-full bg-gray-300 text-gray-700 cursor-not-allowed" disabled>
              Event Ended
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      {/* Upcoming Events */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary mb-2">
          Upcoming Events
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          Join our exciting upcoming sessions and activities.
        </p>
      </motion.div>

      {upcoming.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcoming.map(renderEventCard)}
        </div>
      ) : (
        <p className="text-center text-muted-foreground mb-16">No upcoming events.</p>
      )}

      {/* Past Events */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-gray-800 mb-2">
          Past Events
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/70 md:text-lg">
          Take a look back at our completed events and achievements.
        </p>
      </motion.div>

      {past.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-90">
          {past.map(renderEventCard)}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No past events yet.</p>
      )}
    </div>
  );
}
