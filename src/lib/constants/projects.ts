/**
 * Projects data constants
 */

import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'canegrade-ai',
    title: 'CaneGrade AI',
    description:
      'An AI-powered gate-entry valuation system for sugar mills that calculates Net Clean Cane using computer vision and predictive analytics. Features real-time trash detection, recovery estimation, and quality-adjusted payment decisions.',
    url: '/apps/canegrade-ai',
    pathname: '/apps/canegrade-ai',
    href: '/apps/canegrade-ai',
    framework: 'Python',
    category: 'ai-ml',
    technologies: [
      { name: 'Python', image: '/logos/python-logo.png', category: 'backend' },
      {
        name: 'Streamlit',
        image: '/logos/streamlit-logo.webp',
        category: 'frontend',
      },
      {
        name: 'Scikit-Learn',
        image: '/logos/sklearn-logo.webp',
        category: 'backend',
      },
      { name: 'Pandas', image: '/logos/pandas-logo.svg', category: 'backend' },
      { name: 'NumPy', image: '/logos/numpy-logo.svg', category: 'backend' },
    ],
    images: [
      {
        src: '/projects/canegrade-ai.svg',
        alt: 'CaneGrade AI Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Computer vision trash detection',
      'Sugar recovery prediction via ML',
      'AI-annotated image output',
      'Financial loss calculation',
      'Accept/Warn/Reject recommendation system',
    ],
    industry: 'AgriTech',
    projectType: 'AI/ML Application',
    service: 'Agricultural Quality Assessment',
  },
  {
    id: 'smartshield-ai',
    title: 'SmartShield AI',
    description:
      'A real-time digital safety system that detects and mitigates online harassment using AI. Combines text toxicity analysis, NSFW image detection, and behavioral pattern tracking into a unified threat score.',
    url: '/apps/smartshield-ai',
    pathname: '/apps/smartshield-ai',
    href: '/apps/smartshield-ai',
    framework: 'FastAPI',
    category: 'ai-ml',
    technologies: [
      { name: 'Python', image: '/logos/python-logo.png', category: 'backend' },
      {
        name: 'FastAPI',
        image: '/logos/fastapi-logo.webp',
        category: 'backend',
      },
      {
        name: 'HuggingFace',
        image: '/logos/huggingface-logo.webp',
        category: 'backend',
      },
      {
        name: 'JavaScript',
        image: '/logos/js-logo.png',
        category: 'frontend',
      },
    ],
    images: [
      {
        src: '/projects/smartshield-ai.svg',
        alt: 'SmartShield AI Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Real-time toxic text detection (Toxic-BERT)',
      'NSFW image classification',
      'Unified Creep Score (0-1)',
      'Content disposition: Allow/Warn/Blur/Block',
      'Explainable AI reasoning',
      'Privacy-first ephemeral storage',
    ],
    industry: 'Safety Tech',
    projectType: 'AI Safety Platform',
    service: 'Online Harassment Detection',
  },
  {
    id: 'ai-finance-copilot',
    title: 'AI Finance Copilot',
    description:
      'An intelligent financial advisory platform for the Indian NSE market, combining real-time stock monitoring with AI-powered predictions, community discussion, and gamified financial education.',
    url: '/apps/ai-finance-copilot',
    pathname: '/apps/ai-finance-copilot',
    href: '/apps/ai-finance-copilot',
    framework: 'React',
    category: 'web-app',
    technologies: [
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      {
        name: 'Supabase',
        image: '/logos/supabase-logo.webp',
        category: 'backend',
      },
      { name: 'Vite', image: '/logos/vite-logo.webp', category: 'frontend' },
    ],
    images: [
      {
        src: '/projects/ai-finance-copilot.png',
        alt: 'AI Finance Copilot Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Live NSE ticker with real-time updates',
      'AI stock price analysis & forecasting',
      'Real-time community discussion',
      'Portfolio tracking with persistence',
      'Gamified financial education',
      'Personalized AI financial advisor',
    ],
    industry: 'FinTech',
    projectType: 'Full-stack Web Application',
    service: 'Financial Advisory Platform',
  },
  {
    id: 'self-heal-runtime',
    title: 'Self-Heal Runtime',
    description:
      'An intelligent runtime system for Java applications that autonomously identifies, analyzes, and fixes crashes using AI and AST parsing. Features a real-time dashboard for monitoring diagnosis and repair workflows.',
    url: '/apps/self-heal-runtime',
    pathname: '/apps/self-heal-runtime',
    href: '/apps/self-heal-runtime',
    framework: 'Next.js',
    category: 'web-app',
    technologies: [
      { name: 'Java', image: '/logos/java-logo.webp', category: 'backend' },
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
        category: 'frontend',
      },
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      {
        name: 'Tailwind CSS',
        image: '/logos/tailwindcss-logo.png',
        category: 'frontend',
      },
    ],
    images: [
      {
        src: '/projects/self-heal-runtime.png',
        alt: 'Self-Heal Runtime Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Automated crash detection',
      'AST-based contextual code analysis',
      'AI-powered repairs via Gemini',
      'Heuristic fallback safety',
      'Real-time Next.js dashboard',
    ],
    industry: 'DevTools',
    projectType: 'Developer Tool',
    service: 'Autonomous Bug Fixing',
  },
] as const;

// Export projects by category for easier filtering
export const WEB_APPS = PROJECTS.filter(
  project => project.category === 'web-app'
);
export const AI_ML_APPS = PROJECTS.filter(
  project => project.category === 'ai-ml'
);
export const MOBILE_APPS = PROJECTS.filter(
  project => project.category === 'mobile-app'
);
export const STATIC_SITES = PROJECTS.filter(
  project => project.category === 'static-site'
);
export const DAPPS = PROJECTS.filter(project => project.category === 'dapp');
