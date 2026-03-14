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
  title: 'CaneGrade AI - Smart Sugarcane Valuation',
  description:
    'An AI-powered gate-entry valuation system for sugar mills that calculates Net Clean Cane (NCC) using computer vision and predictive analytics. Features real-time trash detection, sugar recovery prediction, and quality-adjusted payment recommendations.',
  industry: 'AgriTech',
  developedIn: '2026',
  projectType: 'Hackathon',
  service: 'AI/ML Application',
  websiteUrl: 'https://github.com/Ritesh-Root/CaneGradeAI',
};

const technologies = [
  {
    name: 'Python',
    image: '/logos/python-logo.png',
    link: 'https://python.org/',
  },
  {
    name: 'Streamlit',
    image: '/logos/streamlit-logo.png',
    link: 'https://streamlit.io/',
  },
  {
    name: 'Scikit-Learn',
    image: '/logos/sklearn-logo.png',
    link: 'https://scikit-learn.org/',
  },
  {
    name: 'Pandas',
    image: '/logos/pandas-logo.png',
    link: 'https://pandas.pydata.org/',
  },
  { name: 'NumPy', image: '/logos/numpy-logo.png', link: 'https://numpy.org/' },
  {
    name: 'Pillow',
    image: '/logos/python-logo.png',
    link: 'https://pillow.readthedocs.io/',
  },
];

const features = [
  'Vision module detects trash percentage, red rot disease, and dry cane skin with visual annotations.',
  'Regression model predicts sugar recovery using trash levels, harvest time, cane variety, weather, and condition.',
  'Financial dashboard calculates net weight and rupee-based loss per truckload.',
  'Categorical recommendations: ACCEPT (green), WARNING with penalty (yellow), or REJECT (red).',
  'AI-annotated images with bounding boxes for operator verification.',
];

const challenges = [
  {
    content:
      'Generating reliable synthetic training data for the ML model with 800+ samples.',
  },
  {
    content:
      'Designing a vision pipeline that works with varying lighting and camera conditions at mill gates.',
  },
  {
    content:
      'Balancing accuracy vs speed for real-time processing of truckload assessments.',
  },
];

const CaneGradeAI = () => {
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

export default CaneGradeAI;
