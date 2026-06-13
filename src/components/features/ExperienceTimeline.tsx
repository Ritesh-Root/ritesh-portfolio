import clsx from 'clsx';
import Image from 'next/image';
import { FadeIn } from '../FadeIn';
import Border from '../Border';
import Pill from '../Pill';
import { WorkExperience } from '@/lib/types/portfolio';

interface ExperienceTimelineProps {
  experiences: readonly WorkExperience[];
  className?: string;
}

const ExperienceTimeline = ({
  experiences,
  className,
}: ExperienceTimelineProps) => {
  return (
    <div className={className}>
      {experiences.map(experience => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

interface ExperienceItemProps {
  experience: WorkExperience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <FadeIn className="group mt-8 flex px-3 first:mt-0">
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="mb-4 flex">
          <div
            className={clsx(
              'ml-2 mr-4 flex-none self-center overflow-hidden rounded-md'
            )}
          >
            <Image
              src={experience.companyLogo.src}
              alt={experience.companyLogo.alt}
              height={experience.companyLogo.height}
              width={experience.companyLogo.width}
              style={{
                width: experience.companyLogo.width || 'auto',
                height: experience.companyLogo.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-work_experience_orange">
              {experience.company} | {experience.position}
            </p>
            <p className="mt-2 text-sm text-white">
              {experience.startDate} - {experience.endDate || 'Present'}
            </p>
          </div>
        </div>
        <ul className="list-disc pl-10">
          {experience.achievements.map((achievement, index) => (
            <ExperienceAchievement key={index} achievement={achievement} />
          ))}
        </ul>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <Pill
              key={index}
              text={tech.name}
              color="text-work_experience_orange"
              background="bg-work_experience_brown"
            />
          ))}
        </div>
      </Border>
    </FadeIn>
  );
};

interface ExperienceAchievementProps {
  achievement: {
    title?: string;
    description: string | React.ReactNode;
    impact?: string;
  };
}

const ExperienceAchievement = ({ achievement }: ExperienceAchievementProps) => {
  const renderDescription = () => {
    if (typeof achievement.description === 'string') {
      return (
        <>
          <b>{achievement.title ? achievement.title + ': ' : ''}</b>
          {achievement.description}
        </>
      );
    }

    return achievement.description;
  };

  return (
    <li className="text-md py-1 text-gray-500">
      {renderDescription()}
      {achievement.impact && (
        <div className="mt-1 text-sm italic text-gray-400">
          Impact: {achievement.impact}
        </div>
      )}
    </li>
  );
};

export default ExperienceTimeline;
