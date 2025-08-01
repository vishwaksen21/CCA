
'use client';

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
import { leaderboard, type BadgeInfo } from '@/lib/mock-data';
import { Trophy, Crown, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="h-6 w-6 text-yellow-500" />;
  if (rank === 2) return <Trophy className="h-6 w-6 text-slate-400" />;
  if (rank === 3) return <Gem className="h-6 w-6 text-amber-700" />;
  return <span className="font-bold text-lg w-6 text-center">{rank}</span>;
};

const renderBadges = (badges: BadgeInfo[]) => (
    <div className="flex gap-2">
        {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-1 text-xs p-1 rounded" title={badge.name}>
                <badge.icon className={`h-4 w-4 ${badge.color}`} />
            </div>
        ))}
    </div>
);


export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Members Leaderboard
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Check out the rankings based on CAP points earned by participants.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="font-headline">Top 10 Members</CardTitle>
            <CardDescription>Updated weekly. Points are awarded for participation and achievements.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] text-center">Rank</TableHead>
                  <TableHead>Name</TableHead>
                   <TableHead>Badges</TableHead>
                  <TableHead className="text-right">CAP Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((member, index) => (
                  <motion.tr 
                    key={member.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="hover:bg-muted/50"
                   >
                    <TableCell className="text-center">
                        {getRankIcon(member.rank)}
                    </TableCell>
                    <TableCell className="font-medium text-lg">{member.name}</TableCell>
                     <TableCell>
                        {renderBadges(member.badges)}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-primary">{member.points.toLocaleString()}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
