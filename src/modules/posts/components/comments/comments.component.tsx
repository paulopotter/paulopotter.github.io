import React from 'react';
import Giscus from '@giscus/react';
import { useTheme } from 'react-jss';
import { ITHEME } from 'theme';


export const Comments = (): JSX.Element => {
  const theme: ITHEME = useTheme();
  const isLightTheme = theme.name === 'light';

  return (
    <Giscus
      id="comments"
      repo="paulopotter/paulopotter.github.io"
      repoId="MDEwOlJlcG9zaXRvcnk0NDM1MzMxMA=="
      category="Q&A"
      categoryId="DIC_kwDOAqTHHs4Ctltk"
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={isLightTheme === true ? 'catppuccin_latte' : 'dark_dimmed'}
      lang="pt"
      loading="lazy"
    />
  );
};
