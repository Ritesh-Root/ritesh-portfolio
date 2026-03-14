/**
 * Work experience data constants
 */

import { WorkExperience } from '../types/portfolio';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'btech-cse',
    title: 'B.Tech CSE Student & AI Developer',
    company: "Siksha 'O' Anusandhan University",
    position: 'B.Tech CSE Student & Full Stack AI Developer',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Pursuing B.Tech in Computer Science & Engineering while actively building AI-powered projects and competing in hackathons.',
    achievements: [
      {
        title: 'Hackathon Competitor',
        description:
          'Actively participating in national and regional hackathons, building innovative AI solutions under tight deadlines and competing with top engineering talent.',
      },
      {
        title: 'CaneGrade AI',
        description:
          'Built an AI-powered gate-entry valuation system for sugar mills using computer vision and predictive analytics with Python, Streamlit, and Scikit-Learn.',
      },
      {
        title: 'SmartShield AI',
        description:
          'Developed a real-time digital safety platform that detects online harassment using text toxicity analysis, NSFW image detection, and behavioral pattern tracking.',
      },
      {
        title: 'AI Finance Copilot',
        description:
          'Created an intelligent financial advisory platform for the Indian NSE market with real-time stock monitoring, AI predictions, and community features using React, TypeScript, and Supabase.',
      },
      {
        title: 'Self-Heal Runtime',
        description:
          'Built an autonomous runtime system that detects and fixes Java application crashes using AI and AST parsing, with a real-time Next.js monitoring dashboard.',
      },
      {
        title: 'AI & Automation Enthusiast',
        description:
          'Passionate about using AI tools like Claude for development, automation workflows, and building intelligent developer tools that enhance productivity.',
      },
    ],
    technologies: [
      { name: 'Python', image: '/logos/python-logo.png', category: 'backend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
        category: 'frontend',
      },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      {
        name: 'FastAPI',
        image: '/logos/fastapi-logo.webp',
        category: 'backend',
      },
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
    ],
    companyLogo: {
      src: '/logos/university-logo.png',
      alt: "Siksha 'O' Anusandhan Logo",
      width: 100,
      height: 100,
    },
    isCurrentRole: true,
  },
] as const;
