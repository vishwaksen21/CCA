
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { upcomingEvents as initialEventsData } from '@/lib/mock-data';
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

export default function Page() {
  // Use a different name to avoid confusion with the global mock data
  const [pageEvents, setPageEvents] = useState(initialEventsData.map(event => ({ ...event, isRegistered: false })));
  const { toast } = useToast();

  const handleRegister = (eventId: string) => {
    setPageEvents(currentEvents => 
      currentEvents.map(event => {
        if (event.id === eventId && !event.isRegistered) {
          // In a real app, you would send a request to your backend to register the user.
          // For this prototype, we'll just simulate it on the client-side.
          // Let's also add a mock user to the registrations list in the original mock data.
          const eventInData = initialEventsData.find(e => e.id === eventId);
          if (eventInData) {
            eventInData.registrations.push('New User'); // Example user
          }
          
          // The toast should only be called here, inside the event handler
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

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Upcoming Events
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Join our workshops, seminars, and networking sessions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pageEvents.map((event, index) => (
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
                <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
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
                <Button 
                  className="w-full"
                  onClick={() => handleRegister(event.id)}
                  disabled={event.isRegistered}
                >
                  {event.isRegistered ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Registered
                    </>
                  ) : (
                    'Register Now'
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
