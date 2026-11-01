'use client';

import { memo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {
  TbExternalLink,
  TbMedal,
  TbRosetteDiscountCheck,
  TbTrophy,
} from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { FadeIn, FadeInStagger } from '../FadeIn';
import Pill from '../Pill';
import { CERTIFICATIONS, HACKATHONS } from '@/lib/constants/hackathons';
import { HackathonResult } from '@/lib/types/portfolio';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';
import { LoadingSpinner } from '../ui/LoadingSpinner';

const TIER_STYLES: Record<
  HackathonResult['tier'],
  { icon: IconType; text: string }
> = {
  prize: { icon: TbTrophy, text: 'text-[#f2c94c]' },
  finalist: { icon: TbMedal, text: 'text-[#9cdcfe]' },
  shortlist: { icon: TbRosetteDiscountCheck, text: 'text-gray-400' },
};

interface HackathonsSectionProps {
  className?: string;
}

const HackathonsSection = memo<HackathonsSectionProps>(({ className }) => {
  const { ref, shouldLoad } = useLazyLoad({ threshold: 0.1 });

  return (
    <div ref={ref} className={clsx('relative z-10 mt-16 md:mt-20', className)}>
      {shouldLoad ? (
        <>
          <FadeInStagger
            faster
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {HACKATHONS.map(hackathon => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </FadeInStagger>
          <Certifications />
        </>
      ) : (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      )}
    </div>
  );
});

const HackathonCard = ({ hackathon }: { hackathon: HackathonResult }) => {
  const { icon: Icon, text } = TIER_STYLES[hackathon.tier];
  const { project } = hackathon;
  const isExternal = project?.href.startsWith('http');

  return (
    <FadeIn className="h-full">
      <div className="flex h-full flex-col gap-2 rounded-2xl border border-gray-500/20 bg-gray-900/20 p-5 transition-colors hover:border-hackathons_green/40">
        <div className="flex items-start gap-2">
          <Icon className={clsx('mt-0.5 h-5 w-5 flex-none', text)} />
          <span className={clsx('text-sm font-semibold', text)}>
            {hackathon.result}
          </span>
          <span className="ml-auto flex-none text-xs text-gray-500">
            {hackathon.date}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-white">
          {hackathon.event}
        </h3>
        <p className="text-sm text-gray-500">
          {hackathon.organizer}
          {hackathon.detail && ` · ${hackathon.detail}`}
        </p>
        {project && (
          <Link
            href={project.href}
            {...(isExternal && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className="mt-auto inline-flex w-fit items-center gap-1 py-1 pt-2 text-sm text-hackathons_green hover:underline"
          >
            {project.name}
            {isExternal && (
              <TbExternalLink className="h-4 w-4" aria-hidden="true" />
            )}
          </Link>
        )}
      </div>
    </FadeIn>
  );
};

const Certifications = () => (
  <FadeIn className="mt-12">
    <h3 className="mb-1 text-xl font-bold text-hackathons_green">
      Certifications
    </h3>
    <p className="mb-4 text-sm text-gray-500">Verified on Credly</p>
    <div className="flex flex-col gap-5 border-y border-gray-500/30 py-4">
      {CERTIFICATIONS.map(group => (
        <div key={group.issuer}>
          <p className="mb-2 font-semibold text-white">{group.issuer}</p>
          <div className="flex flex-wrap gap-2">
            {group.items.map(item => (
              <Pill
                key={item}
                text={item}
                color="text-hackathons_green"
                background="bg-hackathons_green/10"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </FadeIn>
);

HackathonsSection.displayName = 'HackathonsSection';

export default HackathonsSection;
