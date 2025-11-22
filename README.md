# CCA Hub - Center for Cognitive Activities

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> **Empowering CMRIT students through placement preparation, defense awareness, higher studies guidance, and personality development.**

**Live Website:** [https://cca-cmrit.netlify.app/](https://cca-cmrit.netlify.app/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

The **Center for Cognitive Activities (CCA)** is a student-driven club at CMR Institute of Technology (CMRIT) dedicated to holistic student development across four core domains:

- 🎯 **Placement Preparation** - Resume building, mock interviews, group discussions, and aptitude training
- 🛡️ **Defense Awareness** - NDA, CDS, and other defense career opportunities with expert guidance
- 📚 **Higher Studies Guidance** - Admissions counseling, scholarship information, and career pathways
- 💡 **Personality Development** - Soft skills, leadership training, and professional etiquette

With **1000+ active members** and **50+ events** annually, CCA has become a cornerstone of professional development at CMRIT.

---

## ✨ Features

### Current Features
- ✅ **Dynamic Homepage** - Hero slideshow, feature cards, and cognitive boosters
- ✅ **Events Management** - Upcoming and past events with registration functionality
- ✅ **Admin Dashboard** - Secure login with mock authentication
- ✅ **Admin Authentication** - Email/Password login with session management
- ✅ **Real-Time Data Sync** - Admin changes reflect instantly on public pages
- ✅ **Responsive Design** - Mobile-first approach with smooth animations
- ✅ **Dark/Light Theme** - User preference-based theming
- ✅ **About Section** - Mission, team members, and achievements timeline
- ✅ **Partners Page** - Showcase of collaboration partners
- ✅ **FAQ Section** - Common questions and answers

### Upcoming Features
- 🔄 **Firestore Integration** - Persistent data storage with Firebase
- 🔄 **Updates Feed** - Announcements and news section
- 🔄 **AI-Powered Features** - Genkit AI integration for personalized guidance

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) with App Router & Turbopack
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Design System
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives
- **Animations:** [Framer Motion 11](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + React Icons
- **Forms:** React Hook Form + Zod validation

### Backend & Services
- **Database:** [Firebase 11](https://firebase.google.com/) (Firestore)
- **Authentication:** Firebase Auth
- **AI Integration:** [Genkit AI](https://github.com/firebase/genkit) with Google AI
- **Hosting:** Netlify

### Development Tools
- **Package Manager:** npm
- **Code Quality:** TypeScript strict mode
- **Build Tool:** Next.js with Turbopack
- **Version Control:** Git & GitHub

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20.x or higher
- **npm** 11.x or higher
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishwaksen21/CCA.git
   cd CCA-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Firebase and API keys to `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
<<<<<<< HEAD
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_ADMIN_EMAILS=admin@cmrit.ac.in,cca@cmrit.ac.in
   ```
   
   **📘 See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed Firebase setup instructions**
=======
   # ... other Firebase config
   ```
>>>>>>> a51094d3527a0db9ba1ec855a6e0e14c5086b322

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

<<<<<<< HEAD
6. **Access Admin Dashboard** (Optional)
   - Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
   - Sign in with authorized admin credentials
   - See [ADMIN_LOGIN_REFERENCE.md](./ADMIN_LOGIN_REFERENCE.md) for quick reference

=======
>>>>>>> a51094d3527a0db9ba1ec855a6e0e14c5086b322
---

## 📁 Project Structure

```
CCA-1/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/
│   │   ├── admin/
│   │   ├── contact/
│   │   ├── events/
│   │   ├── faq/
│   │   ├── leaderboard/
│   │   ├── partners/
│   │   ├── updates/
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/
│   │   ├── shared/        # Shared components (header, footer, etc.)
│   │   └── ui/            # Shadcn UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and configurations
│   │   ├── firebase.ts    # Firebase setup
│   │   ├── mock-data.ts   # Mock data for development
│   │   └── utils.ts       # Utility functions
│   └── ai/                # Genkit AI integration
├── docs/
│   └── blueprint.md       # Design system and feature specs
├── .env.local             # Environment variables (not committed)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check TypeScript files |
| `npm run genkit:dev` | Start Genkit development server |
| `npm run genkit:watch` | Start Genkit in watch mode |

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Project setup with Next.js 15
- [x] Design system implementation
- [x] Homepage with animations
- [x] Events page
- [x] Basic routing and navigation

### Phase 2: Core Features 🔄
<<<<<<< HEAD
- [x] Firebase integration
- [x] Admin authentication ✨ NEW!
- [ ] CAP Points system  
- [ ] Live leaderboard
- [ ] Firestore data persistence
=======
- [ ] Firebase integration
- [ ] CAP Points system
- [ ] Live leaderboard
- [ ] Admin authentication
>>>>>>> a51094d3527a0db9ba1ec855a6e0e14c5086b322
- [ ] Updates/Announcements feed

### Phase 3: Advanced Features 📅
- [ ] AI-powered career guidance
- [ ] Event registration with payments
- [ ] Email notifications
- [ ] Student dashboard
- [ ] Analytics and insights

### Phase 4: Optimization 📅
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Accessibility enhancements
- [ ] Progressive Web App (PWA)
- [ ] Testing and quality assurance

---

<<<<<<< HEAD
## 🔐 Admin Access

The CCA Hub includes a secure admin dashboard for managing content.

### Access Admin Panel
- **Local Development**: http://localhost:3000/admin
- **Production**: https://cca-cmrit.netlify.app/admin

### Authentication Methods
- ✅ Email/Password authentication
- ✅ Google Sign-In (OAuth)

### Admin Features
- Manage announcements and updates
- Create and edit events
- Update team member information
- Manage FAQ content
- View contact form submissions
- Track CAP points and leaderboard

### Setup Instructions
📘 **Complete admin setup guide**: [ADMIN_SETUP.md](./ADMIN_SETUP.md)  
🔑 **Quick reference**: [ADMIN_LOGIN_REFERENCE.md](./ADMIN_LOGIN_REFERENCE.md)

---

=======
>>>>>>> a51094d3527a0db9ba1ec855a6e0e14c5086b322
## 🤝 Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is maintained by the CCA team at CMRIT. All rights reserved.

---

## 👥 Team

**CCA Core Team 2024-2025**

For queries, contact us at [cca@cmrit.ac.in](mailto:cca@cmrit.ac.in)

---

## 🌟 Acknowledgments

- CMRIT Management and Faculty
- All CCA members and volunteers
- Partner organizations and mentors
- Open source community

---

<div align="center">
  <strong>Built with ❤️ by the CCA Team at CMRIT</strong>
  <br>
  <sub>Empowering students, one skill at a time.</sub>
</div>
