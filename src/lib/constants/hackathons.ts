/**
 * Hackathon results and certifications
 */

import { CertificationGroup, HackathonResult } from '../types/portfolio';

export const HACKATHON_BUILDS_2026 = '15+';

export const HACKATHONS: HackathonResult[] = [
  {
    id: 'codenexus',
    result: '2nd Prize',
    tier: 'prize',
    event: 'CODENEXUS Hackathon',
    organizer: 'Festronix 2026',
    date: '2026',
    project: {
      name: 'AI Finance Copilot',
      href: '/apps/ai-finance-copilot',
    },
  },
  {
    id: 'codefolio',
    result: '3rd Place',
    tier: 'prize',
    event: 'CODEFOLIO',
    organizer: 'F.A.C.E, SPIT',
    date: 'Mar 2026',
  },
  {
    id: 'amazon-nova',
    result: 'Bonus Prize: Best Blog Post',
    tier: 'prize',
    event: 'Amazon Nova AI Hackathon',
    organizer: 'Amazon',
    date: '2026',
    project: {
      name: 'PulsePay',
      href: 'https://github.com/Ritesh-Root/pulsepay',
    },
  },
  {
    id: 'google-c4c',
    result: 'Top 10 Finalist',
    tier: 'finalist',
    event: 'Code for Communities 2.0',
    organizer: 'Google',
    date: 'Oct 2026',
    detail: 'Track 3: Smart Health & Supply Chain',
    project: {
      name: 'Aarogya-Vayu',
      href: 'https://aarogya-vayu.vercel.app',
    },
  },
  {
    id: 'promptwars',
    result: 'Rank 6 · Top 10',
    tier: 'finalist',
    event: 'PromptWars Virtual',
    organizer: 'Google for Developers × Hack2skill',
    date: 'Aug 2026',
    detail: 'Challenge 3',
  },
  {
    id: 'sbi-gff',
    result: 'Shortlisted',
    tier: 'shortlist',
    event: 'SBI Hackathon',
    organizer: 'Global Fintech Fest 2026',
    date: '2026',
    detail: 'Idea Submission phase',
  },
];

export const CERTIFICATIONS: CertificationGroup[] = [
  {
    issuer: 'Google Cloud',
    items: [
      'Machine Learning APIs',
      'Gemini Enterprise Application',
      'Cloud Networking',
      'AI Agents',
      'Agent Development Kit (ADK)',
    ],
  },
  {
    issuer: 'Anthropic Academy',
    items: [
      'Claude Code in Action',
      'Model Context Protocol (MCP)',
      'Agent Skills & Subagents',
    ],
  },
  {
    issuer: 'AWS Educate',
    items: ['ML Foundations', 'Generative AI'],
  },
];
