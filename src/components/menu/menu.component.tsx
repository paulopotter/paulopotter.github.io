import React, { useState, useEffect } from 'react';
import { useTheme } from 'react-jss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { RiMenuLine } from '@mindyjs/icons';

import CONFIGS from 'services/configs';
import { Link } from '../navigations';
import { ITHEME } from 'theme';
import { MenuStyle } from './menu.style';

const { MENU_LINKS } = CONFIGS;

export function Menu() {
  const theme: ITHEME = useTheme();
  const [isMenuOpened, setMenuOpened] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    if (!isMenuOpened) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if ('Escape' === event!.key) {
        toggleMenu();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpened]);

  const style = MenuStyle({ theme });
  return (
    <>
      <menu
        className={classNames(style.menu, {
          [style.menuOpened]: isMenuOpened,
        })}
      >
        <button className={style.menuIcon} aria-label="Menu" onClick={toggleMenu}>
          <RiMenuLine className={style.menuIconSVG} />
        </button>
        <ul
          className={classNames(style.menuList, {
            [style.menuListActive]: isMenuOpened,
          })}
          aria-hidden={!isMenuOpened}
        >
          {Object.keys(MENU_LINKS)?.map((menuItem: string, index: number) => (
            <li className={style.menuListItem} key={`menu-${index}`}>
              {MENU_LINKS[menuItem] === router.pathname ? (
                <span>{menuItem}</span>
              ) : (
                <Link href={MENU_LINKS[menuItem]} tabIndex={!isMenuOpened ? -1 : 0}>
                  {menuItem}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </menu>
      <div
        className={classNames(style.menuOverlay, {
          [style.menuOverlayActive]: isMenuOpened,
        })}
        onClick={toggleMenu}
      ></div>
    </>
  );
}
