import React from 'react';
import classNames from 'classnames';
import { Link } from '../navigations';
import { ImagesStyle } from './image.style';

type Caption = {
  link?: string | null,
  className?: Record<string, string>,
  text?: string | null
}
interface IImage {
  alt?: string
  src: string,
  className?: Record<string, string>
  caption?: Caption
}


export const Image = ({
  alt,
  src,
  caption,
  className: aditionalClassName,
}: IImage): JSX.Element => {
  const style = ImagesStyle()
  return (
    <figure className={classNames(style.articleCover, aditionalClassName)}>
      <img
        className={classNames(style.articleCoverImg, aditionalClassName)}
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
  className: aditionalClassName,
  text,
}: Caption): JSX.Element | null => {
  if(!text) {
    return null
  }
  const style = ImagesStyle()


  return (
    <figcaption className={classNames(style.articleCoverCredit, aditionalClassName)}>
      Créditos:{' '}
      {
        link ? ( <Link href={link}>{text}</Link>) : ( text )
      }
    </figcaption>
  );
}
