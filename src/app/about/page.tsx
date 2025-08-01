import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { teamMembers, milestones } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          About CCA
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Fostering tomorrow&apos;s leaders through comprehensive development and
          strategic career preparation.
        </p>
      </section>

      <section id="mission" className="w-full py-12 md:py-24">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline">
              Our Mission & Goals
            </h2>
            <p className="text-foreground/80">
              Our mission is to create a dynamic ecosystem that empowers
              students to excel. We bridge the gap between academic learning and
              real-world demands by focusing on three pillars: defense services
              awareness, corporate placement readiness, and holistic
              personality development. We aim to cultivate not just skilled
              professionals, but also responsible and confident individuals.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team discussing"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="team discussion"
            />
          </div>
        </div>
      </section>

      <section id="team" className="w-full py-12 md:py-24 bg-primary/10 -mx-4 px-4 md:-mx-6 md:px-6">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
            Meet the Team
          </h2>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="milestones" className="w-full py-12 md:py-24">
        <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
          Our Journey
        </h2>
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
            {milestones.map((item, index) => (
                <div key={index} className="relative mb-8">
                    <div className="flex items-center">
                        <div className="flex-1 text-right pr-8">
                            {index % 2 === 0 && (
                                <div>
                                    <h3 className="font-headline text-lg font-bold">{item.event}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            )}
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 z-10">
                            <div className="bg-background border-2 border-primary rounded-full p-1">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-10 bg-accent text-accent-foreground rounded-md px-2 py-1 text-sm font-bold">
                                {item.year}
                            </div>
                        </div>
                        <div className="flex-1 pl-8">
                            {index % 2 !== 0 && (
                                <div>
                                    <h3 className="font-headline text-lg font-bold">{item.event}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
