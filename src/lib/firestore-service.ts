/**
 * Firestore Service Layer
 * Handles all database operations with real-time sync across devices
 */

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
  setDoc,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import { db } from './firebase';
import type {
  Announcement,
  Event,
  TeamMember,
  Milestone,
  Faq,
  LeaderboardMember,
} from './data-store';
import type { ContactSubmission } from './mock-data';

// Collection names
const COLLECTIONS = {
  ANNOUNCEMENTS: 'announcements',
  EVENTS: 'events',
  TEAM_MEMBERS: 'team_members',
  MILESTONES: 'milestones',
  FAQS: 'faqs',
  LEADERBOARD: 'leaderboard',
  SUBMISSIONS: 'contact_submissions',
} as const;

// ==================== ANNOUNCEMENTS ====================

export const getAnnouncements = async (): Promise<Announcement[]> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.ANNOUNCEMENTS));
  return snapshot.docs.map(doc => doc.data() as Announcement);
};

export const subscribeToAnnouncements = (
  callback: (announcements: Announcement[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    collection(db, COLLECTIONS.ANNOUNCEMENTS),
    (snapshot) => {
      const announcements = snapshot.docs.map(doc => doc.data() as Announcement);
      callback(announcements);
    }
  );
  return unsubscribe;
};

export const addAnnouncement = async (announcement: Announcement): Promise<void> => {
  await addDoc(collection(db, COLLECTIONS.ANNOUNCEMENTS), announcement);
};

export const updateAnnouncement = async (
  oldTitle: string,
  updatedAnnouncement: Announcement
): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.ANNOUNCEMENTS));
  const docToUpdate = snapshot.docs.find(doc => doc.data().title === oldTitle);
  
  if (docToUpdate) {
    await updateDoc(doc(db, COLLECTIONS.ANNOUNCEMENTS, docToUpdate.id), updatedAnnouncement as DocumentData);
  }
};

export const deleteAnnouncement = async (title: string): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.ANNOUNCEMENTS));
  const docToDelete = snapshot.docs.find(doc => doc.data().title === title);
  
  if (docToDelete) {
    await deleteDoc(doc(db, COLLECTIONS.ANNOUNCEMENTS, docToDelete.id));
  }
};

// ==================== EVENTS ====================

export const getEvents = async (): Promise<Event[]> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.EVENTS));
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Event));
};

export const subscribeToEvents = (
  callback: (events: Event[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    collection(db, COLLECTIONS.EVENTS),
    (snapshot) => {
      const events = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Event));
      callback(events);
    }
  );
  return unsubscribe;
};

export const addEvent = async (event: Event): Promise<void> => {
  const { id, ...eventData } = event;
  await setDoc(doc(db, COLLECTIONS.EVENTS, id), eventData);
};

export const updateEvent = async (eventId: string, updatedEvent: Event): Promise<void> => {
  const { id, ...eventData } = updatedEvent;
  await updateDoc(doc(db, COLLECTIONS.EVENTS, eventId), eventData as DocumentData);
};

export const deleteEvent = async (eventId: string): Promise<void> => {
  await deleteDoc(doc(db, COLLECTIONS.EVENTS, eventId));
};

export const registerForEvent = async (eventId: string, userEmail: string): Promise<void> => {
  const eventRef = doc(db, COLLECTIONS.EVENTS, eventId);
  const eventDoc = await getDoc(eventRef);
  
  if (eventDoc.exists()) {
    const eventData = eventDoc.data() as Event;
    const registrations = eventData.registrations || [];
    
    if (!registrations.includes(userEmail)) {
      await updateDoc(eventRef, {
        registrations: [...registrations, userEmail],
      });
    }
  }
};

// ==================== TEAM MEMBERS ====================

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.TEAM_MEMBERS));
  return snapshot.docs.map(doc => doc.data() as TeamMember);
};

