
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { teamMembers } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          About Us
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Your partner in building a successful career in the defense sector and beyond.
        </p>
      </section>

       <section id="mission" className="w-full py-12 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline">
              Our Mission
            </h2>
            <p className="text-foreground/80">
              Our mission is to bridge the gap between academic learning and the professional world, providing students with the resources, skills, and networking opportunities necessary to secure fulfilling careers in the defense industry and other competitive sectors. We are dedicated to fostering a community of driven individuals prepared to become the next generation of leaders.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team discussing"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="team mission"
            />
          </div>
        </div>
      </section>

      <section id="team" className="w-full py-12 md:py-24 bg-gray-100 -mx-4 px-4 md:-mx-6 md:px-6">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
            Meet the Team
          </h2>
          <div className="mx-auto grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-shadow border-0 bg-transparent"
              >
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-sm">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
