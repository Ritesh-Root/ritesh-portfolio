/**
 * Site-wide configuration constants
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://riteshhoon.online';

export const SITE_CONFIG = {
  name: 'Ritesh Portfolio',
  title: 'Ritesh Kumar Mahato - Full Stack AI Developer',
  description:
    'Portfolio website showcasing full-stack AI development projects, hackathon wins, and experience',
  url: SITE_URL,
  hosting: {
    provider: 'Vercel',
    url: SITE_URL,
  },
  author: {
    name: 'Ritesh Kumar Mahato',
    email: 'riteshmahatowork@gmail.com',
    github: 'https://github.com/Ritesh-Root',
    linkedin: 'https://www.linkedin.com/in/riteshhoon',
  },
  social: {
    github: 'https://github.com/Ritesh-Root',
    linkedin: 'https://www.linkedin.com/in/riteshhoon',
    email: 'riteshmahatowork@gmail.com',
  },
} as const;

export const THEME_CONFIG = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#ffffff',
    foreground: '#0f172a',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;
