'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEvents } from '@/lib/data-store';
import { upcomingEvents as mockEvents } from '@/lib/mock-data';
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
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const { toast } = useToast();

  // Combine Firestore events (2025+) with mock data events (2022-2024)
  useEffect(() => {
    const historicalEvents = mockEvents
      .filter(e => {
        const year = new Date(e.date).getFullYear();
        return year >= 2022 && year <= 2024;
      })
      .map(e => ({ ...e, isRegistered: false }));
    
    const currentEvents = firestoreEvents.map(e => ({ ...e, isRegistered: false }));
    
    // Combine and sort by date (newest first)
    const allEvents = [...historicalEvents, ...currentEvents].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    setEvents(allEvents);
  }, [firestoreEvents]);

  // Filter events by selected year
  const filteredEvents = useMemo(() => {
    if (selectedYear === 'all') return events;
    return events.filter(e => new Date(e.date).getFullYear().toString() === selectedYear);
  }, [events, selectedYear]);

  // Divide events into past and upcoming, sort by date descending (newest first)
  const today = new Date();
  const currentYear = today.getFullYear();
  
  const { upcoming, past, isHistoricalView } = useMemo(() => {
    const sortDesc = (arr: EventType[]) =>
      arr.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Check if viewing a historical year (2022-2024)
    const isHistoricalView = selectedYear !== 'all' && 
      parseInt(selectedYear) >= 2022 && 
      parseInt(selectedYear) <= 2024;
    
    // For historical years, show all events as "past" (no upcoming split)
    if (isHistoricalView) {
      return {
        upcoming: [],
        past: sortDesc(filteredEvents),
        isHistoricalView: true
      };
    }
    
    // For current/all view, split into upcoming and past
    const upcoming = sortDesc(filteredEvents.filter(e => new Date(e.date) >= today));
    const past = sortDesc(filteredEvents.filter(e => new Date(e.date) < today));
    
    return { upcoming, past, isHistoricalView: false };
  }, [filteredEvents, selectedYear]);

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

  const renderEventCard = (event: EventType, index: number) => {
    // Check if this is a historical event (2022-2024) with no title
    const isHistoricalPoster = !event.title && event.imageUrl;

    // For historical posters, render only the image in a card-like container
    if (isHistoricalPoster && event.imageUrl) {
      return (
        <motion.div
          key={event.id}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={event.imageUrl}
                alt={`Event ${new Date(event.date).getFullYear()}`}
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
          </Card>
        </motion.div>
      );
    }

    // Regular event card with details
    return (
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
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      {/* Year Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        <Button
          onClick={() => setSelectedYear('all')}
          variant={selectedYear === 'all' ? 'default' : 'outline'}
          className="font-semibold text-xs md:text-sm"
          size="sm"
        >
          All Events
        </Button>
        <Button
          onClick={() => setSelectedYear('2025')}
          variant={selectedYear === '2025' ? 'default' : 'outline'}
          className="font-semibold text-xs md:text-sm"
          size="sm"
        >
          2025
        </Button>
        <Button
          onClick={() => setSelectedYear('2024')}
          variant={selectedYear === '2024' ? 'default' : 'outline'}
          className="font-semibold text-xs md:text-sm"
          size="sm"
        >
          2024
        </Button>
        <Button
          onClick={() => setSelectedYear('2023')}
          variant={selectedYear === '2023' ? 'default' : 'outline'}
          className="font-semibold text-xs md:text-sm"
          size="sm"
        >
          2023
        </Button>
        <Button
          onClick={() => setSelectedYear('2022')}
          variant={selectedYear === '2022' ? 'default' : 'outline'}
          className="font-semibold text-xs md:text-sm"
          size="sm"
        >
          2022
        </Button>
      </div>

      {/* Upcoming Events */}
      {upcoming.length > 0 && (
        <>
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary mb-2">
              Upcoming Events
            </h1>
            <p className="mx-auto max-w-[700px] text-sm md:text-base text-foreground/80 md:text-xl px-4">
              Join our exciting upcoming sessions and activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {upcoming.map(renderEventCard)}
          </div>
        </>
      )}

      {/* Show "No upcoming events" message when viewing current year/all and no upcoming events exist */}
      {!isHistoricalView && upcoming.length === 0 && (
        <>
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary mb-2">
              Upcoming Events
            </h1>
            <p className="mx-auto max-w-[700px] text-sm md:text-base text-foreground/80 md:text-xl px-4">
              No upcoming events for now
            </p>
          </motion.div>
        </>
      )}

      {/* Past Events */}
      {past.length > 0 && (
        <>
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl font-headline text-gray-800 mb-2">
              {isHistoricalView 
                ? `${selectedYear} Events` 
                : selectedYear === 'all' 
                  ? 'Past Events' 
                  : `${selectedYear} Events`}
            </h2>
            <p className="mx-auto max-w-[700px] text-sm md:text-base text-foreground/70 md:text-lg px-4">
              {isHistoricalView 
                ? `Explore our memorable events from ${selectedYear}.`
                : 'Take a look back at our completed events and achievements.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-90">
            {past.map(renderEventCard)}
          </div>
        </>
      )}
      
      {/* No events found for historical view */}
      {isHistoricalView && past.length === 0 && (
        <>
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl font-headline text-gray-800 mb-2">
              {selectedYear} Events
            </h2>
            <p className="mx-auto max-w-[700px] text-sm md:text-base text-foreground/70 md:text-lg px-4">
              No events found for {selectedYear}.
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}
