🚀 Mini-ATS

> A modern, lightning-fast recruitment platform built for speed and simplicity.**
> Manage jobs, track candidates via Kanban, and streamline your hiring process.

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Live Demo: https://b1-loop.github.io/loop-portal/
Overview

Mini-ATS is a full-featured recruitment tool designed to bridge the gap between complex enterprise software and simple spreadsheets. It features a **public-facing application portal** for candidates and a **secure dashboard** for recruiters, all powered by a real-time database.

Unlike bloated legacy systems, Mini-ATS focuses on developer experience and UI responsiveness, utilizing React 19 and Supabase for instantaneous state synchronization.

Key Features

Interactive Kanban** - Drag-and-drop candidates through stages (*New, Interview, Offer, Hired)
Real-time Database - Instant UI updates across devices using Supabase Realtime
Role-Based Security - Admin vs. Recruiter roles with strict Row-Level Security (RLS)
Public Portal - Dedicated landing pages for candidates to apply and upload CVs
Smart Search - Filter candidates by job, status, or name instantly

---

📸 Features Breakdown

For Recruiters
| Feature | Description |
| :--- | :--- |
| Pipeline Board Visual Kanban board with drag-and-drop (via `@hello-pangea/dnd`). |
| Job Management | Create, edit, and toggle visibility of job postings. |
| Candidate Profiles | Rich profile view with CV preview (PDF) and contact actions. |
| Quick Actions | Email candidates directly or move stages with one click. |
| Real-time Sync | See when a colleague updates a candidate instantly. |

For Candidates (Public Portal)
| Feature | Description |
| :--- | :--- |
| **Job Board** | Clean, branded list of available open positions. |
| **Application Form** | validated forms with file upload support. |
| **Secure Uploads** | Resumes are uploaded directly to private storage buckets. |

 Technical Highlights
| Feature | Description |
| :--- | :--- |
| **Row Level Security** | Database policies ensure users only access their own data. |
| **Optimistic UI** | React Query ensures the interface feels instant. |
| **Type Safety** | End-to-end TypeScript with strict Zod validation. |
| **Edge Performance** | Served via Vite for minimal load times. |

🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 19 + Vite |
| **Language** | TypeScript 5 |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **Styling** | TailwindCSS + Lucide Icons |
| **State Management** | TanStack Query |
| **Drag & Drop** | @hello-pangea/dnd |
| **Forms** | React Hook Form + Zod |

---

🚀 Quick Start

Prerequisites
* Node.js 18+
* Supabase Account (Free Tier)

Installation

1.  **Clone repository
    ```bash
    git clone [https://github.com/your-username/mini-ats.git](https://github.com/your-username/mini-ats.git)
    cd mini-ats
    ```
2.  Install dependencies
    ```bash
    npm install
    ```
3.  Setup Environment
    Create a `.env` file in the root directory:
    ```env
    VITE_SUPABASE_URL=your_project_url
    VITE_SUPABASE_ANON_KEY=your_anon_key
    ```

4.  Database Setup
    Run the SQL scripts located in `supabase/schema.sql` inside your Supabase SQL Editor to create tables and RLS policies.

5.  Start Development Server
    ```bash
    npm run dev
    ```

---

📂 Project Structure

```text
mini-ats/
├── src/
│   ├── components/        # Shared UI components
│   │   ├── ui/           # Buttons, Inputs, Modals
│   │   └── layout/       # Sidebar, Navbar
│   ├── features/          # Feature-based architecture
│   │   ├── auth/         # Login/Register logic
│   │   ├── board/        # Kanban board components
│   │   ├── jobs/         # Job listing & creation
│   │   └── public/       # Public candidate portal
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Supabase client & utils
│   ├── types/            # TypeScript interfaces
│   └── App.tsx           # Main entry point
├── supabase/             # SQL migrations & types
├── public/               # Static assets
└── index.html
________________________________________
💾 Database Schema
Core Tables
Table	Description
profiles	Extends auth.users, handles roles (admin, customer).
jobs	Stores job postings, salary range, and active status.
candidates	Candidate data, linked to jobs. Stores CV URLs.
Security (RLS)
•	Authentication: Managed via Supabase Auth (Email/Password).
•	Authorization:
o	jobs can only be edited by the creator (Recruiter).
o	candidates can only be viewed by the Recruiter who owns the Job.
o	Public access allowed ONLY for inserting new applications.
________________________________________
🚦 Status
Component	Status
Core Features	✅ Complete
Kanban Board	✅ Production Ready
Public Portal	✅ Complete
RLS Security	✅ Implemented
File Uploads	✅ Implemented
Testing	🚧 In Progress
Dark Mode	🗓️ Roadmap
________________________________________
📄 License
MIT License - see LICENSE for details.
________________________________________
Built  by Bozhidar N Ivanov

