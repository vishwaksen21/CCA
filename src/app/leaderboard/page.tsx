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
import { Crown, Gem, Star } from 'lucide-react';
import { leaderboard } from '@/lib/mock-data';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Star className="h-6 w-6 text-yellow-500" fill="currentColor" />;
    case 2:
      return <Crown className="h-6 w-6 text-slate-400" fill="currentColor" />;
    case 3:
      return <Gem className="h-6 w-6 text-amber-600" fill="currentColor" />;
    default:
      return (
        <span className="font-bold text-lg text-foreground/80">{rank}</span>
      );
  }
};

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      {/* Header */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Leaderboard
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Check out the rankings based on CAP points earned by participants.
        </p>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="font-headline">Top 10 Members</CardTitle>
            <CardDescription>
              Updated weekly. Points are awarded for participation and
              achievements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-center">Rank</TableHead>
                  <TableHead className="text-left">Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((member, index) => (
                  <motion.tr
                    key={member.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.05,
                    }}
                    className="hover:bg-muted/50"
                  >
                    {/* Rank */}
                    <TableCell className="py-4 text-center align-middle">
                      <div className="flex justify-center items-center">
                        {getRankIcon(member.rank)}
                      </div>
                    </TableCell>

                    {/* Name */}
                    <TableCell className="py-4 text-left align-middle font-medium text-lg">
                      {member.name}
                    </TableCell>
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
