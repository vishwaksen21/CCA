
import { Award, Medal, Star } from 'lucide-react';

export const announcements = [
  {
    title: '"CCA Freshers’ Orientation 2025"',
    date: '2025-09-12',
    content: 'Welcoming freshers to explore growth, skills, and career opportunities with CCA.',
  },
  {
    title: 'Event: The Placement Pursuit',
    date: '2025-08-20',
    content: 'The Placement Pursuit – sharpen your skills, crack interviews, and actually make it to the final round.',
  },
   {
    title: 'Event: Express & Impress',
    date: '2025-09-03',
    content: 'Express & Impress – speak with confidence, shine with charm, and leave a mark they won’t forget.',
  },
];

export const upcomingEvents: {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string; // Optional image URL for the event
  registrations: string[];
  registrationUrl?: string;
}[] = [
  {
    id: 'evt1',
    title: 'The Placement Pursuit',
    date: '2025-08-20',
    time: '2:00 PM - 4:00 PM',
    location: 'AV HALL',
    description: 'This event prepares you to stand out and succeed in competitive campus placements.',
 imageUrl: '/event1.png', // Placeholder image
    registrations: ['Aarav Sharma', 'Diya Mehta'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdo7ehPXc3_45oUN8Zs6Jp4DAjDpsq_kon5V_F4GEZ0haCgAw/viewform', // Add the URL here
  },
  {
    id: 'evt2',
    title: 'Express & Impress',
    date: '2025-09-03',
    time: '2:00 PM - 4:00 PM',
    location: 'AV HALL',
    description: 'Strong soft skills set you apart and give you the edge in every placement interview.',
 imageUrl: '/event2.png', // Placeholder image
    registrations: ['Kabir Khan', 'Vivaan Reddy', 'Ishaan Gupta', 'Myra Joshi'],
    registrationUrl: 'https://forms.gle/QzJLs6K4BYLsZmPL7',
  },
  {
    id: 'evt3', // Give it a unique ID
    title: 'Load Up & Lock In', // New event title
    date: '2025-09-10', // New date
    time: '2:00 PM - 4:00 PM', // New time
    location: '4th floor,CV 403-D block', // New location
    description: 'This event prepares you to navigate the path and excel in a career with the defense sector.', // New description
    registrations: [], // Start with an empty registrations array
    imageUrl: '/event3.png', // Optional image URL
    registrationUrl: 'https://forms.gle/ro3ePuquCweufAbP9', // Optional registration URL
  },
    {
    id: 'evt4',
    title: 'Edu Voyage',
    date: '2025-09-17',
    time: '2:00 PM - 4:00 PM',
    location: 'AV HALL ',
    description: 'This event equips you with the guidance and strategies to excel in your journey toward higher studies.',
 imageUrl: '/event4.png', // Placeholder image
    registrations: [],
    registrationUrl: 'https://forms.gle/zUjUTVHb8cQFqBh36',
  },
];

export const teamMembers = [
  {
    name: 'Yuktha',
    role: 'President',
    imageUrl: '/yuktha.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Swara',
    role: 'Vice-President',
    imageUrl: '/swara.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Prithika',
    role: 'Creative Head',
    imageUrl: '/prithika.png',
    dataAiHint: 'woman portrait creative',
  },
  {
    name: 'Aparnaa',
    role: 'Cash Capzz',
    imageUrl: '/aparnaa.png',
    dataAiHint: 'woman portrait professional',
  },
  {
    name: 'Vishwak',
    role: 'Co-ordinator',
    imageUrl: '/vishwak3.png',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Divyanshi',
    role: 'Co-ordinator',
    imageUrl: '/divyanshi.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Jaithra',
    role: 'Co-ordinator',
    imageUrl: '/jaithra.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Barath',
    role: 'Co-ordinator',
    imageUrl: '/barath.png',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Deeksha',
    role: 'Co-ordinator',
    imageUrl: '/deeksha.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Kovidh',
    role: 'Co-ordinator',
    imageUrl: '/kovidh.png',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Ritheesha',
    role: 'Co-ordinator',
    imageUrl: '/rit.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Likitha',
    role: 'Co-ordinator',
    imageUrl: '/likitha.png',
    dataAiHint: 'woman portrait',
  },
];

export const milestones = [
  {
    year: '2021',
    event: 'Club Founded',
    description: 'CCA was founded by Anirudh, Harshith, and Abhay to empower engineering students for placements, higher studies, defense, and civil services, under the guidance of faculty Sachin Gudimani and Mohd Yasin.'
  },
  {
    event: 'Unique Aptitude Events',
    description: 'Pioneered India’s first aptitude-based competitions including Treasure Hunt, Hackathon, Marathon, and Relay, attracting 120+ teams and 350+ individual participants.'
  },
  {
    event: 'Placement & Career Guidance',
    description: 'Conducted mock drives in real company formats, soft-skill sessions, and offered mentorship for GATE (all branches), higher studies, and defense exams such as SSB, NDA, and SSC.'
  },
  {
    event: 'National Recognition',
    description: 'Earned recognition for innovative aptitude-driven events and holistic student development initiatives.'
  }
];

export type BadgeInfo = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export const availableBadges: BadgeInfo[] = [
    { name: 'Top Performer', icon: Medal, color: 'text-yellow-500' },
    { name: 'Active Member', icon: Star, color: 'text-blue-500' },
    { name: 'Rising Star', icon: Award, color: 'text-green-500' },
];

export const leaderboard: { rank: number; name: string; points: number; badges: BadgeInfo[] }[] = [
  { rank: 1, name: '---', points: 2580, badges: [availableBadges[0], availableBadges[1]] },
  { rank: 2, name: '---', points: 2450, badges: [availableBadges[1]] },
  { rank: 3, name: '---', points: 2300, badges: [availableBadges[2]] },
  { rank: 4, name: '---', points: 2150, badges: [] },
  { rank: 5, name: '---', points: 2020, badges: [availableBadges[1]] },
  { rank: 6, name: '---', points: 1980, badges: [] },
  { rank: 7, name: '---', points: 1850, badges: [] },
  { rank: 8, name: '---', points: 1700, badges: [availableBadges[2]] },
  { rank: 9, name: '---', points: 1650, badges: [] },
  { rank: 10, name: '---', points: 1500, badges: [] },
];

export const faqs = [
  {
    question: 'What is the Placement & Defense Careers Club (CCA)?',
    answer:
      'The Centre for Cognitive Activities (CCA) is a student-run club focused on holistic development. We provide resources and opportunities for careers in the defense sector, tech, and beyond, focusing on defense awareness, placement preparation, and personality development.',
  },
  {
    question: 'How can I join the CCA?',
    answer:
      'Membership drives are held at the beginning of each academic year. Keep an eye on our website and social media channels for announcements regarding the application process and deadlines.',
  },
  {
    question: 'What are CAP Points?',
    answer:
      'CAP (Career and Achievement Points) is our internal rewards system. Members earn points by participating in workshops, volunteering for events, winning competitions, and contributing to the club. These points determine your rank on the leaderboard.',
  },
  {
    question: 'How often is the leaderboard updated?',
    answer: 'The leaderboard is updated at the end of every week to reflect the latest point totals and rankings.',
  },
    {
    question: 'Do I need a specific academic background to join?',
    answer: 'Not at all! We welcome students from all academic disciplines. Our goal is to foster a diverse community of driven individuals. A passion for learning and professional growth is all you need.',
  },
];

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
};

// We will use this as a temporary in-memory "database" for contact submissions.
// In a real app, this would be a database.
export let contactSubmissions: ContactSubmission[] = [
    {
        id: 'sub1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'I\'m very interested in your upcoming workshop on resume building. Can you provide more details about the topics that will be covered? Thanks!',
        date: '2024-08-20'
    },
    {
        id: 'sub2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        message: 'Hello, I represent a local tech company and we would be interested in partnering with your club for a networking event. Who would be the best person to speak to about this?',
        date: '2024-08-18'
    }
];
