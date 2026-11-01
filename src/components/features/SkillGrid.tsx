import { memo } from 'react';
import Image from 'next/image';
import { FadeIn } from '../FadeIn';
import { Skill, SkillTechnology } from '@/lib/types/portfolio';

interface SkillGridProps {
  skills: readonly Skill[];
  className?: string;
}

const SkillGrid = memo<SkillGridProps>(({ skills, className }) => {
  return (
    <div className={className}>
      {skills.map((skillCategory, index) => (
        <SkillCategory key={index} skill={skillCategory} />
      ))}
    </div>
  );
});

interface SkillCategoryProps {
  skill: Skill;
}

const SkillCategory = memo<SkillCategoryProps>(({ skill }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <h3 className="text-center text-2xl font-semibold">{skill.category}</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {skill.technologies.map((technology, index) => (
          <TechnologyItem key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
});

interface TechnologyItemProps {
  technology: SkillTechnology;
}

const TechnologyItem = memo<TechnologyItemProps>(({ technology }) => {
  return (
    <FadeIn className="flex w-[4.5rem] flex-col sm:w-24">
      <div>
        {technology.icon ? (
          <div
            className="m-auto flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16"
            role="img"
            aria-label={`${technology.name} logo`}
          >
            <technology.icon
              className="h-10 w-10 sm:h-[52px] sm:w-[52px]"
              color={technology.color}
              aria-hidden="true"
            />
          </div>
        ) : (
          <Image
            src={technology.image}
            className="m-auto h-12 w-12 rounded-md object-contain sm:h-16 sm:w-16"
            alt={`${technology.name} logo`}
            height={64}
            width={64}
          />
        )}
        <h3 className="mx-auto my-2 w-full px-1 text-center text-xs font-semibold tracking-tight text-gray-500 sm:text-sm">
          {technology.name}
        </h3>
      </div>
    </FadeIn>
  );
});

SkillCategory.displayName = 'SkillCategory';
TechnologyItem.displayName = 'TechnologyItem';
SkillGrid.displayName = 'SkillGrid';

export default SkillGrid;
