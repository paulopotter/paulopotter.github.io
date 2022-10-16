import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'react-jss';
import { RiArrowUpCircleFill } from '@mindyjs/icons';

import { FooterStyle } from './footer.style';
import { ITHEME } from 'theme';

export const Footer = () => {
  const theme: ITHEME = useTheme();
  const [showButton, setShowButton] = useState(false);

  const style = FooterStyle({ theme });

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelector<HTMLButtonElement>('#start-page menu button')!.focus();
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        if (showButton) {
          setShowButton(false);
        }
      }
    });
  });

  return (
    <button
      className={classNames(style.backToTop, {
        [style.backToTopShow]: showButton,
      })}
      aria-labelledby="button-back-to-top"
      onClick={backToTop}
    >
      <RiArrowUpCircleFill />
      <span id="button-back-to-top" className={style.backToTopText}>
        Voltar para o topo
      </span>
    </button>
  );
};
