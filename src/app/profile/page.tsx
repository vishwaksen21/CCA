
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { userProfile } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ProfilePage() {
  const { name, email, avatarUrl, dataAiHint, capPoints, rank, pointsHistory, badges } = userProfile;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <div className="md:col-span-1">
          <Card className="shadow-lg">
            <CardHeader className="items-center text-center p-6">
              <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
                <AvatarImage src={avatarUrl} alt={name} data-ai-hint={dataAiHint} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl font-headline">{name}</CardTitle>
              <CardDescription>{email}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Separator className="my-4" />
              <div className="flex justify-around">
                <div>
                  <p className="text-2xl font-bold text-primary">{capPoints.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">CAP Points</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">#{rank}</p>
                  <p className="text-sm text-muted-foreground">Rank</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                 <h3 className="font-headline text-lg">Badges</h3>
                 <TooltipProvider>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {badges.map((badge, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger>
                                    <div className="p-2 bg-muted rounded-full">
                                        <badge.icon className={`h-8 w-8 ${badge.color}`} />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="font-bold">{badge.name}</p>
                                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Points History */}
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Points History</CardTitle>
              <CardDescription>A log of your recently earned CAP points.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {pointsHistory.map((item, index) => (
                  <li key={index} className="flex justify-between items-center pb-2 border-b last:border-none">
                    <div>
                      <p className="font-semibold">{item.activity}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <p className="text-lg font-bold text-green-600">+{item.points}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
