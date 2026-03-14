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
  title: 'SmartShield AI - Digital Safety Platform',
  description:
    'A real-time digital safety system that detects and mitigates online harassment. Combines text toxicity analysis (Toxic-BERT), NSFW image detection (NudeNet), and behavioral pattern tracking into a unified Creep Score with explainable AI reasoning.',
  industry: 'Safety Tech',
  developedIn: '2026',
  projectType: 'Hackathon',
  service: 'AI Safety Platform',
  websiteUrl: 'https://github.com/Ritesh-Root/Ai-creep-avoid',
};

const technologies = [
  {
    name: 'Python',
    image: '/logos/python-logo.png',
    link: 'https://python.org/',
  },
  {
    name: 'FastAPI',
    image: '/logos/fastapi-logo.png',
    link: 'https://fastapi.tiangolo.com/',
  },
  {
    name: 'HuggingFace',
    image: '/logos/huggingface-logo.png',
    link: 'https://huggingface.co/',
  },
  {
    name: 'JavaScript',
    image: '/logos/js-logo.png',
    link: 'https://developer.mozilla.org/',
  },
  {
    name: 'Pytest',
    image: '/logos/python-logo.png',
    link: 'https://pytest.org/',
  },
];

const features = [
  'Real-time toxic text detection using Toxic-BERT transformer model.',
  'NSFW image classification using NudeNet and Falconsai detector.',
  'Unified Creep Score (0-1) integrating multiple risk factors.',
  'Content disposition system: ALLOW, WARN, BLUR, or BLOCK based on threat level.',
  'Explainable AI with human-readable reasoning for every flagged item.',
  'Privacy-first architecture using ephemeral session storage.',
];

const challenges = [
  {
    content:
      'Integrating multiple AI models (text + image + behavioral) into a unified scoring pipeline.',
  },
  {
    content:
      'Ensuring real-time performance while running heavy transformer models for text analysis.',
  },
  {
    content:
      'Designing a privacy-first architecture that processes sensitive content without permanent storage.',
  },
];

const SmartShieldAI = () => {
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

export default SmartShieldAI;
