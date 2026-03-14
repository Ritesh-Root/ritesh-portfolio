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
  title: 'Self-Heal Runtime - Autonomous Bug Fixer',
  description:
    'An intelligent runtime system for Java applications that autonomously identifies, analyzes, and fixes crashes using AI and abstract syntax tree (AST) parsing. Features automated crash detection, contextual code analysis, and a real-time monitoring dashboard.',
  industry: 'DevTools',
  developedIn: '2026',
  projectType: 'Hackathon',
  service: 'Developer Tool',
  websiteUrl: 'https://github.com/Ritesh-Root/Self-heal-Runtime-2026-amd',
};

const technologies = [
  {
    name: 'Java',
    image: '/logos/java-logo.png',
    link: 'https://www.java.com/',
  },
  {
    name: 'Next.js',
    image: '/logos/nextjs-logo.png',
    link: 'https://nextjs.org/',
  },
  { name: 'React', image: '/logos/react-logo.png', link: 'https://react.dev/' },
  {
    name: 'Tailwind CSS',
    image: '/logos/tailwindcss-logo.png',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Gemini AI',
    image: '/logos/gemini-logo.png',
    link: 'https://ai.google.dev/',
  },
  {
    name: 'Maven',
    image: '/logos/java-logo.png',
    link: 'https://maven.apache.org/',
  },
];

const features = [
  'Automated crash detection by monitoring Java process stderr output.',
  'Contextual code analysis using JavaParser to extract broken methods with full class state.',
  'AI-powered repairs via Gemini 2.0 Flash with multi-layered defensive fix strategies.',
  'Heuristic fallback safety mechanism (null checks, exception handling) when API is unavailable.',
  'Real-time Next.js dashboard displaying diagnosis, repair, and verification workflows.',
];

const challenges = [
  {
    content:
      'Parsing complex Java AST structures to provide meaningful context for AI repairs.',
  },
  {
    content:
      'Building a reliable crash detection pipeline that captures stderr without blocking the runtime.',
  },
  {
    content:
      'Designing AI prompts that generate safe, compilable Java fixes without introducing regressions.',
  },
];

const SelfHealRuntime = () => {
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

export default SelfHealRuntime;
