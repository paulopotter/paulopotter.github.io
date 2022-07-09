import * as BSIcons from 'react-bootstrap-icons'

import { AuthorCardStyle } from "./styles/authorCard.style";

import CONFIGS from "../services/configs";
import classNames from "classnames";
import Link from 'next/link';

const { AUTHOR_IMG, SOCIAL } = CONFIGS

export function AuthorCard({isDarkTheme = false}) {

  // @ts-ignore
  const style = AuthorCardStyle({isDarkTheme})

  return (
    <header className={style.header}>
      <img
        src={`${ AUTHOR_IMG }?s=150`}
        alt="Foto do meu rosto."
        width="150"
        height="150"
        className={classNames(style.img)}
        id="authorImage"
      />

    <Link href="author">
      <a className={style.name}>Paulo Oliveira</a>
    </Link>

      <ul className={style.socialList}>
        {
          SOCIAL?.map((social, index) => {
            // @ts-ignore
            const SocialIcon = BSIcons[social.name]
            return (
              <li className={style.socialItem} key={`${social.name}-${index}`}>
                <a href={social.url} title={social.name}>
                  <SocialIcon className={style.socialIcon} tabIndex={-1} alt={`${social.name} ícone`} title={`${social.name} ícone`}/>
                </a>
              </li>
            )
          })
        }
      </ul>

    </header>
  )

}
