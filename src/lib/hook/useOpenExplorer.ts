'use client';

import { useCallback } from 'react';
import useExpandableStore, { Menu } from '../store/useExpandableStore';
import useExplorerStore, { SubMenu } from '../store/useExplorerStore';
import { isPhoneWidth } from '../utils/viewport';

/**
 * Toggle the Explorer panel. On phones the Portfolio folder starts closed,
 * so expand it the first time the panel opens.
 */
export function useOpenExplorer() {
  const toggleMenu = useExpandableStore(state => state.toggleMenu);
  const {
    toggleMenu: toggleExplorer,
    initial: initialLoad,
    setInitialLoad,
  } = useExplorerStore();

  return useCallback(() => {
    toggleMenu(Menu.EXPLORER);

    if (!initialLoad || !isPhoneWidth()) return;

    setTimeout(() => {
      // Skip if the panel was closed again (it can't be measured while
      // hidden) or an earlier tap already expanded the folder
      if (
        !useExpandableStore.getState().value ||
        !useExplorerStore.getState().initial
      ) {
        return;
      }
      setInitialLoad();
      toggleExplorer(SubMenu.PORTFOLIO);
    }, 200);
  }, [toggleMenu, initialLoad, setInitialLoad, toggleExplorer]);
}
