
import { Award, Medal, Star } from 'lucide-react';

export const announcements = [
  {
    title: 'CCA Freshers’ Orientation 2025',
    date: '2025-09-23',
    content:
      'Welcome freshers! Discover CCA’s vision, meet the core team, and explore opportunities in placements, higher studies, and defense. Kickstart your journey with insights and fun icebreakers.',
  },
  {
    title: 'Event: The Placement Pursuit',
    date: '2025-08-20',
    content:
      'Simulate real placement drives with aptitude tests, GDs, and mock interviews. Sharpen problem-solving, gain confidence, and get actionable feedback for success.',
  },
  {
    title: 'Event: Express & Impress',
    date: '2025-09-03',
    content:
      'Boost your communication and public speaking skills. Learn to express clearly, impress confidently, and shine in interviews and group discussions.',
  },
  {
    title: 'Event: Load Up & Lock In',
    date: '2025-09-10',
    content:
      'Explore defense career paths like NDA, CDS, and SSB. Get insights, strategies, and guidance to align your passion with service opportunities.',
  },
  {
    title: 'Event: Edu Voyage',
    date: '2025-09-17',
    content:
      'Plan your higher studies journey with guidance on GRE/IELTS/TOEFL, scholarships, and timelines. A must-attend for students aspiring to pursue masters.',
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
    id: 'evt7',
    title: 'Escape Room 2.0',
    date: '2025-10-29',
    time: '2:00 PM - 4:00 PM',
    location: 'CV 403',
    description: 'Test your wit and teamwork in Escape Room 2.0 — where every clue counts and every second matters!',
    imageUrl: '/event7.png', // Placeholder image
    registrations: [],
    registrationUrl: 'https://tinyurl.com/44t5664c',
  },
  {
    id: 'evt6',
    title: 'The Scholars Knight',
    date: '2025-10-23',
    time: '2:00 PM - 4:00 PM',
    location: 'AV HALL',
    description: 'The Scholars Knight, an event dedicated to guiding aspiring scholars towards global opportunities.',
    imageUrl: '/event6.png', // Placeholder image
    registrations: [],
    registrationUrl: 'https://forms.gle/tLqw9JTJtKCp3sbb8',
  },
  {
    id: 'evt5',
    title: 'Skill Craft',
    date: '2025-10-09',
    time: '2:00 PM - 4:00 PM',
    location: 'AV HALL ',
    description: 'Unlock new opportunities and practical skills through engaging hands-on activities at Skill Craft.',
    imageUrl: '/event5.png', // Placeholder image
    registrations: [],
    registrationUrl: 'https://tinyurl.com/3s2sdrph',
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
  {
    id: 'evt3',
    title: 'Load Up & Lock In',
    date: '2025-09-10',
    time: '2:00 PM - 4:00 PM',
    location: '4th floor,CV 403-D block',
    description: 'This event prepares you to navigate the path and excel in a career with the defense sector.',
    registrations: [],
    imageUrl: '/event3.png',
    registrationUrl: 'https://forms.gle/ro3ePuquCweufAbP9',
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
    id: 'evt1',
    title: 'The Placement Pursuit',
    date: '2025-08-20',
    time: '2:00 PM - 4:00 PM',
    location: 'AV HALL',
    description: 'This event prepares you to stand out and succeed in competitive campus placements.',
    imageUrl: '/event1.png', // Placeholder image
    registrations: ['Aarav Sharma', 'Diya Mehta'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdo7ehPXc3_45oUN8Zs6Jp4DAjDpsq_kon5V_F4GEZ0haCgAw/viewform', // Add the URL here
  }
];

export const teamMembers = [
  {
    name: 'Yuktha',
    role: 'President',
    imageUrl: '/yuktha.png',
    linkedin: 'https://www.linkedin.com/in/yuktha-suresh-65b208302',
  },
  {
    name: 'Swara',
    role: 'Vice-President',
    imageUrl: '/swara.png',
    linkedin: 'https://www.linkedin.com/in/swarakulkarni',
  },
  {
    name: 'Prithika',
    role: 'Creative Head',
    imageUrl: '/prithika.png',
    linkedin: 'https://www.linkedin.com/in/prithika-senthil-310b25315',
  },
  {
    name: 'Aparnaa',
    role: 'Cash Capzz',
    imageUrl: '/aparnaa.png',
    linkedin: 'https://www.linkedin.com/in/aparnaa-a-s',
  },
  {
    name: 'Divyanshi',
    role: 'Co-ordinator',
    imageUrl: '/divyanshi.png',
    linkedin: 'https://www.linkedin.com/in/divyanshi-tiwari-36986b337',
  },
  {
    name: 'Vishwak',
    role: 'Co-ordinator',
    imageUrl: '/vishwak3.png',
    linkedin: 'https://www.linkedin.com/in/c-vishwak-sena-b61212286/',
  },
  {
    name: 'Jaithra',
    role: 'Co-ordinator',
    imageUrl: '/jaithra.png',
    linkedin: 'https://www.linkedin.com/in/jaithra-guttikonda-6b0a71337',
  },
  {
    name: 'Barath',
    role: 'Co-ordinator',
    imageUrl: '/barath.png',
    linkedin: 'https://www.linkedin.com/in/barath-s05',
  },
  {
    name: 'Deeksha',
    role: 'Co-ordinator',
    imageUrl: '/deeksha.png',
    linkedin: 'https://www.linkedin.com/in/deeksha-pandu-29b09732a',
  },
  {
    name: 'Kovidh',
    role: 'Co-ordinator',
    imageUrl: '/kovidh.png',
    linkedin: 'https://www.linkedin.com/in/kovidh-chodankar',
  },
  {
    name: 'Likitha',
    role: 'Co-ordinator',
    imageUrl: '/likitha.png',
    linkedin: 'https://www.linkedin.com/in/likitha-n-844ba1330',
  },
  {
    name: 'Ashmitha',
    role: 'Co-ordinator',
    imageUrl: '/ash.png',
    linkedin: 'https://www.linkedin.com/in/ashmitha-rashmi-raju-a84053396',
  },
  {
    name: 'Srinikesh',
    role: 'Co-ordinator',
    imageUrl: '/sri.png',
    linkedin: 'https://www.linkedin.com/in/srinikesh-peratla-287452379',
  },
  {
    name: 'Irene',
    role: 'Co-ordinator',
    imageUrl: '/Irene1.png',
    linkedin: 'https://www.linkedin.com/in/irene-maria-vinod-916725391',
  },
  {
    name: 'Vaishnavi',
    role: 'Co-ordinator',
    imageUrl: '/vaish.png',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-patil-077021328/',
  },
  {
    name: 'Amil',
    role: 'Co-ordinator',
    imageUrl: '/amil.png',
    linkedin: 'https://www.linkedin.com/in/amil-prabakar-838750334',
  },
  {
    name: 'Bhavana',
    role: 'Co-ordinator',
    imageUrl: '/bhavana.png',
    linkedin: 'https://www.linkedin.com/in/bhavana-k-087775359',
  },
];

export const milestones = [
  {
    year: '2021',
    event: 'Club Founded',
    description: 'CCA was started at CMRIT by Anirudh, Aditya, Abhay, and Harshith with guidance from faculty Sachin Gudimani.'
  },
  {
    year: '2021',
    event: 'Mission & Activities',
    description: 'Strengthened student skills in aptitude, personality development, and critical thinking for placements and exams.'
  },
  {
    year: '2022',
    event: 'Team Growth',
    description: 'Expanded to include coordinators from EEE, MECH, CIVIL, ISE, CSE, ECE, Design, and Higher Studies.'
  },
  {
    year: '2023',
    event: 'Faculty Guidance',
    description: 'Faculty provided direction and support in professional and personal development.'
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
  { rank: 1, name: 'Tanay Sarda', points: 2580, badges: [availableBadges[0], availableBadges[1]] },
  { rank: 2, name: 'Lohitaksha', points: 2450, badges: [availableBadges[1]] },
  { rank: 3, name: 'Neha', points: 2300, badges: [availableBadges[2]] },
  { rank: 4, name: 'Keerthika', points: 2150, badges: [] },
  { rank: 5, name: 'Satyam Patil', points: 2020, badges: [availableBadges[1]] },
  { rank: 6, name: 'Smruthi', points: 1980, badges: [] },
  { rank: 7, name: 'Kushi', points: 1850, badges: [] },
  { rank: 8, name: 'Ami', points: 1700, badges: [availableBadges[2]] },
  { rank: 9, name: 'Kethan', points: 1650, badges: [] },
  { rank: 10, name: 'Shivani Aski', points: 1500, badges: [] },
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
      'Students will earn CAP points by actively participating in events, volunteering activities, and winning competitions. The leaderboard is updated every week based on the total CAP points earned.',
  },
  {
    question: 'Are students from all backgrounds and years welcome?',
    answer:
      'Absolutely! CCA encourages diversity and welcomes students from all academic disciplines and years.',
  },
  {
    question: 'What are the benefits of being a CCA member?',
    answer:
      'Members develop important skills, boost their placement chances, receive certificates, and connect with a supportive student community.',
  },
  {
    question: 'Where can I find updates about CCA events?',
    answer:
      'All updates and announcements are regularly shared through the club’s official website and social media platforms, including LinkedIn, WhatsApp, and Instagram.',
  },
];

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
};

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
