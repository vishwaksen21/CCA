
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { announcements } from '@/lib/mock-data';
import { Bell } from 'lucide-react';

export default function UpdatesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Updates & Announcements
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Stay informed about the latest news, events, and deadlines.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {announcements.map((announcement, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
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
        ))}
      </div>
    </div>
  );
}
