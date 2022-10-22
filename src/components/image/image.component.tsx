import React from 'react';

import { Link } from '../navigations';

type Caption = {
  link?: string,
  className: Record<string, string>,
  text?: string
}
interface IImage {
  alt?: string
  src: string,
  className: Record<string, string>
  caption?: Caption
}

export const Image = ({
  alt,
  src,
  caption,
  className,
}: IImage): JSX.Element => {
  return (
    <figure className={className.articleCover}>
      <img
        className={className.articleCoverImg}
        src={src}
        alt={`"${alt}"`}
      />
      {
        caption && (
          <FigureCaption
            {...caption}
          />
        )
      }
    </figure>
  )
}

const FigureCaption = ({
  link,
  className,
  text,
}: Caption): JSX.Element | null => {
  if(text === undefined) {
    return null
  }

  return (
    <figcaption className={className.articleCoverCredit}>
      Créditos:{' '}
      {
        link ? ( <Link href={link}>{text}</Link>) : ( text )
      }
    </figcaption>
  );
}
