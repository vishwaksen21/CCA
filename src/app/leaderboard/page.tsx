import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { leaderboard } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Leaderboard
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          See who&apos;s leading the pack. Points are awarded for participation,
          achievements, and contributions.
        </p>
      </section>

      <section className="mt-12">
        <Tabs defaultValue="all-time" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="all-time">All-Time</TabsTrigger>
            </TabsList>
          </div>
          <TooltipProvider>
            <TabsContent value="all-time">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">Rank</TableHead>
                        <TableHead>Member</TableHead>
                        <TableHead>Badges</TableHead>
                        <TableHead className="text-right">Cap Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leaderboard.map((member) => (
                        <TableRow key={member.rank} className={member.rank <= 3 ? `bg-accent/10` : ''}>
                          <TableCell className="font-bold text-lg text-primary">
                            {member.rank}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage
                                  src={`https://placehold.co/40x40.png`}
                                  data-ai-hint="person avatar"
                                />
                                <AvatarFallback>
                                  {member.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{member.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              {member.badges.map((badge, index) => (
                                <Tooltip key={index}>
                                  <TooltipTrigger>
                                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{badge.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-bold text-lg text-primary">
                            {member.points.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="weekly">
                <Card className="text-center p-8">
                    <p className="text-muted-foreground">Weekly leaderboard coming soon!</p>
                </Card>
            </TabsContent>
            <TabsContent value="monthly">
            <Card className="text-center p-8">
                    <p className="text-muted-foreground">Monthly leaderboard coming soon!</p>
                </Card>
            </TabsContent>
          </TooltipProvider>
        </Tabs>
      </section>
    </div>
  );
}
