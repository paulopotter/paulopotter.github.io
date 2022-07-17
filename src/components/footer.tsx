
import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../pages/_app";
import { FooterStyle } from "./styles/footer.style";

export const Footer = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);

  const footerStyle = FooterStyle({ isDarkTheme });

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // @ts-expect-error: Existe carai
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    document.querySelector('#start-page menu button').focus()
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        if (
          showButton
        ) {
          setShowButton(false);
        }
      }
    });
  });

  return (
    <button
      className={classNames(footerStyle.backToTop, {
        [footerStyle.backToTopShow]: showButton,
      })}
      aria-labelledby="button-back-to-top"
      onClick={backToTop}
    >
      <svg viewBox="0 0 24 24">
        <path d="M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z" />
      </svg>
      <span id="button-back-to-top" className={footerStyle.backToTopText}>
        Voltar para o topo
      </span>
    </button>
  );
};
