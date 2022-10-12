import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";

import CONFIGS from "services/configs";
import { Link } from 'components'
import { ThemeContext } from "pages/_app";
import { MenuStyle } from "./styles/menu.style";

const { MENU_LINKS } = CONFIGS;

export function Menu() {
  const [ isMenuOpened, setMenuOpened ] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    if(!isMenuOpened) { return }

    const handleKey = (event: KeyboardEvent) => {
      if(
        'Escape' === event!.key
        ){
        toggleMenu();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isMenuOpened ])

  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-expect-error: tema
  const menuStyle = MenuStyle({ isDarkTheme });

  return (
    <menu
      className={classNames(menuStyle.menu, {
        [ menuStyle.menuOpened ]: isMenuOpened,
      },
      // 'max-w-7xl'
      )}
    >
      <button
        className={menuStyle.menuIcon}
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className={menuStyle.menuIconSVG}
          viewBox="0 0 612 612"
        >
          <path d="M604.267 194.727c4.257 0 7.733-3.644 7.733-7.733v-40.169c0-4.256-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.644-7.733 7.733v40.169c0 4.256 3.283 7.733 7.733 7.733h596.534zM0 326.084c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.284-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.645-7.733 7.733v40.169zm0 139.091c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.256-3.283-7.732-7.733-7.732H7.733c-4.256 0-7.733 3.644-7.733 7.732v40.169z" />
        </svg>
      </button>
      <ul
        className={classNames(menuStyle.menuList, {
          [ menuStyle.menuListActive ]: isMenuOpened,
        },
        )}
        aria-hidden={!isMenuOpened}
      >
        {
          Object.keys(MENU_LINKS)?.map((menuItem: string, index: number) => (
          <li className={menuStyle.menuListItem} key={`menu-${index}`}>
            <Link href={MENU_LINKS[ menuItem ]} tabIndex={!isMenuOpened ? -1 : 0}>{menuItem}</Link>
          </li>
          ))
        }
      </ul>
      <div
        className={classNames(menuStyle.menuOverlay, {
          [ menuStyle.menuOverlayActive ]: isMenuOpened,
        })}
        onClick={toggleMenu}
      ></div>
    </menu>
  );
}
