/**
 * Personal information constants
 */

export const PERSONAL_INFO = {
  name: 'Ritesh Kumar Mahato',
  title: 'AI Full-Stack Developer',
  shortBio:
    "I build GenAI agents, LLM systems and full-stack products, and I've shipped 10+ end-to-end projects across payments, multi-agent systems and multimodal assistants, each with a public repo and a working demo. I'm comfortable owning a product solo: API design, LLM orchestration, frontend and deployment.",
  extendedBio:
    "I'm a B.Tech CSE student at ITER, Siksha 'O' Anusandhan University (2025–2029). In 2026 I shipped 15+ hackathon builds, placed in national hackathons and made the Top 10 of Google's Code for Communities 2.0. I'm looking for an AI engineering / GenAI full-stack internship building production LLM features.",
  profileImage: {
    src: '/ritesh-profile.png',
    alt: 'ritesh portrait',
    width: 200,
    height: 200,
  },
  languages: [
    {
      name: 'English',
      level: 'Advanced',
    },
    {
      name: 'Hindi',
      level: 'Native',
    },
  ],
} as const;

export const CONTACT_INFO = {
  email: 'riteshmahatowork@gmail.com',
  emailSubject: 'Reach out from portfolio',
} as const;

export const SOCIAL_MEDIA_PROFILES = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/riteshhoon',
    platform: 'linkedin',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Ritesh-Root',
    platform: 'github',
  },
] as const;
