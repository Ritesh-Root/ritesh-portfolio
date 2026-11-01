'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { FadeIn, FadeInStagger } from './FadeIn';
import Button from './Button';
import LinkedinIcon from '@/icons/linkedin';
import GitHubIcon from '@/icons/github';
import { SOCIAL_MEDIA_PROFILES } from '@/lib/constants/personalInfo';

export const socialMediaProfiles = SOCIAL_MEDIA_PROFILES.map(
  ({ title, href }) => ({
    title,
    href,
  })
);

export default function Socials({
  className,
  showContactMe = true,
}: {
  className?: string;
  showContactMe?: boolean;
}) {
  return (
    <FadeInStagger
      role="list"
      className={clsx('mt-5 flex gap-x-4 text-white', className)}
    >
      {socialMediaProfiles.map(({ title, href }) => (
        <FadeIn key={title}>
          <Link
            href={href}
            target="_blank"
            aria-label={title}
            className="-m-2 inline-flex p-2 transition duration-200 hover:text-white/80"
          >
            {title === 'Linkedin' && (
              <LinkedinIcon className="h-6 w-6 fill-current" />
            )}
            {title === 'GitHub' && (
              <GitHubIcon className="h-6 w-6 fill-current" />
            )}
          </Link>
        </FadeIn>
      ))}
      {showContactMe && (
        <FadeIn>
          <Button
            className="relative flex items-center gap-x-2 after:absolute after:-inset-y-2 after:inset-x-0 after:content-['']"
            href="/#contact"
            variant="secondary"
            arrow="right"
          >
            Contact Me
          </Button>
        </FadeIn>
      )}
    </FadeInStagger>
  );
}
