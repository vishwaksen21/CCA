import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { userProfile } from '@/lib/mock-data';
import { Trophy, Clock, Star, Medal, Award } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <Card>
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint={userProfile.dataAiHint} />
            <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold font-headline">{userProfile.name}</CardTitle>
          <CardDescription className="text-muted-foreground">{userProfile.email}</CardDescription>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Trophy className="w-6 h-6" />
              <span>{userProfile.capPoints.toLocaleString()} CAP Points</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Star className="w-6 h-6" />
              <span>Rank #{userProfile.rank}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Points History
              </h3>
              <ul className="space-y-4">
                {userProfile.pointsHistory.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <div>
                      <p className="font-semibold">{item.activity}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <span className="font-bold text-primary">+{item.points}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                <Medal className="w-5 h-5" />
                Badges
              </h3>
              <TooltipProvider>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {userProfile.badges.map((badge, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <badge.icon className={`w-12 h-12 mb-2 ${badge.color}`} />
                          <p className="font-semibold text-sm">{badge.name}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{badge.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
