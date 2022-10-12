import classNames from 'classnames';
import * as BSIcons from 'react-bootstrap-icons';

import { Link } from 'components';
import CONFIGS from 'services/configs';

import { AuthorCardStyle } from './styles/authorCard.style';

const { AUTHOR_IMG, SOCIAL, SITE_URL } = CONFIGS;

export function AuthorCard({ isDarkTheme = false }: {isDarkTheme?: boolean}) {
  const style = AuthorCardStyle({ isDarkTheme });

  return (
    <header className={ style.header }>
      <img
        src={`${AUTHOR_IMG}?s=150`}
        alt="Foto do meu rosto."
        width="150"
        height="150"
        className={classNames(style.img)}
        id="authorImage"
      />

      <Link href="author" className={style.name}>Paulo Oliveira</Link>

      <ul className={style.socialList}>
        {SOCIAL?.map((social, index) => {
          // @ts-expect-error: I need tiping social
          const SocialIcon = BSIcons[ social.name ];
          return (
            <li className={style.socialItem} key={`${social.name}-${index}`}>
              <a href={social.url} title={social.name}>
                {social.name.toLowerCase() === 'calendly' ? (
                  <img
                    src={`${SITE_URL}/images/icons/calendly-logo.png `}
                    className={style.socialIcon}
                    tabIndex={-1}
                    alt={`${social.name}`}
                    title={`${social.name}`}
                  />
                ) : (
                  <SocialIcon
                    className={style.socialIcon}
                    tabIndex={-1}
                    alt={`${social.name}`}
                    title={`${social.name}`}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
