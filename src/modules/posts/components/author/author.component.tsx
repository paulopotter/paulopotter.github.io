import classNames from 'classnames';
import * as BSIcons from 'react-bootstrap-icons';
import { useTheme } from 'react-jss';
import { Link } from 'components';
import CONFIGS from 'services/configs';
import { ITHEME } from 'theme';
import { AuthorCardStyle } from './author.style';
import { CalendlySvg } from 'assets/images';

const { AUTHOR_IMG, SOCIAL } = CONFIGS;

export function Author() {
  const theme: ITHEME = useTheme()
  const style = AuthorCardStyle({ theme });

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
                  <CalendlySvg
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
