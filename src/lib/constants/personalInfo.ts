/**
 * Personal information constants
 */

export const PERSONAL_INFO = {
  name: 'Ritesh Kumar Mahato',
  title: 'Full Stack AI Developer',
  shortBio:
    'I am a Full Stack AI Developer who loves building seamless, user-centric technology from the database to the interface. Whether competing in hackathons or developing autonomous AI tools, I am driven by the thrill of practical problem-solving.',
  extendedBio:
    'Currently a B.Tech CSE student with a passion for AI, automation, and building impactful products. I leverage tools like Claude, modern frameworks, and AI APIs to create intelligent solutions that make a real difference.',
  profileImage: {
    src: '/ritesh-profile.png',
    alt: 'ritesh portrait',
    width: 200,
    height: 208,
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
