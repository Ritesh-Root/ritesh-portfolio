/**
 * Skills and technologies data constants
 *
 * Based on the dependencies and languages used across the GitHub repos
 * (github.com/Ritesh-Root), as of November 2026.
 */

import {
  SiAmazonwebservices,
  SiCapacitor,
  SiFramer,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiHuggingface,
  SiJest,
  SiOpenai,
  SiOpencv,
  SiPlaywright,
  SiPydantic,
  SiPytest,
  SiRust,
  SiSqlite,
  SiThreedotjs,
  SiVitest,
  SiZod,
} from 'react-icons/si';
import { TbPlugConnected } from 'react-icons/tb';
import { Skill, SkillTechnology } from '../types/portfolio';

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    technologies: [
      {
        name: 'TypeScript',
        image: '/logos/ts-logo.png',
        category: 'frontend',
      },
      {
        name: 'JavaScript',
        image: '/logos/js-logo.png',
        category: 'frontend',
      },
      {
        name: 'Python',
        image: '/logos/python-logo.png',
        category: 'backend',
      },
      {
        name: 'Java',
        image: '/logos/java-logo.webp',
        category: 'backend',
      },
      {
        name: 'Rust',
        icon: SiRust,
        color: '#dea584',
        category: 'backend',
      },
    ],
  },
  {
    category: 'Frontend & Mobile',
    technologies: [
      {
        name: 'React.js',
        image: '/logos/react-logo.png',
        category: 'frontend',
      },
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
        category: 'frontend',
      },
      {
        name: 'TailwindCSS',
        image: '/logos/tailwindcss-logo.png',
        category: 'frontend',
      },
      {
        name: 'Vite',
        image: '/logos/vite-logo.webp',
        category: 'frontend',
      },
      {
        name: 'shadcn/ui',
        image: '/logos/shadcn-logo.png',
        category: 'frontend',
      },
      {
        name: 'TanStack Query',
        image: '/logos/react-query-logo.png',
        category: 'frontend',
      },
      {
        name: 'Three.js',
        icon: SiThreedotjs,
        color: '#ffffff',
        category: 'frontend',
      },
      {
        name: 'Framer Motion',
        icon: SiFramer,
        color: '#ffffff',
        category: 'frontend',
      },
      {
        name: 'Capacitor (Android)',
        icon: SiCapacitor,
        color: '#53b9ff',
        category: 'frontend',
      },
    ],
  },
  {
    category: 'Backend & APIs',
    technologies: [
      {
        name: 'Node.js',
        image: '/logos/nodejs-logo.png',
        category: 'backend',
      },
      {
        name: 'Express',
        image: '/logos/express-logo.png',
        category: 'backend',
      },
      {
        name: 'FastAPI',
        image: '/logos/fastapi-logo.webp',
        category: 'backend',
      },
      {
        name: 'Hono',
        image: '/logos/hono-logo.png',
        category: 'backend',
      },
      {
        name: 'Socket.IO',
        image: '/logos/socketio-logo.webp',
        category: 'backend',
      },
      {
        name: 'Zod',
        icon: SiZod,
        color: '#4f7fd9',
        category: 'backend',
      },
      {
        name: 'Pydantic',
        icon: SiPydantic,
        color: '#e92063',
        category: 'backend',
      },
    ],
  },
  {
    category: 'Databases',
    technologies: [
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
      {
        name: 'Supabase',
        image: '/logos/supabase-logo.webp',
        category: 'database',
      },
      {
        name: 'Firebase',
        image: '/logos/firebase-logo.jpg',
        category: 'database',
      },
      {
        name: 'MongoDB',
        image: '/logos/mongodb-logo.webp',
        category: 'database',
      },
      {
        name: 'Redis',
        image: '/logos/redis-logo.png',
        category: 'database',
      },
      {
        name: 'SQLite',
        icon: SiSqlite,
        color: '#0f80cc',
        category: 'database',
      },
    ],
  },
  {
    category: 'AI & LLMs',
    technologies: [
      {
        name: 'Gemini & Vertex AI',
        icon: SiGooglegemini,
        color: '#8e75b2',
        category: 'ai',
      },
      {
        name: 'Claude AI',
        image: '/logos/claude-logo.webp',
        category: 'ai',
      },
      {
        name: 'Amazon Bedrock',
        icon: SiAmazonwebservices,
        color: '#ff9900',
        category: 'ai',
      },
      {
        name: 'OpenAI',
        icon: SiOpenai,
        color: '#ffffff',
        category: 'ai',
      },
      {
        name: 'MCP',
        icon: TbPlugConnected,
        color: '#ffffff',
        category: 'ai',
      },
      {
        name: 'Hugging Face',
        icon: SiHuggingface,
        color: '#ffd21e',
        category: 'ai',
      },
    ],
  },
  {
    category: 'Data & Machine Learning',
    technologies: [
      {
        name: 'Pandas',
        image: '/logos/pandas-logo.svg',
        category: 'ai',
      },
      {
        name: 'NumPy',
        image: '/logos/numpy-logo.svg',
        category: 'ai',
      },
      {
        name: 'Scikit-Learn',
        image: '/logos/sklearn-logo.webp',
        category: 'ai',
      },
      {
        name: 'OpenCV',
        icon: SiOpencv,
        color: '#5c3ee8',
        category: 'ai',
      },
      {
        name: 'Streamlit',
        image: '/logos/streamlit-logo.webp',
        category: 'ai',
      },
    ],
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      {
        name: 'Docker',
        image: '/logos/docker-logo.png',
        category: 'tools',
      },
      {
        name: 'Google Cloud Run',
        icon: SiGooglecloud,
        color: '#4285f4',
        category: 'tools',
      },
      {
        name: 'Vercel',
        image: '/logos/vercel-logo.webp',
        category: 'tools',
      },
      {
        name: 'GitHub Actions',
        icon: SiGithubactions,
        color: '#2088ff',
        category: 'tools',
      },
      {
        name: 'Git',
        image: '/logos/git-logo.png',
        category: 'tools',
      },
      {
        name: 'GitHub',
        image: '/logos/github-logo.webp',
        category: 'tools',
      },
    ],
  },
  {
    category: 'Testing & Quality',
    technologies: [
      {
        name: 'Vitest',
        icon: SiVitest,
        color: '#729b1b',
        category: 'tools',
      },
      {
        name: 'Playwright',
        icon: SiPlaywright,
        color: '#2ead33',
        category: 'tools',
      },
      {
        name: 'pytest',
        icon: SiPytest,
        color: '#0a9edc',
        category: 'tools',
      },
      {
        name: 'Jest',
        icon: SiJest,
        color: '#c21325',
        category: 'tools',
      },
    ],
  },
];

// Export all technologies as a flat array
export const ALL_TECHNOLOGIES: SkillTechnology[] = SKILLS.flatMap(
  skill => skill.technologies
);
