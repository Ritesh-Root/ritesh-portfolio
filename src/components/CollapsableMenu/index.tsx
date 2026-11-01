'use client';

import clsx from 'clsx';
import Explorer from './components/Explorer';
import useExpandableStore, { Menu } from '@/lib/store/useExpandableStore';
import { MyWork } from '@/app/layout';
import { isPhoneWidth } from '@/lib/utils/viewport';

const CollapsableMenu = ({ myWork }: { myWork: MyWork[] }) => {
  const expanded = useExpandableStore(state => state.value);
  const currentMenu = useExpandableStore(state => state.menu);
  const closeIfOpen = useExpandableStore(state => state.closeIfOpen);

  // On phones the panel covers the page, so close it once a link is tapped
  // (section links only change the hash, which NavigationChange doesn't see).
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPhoneWidth() && (e.target as HTMLElement).closest('a')) {
      closeIfOpen();
    }
  };

  return (
    <>
      {expanded && (
        <div
          className="fixed inset-0 -z-10 md:hidden"
          onClick={closeIfOpen}
          aria-hidden="true"
        />
      )}
      <div
        onClick={handleClick}
        className={clsx(
          !expanded && 'hidden',
          'absolute bottom-0 left-full top-0 z-10 flex min-w-[300px] max-w-[300px] flex-col border-r-dark_border bg-activity_dark_bg text-gray-500 max-md:w-[min(300px,calc(100vw_-_3rem))] max-md:min-w-0 max-md:shadow-2xl md:static'
        )}
      >
        {currentMenu === Menu.EXPLORER && <Explorer myWork={myWork} />}
      </div>
    </>
  );
};

export default CollapsableMenu;
