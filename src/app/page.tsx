import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  Shield,
  Users,
  Trophy,
  ChevronRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers, announcements } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 grid grid-cols-2 h-full">
                <div className="h-full">
                  <Image
                    src="https://placehold.co/800x600.png"
                    alt="Drone at sunset"
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full"
                    data-ai-hint="drone sunset"
                  />
                </div>
                <div className="h-full">
                   <Image
                      src="https://placehold.co/800x600.png"
                      alt="Professionals talking"
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full"
                      data-ai-hint="professionals talking"
                    />
                </div>
            </div>
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-start">
                  <Image
                      src="https://placehold.co/1200x400.png"
                      alt="Team in a meeting"
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full"
                       data-ai-hint="team meeting"
                    />
            </div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col justify-center h-full text-white p-8 md:p-12 lg:p-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Placement &
                <br />
                Defense Careers Club
              </h1>
              <div className="mt-6">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Create Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-opportunities" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Featured Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 flex items-center justify-around">
              <Image src="https://placehold.co/150x50.png" alt="Lockheed Martin" width={150} height={50} data-ai-hint="company logo"/>
              <Image src="https://placehold.co/150x50.png" alt="Raytheon" width={150} height={50} data-ai-hint="company logo"/>
              <Image src="https://placehold.co/70x70.png" alt="Northrop Grumman" width={70} height={70} data-ai-hint="company logo"/>
              <Image src="https://placehold.co/150x50.png" alt="Deloitte" width={150} height={50} data-ai-hint="company logo"/>
            </Card>
            <div className="grid grid-cols-2 gap-4">
               <Image src="https://placehold.co/300x200.png" alt="Discussion" width={300} height={200} className="rounded-lg object-cover w-full h-full" data-ai-hint="men discussion"/>
               <Image src="https://placehold.co/300x200.png" alt="Military discussion" width={300} height={200} className="rounded-lg object-cover w-full h-full" data-ai-hint="military discussion"/>
            </div>
          </div>
        </div>
      </section>

      <section id="workshops-stories" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-bold tracking-tighter mb-8">Upcoming Workshops</h2>
                    <div className="space-y-6">
                        <Card className="flex items-center p-4 gap-4">
                             <Image src="https://placehold.co/100x40.png" alt="Company Logo" width={100} height={40} data-ai-hint="company logo"/>
                             <p className="font-semibold">Resume Building for Government Contracts</p>
                        </Card>
                         <Card className="flex items-center p-4 gap-4">
                             <Image src="https://placehold.co/100x40.png" alt="Raytheon Logo" width={100} height={40} data-ai-hint="company logo"/>
                             <p className="font-semibold">Networking in the Defense Sector</p>
                        </Card>
                    </div>
                </div>
                 <div>
                    <h2 className="text-2xl font-bold tracking-tighter mb-8">Success Stories</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <Card className="p-4 text-center">
                            <div className="flex justify-center items-center gap-2 mb-2">
                                <Avatar>
                                    <AvatarImage src="https://placehold.co/40x40.png" alt="member photo" data-ai-hint="man portrait"/>
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                 <Avatar>
                                    <AvatarImage src="https://placehold.co/40x40.png" alt="member photo" data-ai-hint="woman portrait"/>
                                    <AvatarFallback>H</AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="text-sm text-muted-foreground">Uarming hatted to shantine ras samutiiici aid piseisemite oostoops</p>
                        </Card>
                         <Card className="p-4 text-center">
                            <div className="flex justify-center items-center gap-2 mb-2">
                                <Avatar>
                                    <AvatarImage src="https://placehold.co/40x40.png" alt="member photo" data-ai-hint="man portrait professional"/>
                                    <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                                  <Avatar>
                                    <AvatarImage src="https://placehold.co/40x40.png" alt="member photo" data-ai-hint="woman portrait professional"/>
                                    <AvatarFallback>F</AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="text-sm text-muted-foreground">Cakawat et for mating the wiamtientionstined emaersaling greataste.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
