import React from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { RiLightbulbFill } from '@mindyjs/icons';

import { ThemeButtonStyle } from './theme-button.style';
import { ITHEME } from 'theme';

export function ToggleThemeButton({ onClicked }: { onClicked?: (themeName: string) => void }) {
  const theme: ITHEME = useTheme();
  const isDarkTheme = theme.name === 'dark';
  const [canAnimate, setCanAnimate] = useState(false);

  const style = ThemeButtonStyle({ theme });

  useEffect(() => {
    setTimeout(() => setCanAnimate(true), 1000);
  }, [canAnimate]);

  const toggleButtonOnClick = (event: unknown) => {
    onClicked?.(isDarkTheme ? 'light' : 'dark');
    // @ts-expect-error: ariaLabel realmente nao existe.
    event.currentTarget.ariaLabel = `Trocar para o tema ${isDarkTheme ? 'claro' : 'escuro'}`;
    // @ts-expect-error: window type dont have DISQUS
    window?.DISQUS?.host?._loadEmbed(); // to update disqus theme
  };

  const styleClass = classNames(style.button, { [style.hasJs]: canAnimate });

  return (
    <button
      className={styleClass}
      type="button"
      aria-label={`Trocar para o tema ${isDarkTheme ? 'claro' : 'escuro'}`}
      onClick={toggleButtonOnClick}
    >
      <RiLightbulbFill className={style.svg} />
    </button>
  );
}
