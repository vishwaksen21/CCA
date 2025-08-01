import Link from 'next/link';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { announcements, leaderboard } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                  CCA: Centre for Cognitive Activities
                </h1>
                <p className="max-w-[600px] text-foreground/80 md:text-xl">
                  Empowering students with skills in defense awareness,
                  placement preparation, and personality development for a
                  successful future.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/leaderboard">View Leaderboard</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <Trophy className="h-48 w-48 text-accent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Our Core Focus
              </h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a structured platform for holistic development,
                focusing on three key pillars to ensure our members are
                well-rounded and career-ready.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline mt-2">
                  Defense Awareness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-foreground/80">
                  Instilling a sense of national pride and awareness of career
                  opportunities in the defense sector.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline mt-2">
                  Placement Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-foreground/80">
                  Equipping students with the necessary skills for cracking
                  interviews and securing top placements.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline mt-2">
                  Personality Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-foreground/80">
                  Nurturing soft skills, communication, and leadership
                  qualities for all-around personal growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="announcements"
        className="w-full py-12 md:py-24 lg:py-32 bg-primary/10"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">
            Recent Announcements
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {announcements.map((ann, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>{ann.title}</CardTitle>
                        <CardDescription>{ann.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-foreground/80">
                          {ann.content}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section
        id="leaderboard-preview"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Top Performers
              </h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A glimpse of our current leaders. Check out the full
                leaderboard for more details.
              </p>
            </div>
          </div>
          <Card className="mt-12 max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Cap Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard
                  .slice(0, 3)
                  .map((member) => (
                    <TableRow key={member.rank}>
                      <TableCell className="font-medium">
                        {member.rank}
                      </TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">
                        {member.points}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <div className="p-4 text-center">
              <Button asChild variant="link">
                <Link href="/leaderboard">
                  View Full Leaderboard <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
