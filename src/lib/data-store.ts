/**
 * Centralized Data Store with FIRESTORE persistence
 * Changes made in admin dashboard will sync across ALL DEVICES in REAL-TIME!
 */

import { useEffect, useState } from 'react';
import {
  announcements as defaultAnnouncements,
  upcomingEvents as defaultEvents,
  teamMembers as defaultTeamMembers,
  milestones as defaultMilestones,
  faqs as defaultFaqs,
  leaderboard as defaultLeaderboard,
  contactSubmissions as defaultSubmissions,
  type BadgeInfo,
  type ContactSubmission
} from './mock-data';

import * as firestoreService from './firestore-service';

// Re-export types
export type Announcement = {
  title: string;
  date: string;
  content: string;
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint?: string;
  linkedin?: string;
  order?: number; // For custom ordering in admin dashboard
};

export type Milestone = {
  year: string;
  event: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type LeaderboardMember = {
  rank: number;
  name: string;
  points: number;
  badges: BadgeInfo[];
};

export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  registrations: string[];
  registrationUrl?: string;
};

// ==================== REACT HOOKS FOR REAL-TIME DATA ====================

/**
 * Hook to get announcements with real-time updates
 */
export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToAnnouncements((data) => {
      setAnnouncements(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { announcements, loading };
};

/**
 * Hook to get events with real-time updates
 */
export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToEvents((data) => {
      setEvents(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { events, loading };
};

/**
 * Hook to get team members with real-time updates
 */
export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToTeamMembers((data) => {
      setTeamMembers(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { teamMembers, loading };
};

/**
 * Hook to get milestones with real-time updates
 */
export const useMilestones = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToMilestones((data) => {
      setMilestones(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { milestones, loading };
};

/**
 * Hook to get FAQs with real-time updates
 */
export const useFaqs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToFaqs((data) => {
      setFaqs(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { faqs, loading };
};

/**
 * Hook to get leaderboard with real-time updates
 */
export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToLeaderboard((data) => {
      setLeaderboard(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { leaderboard, loading };
};

/**
 * Hook to get contact submissions with real-time updates
 */
export const useContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestoreService.subscribeToContactSubmissions((data) => {
      setSubmissions(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { submissions, loading };
};

// ==================== DATA STORE OBJECT (Backwards Compatible) ====================

export const dataStore = {
  // ANNOUNCEMENTS
  getAnnouncements: firestoreService.getAnnouncements,
  addAnnouncement: firestoreService.addAnnouncement,
  updateAnnouncement: firestoreService.updateAnnouncement,
  deleteAnnouncement: firestoreService.deleteAnnouncement,

  // EVENTS
  getEvents: firestoreService.getEvents,
  addEvent: firestoreService.addEvent,
  updateEvent: firestoreService.updateEvent,
  deleteEvent: firestoreService.deleteEvent,
  registerForEvent: firestoreService.registerForEvent,

  // TEAM MEMBERS
  getTeamMembers: firestoreService.getTeamMembers,
  addTeamMember: firestoreService.addTeamMember,
  updateTeamMember: firestoreService.updateTeamMember,
  deleteTeamMember: firestoreService.deleteTeamMember,
  reorderTeamMembers: firestoreService.reorderTeamMembers,

  // MILESTONES
  getMilestones: firestoreService.getMilestones,
  addMilestone: firestoreService.addMilestone,
  updateMilestone: firestoreService.updateMilestone,
  deleteMilestone: firestoreService.deleteMilestone,

  // FAQS
  getFaqs: firestoreService.getFaqs,
  addFaq: firestoreService.addFaq,
  updateFaq: firestoreService.updateFaq,
  deleteFaq: firestoreService.deleteFaq,

  // LEADERBOARD
  getLeaderboard: firestoreService.getLeaderboard,
  addLeaderboardMember: firestoreService.addLeaderboardMember,
  updateLeaderboardMember: firestoreService.updateLeaderboardMember,
  deleteLeaderboardMember: firestoreService.deleteLeaderboardMember,

  // CONTACT SUBMISSIONS
  getContactSubmissions: firestoreService.getContactSubmissions,
  addContactSubmission: firestoreService.addContactSubmission,
  deleteContactSubmission: firestoreService.deleteContactSubmission,

  // MIGRATION
  migrateFromLocalStorage: firestoreService.migrateLocalStorageToFirestore,
};

// Backwards compatibility hook for pages using useDataSync
export const useDataSync = () => {
  // This hook now does nothing - real-time sync is automatic!
  // Pages using individual hooks (useEvents, useAnnouncements, etc.) get auto-updates
  return null;
};

// For backwards compatibility - export default
export default dataStore;
