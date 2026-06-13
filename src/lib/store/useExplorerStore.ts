import { create } from 'zustand';

export enum SubMenu {
  EDITOR = 'editor',
  PORTFOLIO = 'portfolio',
  OUTLINE = 'outline',
  TIMELINE = 'timeline',
  SCRIPTS = 'scripts',
}

interface ExplorerState {
  initial: boolean;
  editor: {
    open: boolean;
    maxHeight: string;
  };
  portfolio: {
    open: boolean;
    height: string;
    maxHeight: string;
  };
  outline: {
    open: boolean;
    maxHeight: string;
  };
  timeline: {
    open: boolean;
    maxHeight: string;
  };
  scripts: {
    open: boolean;
    maxHeight: string;
  };
  setInitialLoad: () => void;
  toggleMenu: (subMenu: SubMenu) => void;
}

const useExplorerStore = create<ExplorerState>(set => ({
  initial: true,
  editor: {
    open: false,
    maxHeight: '0px',
  },
  portfolio: {
    open: false,
    height: '0px',
    maxHeight: '0px',
  },
  outline: {
    open: false,
    maxHeight: '0px',
  },
  timeline: {
    open: false,
    maxHeight: '0px',
  },
  scripts: {
    open: false,
    maxHeight: '0px',
  },

  setInitialLoad: () => set({ initial: false }),

  toggleMenu: (subMenu: SubMenu) =>
    set(state => {
      const subMenusContainer = document.getElementById(
        'subMenusContainer'
      ) as HTMLDivElement;
      const subMenuEditor = document.getElementById(
        'subMenu-' + SubMenu.EDITOR
      ) as HTMLDivElement;
      const subMenuPortfolio = document.getElementById(
        'subMenu-' + SubMenu.PORTFOLIO
      ) as HTMLDivElement;

      // Build new nested objects rather than mutating state in place so
      // Zustand selectors subscribed to `editor`/`portfolio` see fresh refs.
      const editor = { ...state.editor };
      const portfolio = { ...state.portfolio };

      if (state[subMenu].open) {
        if (subMenu === SubMenu.EDITOR) {
          const editorsScrollHeight = subMenuEditor.clientHeight;
          editor.maxHeight = '0px';

          if (state.portfolio.open) {
            portfolio.height = `${subMenuPortfolio.clientHeight + editorsScrollHeight}px`;
            portfolio.maxHeight = `${subMenuPortfolio.scrollHeight + editorsScrollHeight}px`;
          }
        } else if (subMenu === SubMenu.PORTFOLIO) {
          portfolio.height = '0px';
          portfolio.maxHeight = '0px';
        }
      } else {
        if (subMenu === SubMenu.EDITOR) {
          let newHeight = subMenuPortfolio.clientHeight;

          if (subMenuEditor.scrollHeight > 100) {
            editor.maxHeight = '100px';
            newHeight -= 100;
          } else {
            editor.maxHeight = `${subMenuEditor.scrollHeight}px`;
            newHeight -= subMenuEditor.scrollHeight;
          }

          if (state.portfolio.open) {
            portfolio.maxHeight = `${newHeight}px`;
            portfolio.height = `${newHeight}px`;
          }
        } else if (subMenu === SubMenu.PORTFOLIO) {
          const contentNodes = subMenusContainer.children;
          let contentHeight = 0;

          for (let i = 0; i < contentNodes.length; i++) {
            const element = contentNodes.item(i) as HTMLDivElement;
            contentHeight +=
              element.scrollHeight +
              Number(getComputedStyle(element).borderTopWidth.split('px')[0]);
          }

          const availableHeight =
            subMenusContainer.scrollHeight - contentHeight;
          portfolio.height = `${availableHeight}px`;
          portfolio.maxHeight = `${availableHeight}px`;
        }
      }

      if (subMenu === SubMenu.EDITOR) {
        editor.open = !editor.open;
      } else if (subMenu === SubMenu.PORTFOLIO) {
        portfolio.open = !portfolio.open;
      }

      return { editor, portfolio };
    }),
}));

export default useExplorerStore;