export const subscribeToTeamMembers = (
  callback: (members: TeamMember[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    collection(db, COLLECTIONS.TEAM_MEMBERS),
    (snapshot) => {
      const members = snapshot.docs.map(doc => doc.data() as TeamMember);
      callback(members);
    }
  );
  return unsubscribe;
};

export const addTeamMember = async (member: TeamMember): Promise<void> => {
  await addDoc(collection(db, COLLECTIONS.TEAM_MEMBERS), member);
};

export const updateTeamMember = async (
  oldName: string,
  updatedMember: TeamMember
): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.TEAM_MEMBERS));
  const docToUpdate = snapshot.docs.find(doc => doc.data().name === oldName);
  
  if (docToUpdate) {
    await updateDoc(doc(db, COLLECTIONS.TEAM_MEMBERS, docToUpdate.id), updatedMember as DocumentData);
  }
};

export const deleteTeamMember = async (name: string): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.TEAM_MEMBERS));
  const docToDelete = snapshot.docs.find(doc => doc.data().name === name);
  
  if (docToDelete) {
    await deleteDoc(doc(db, COLLECTIONS.TEAM_MEMBERS, docToDelete.id));
  }
};

// ==================== MILESTONES ====================

export const getMilestones = async (): Promise<Milestone[]> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.MILESTONES));
  return snapshot.docs.map(doc => doc.data() as Milestone);
};

export const subscribeToMilestones = (
  callback: (milestones: Milestone[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    collection(db, COLLECTIONS.MILESTONES),
    (snapshot) => {
      const milestones = snapshot.docs.map(doc => doc.data() as Milestone);
      callback(milestones);
    }
  );
  return unsubscribe;
};

export const addMilestone = async (milestone: Milestone): Promise<void> => {
  await addDoc(collection(db, COLLECTIONS.MILESTONES), milestone);
};

export const updateMilestone = async (
  oldYear: string,
  updatedMilestone: Milestone
): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.MILESTONES));
  const docToUpdate = snapshot.docs.find(doc => doc.data().year === oldYear);
  
  if (docToUpdate) {
    await updateDoc(doc(db, COLLECTIONS.MILESTONES, docToUpdate.id), updatedMilestone as DocumentData);
  }
};

export const deleteMilestone = async (year: string): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.MILESTONES));
  const docToDelete = snapshot.docs.find(doc => doc.data().year === year);
  
  if (docToDelete) {
    await deleteDoc(doc(db, COLLECTIONS.MILESTONES, docToDelete.id));
  }
};

// ==================== FAQS ====================

export const getFaqs = async (): Promise<Faq[]> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.FAQS));
  return snapshot.docs.map(doc => doc.data() as Faq);
};

export const subscribeToFaqs = (
  callback: (faqs: Faq[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    collection(db, COLLECTIONS.FAQS),
    (snapshot) => {
      const faqs = snapshot.docs.map(doc => doc.data() as Faq);
      callback(faqs);
    }
  );
  return unsubscribe;
};

export const addFaq = async (faq: Faq): Promise<void> => {
  await addDoc(collection(db, COLLECTIONS.FAQS), faq);
};

export const updateFaq = async (
  oldQuestion: string,
  updatedFaq: Faq
): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.FAQS));
  const docToUpdate = snapshot.docs.find(doc => doc.data().question === oldQuestion);
  
  if (docToUpdate) {
    await updateDoc(doc(db, COLLECTIONS.FAQS, docToUpdate.id), updatedFaq as DocumentData);
  }
};

export const deleteFaq = async (question: string): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.FAQS));
  const docToDelete = snapshot.docs.find(doc => doc.data().question === question);
  
  if (docToDelete) {
    await deleteDoc(doc(db, COLLECTIONS.FAQS, docToDelete.id));
  }
};

// ==================== LEADERBOARD ====================

export const getLeaderboard = async (): Promise<LeaderboardMember[]> => {
  const snapshot = await getDocs(
    query(collection(db, COLLECTIONS.LEADERBOARD), orderBy('points', 'desc'))
  );
  return snapshot.docs.map(doc => doc.data() as LeaderboardMember);
};

export const subscribeToLeaderboard = (
  callback: (leaderboard: LeaderboardMember[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    query(collection(db, COLLECTIONS.LEADERBOARD), orderBy('points', 'desc')),
    (snapshot) => {
      const leaderboard = snapshot.docs.map(doc => doc.data() as LeaderboardMember);
      callback(leaderboard);
    }
  );
  return unsubscribe;
};

export const addLeaderboardMember = async (member: LeaderboardMember): Promise<void> => {
  await addDoc(collection(db, COLLECTIONS.LEADERBOARD), member);
};

export const updateLeaderboardMember = async (
  oldName: string,
  updatedMember: LeaderboardMember
): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.LEADERBOARD));
  const docToUpdate = snapshot.docs.find(doc => doc.data().name === oldName);
  
  if (docToUpdate) {
    await updateDoc(doc(db, COLLECTIONS.LEADERBOARD, docToUpdate.id), updatedMember as DocumentData);
  }
};

