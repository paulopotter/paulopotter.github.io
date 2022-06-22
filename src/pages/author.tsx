// @ts-nocheck
import { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";


import { Head, AuthorCard } from "../components";
import { getAllPosts } from "../services/api";
import { HomeStyle as AuthorStyle } from "../styles/";
import { ThemeContext } from "./_app";



export default function Author() {
  const { isDarkTheme } = useContext(ThemeContext);
  const authorStyle = AuthorStyle({ isDarkTheme });

  return (
    <>
      <Head />
      <section className={authorStyle.content}>
          <AuthorCard isDarkTheme={isDarkTheme} />
      </section>
    </>
  );
}

