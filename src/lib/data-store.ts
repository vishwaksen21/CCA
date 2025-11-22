/**
 * Centralized Data Store with localStorage persistence
 * Changes made in admin dashboard will reflect across all pages
 */

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

// Storage keys
const STORAGE_KEYS = {
  ANNOUNCEMENTS: 'cca_announcements',
  EVENTS: 'cca_events',
  TEAM_MEMBERS: 'cca_team_members',
  MILESTONES: 'cca_milestones',
  FAQS: 'cca_faqs',
  LEADERBOARD: 'cca_leaderboard',
  SUBMISSIONS: 'cca_submissions',
} as const;

// Type definitions
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

// Helper functions for localStorage
const getFromStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

const saveToStorage = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // Trigger storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', { key }));
    // Trigger custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('data-update', { detail: { key, value } }));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Data Store Class
class DataStore {
  // Getters
  getAnnouncements(): Announcement[] {
    return getFromStorage(STORAGE_KEYS.ANNOUNCEMENTS, defaultAnnouncements);
  }

  getEvents(): Event[] {
    return getFromStorage(STORAGE_KEYS.EVENTS, defaultEvents);
  }

  getTeamMembers(): TeamMember[] {
    return getFromStorage(STORAGE_KEYS.TEAM_MEMBERS, defaultTeamMembers);
  }

  getMilestones(): Milestone[] {
    return getFromStorage(STORAGE_KEYS.MILESTONES, defaultMilestones);
  }

  getFaqs(): Faq[] {
    return getFromStorage(STORAGE_KEYS.FAQS, defaultFaqs);
  }

  getLeaderboard(): LeaderboardMember[] {
    return getFromStorage(STORAGE_KEYS.LEADERBOARD, defaultLeaderboard);
  }

  getSubmissions(): ContactSubmission[] {
    return getFromStorage(STORAGE_KEYS.SUBMISSIONS, defaultSubmissions);
  }

  // Setters
  setAnnouncements(announcements: Announcement[]): void {
    saveToStorage(STORAGE_KEYS.ANNOUNCEMENTS, announcements);
  }

  setEvents(events: Event[]): void {
    saveToStorage(STORAGE_KEYS.EVENTS, events);
  }

  setTeamMembers(members: TeamMember[]): void {
    saveToStorage(STORAGE_KEYS.TEAM_MEMBERS, members);
  }

  setMilestones(milestones: Milestone[]): void {
    saveToStorage(STORAGE_KEYS.MILESTONES, milestones);
  }

  setFaqs(faqs: Faq[]): void {
    saveToStorage(STORAGE_KEYS.FAQS, faqs);
  }

  setLeaderboard(leaderboard: LeaderboardMember[]): void {
    saveToStorage(STORAGE_KEYS.LEADERBOARD, leaderboard);
  }

  setSubmissions(submissions: ContactSubmission[]): void {
    saveToStorage(STORAGE_KEYS.SUBMISSIONS, submissions);
  }

  // Reset all data to defaults
  resetAll(): void {
    this.setAnnouncements(defaultAnnouncements);
    this.setEvents(defaultEvents);
    this.setTeamMembers(defaultTeamMembers);
    this.setMilestones(defaultMilestones);
    this.setFaqs(defaultFaqs);
    this.setLeaderboard(defaultLeaderboard);
    this.setSubmissions(defaultSubmissions);
  }

  // Clear all data
  clearAll(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
}

// Export singleton instance
export const dataStore = new DataStore();

// Hook for React components to subscribe to data changes
export const useDataSync = (callback: () => void) => {
  if (typeof window === 'undefined') return;

  const handleUpdate = () => callback();

  window.addEventListener('storage', handleUpdate);
  window.addEventListener('data-update', handleUpdate);

  return () => {
    window.removeEventListener('storage', handleUpdate);
    window.removeEventListener('data-update', handleUpdate);
  };
};