export const deleteLeaderboardMember = async (name: string): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.LEADERBOARD));
  const docToDelete = snapshot.docs.find(doc => doc.data().name === name);
  
  if (docToDelete) {
    await deleteDoc(doc(db, COLLECTIONS.LEADERBOARD, docToDelete.id));
  }
};

// ==================== CONTACT SUBMISSIONS ====================

export const getContactSubmissions = async (): Promise<ContactSubmission[]> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.SUBMISSIONS));
  return snapshot.docs.map(doc => doc.data() as ContactSubmission);
};

export const subscribeToContactSubmissions = (
  callback: (submissions: ContactSubmission[]) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    collection(db, COLLECTIONS.SUBMISSIONS),
    (snapshot) => {
      const submissions = snapshot.docs.map(doc => doc.data() as ContactSubmission);
      callback(submissions);
    }
  );
  return unsubscribe;
};

export const addContactSubmission = async (submission: ContactSubmission): Promise<void> => {
  await addDoc(collection(db, COLLECTIONS.SUBMISSIONS), submission);
};

export const deleteContactSubmission = async (email: string, date: string): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.SUBMISSIONS));
  const docToDelete = snapshot.docs.find(
    doc => doc.data().email === email && doc.data().date === date
  );
  
  if (docToDelete) {
    await deleteDoc(doc(db, COLLECTIONS.SUBMISSIONS, docToDelete.id));
  }
};

// ==================== MIGRATION HELPER ====================

/**
 * One-time migration function to copy localStorage data to Firestore
 * Call this once after setting up Firebase to migrate existing data
 */
export const migrateLocalStorageToFirestore = async (): Promise<void> => {
  if (typeof window === 'undefined') return;

  try {
    console.log('🔄 Starting migration from localStorage to Firestore...');

    // Migrate announcements
    const announcements = localStorage.getItem('cca_announcements');
    if (announcements) {
      const data = JSON.parse(announcements) as Announcement[];
      for (const item of data) {
        await addAnnouncement(item);
      }
      console.log('✅ Migrated announcements');
    }

    // Migrate events
    const events = localStorage.getItem('cca_events');
    if (events) {
      const data = JSON.parse(events) as Event[];
      for (const item of data) {
        await addEvent(item);
      }
      console.log('✅ Migrated events');
    }

    // Migrate team members
    const teamMembers = localStorage.getItem('cca_team_members');
    if (teamMembers) {
      const data = JSON.parse(teamMembers) as TeamMember[];
      for (const item of data) {
        await addTeamMember(item);
      }
      console.log('✅ Migrated team members');
    }

    // Migrate milestones
    const milestones = localStorage.getItem('cca_milestones');
    if (milestones) {
      const data = JSON.parse(milestones) as Milestone[];
      for (const item of data) {
        await addMilestone(item);
      }
      console.log('✅ Migrated milestones');
    }

    // Migrate FAQs
    const faqs = localStorage.getItem('cca_faqs');
    if (faqs) {
      const data = JSON.parse(faqs) as Faq[];
      for (const item of data) {
        await addFaq(item);
      }
      console.log('✅ Migrated FAQs');
    }

    // Migrate leaderboard
    const leaderboard = localStorage.getItem('cca_leaderboard');
    if (leaderboard) {
      const data = JSON.parse(leaderboard) as LeaderboardMember[];
      for (const item of data) {
        await addLeaderboardMember(item);
      }
      console.log('✅ Migrated leaderboard');
    }

    // Migrate contact submissions
    const submissions = localStorage.getItem('cca_submissions');
    if (submissions) {
      const data = JSON.parse(submissions) as ContactSubmission[];
      for (const item of data) {
        await addContactSubmission(item);
      }
      console.log('✅ Migrated contact submissions');
    }

    console.log('🎉 Migration completed successfully!');
    console.log('💡 You can now clear localStorage if desired');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
};
