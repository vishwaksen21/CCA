'use client';
import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/mock-data';

const milestones = [
  {
    year: "2021",
    event: "Club Founded",
    description:
      "The Centre for Cognitive Activities (CCA) was founded at CMRIT to foster holistic student development. The club focuses on aptitude, mental ability, personality development, and critical thinking, enabling students to prepare effectively for placements, interviews, and competitive exams.",
    image: "/club_founded.png",
  },
  {
    year: "2021",
    event: "Skill Development Initiatives",
    description:
      "CCA has organized unique aptitude events, practical workshops, and training sessions targeting key skills needed for placements, defense, civil services, and higher studies.",
    image: "/aptitude_event.png",
  },
  {
    year: "2022",
    event: "Placement & Exam Readiness",
    description:
      "Students receive mentorship for interviews, soft skills, and exam preparation including GATE (all branches), SSB, NDA, SSC, and more, ensuring readiness for a variety of career pathways.",
    image: "/placement_guidance.png",
  },
  {
    year: "2023",
    event: "Recognition & Impact",
    description:
      "CCA is recognized for driving innovative, student-led initiatives and all-round growth, helping hundreds of students at CMRIT reach their professional and academic goals.",
    image: "/national_recognition.png",
  },
];

const focalPoints = [
  { label: "Placement", icon: "/placement.png", desc: "Master aptitude, ace interviews, and become industry-ready." },
  { label: "Defense", icon: "/defense.png", desc: "Guidance for NDA, CDS, SSC, and public service opportunities." },
  { label: "Higher Studies", icon: "/higherstudies.png", desc: "Prepare for GATE, CAT, and secure global admissions." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-background via-background/60 to-background/20">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        {/* About Us Section */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-headline font-bold text-primary tracking-tighter">
            About Us
          </h1>
          <motion.p
            variants={fadeIn}
            className="mx-auto max-w-[480px] text-accent font-semibold italic mt-3 mb-6 text-lg"
          >
            &quot;It is okay to not KNOW,<br /> but it is not okay to not TRY.&quot;
          </motion.p>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Empowering you for Success in Placements, Defense, Higher Studies, and Soft Skills.
          </p>
        </motion.section>

        {/* Focal Points */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">What We Focus On</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {focalPoints.map(point => (
              <motion.div
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={point.label}
                className="flex flex-col items-center bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-[180px]"
              >
                <img src={point.icon} alt={`${point.label} icon`} className="h-14 w-14 mb-3" />
                <p className="font-bold text-primary text-lg">{point.label}</p>
                <span className="text-sm text-foreground/70 text-center">{point.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-12 md:py-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="flex justify-center order-last lg:order-first"
            >
              <div className="relative group">
                <img
                  src="/group.png"
                  alt="Students collaborating"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                CCA’s mission is to bridge the gap between academic learning and real-world careers
                by nurturing aptitude, mental agility, personality development, and critical thinking.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Journey / Timeline */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full py-12 md:py-24 relative"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center text-primary mb-16">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto space-y-10 relative">
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-primary/30" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 relative"
              >
                <div className="flex-shrink-0 mt-1 z-10">
                  <img
                    src={milestone.image}
                    alt={`${milestone.event} icon`}
                    className="h-10 w-10 object-contain rounded-full border-2 border-primary bg-background"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary text-white px-2 rounded font-semibold">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold">{milestone.event}</h3>
                  </div>
                  <p className="text-foreground/80">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-12 md:py-24"
        >
          <h2 className="text-3xl font-bold text-center font-headline mb-12 text-primary">
            Meet the Team
          </h2>
          <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.imageUrl || '/placeholder.png'}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full border-2 border-primary/50 group-hover:border-primary transition duration-300"
                  />
                </div>
                <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg shadow-md font-semibold hover:shadow-lg transition-all"
          >
            Ready to Connect?
          </motion.a>
        </div>
      </div>
    </div>
  );
}
