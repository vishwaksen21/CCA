
import { Award, Medal, Star } from 'lucide-react';

export const announcements = [
  {
    title: 'CCA Freshers’ Orientation 2025',
    date: '2025-09-23',
    content:
      'The official welcome event for the new batch of freshers! 🎉 Join us to discover what CCA is all about – from placement prep, higher studies guidance, to defense and civil service awareness. Meet the core team, explore our roadmap for the year, and learn how you can actively participate. An engaging session filled with icebreakers, insights, and opportunities to kickstart your journey.',
  },
  {
    title: 'Event: The Placement Pursuit',
    date: '2025-08-20',
    content:
      'A flagship event designed to simulate the real-world placement process. From aptitude tests and group discussions to mock interviews, this event gives you a taste of what it takes to crack top company drives. Boost your confidence, sharpen your problem-solving, and walk away with feedback that will help you level up for actual placements.',
  },
  {
    title: 'Event: Express & Impress',
    date: '2025-09-03',
    content:
      'A dynamic communication and public speaking workshop that equips you with the skills to stand out in interviews, GDs, and beyond. Practice real scenarios, get tips from mentors, and learn how to express your ideas clearly while leaving a lasting impression. A must-attend for anyone aiming to polish soft skills and gain confidence in professional interactions.',
  },
  {
    title: 'Event: Load Up & Lock In',
    date: '2025-09-10',
    content:
      'Step into the world of defense careers with this focused session. Get insights into pathways like NDA, CDS, and SSB interviews, and understand what it takes to build a career in the defense sector. Designed for students passionate about discipline, service, and national duty, this event helps you prepare and align your journey with defense opportunities.',
  },
  {
    title: 'Event: Edu Voyage',
    date: '2025-09-17',
    content:
      'Thinking about higher studies abroad or in India? 🌍 Edu Voyage is your guide to universities, scholarships, and preparation strategies. Learn how to approach GRE/IELTS/TOEFL, explore funding opportunities, and gain clarity on application timelines. A must-attend session for anyone aspiring to pursue masters or higher education with confidence.',
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
    question: 'What is the Centre for Cognitive Activities (CCA)?',
    answer:
      'CCA is a student club at CMRIT dedicated to enhancing students’ aptitude, mental ability, personality, and critical thinking, ultimately supporting placement and career preparation.',
  },
  {
    question: 'Who can join the CCA?',
    answer:
      'Any student from any branch or year at CMRIT is welcome to join and participate in CCA activities.',
  },
  {
    question: 'What activities does CCA organize?',
    answer:
      'CCA conducts workshops, aptitude competitions, personality development sessions, and placement training events to help students prepare for placements and exams.',
  },
  {
    question: 'How do I join?',
    answer:
      'Watch for CCA membership drives at the start of the academic year. Apply through announcements posted on the club website and social media.',
  },
  {
    question: 'Is there a rewards system in CCA?',
    answer:
      'Yes, members earn points for participating in events, volunteering, and winning competitions. The leaderboard is updated weekly based on these points.',
  },
  {
    question: 'Are students from all backgrounds and years welcome?',
    answer:
      'Absolutely! CCA encourages diversity and welcomes students from all academic disciplines and years.',
  },
  {
    question: 'Who manages CCA activities?',
    answer:
      'CCA is run by faculty and student coordinators representing various departments at CMRIT, ensuring activities are well-organized and inclusive.',
  },
  {
    question: 'What are the benefits of being a CCA member?',
    answer:
      'Members develop important skills, boost their placement chances, receive certificates, and connect with a supportive student community.',
  },
  {
    question: 'Where can I find updates about CCA events?',
    answer:
      'All updates and announcements are shared on the club’s official website and social media handles.',
  },
  {
    question: 'What kind of support does CCA offer for placements?',
    answer:
      'CCA offers training, guidance, and resources to help members improve their aptitude, interview performance, and overall employability.',
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
