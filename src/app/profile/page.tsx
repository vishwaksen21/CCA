
'use client';

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
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export default function ProfilePage() {
  const { name, email, avatarUrl, dataAiHint, capPoints, rank, pointsHistory, badges } = userProfile;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="md:col-span-1"
        >
          <Card className="shadow-lg h-full">
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
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          >
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                                        <badge.icon className={`h-8 w-8 ${badge.color}`} />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="font-bold">{badge.name}</p>
                                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                                </TooltipContent>
                            </Tooltip>
                          </motion.div>
                        ))}
                    </div>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Points History */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="md:col-span-2"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Points History</CardTitle>
              <CardDescription>A log of your recently earned CAP points.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {pointsHistory.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex justify-between items-center pb-2 border-b last:border-none"
                  >
                    <div>
                      <p className="font-semibold">{item.activity}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <p className="text-lg font-bold text-green-600">+{item.points}</p>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
