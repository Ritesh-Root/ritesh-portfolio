/**
 * Skills and technologies data constants
 */

import { Skill, Technology } from '../types/portfolio';

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    technologies: [
      {
        name: 'Python',
        image: '/logos/python-logo.png',
        category: 'backend',
      },
      {
        name: 'JavaScript',
        image: '/logos/js-logo.png',
        category: 'frontend',
      },
      {
        name: 'TypeScript',
        image: '/logos/ts-logo.png',
        category: 'frontend',
      },
      {
        name: 'Java',
        image: '/logos/java-logo.webp',
        category: 'backend',
      },
    ],
  },
  {
    category: 'Frontend Frameworks',
    technologies: [
      {
        name: 'HTML5',
        image: '/logos/html5-logo.png',
        category: 'frontend',
      },
      {
        name: 'CSS3',
        image: '/logos/css-logo.png',
        category: 'frontend',
      },
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
    ],
  },
  {
    category: 'Backend & Databases',
    technologies: [
      {
        name: 'Node.js',
        image: '/logos/nodejs-logo.png',
        category: 'backend',
      },
      {
        name: 'FastAPI',
        image: '/logos/fastapi-logo.webp',
        category: 'backend',
      },
      {
        name: 'Supabase',
        image: '/logos/supabase-logo.webp',
        category: 'backend',
      },
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
      {
        name: 'MongoDB',
        image: '/logos/mongodb-logo.webp',
        category: 'database',
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    technologies: [
      {
        name: 'Claude AI',
        image: '/logos/claude-logo.webp',
        category: 'ai',
      },
      {
        name: 'HuggingFace',
        image: '/logos/huggingface-logo.webp',
        category: 'ai',
      },
      {
        name: 'Scikit-Learn',
        image: '/logos/sklearn-logo.webp',
        category: 'ai',
      },
      {
        name: 'Streamlit',
        image: '/logos/streamlit-logo.webp',
        category: 'ai',
      },
      {
        name: 'Groq API',
        image: '/logos/groq-logo.webp',
        category: 'ai',
      },
    ],
  },
  {
    category: 'Tools & Automation',
    technologies: [
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
      {
        name: 'Docker',
        image: '/logos/docker-logo.png',
        category: 'tools',
      },
      {
        name: 'Vercel',
        image: '/logos/vercel-logo.webp',
        category: 'tools',
      },
      {
        name: 'AI Automation',
        image: '/logos/ai-automation-logo.webp',
        category: 'tools',
      },
    ],
  },
] as const;

// Export individual technology arrays for easier access
export const PROGRAMMING_LANGUAGES = SKILLS[0]?.technologies || [];
export const FRONTEND_FRAMEWORKS = SKILLS[1]?.technologies || [];
export const BACKEND_FRAMEWORKS = SKILLS[2]?.technologies || [];
export const AI_ML_TECHNOLOGIES = SKILLS[3]?.technologies || [];
export const DEVELOPMENT_TOOLS = SKILLS[4]?.technologies || [];

// Export all technologies as a flat array
export const ALL_TECHNOLOGIES: Technology[] = SKILLS.flatMap(
  skill => skill.technologies
);
