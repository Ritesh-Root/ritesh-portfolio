import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {
  TopBar,
  BottomBar,
  ActivityBar,
  TabContainer,
} from '@/components/layout';
import NavigationChange from '@/components/NavigationChange';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import { sections } from './page';
import { sections as canegradeAiSections } from '@/app/apps/canegrade-ai/page';
import { sections as smartshieldAiSections } from '@/app/apps/smartshield-ai/page';
import { sections as aiFinanceCopilotSections } from '@/app/apps/ai-finance-copilot/page';
import { sections as selfHealRuntimeSections } from '@/app/apps/self-heal-runtime/page';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ritesh Kumar Mahato - Portfolio',
  description:
    'Full Stack AI Developer portfolio showcasing projects, skills, and hackathon work.',
};

export interface MyWork {
  title: string;
  description: string;
  url: string;
  pathname: string;
  href: string;
  framework: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainSection = {
    '/': sections,
    '/apps/canegrade-ai': canegradeAiSections,
    '/apps/smartshield-ai': smartshieldAiSections,
    '/apps/ai-finance-copilot': aiFinanceCopilotSections,
    '/apps/self-heal-runtime': selfHealRuntimeSections,
  };

  const myWork: MyWork[] = [
    {
      title: 'CaneGrade-AI.py',
      description:
        'AI-powered gate-entry valuation system for sugar mills using computer vision and predictive analytics.',
      url: 'https://github.com/Ritesh-Root/CaneGradeAI',
      pathname: '/apps/canegrade-ai',
      href: '/apps/canegrade-ai',
      framework: 'python',
    },
    {
      title: 'SmartShield-AI.py',
      description:
        'Real-time digital safety system that detects and mitigates online harassment using AI-powered text, image, and behavioral analysis.',
      url: 'https://github.com/Ritesh-Root/Ai-creep-avoid',
      pathname: '/apps/smartshield-ai',
      href: '/apps/smartshield-ai',
      framework: 'python',
    },
    {
      title: 'AI-Finance-Copilot.tsx',
      description:
        'Intelligent financial advisory platform for the Indian NSE market with real-time stock monitoring and AI-powered predictions.',
      url: 'https://gift-hackathon-website.vercel.app',
      pathname: '/apps/ai-finance-copilot',
      href: '/apps/ai-finance-copilot',
      framework: 'react',
    },
    {
      title: 'Self-Heal-Runtime.java',
      description:
        'Autonomous runtime system that detects and fixes Java application crashes using AI and AST parsing.',
      url: 'https://github.com/Ritesh-Root/Self-heal-Runtime-2026-amd',
      pathname: '/apps/self-heal-runtime',
      href: '/apps/self-heal-runtime',
      framework: 'react',
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex max-h-screen min-h-screen flex-col scroll-smooth bg-dark_bg antialiased`}
      >
        <TopBar />
        <main className="relative flex flex-1 overflow-hidden">
          <ActivityBar sections={mainSection} myWork={myWork} />
          <div className="flex w-full flex-col overflow-hidden">
            <TabContainer />
            {children}
          </div>
        </main>
        <BottomBar />
        <NavigationChange allPaths={[...myWork]} />
        <PerformanceMonitor />
      </body>
    </html>
  );
}
