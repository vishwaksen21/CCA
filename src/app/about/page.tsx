'use client';
import { motion } from 'framer-motion';

// You need your teamMembers data for the team section; import as you already have
import { teamMembers } from '@/lib/mock-data';

// Journey data with open source SVGs
const milestones = [
  {
    year: "2021",
    event: "Club Founded",
    description:
      "CCA was founded by Anirudh, Harshith, and Abhay to empower engineering students for placements, higher studies, defense, and civil services, under the guidance of faculty Sachin Gudimani and Mohd Yasin.",
    image: "/club_founded.png",
  },
  {
    event: "Unique Aptitude Events",
    year: "",
    description:
      "Pioneered India's first aptitude-based competitions including Treasure Hunt, Hackathon, Marathon, and Relay, attracting 120+ teams and 350+ participants.",
    image: "/aptitude_event.png",
  },
  {
    event: "Placement & Career Guidance",
    year: "",
    description:
      "Conducted mock drives in real company formats, soft-skill sessions, and offered mentorship for GATE (all branches), higher studies, and defense exams such as SSB, NDA, and SSC.",
    image: "/placement_guidance.png",   // next image will be generated
  },
  {
    event: "National Recognition",
    year: "",
    description:
      "Earned recognition for innovative aptitude-driven events and holistic student development initiatives.",
    image: "/national_recognition.png",  // next image will be generated
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <div className="bg-background/50">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        {/* About Us Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            Your partner in building a successful career in the defense sector and beyond.
          </p>
        </motion.section>
        {/* Mission Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="mission"
          className="w-full py-12 md:py-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center order-last lg:order-first">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group"
              >
                <img
                  src="/group.png"
                  alt="Team discussing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter font-headline">
                Our Mission
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Our mission is to bridge the gap between academic learning and the professional world, providing students with the resources, skills, and networking opportunities necessary to secure fulfilling careers in the defense industry and other competitive sectors. We are dedicated to fostering a community of driven individuals prepared to become the next generation of leaders.
              </p>
            </div>
          </div>
        </motion.section>
        {/* Our Journey Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="timeline"
          className="w-full py-12 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-16">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-[#E6F0FF] p-3 rounded-lg">
                    <img
                      src={milestone.image}
                      alt={milestone.event + ' icon'}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-primary font-bold text-lg">{milestone.year}</p>
                  <h3 className="text-xl font-semibold mb-1 mt-1">{milestone.event}</h3>
                  <p className="text-foreground/80">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Meet the Team Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          id="team"
          className="w-full py-12 md:py-24"
        >
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center font-headline mb-12">
              Meet the Team
            </h2>
            <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
