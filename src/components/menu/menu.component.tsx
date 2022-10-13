import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import classNames from 'classnames';
import { RiMenuLine } from '@mindyjs/icons';

import CONFIGS from 'services/configs';
import { Link } from '../navigations';
import { ThemeContext } from 'pages/_app';
import { MenuStyle } from './menu.style';

const { MENU_LINKS } = CONFIGS;

export function Menu() {
  const [ isMenuOpened, setMenuOpened ] = useState(false);
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
  }, [ isMenuOpened ]);

  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-expect-error: tema
  const menuStyle = MenuStyle({ isDarkTheme });
  return (
    <>
      <menu
        className={classNames(menuStyle.menu, {
          [ menuStyle.menuOpened ]: isMenuOpened,
        })}
      >
        <button className={menuStyle.menuIcon} aria-label="Menu" onClick={toggleMenu}>
          <RiMenuLine className={menuStyle.menuIconSVG} />
        </button>
        <ul
          className={classNames(menuStyle.menuList, {
            [ menuStyle.menuListActive ]: isMenuOpened,
          })}
          aria-hidden={!isMenuOpened}
        >
          {Object.keys(MENU_LINKS)?.map((menuItem: string, index: number) => (
            <li className={menuStyle.menuListItem} key={`menu-${index}`}>
              {MENU_LINKS[ menuItem ] === router.pathname ? (
                <span>{menuItem}</span>
              ) : (
                <Link href={MENU_LINKS[ menuItem ]} tabIndex={!isMenuOpened ? -1 : 0}>
                  {menuItem}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </menu>
      <div
        className={classNames(menuStyle.menuOverlay, {
          [ menuStyle.menuOverlayActive ]: isMenuOpened,
        })}
        onClick={toggleMenu}
      ></div>
    </>
  );
}
