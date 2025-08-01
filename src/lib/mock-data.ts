import { Award, Medal, Star } from 'lucide-react';

export const announcements = [
  {
    title: 'Guest Lecture on AI',
    date: '2024-08-15',
    content: 'Join us for an insightful session on Artificial Intelligence with industry expert Dr. Anya Sharma.',
  },
  {
    title: 'SSB Interview Workshop',
    date: '2024-08-10',
    content: 'A hands-on workshop to prepare aspirants for the SSB interview process. Limited seats available.',
  },
  {
    title: 'Annual Fest "Cognito"',
    date: '2024-07-28',
    content: 'Get ready for our annual tech and cultural fest, "Cognito". More details to be announced soon!',
  },
    {
    title: 'Resume Building Session',
    date: '2024-07-20',
    content: 'Learn how to build a professional resume that stands out to recruiters. Highly recommended for final year students.',
  },
    {
    title: 'Welcome Freshers!',
    date: '2024-07-15',
    content: 'A warm welcome to all the new members of the CCA family. Join our orientation session this Friday.',
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
    {
    name: 'Vikram Rathore',
    role: 'Defense Wing Head',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'man portrait serious',
  },
    {
    name: 'Anjali Desai',
    role: 'Placement Head',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'woman portrait corporate',
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
    question: 'What is CCA?',
    answer: 'CCA, the Centre for Cognitive Activities, is a student-run club focused on defense awareness, placement preparation, and personality development to prepare students for their careers and beyond.',
  },
  {
    question: 'How can I join CCA?',
    answer: 'Membership drives are held at the beginning of each academic year. Look out for announcements on the college notice boards and our website. You can typically register through a form provided during the drive.',
  },
  {
    question: 'What are Cap Points?',
    answer: 'Cap Points are a reward system to encourage active participation. You earn points for attending events, winning competitions, volunteering, and contributing to the club. These points determine your rank on the leaderboard.',
  },
  {
    question: 'How are Cap Points updated?',
    answer: 'Cap Points are updated by club admins after each event or activity. It may take a few days for the points to reflect on your profile. If you have a discrepancy, please contact a team member.',
  },
  {
    question: 'Are there any membership fees?',
    answer: 'Yes, there is a nominal annual membership fee to cover the costs of events, workshops, and other club activities. The exact amount will be specified during the membership drive.',
  },
];
