'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Crown, Medal, Trophy, User, Award, Star } from 'lucide-react';
import { useLeaderboard } from '@/lib/data-store';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

// Map badge names to icon components
const getBadgeIcon = (badgeName: string) => {
  switch (badgeName) {
    case 'Top Performer':
      return Medal;
    case 'Active Member':
      return Star;
    case 'Rising Star':
      return Award;
    default:
      return Star;
  }
};

export default function LeaderboardPage() {
  const { leaderboard, loading } = useLeaderboard();

  const topThree = leaderboard.slice(0, 3);
  const restOfLeaderboard = leaderboard.slice(3);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:px-6 md:py-10 lg:py-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center mb-8 md:mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-headline text-primary">
            🏆 Leaderboard
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/70 text-sm md:text-base mt-3">
            Top performers based on CAP points earned
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-10 md:mb-12"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-accent/20">
            <div className="flex items-end justify-center gap-3 md:gap-4 lg:gap-6">
              {/* 2nd Place */}
              {topThree[1] && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center flex-1 max-w-[105px] sm:max-w-[115px] md:max-w-[130px]"
                >
                  <div className="relative mb-3 md:mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
                    <div className="relative h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 border-[3px] border-slate-400 dark:border-slate-300 shadow-xl rounded-full bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 dark:from-slate-400 dark:via-slate-300 dark:to-slate-500 flex items-center justify-center">
                      <User className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-13 lg:w-13 text-white drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-slate-500 dark:bg-slate-400 rounded-full p-1.5 shadow-lg border-2 border-white dark:border-slate-800">
                      <Medal className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl px-2.5 py-2 md:px-4 md:py-3 text-center w-full border-2 border-slate-300 dark:border-slate-600 shadow-md">
                    <div className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-500 to-slate-600 dark:from-slate-300 dark:to-slate-400 bg-clip-text text-transparent mb-1">#2</div>
                    <div className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-bold line-clamp-2 mb-1.5">
                      {topThree[1].name}
                    </div>
                    {topThree[1].badges.length > 0 && (
                      <div className="flex justify-center gap-1">
                        {topThree[1].badges.map((badge, idx) => {
                          const IconComponent = getBadgeIcon(badge.name);
                          return (
                            <div key={idx} title={badge.name} className="flex items-center">
                              <IconComponent className={`h-3.5 w-3.5 md:h-4 md:w-4 ${badge.color}`} />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="h-14 sm:h-16 md:h-22 lg:h-24 w-full bg-gradient-to-b from-slate-300/80 to-slate-400/80 dark:from-slate-500/80 dark:to-slate-600/80 mt-3 md:mt-4 rounded-t-xl border-t-[3px] border-slate-400 dark:border-slate-300 shadow-inner"></div>
                </motion.div>
              )}

              {/* 1st Place */}
              {topThree[0] && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center flex-1 max-w-[120px] sm:max-w-[135px] md:max-w-[150px] z-10"
                >
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-3 w-3 text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400 animate-pulse" />
                    <Crown className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-yellow-600 dark:text-yellow-500 drop-shadow-lg animate-bounce" fill="currentColor" />
                    <Star className="h-3 w-3 text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="relative mb-3 md:mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                    <div className="relative h-16 w-16 sm:h-22 sm:w-22 md:h-24 md:w-24 lg:h-28 lg:w-28 border-[4px] border-yellow-500 dark:border-yellow-400 shadow-2xl rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 dark:from-yellow-500 dark:via-amber-400 dark:to-yellow-600 flex items-center justify-center">
                      <User className="h-9 w-9 sm:h-12 sm:w-12 md:h-13 md:w-13 lg:h-15 lg:w-15 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 rounded-full p-2 shadow-xl border-2 border-white dark:border-slate-800">
                      <Trophy className="h-4 w-4 md:h-5 md:w-5 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl px-3 py-2.5 md:px-5 md:py-4 text-center w-full border-2 border-yellow-400 dark:border-yellow-500 shadow-xl">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 dark:from-yellow-400 dark:via-amber-400 dark:to-yellow-500 bg-clip-text text-transparent mb-1">👑 #1</div>
                    <div className="text-sm md:text-base text-yellow-900 dark:text-yellow-200 font-bold line-clamp-2 mb-1.5">
                      {topThree[0].name}
                    </div>
                    {topThree[0].badges.length > 0 && (
                      <div className="flex justify-center gap-1">
                        {topThree[0].badges.map((badge, idx) => {
                          const IconComponent = getBadgeIcon(badge.name);
                          return (
                            <div key={idx} title={badge.name} className="flex items-center">
                              <IconComponent className={`h-4 w-4 md:h-5 md:w-5 ${badge.color}`} />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="h-16 sm:h-20 md:h-26 lg:h-28 w-full bg-gradient-to-b from-yellow-400/80 via-amber-500/80 to-yellow-600/80 dark:from-yellow-500/80 dark:via-amber-400/80 dark:to-yellow-600/80 mt-3 md:mt-4 rounded-t-xl border-t-[4px] border-yellow-500 dark:border-yellow-400 shadow-inner"></div>
                </motion.div>
              )}

              {/* 3rd Place */}
              {topThree[2] && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col items-center flex-1 max-w-[105px] sm:max-w-[115px] md:max-w-[130px]"
                >
                  <div className="relative mb-3 md:mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full blur-sm opacity-60 animate-pulse"></div>
                    <div className="relative h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 border-[3px] border-amber-700 dark:border-amber-500 shadow-xl rounded-full bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 dark:from-amber-500 dark:via-orange-500 dark:to-amber-700 flex items-center justify-center">
                      <User className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-13 lg:w-13 text-white drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-amber-800 dark:bg-amber-600 rounded-full p-1.5 shadow-lg border-2 border-white dark:border-slate-800">
                      <Medal className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl px-2.5 py-2 md:px-4 md:py-3 text-center w-full border-2 border-amber-600 dark:border-amber-500 shadow-md">
                    <div className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 dark:from-amber-500 dark:to-orange-500 bg-clip-text text-transparent mb-1">#3</div>
                    <div className="text-xs md:text-sm text-amber-900 dark:text-amber-300 font-bold line-clamp-2 mb-1.5">
                      {topThree[2].name}
                    </div>
                    {topThree[2].badges.length > 0 && (
                      <div className="flex justify-center gap-1">
                        {topThree[2].badges.map((badge, idx) => {
                          const IconComponent = getBadgeIcon(badge.name);
                          return (
                            <div key={idx} title={badge.name} className="flex items-center">
                              <IconComponent className={`h-3.5 w-3.5 md:h-4 md:w-4 ${badge.color}`} />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="h-10 sm:h-12 md:h-18 lg:h-20 w-full bg-gradient-to-b from-amber-600/80 to-orange-700/80 dark:from-amber-500/80 dark:to-orange-600/80 mt-3 md:mt-4 rounded-t-xl border-t-[3px] border-amber-700 dark:border-amber-500 shadow-inner"></div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Rest of Leaderboard - Card Style */}
        {restOfLeaderboard.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="space-y-3">
              {restOfLeaderboard.map((member, index) => (
                <motion.div
                  key={member.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.05,
                  }}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-md border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* Rank Number */}
                    <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-primary rounded-lg shadow-sm">
                      <span className="text-primary-foreground font-bold text-base md:text-lg">
                        {member.rank}
                      </span>
                    </div>

                    {/* Avatar */}
                    <div className="h-11 w-11 md:h-12 md:w-12 border-2 border-gray-300 dark:border-gray-600 shadow-sm flex-shrink-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                      <User className="h-6 w-6 md:h-7 md:w-7 text-gray-600 dark:text-gray-300" strokeWidth={1.5} />
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-semibold text-base md:text-lg truncate">
                        {member.name}
                      </p>
                    </div>

                    {/* Badges */}
                    {member.badges.length > 0 && (
                      <div className="flex gap-1.5 flex-shrink-0">
                        {member.badges.map((badge, idx) => {
                          const IconComponent = getBadgeIcon(badge.name);
                          return (
                            <div 
                              key={idx} 
                              title={badge.name}
                              className="bg-muted/50 p-1.5 md:p-2 rounded-md border border-border"
                            >
                              <IconComponent className={`h-4 w-4 md:h-5 md:w-5 ${badge.color}`} />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
