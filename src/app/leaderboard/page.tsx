
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { leaderboard } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const rowVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

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
          Leaderboard
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          See who's at the top of their game. Points are updated weekly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border rounded-lg shadow-lg overflow-hidden"
      >
        <TooltipProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-center">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Badges</TableHead>
                <TableHead className="text-right">CAP Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((user, index) => (
                <motion.tr
                  key={user.rank}
                  variants={rowVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={user.rank === 1 ? 'bg-accent/20' : 'hover:bg-muted/50'}
                >
                  <TableCell className="font-bold text-lg text-center">{user.rank}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      {user.badges.map((badge, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger>
                            <motion.div whileHover={{ scale: 1.2 }}>
                              <badge.icon className={`h-5 w-5 ${badge.color}`} />
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{badge.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-lg text-primary">{user.points.toLocaleString()}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TooltipProvider>
      </motion.div>
    </div>
  );
}
