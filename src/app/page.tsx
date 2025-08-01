import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] text-white">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="relative h-full">
            <Image
              src="https://placehold.co/800x1200.png"
              alt="Drone at sunset"
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
              data-ai-hint="drone sunset"
            />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full hidden md:block">
            <Image
              src="https://placehold.co/800x1200.png"
              alt="Professionals in a meeting"
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
              data-ai-hint="professionals meeting"
            />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full hidden md:block">
            <Image
              src="https://placehold.co/800x1200.png"
              alt="Military personnel with civilian"
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
              data-ai-hint="military civilian"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
            Placement & Defense Careers Club
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Your premier resource for launching a successful career in the defense and technology sectors.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-lg">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      <main>
        {/* Featured Opportunities Section */}
        <section id="featured-opportunities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">
              Featured Opportunities
            </h2>
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
              <Image src="https://placehold.co/150x50.png" alt="Lockheed Martin" width={160} height={50} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="Lockheed Martin logo" />
              <Image src="https://placehold.co/150x50.png" alt="Raytheon" width={160} height={50} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="Raytheon logo" />
              <Image src="https://placehold.co/150x50.png" alt="Deloitte" width={160} height={50} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="Deloitte logo" />
              <Image src="https://placehold.co/150x50.png" alt="Northrop Grumman" width={160} height={50} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="Northrop Grumman logo" />
            </div>
          </div>
        </section>

        {/* Upcoming Workshops Section */}
        <section id="workshops" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">
              Upcoming Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Image src="https://placehold.co/80x80.png" alt="Company Logo" width={60} height={60} className="rounded-md" data-ai-hint="company logo" />
                  <div>
                    <CardTitle className="font-headline text-xl">Resume Building for Government Contracts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Learn the keys to crafting a resume that stands out for competitive government and defense contract roles.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Image src="https://placehold.co/80x80.png" alt="Raytheon Logo" width={60} height={60} className="rounded-md" data-ai-hint="company logo" />
                  <div>
                     <CardTitle className="font-headline text-xl">Networking in the Defense Sector</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Gain practical tips and strategies for building your professional network within the defense industry.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="Alumni headshot" data-ai-hint="man portrait professional" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-lg">John Doe</CardTitle>
                <p className="text-accent font-semibold">Systems Engineer, Raytheon</p>
                <p className="text-muted-foreground mt-2 text-sm">"The club was instrumental in my career search, providing the workshops and connections I needed to land my dream job."</p>
              </Card>
              <Card className="text-center p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="Alumni headshot" data-ai-hint="woman portrait professional" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-lg">Jane Smith</CardTitle>
                <p className="text-accent font-semibold">Consultant, Deloitte</p>
                <p className="text-muted-foreground mt-2 text-sm">"The interview prep sessions were a game-changer. I felt confident and prepared for every stage of the hiring process."</p>
              </Card>
              <Card className="text-center p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="Alumni headshot" data-ai-hint="person portrait professional" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-lg">Sam Armas</CardTitle>
                <p className="text-accent font-semibold">Project Manager, Lockheed Martin</p>
                <p className="text-muted-foreground mt-2 text-sm">"From networking events to mentorship, the club offered a comprehensive support system that was invaluable."</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}