# CCA Hub - Center for Cognitive Activities

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.9-orange?style=flat&logo=firebase)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat&logo=react)](https://react.dev/)

> **Empowering CMRIT students through placement preparation, defense awareness, higher studies guidance, and personality development.**

**Live Website:** [https://cca-cmrit.vercel.app/](https://cca-cmrit.vercel.app/)

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

### Core Features ✅
- **Dynamic Homepage** - Hero slideshow with smooth transitions, feature cards, and cognitive boosters section
- **Events Management** - Comprehensive event catalog with year-wise filtering (2022-2025+) and registration
- **Responsive Design** - Mobile-first approach with adaptive layouts and smooth Framer Motion animations
- **Dark/Light Theme** - System-aware theme with manual toggle and persistent preferences
- **About Section** - Mission statement, core team profiles, and interactive achievements timeline
- **Partners Page** - Showcase of collaboration partners with responsive grid layout
- **Contact Page** - Social media integration with WhatsApp, Instagram, and LinkedIn
- **FAQ Section** - Searchable, categorized frequently asked questions with accordion UI

### Admin Features 🔐
- **Secure Authentication** - Firebase Auth with Email/Password and Google OAuth
- **Admin Dashboard** - Comprehensive content management system
- **Real-Time Data Sync** - Instant updates using Firebase Firestore
- **Image Upload** - Firebase Storage integration for event photos and team member images
- **Announcements & Milestones** - Create and manage homepage announcements
- **Team Management** - Add/edit/reorder team members with drag-and-drop
- **Leaderboard System** - CAP points tracking with automatic rank calculation
- **Push Notifications** - Send web push notifications via OneSignal REST API

### Upcoming Features 🔄
- **AI-Powered Guidance** - Genkit AI integration for personalized career recommendations
- **Event Registration System** - Online registration with payment gateway integration
- **Email Notifications** - Automated event reminders and updates
- **Student Dashboard** - Personalized profile with event history and CAP points
- **Advanced Analytics** - Visitor insights, event metrics, and engagement tracking

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
- **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore) - Real-time NoSQL database
- **Storage:** Firebase Storage - Image and file uploads
- **Authentication:** Firebase Authentication - Email/Password & Google OAuth
- **Push Notifications:** [OneSignal](https://onesignal.com/) - Web push notifications
- **AI Integration:** [Genkit AI](https://github.com/firebase/genkit) with Google AI
- **Hosting:** [Vercel](https://vercel.com/) - Edge deployment

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
   cd CCA
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Firebase and API keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_ADMIN_EMAILS=admin@cmrit.ac.in,cca@cmrit.ac.in
   NEXT_PUBLIC_ONESIGNAL_APP_ID=your_onesignal_app_id
   ONESIGNAL_REST_API_KEY=your_onesignal_rest_api_key
   ```
   
   **📘 See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed Firebase setup instructions**

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)
   
   **Production:** [https://cca-cmrit.vercel.app](https://cca-cmrit.vercel.app)

6. **Access Admin Dashboard** (Optional)
   - Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
   - Sign in with authorized admin credentials
   - See [ADMIN_LOGIN_REFERENCE.md](./ADMIN_LOGIN_REFERENCE.md) for quick reference

---

## 📁 Project Structure

```
CCA/
├── public/                 # Static assets (images, icons, OneSignal workers)
│   ├── 2022/              # Event images from 2022
│   ├── 2023/              # Event images from 2023
│   ├── 2024/              # Event images from 2024
│   └── partners/          # Partner logos
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── add-faqs/      # FAQ management page
│   │   ├── admin/         # Admin dashboard
│   │   ├── api/           # API routes (upload, notifications, etc.)
│   │   ├── contact/       # Contact page
│   │   ├── events/        # Events page
│   │   ├── faq/           # FAQ page
│   │   ├── leaderboard/   # Leaderboard page
│   │   ├── partners/      # Partners page
│   │   ├── test-notifications/  # Notification testing page
│   │   ├── updates/       # Updates page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   └── providers.tsx  # Context providers
│   ├── components/
│   │   ├── admin/         # Admin-specific components
│   │   ├── shared/        # Shared components (header, footer, etc.)
│   │   └── ui/            # Shadcn UI components
│   ├── contexts/          # React contexts (AuthContext)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and configurations
│   │   ├── firebase.ts    # Firebase setup
│   │   ├── firestore-service.ts  # Firestore operations
│   │   ├── mock-data.ts   # Mock data for development
│   │   └── utils.ts       # Utility functions
│   └── ai/                # Genkit AI integration
├── docs/
│   └── blueprint.md       # Design system and feature specs
├── firestore.rules         # Firestore security rules
├── storage.rules           # Firebase Storage security rules
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

### Phase 2: Core Features ✅
- [x] Firebase integration
- [x] Admin authentication
- [x] CAP Points system
- [x] Live leaderboard
- [x] Firestore data persistence
- [x] Announcements & milestones on home page
- [x] Team ordering with arrows
- [x] Push notifications (OneSignal)

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

## 🔐 Admin Access

The CCA Hub includes a secure admin dashboard for managing content.

### Access Admin Panel
- **Local Development**: http://localhost:3000/admin
- **Production**: https://cca-cmrit.vercel.app/admin

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

## 🚦 Next Steps & Recommendations

- Security: Update Firestore rules to restrict access
- Admin Panel: Add search/filter, analytics, bulk actions
- User Experience: Improve mobile UI, add loading/error states
- Performance: Optimize images, add SEO tags, lazy loading
- Accessibility: Keyboard navigation, ARIA labels
- Code Quality: Add tests, linting, refactor large files
- Monitoring: Add error logging (Sentry/LogRocket)
- Documentation: Expand admin and contributor guides

See [ADMIN_SETUP.md](./ADMIN_SETUP.md) and [FIREBASE_CHECKLIST.md](./FIREBASE_CHECKLIST.md) for setup and migration details.

---

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

**CCA Core Team 2025-2026**

For queries, contact us at [ccacmrit@gmail.com](mailto:ccacmrit@gmail.com)

### Connect With Us
- 🌐 Website: [cca-cmrit.vercel.app](https://cca-cmrit.vercel.app/)
- 💼 LinkedIn: [linkedin.com/company/cca-cmrit](https://www.linkedin.com/company/cca-cmrit/)
- 📸 Instagram: [@cca_cmrit](https://www.instagram.com/cca_cmrit)
- 💬 WhatsApp: [Join our community](https://chat.whatsapp.com/FUYiGlm7jFG9iNJrFOnKNE)

---

## 🌟 Acknowledgments

- CMRIT Management and Faculty
- All CCA members and volunteers
- Partner organizations and mentors
- Open source community

---

<div align="center">
  <strong>Built by C Vishwak Sen, Technical Lead</strong>
  <br>
  <sub>Empowering students, one skill at a time.</sub>
</div>
