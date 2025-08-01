
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'Resume Building Workshop',
    date: '2024-09-15',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual / Zoom',
    description: 'Learn how to tailor your resume for top defense and tech companies. An interactive session with live feedback.',
  },
  {
    title: 'Industry Mixer with Northrop Grumman',
    date: '2024-10-05',
    time: '6:00 PM - 8:00 PM',
    location: 'University Auditorium',
    description: 'An exclusive opportunity to network with recruiters and engineers from Northrop Grumman.',
  },
    {
    title: 'Security Clearance Simplified',
    date: '2024-11-01',
    time: '12:00 PM - 1:00 PM',
    location: 'Online Webinar',
    description: 'Demystify the security clearance process. A must-attend for anyone considering a career in defense.',
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Upcoming Events
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Join our workshops, seminars, and networking sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="flex flex-col">
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
              <Button className="w-full">Register Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
