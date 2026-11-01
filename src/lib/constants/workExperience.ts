/**
 * Work experience data constants
 */

import { WorkExperience } from '../types/portfolio';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'btech-cse',
    title: 'B.Tech CSE Student & AI Full-Stack Developer',
    company: "ITER, Siksha 'O' Anusandhan University",
    position: 'B.Tech CSE & AI Full-Stack Developer',
    startDate: '2025',
    endDate: '2029',
    description:
      'Studying Computer Science & Engineering while building GenAI agents, LLM systems and full-stack products, mostly at hackathons.',
    achievements: [
      {
        title: 'Hackathons',
        description:
          '15+ hackathon builds shipped in 2026, all public on GitHub. 2nd prize at CODENEXUS, 3rd place at CODEFOLIO, Top 10 in Google Code for Communities 2.0 and Rank 6 in PromptWars Virtual.',
      },
      {
        title: 'PulsePay',
        description:
          "Solo-built a phone-less payment system for India's underbanked: face, fingerprint and voice confirm payments, using three Amazon Nova models (multimodal embeddings, Nova 2 Lite risk scoring, Nova 2 Sonic voice). Bonus prize at the Amazon Nova AI Hackathon.",
      },
      {
        title: 'AGORA',
        description:
          'A society of LLM agents that split up tasks, debate approaches and assign themselves work, shown live in a 3D office in the browser, with every agent-to-agent call routed through one observable mesh.',
      },
      {
        title: 'SwarmPilot',
        description:
          'Runs four specialised agents in parallel (code review, research, dependency analysis, synthesis) and merges them into one report, with shared Zod schemas enforcing the API contract end to end.',
      },
      {
        title: 'EventAI Concierge',
        description:
          'A streaming multimodal assistant for physical events: voice in and out, Gemini Vision photo questions and a floor map that highlights answers, grounded in venue data to avoid made-up directions.',
      },
      {
        title: 'Self-Heal Runtime',
        description:
          'Detects Java crashes at runtime, extracts the AST context around the failure, asks Gemini for a patch, applies it and re-runs verification, with a live Next.js dashboard.',
      },
    ],
    technologies: [
      { name: 'Python', image: '/logos/python-logo.png', category: 'backend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
        category: 'frontend',
      },
      {
        name: 'FastAPI',
        image: '/logos/fastapi-logo.webp',
        category: 'backend',
      },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      { name: 'Claude', image: '/logos/claude-logo.webp', category: 'ai' },
      { name: 'Gemini', image: '/logos/google-ai-logo.png', category: 'ai' },
      { name: 'AWS Bedrock', image: '/logos/s3-logo.png', category: 'ai' },
      { name: 'Docker', image: '/logos/docker-logo.png', category: 'tools' },
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
