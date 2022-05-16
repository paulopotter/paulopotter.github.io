import { useEffect } from "react";
import Link from "next/link";
import CONFIGS from "../services/configs";

const { MENU_LINKS } = CONFIGS;

export function Menu() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const menuList = document.querySelector(".menu__list");
    const menuOverlay = document.querySelector(".menu__overlay");

    const menuOpenedClass = "menu--opened";
    const menuOverlayActiveClass = "menu__overlay--active";
    const menuListActiveClass = "menu__list--active";

    if (menuList.classList.contains(menuListActiveClass)) {
      menuList.classList.remove(menuListActiveClass);
    } else {
      menuList.classList.add(menuListActiveClass);
    }

    if (menu.classList.contains(menuOpenedClass)) {
      menu.classList.remove(menuOpenedClass);
      menuOverlay.classList.remove(menuOverlayActiveClass);
    } else {
      menu.classList.add(menuOpenedClass);
      menuOverlay.classList.add(menuOverlayActiveClass);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (event) => {
      // @ts-ignore
      if (event.target.classList.contains("menu__overlay")) {
        toggleMenu();
      }
    });
  }, []);

  return (
    <menu className="menu">
      <button className="menu--icon" aria-label="Menu" onClick={toggleMenu}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className="menu--icon-svg"
          viewBox="0 0 612 612"
        >
          <path d="M604.267 194.727c4.257 0 7.733-3.644 7.733-7.733v-40.169c0-4.256-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.644-7.733 7.733v40.169c0 4.256 3.283 7.733 7.733 7.733h596.534zM0 326.084c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.284-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.645-7.733 7.733v40.169zm0 139.091c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.256-3.283-7.732-7.733-7.732H7.733c-4.256 0-7.733 3.644-7.733 7.732v40.169z" />
        </svg>
      </button>
      <ul className="menu__list">
        {Object.keys(MENU_LINKS)?.map((menuItem, index) => (
          <li className="menu__list--item" key={`menu-${index}`}>
            <Link href={MENU_LINKS[menuItem]}>{menuItem}</Link>
          </li>
        ))}
      </ul>
      <div className="menu__overlay"></div>
    </menu>
  );
}
