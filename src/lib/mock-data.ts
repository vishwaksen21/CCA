import { Award, Medal, Star } from 'lucide-react';

export const announcements = [
  {
    title: 'Resume Building for Government Contracts',
    date: '2024-08-15',
    content: 'Join us for an insightful session on building resumes for government contracts.',
  },
  {
    title: 'Networking in the Defense Sector',
    date: '2024-08-10',
    content: 'A hands-on workshop to prepare for networking in the defense industry.',
  },
];

export const teamMembers = [
  {
    name: 'Rohan Verma',
    role: 'President',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Priya Singh',
    role: 'Vice President',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Amit Patel',
    role: 'Secretary',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'man portrait professional',
  },
  {
    name: 'Sneha Gupta',
    role: 'Treasurer',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'woman portrait professional',
  },
];

export const milestones = [
    {
        year: '2020',
        event: 'Club Founded',
        description: 'CCA was established with the vision to foster holistic student development.'
    },
    {
        year: '2021',
        event: 'First "Cognito" Fest',
        description: 'Successfully organized our first annual technical and cultural festival.'
    },
    {
        year: '2022',
        event: '100+ Placements',
        description: 'Our members achieved over 100 successful placements in top companies.'
    },
    {
        year: '2023',
        event: 'National Level Seminar',
        description: 'Hosted a national-level seminar on "Future of Defense Tech".'
    },
    {
        year: '2024',
        event: 'Introduced Cap Points',
        description: 'Launched the Cap Points system to gamify participation and reward members.'
    }
];

export type BadgeType = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export const leaderboard: { rank: number; name: string; points: number; badges: BadgeType[] }[] = [
  { rank: 1, name: 'Aarav Sharma', points: 2580, badges: [{ name: 'Top Performer', icon: Medal, color: 'text-yellow-500' }, { name: 'Active Member', icon: Star, color: 'text-blue-500' }] },
  { rank: 2, name: 'Diya Mehta', points: 2450, badges: [{ name: 'Active Member', icon: Star, color: 'text-blue-500' }] },
  { rank: 3, name: 'Kabir Khan', points: 2300, badges: [{ name: 'Rising Star', icon: Award, color: 'text-green-500' }] },
  { rank: 4, name: 'Vivaan Reddy', points: 2150, badges: [] },
  { rank: 5, name: 'Ishaan Gupta', points: 2020, badges: [{ name: 'Active Member', icon: Star, color: 'text-blue-500' }] },
  { rank: 6, name: 'Myra Joshi', points: 1980, badges: [] },
  { rank: 7, name: 'Arjun Nair', points: 1850, badges: [] },
  { rank: 8, name: 'Saanvi Patel', points: 1700, badges: [{ name: 'Rising Star', icon: Award, color: 'text-green-500' }] },
  { rank: 9, name: 'Yash Singh', points: 1650, badges: [] },
  { rank: 10, name: 'Anika Verma', points: 1500, badges: [] },
];

export const userProfile = {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    avatarUrl: 'https://placehold.co/128x128.png',
    dataAiHint: 'man portrait smiling',
    capPoints: 2580,
    rank: 1,
    pointsHistory: [
        { activity: 'Won "Cognito" Hackathon', points: 500, date: '2024-07-29' },
        { activity: 'Volunteered for Guest Lecture', points: 100, date: '2024-08-15' },
        { activity: 'Attended SSB Workshop', points: 50, date: '2024-08-10' },
        { activity: 'Monthly Quiz Winner', points: 150, date: '2024-07-01' },
        { activity: 'Mentored a junior', points: 80, date: '2024-06-25' },
    ],
    badges: [
        { name: 'Top Performer', icon: Medal, color: 'text-yellow-500', description: 'Achieved Rank 1 in a monthly leaderboard.' },
        { name: 'Active Member', icon: Star, color: 'text-blue-500', description: 'Participated in 5+ events in a month.' },
        { name: 'Hackathon Winner', icon: Award, color: 'text-purple-500', description: 'Secured first place in a hackathon.' },
    ]
};

export const faqs = [
  {
    question: 'What is the Placement & Defense Careers Club?',
    answer: 'We are a student-run club focused on providing resources and opportunities for careers in the defense sector and beyond.',
  },
  {
    question: 'How can I join?',
    answer: 'Membership drives are held at the beginning of each academic year. Look out for announcements on our website.',
  },
];
