import React from 'react';
import {
  AppPageLayout,
  type AppPageMetadata,
  type AppPageSection,
} from '@/components/layout';
import {
  FeaturesSection,
  TechnologiesSection,
  CustomListSection,
} from '@/components/sections';
import { ChallengeIcon, TechnologiesIcon } from '@/icons';
import { TbCircleKeyFilled } from 'react-icons/tb';

export const sections = [
  { index: 0, title: 'About', id: 'about' },
  { index: 1, title: 'Features', id: 'features' },
  { index: 2, title: 'Challenges', id: 'keyOutcomes' },
  { index: 3, title: 'Technologies', id: 'technologies' },
];

const metadata: AppPageMetadata = {
  title: 'AI Finance Copilot - Smart NSE Market Advisor',
  description:
    'An intelligent financial advisory platform specialized in Indian NSE market analysis. Combines real-time stock monitoring with AI-powered predictions, community discussion, portfolio tracking, and gamified financial education.',
  industry: 'FinTech',
  developedIn: '2026',
  projectType: 'Hackathon',
  service: 'Financial Advisory Platform',
  websiteUrl: 'https://gift-hackathon-website.vercel.app',
};

const technologies = [
  {
    name: 'React 19',
    image: '/logos/react-logo.png',
    link: 'https://react.dev/',
  },
  {
    name: 'TypeScript',
    image: '/logos/ts-logo.png',
    link: 'https://typescriptlang.org/',
  },
  {
    name: 'Vite',
    image: '/logos/vite-logo.webp',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Supabase',
    image: '/logos/supabase-logo.webp',
    link: 'https://supabase.com/',
  },
  {
    name: 'Groq API',
    image: '/logos/groq-logo.webp',
    link: 'https://groq.com/',
  },
  {
    name: 'ECharts',
    image: '/logos/echarts-logo.svg',
    link: 'https://echarts.apache.org/',
  },
];

const features = [
  'Live NSE ticker tracking with real-time simulated updates.',
  'AI-driven stock price analysis and forecasting using Groq API (LLaMA & Mixtral).',
  'Real-time community discussion powered by Supabase Realtime.',
  'Portfolio tracking with persistent data storage.',
  'Gamified financial education modules for learning investing concepts.',
  'Personalized AI financial advisor with contextual recommendations.',
];

const challenges = [
  {
    content:
      'Integrating real-time stock data feeds with low-latency UI updates.',
  },
  {
    content:
      'Building a responsive glassmorphism UI with smooth animations and ECharts visualizations.',
  },
  {
    content:
      'Implementing real-time community features with Supabase while maintaining data consistency.',
  },
];

const AIFinanceCopilot = () => {
  const pageSections: AppPageSection[] = [
    {
      id: 'features',
      title: 'Features',
      icon: <ChallengeIcon width="28" height="28" />,
      content: <FeaturesSection features={features} />,
    },
    {
      id: 'keyOutcomes',
      title: 'Challenges',
      icon: <TbCircleKeyFilled size={28} fill="#ed8864" />,
      content: <CustomListSection items={challenges} />,
    },
    {
      id: 'technologies',
      title: 'Technologies',
      icon: <TechnologiesIcon width="28" height="28" fill="white" />,
      content: <TechnologiesSection technologies={technologies} />,
    },
  ];

  return <AppPageLayout metadata={metadata} sections={pageSections} />;
};

export default AIFinanceCopilot;
