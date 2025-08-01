import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { userProfile } from '@/lib/mock-data';
import { Trophy } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '@/components/ui/tooltip';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Avatar className="w-32 h-32 border-4 border-primary">
          <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint={userProfile.dataAiHint}/>
          <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-4xl font-bold font-headline">
            {userProfile.name}
          </h1>
          <p className="text-muted-foreground">{userProfile.email}</p>
          <Badge variant="secondary" className="mt-2">
            Rank #{userProfile.rank}
          </Badge>
        </div>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
            <Card className="sticky top-24 text-center shadow-lg bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                        Cap Points
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/80">Your total score</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center gap-2">
                        <Trophy className="w-16 h-16 text-accent animate-bounce" />
                        <p className="text-7xl font-bold font-headline">
                            {userProfile.capPoints.toLocaleString()}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline">My Badges</CardTitle>
                </CardHeader>
                <CardContent>
                <TooltipProvider>
                    <div className="flex flex-wrap gap-4">
                        {userProfile.badges.map((badge, index) => (
                           <Tooltip key={index}>
                                <TooltipTrigger>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-accent/10 transition-colors">
                                        <badge.icon className={`w-10 h-10 ${badge.color}`} />
                                        <span className="text-xs font-medium">{badge.name}</span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{badge.description}</p>
                                </TooltipContent>
                           </Tooltip>
                        ))}
                    </div>
                    </TooltipProvider>
                </CardContent>
            </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Points History</CardTitle>
              <CardDescription>
                Recent activities and points earned.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userProfile.pointsHistory.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {item.activity}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.date}
                      </TableCell>
                      <TableCell className="text-right font-bold text-green-500">
                        +{item.points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
