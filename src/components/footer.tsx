import React, { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    const scrollTopButton = document.querySelector(".site__back-to-top-button");

    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollTopButton.classList.add("site__back-to-top-button--show");
      } else {
        if (
          scrollTopButton.classList.contains("site__back-to-top-button--show")
        ) {
          scrollTopButton.classList.remove("site__back-to-top-button--show");
        }
      }
    });
  });

  return (
    <button
      className="site__back-to-top-button"
      aria-labelledby="button-back-to-top"
    >
      <svg viewBox="0 0 24 24">
        <path d="M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z" />
      </svg>
      <span id="button-back-to-top" className="site__back-to-top-button--text">
        Voltar para o topo
      </span>
    </button>
  );
};
