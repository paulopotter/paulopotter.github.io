import classNames from 'classnames';
import * as BSIcons from 'react-bootstrap-icons';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useTheme } from 'react-jss';

import { Head, Link } from 'components';
import CONFIGS from 'services/configs';
import { AuthorStyle } from './author.style';
import { CalendlySvg } from 'assets/images';
import { ITHEME } from 'theme';

dayjs.locale('pt-br');
const { AUTHOR_IMG, SOCIAL } = CONFIGS;

export function AuthorView() {
  const theme: ITHEME = useTheme();
  const style = AuthorStyle({ theme });

  const entryDate = '2013-10-01';
  const workLife = dayjs().diff(entryDate, 'year', false);

  return (
    <>
      <Head />
      <section className={style.content}>
        <img
          src={`${AUTHOR_IMG}?s=250`}
          alt="Foto do meu rosto."
          width="250"
          height="250"
          className={classNames(style.img)}
          id="authorImage"
        />
        <p className={classNames(style.section)}>
          Olá, me chamo <span className={style?.name}>Paulo Oliveira</span> e sou{' '}
          <span className={style.highlight}>
            desenvolvedor no <Link href={'https://vemparaglobo.g.globo'}>Grupo Globo</Link> há{' '}
            {workLife} anos
          </span>
          . <br /> <br />
          Criei o <Link href={'/'}>um dev qualquer</Link> com o intuito de compartilhar os meus
          conhecimentos e guardar o meu aprendizado de uma forma estruturada. Sou apaixonado por
          tecnologia e entusiasta das novidades. <br />
          Hoje estou focado no desenvolvimento de APPs para{' '}
          <span className={style.highlight}>Smart TV, Acessibilidade</span> e{' '}
          <abbr title="Developer eXperience" className={style.highlight}>
            DX
          </abbr>
          .
        </p>

        <section className={classNames(style.section)}>
          <span>Entre em contato comigo!</span>
          <ul className={style.socialList}>
            {SOCIAL?.map((social, index) => {
              type foo = keyof typeof BSIcons;
              const socialName: foo = social.name as foo

              const SocialIcon = BSIcons[socialName] as unknown as any;
              return (
                <li className={style.socialItem} key={`${social.name}-${index}`}>
                  <Link href={social.url} title={social.name} disableIcon>
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
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={classNames(style.section, style.sectionDivision)}>
          <ul className={style.timeline}>
            <li className={style.timelineMark}>
              <span className={style.timelineDate}>2012</span>
              <p className={style.timelineContent}>
                <span className={style.timelineJobTitle}>Estágio em Desenvolvimento</span> {' - '}
                <span className={style.timelineCompany}>MSA RH Consultoria</span>
              </p>
              <p className={style.timelineContent}>
                Participei no desenvolvimento e manutenção do sistema de gerenciamento de
                estágiários da Vale.
              </p>
            </li>

            <li className={style.timelineMark}>
              <span className={style.timelineDate}>2013</span>
              <p className={style.timelineContent}>
                <span className={style.timelineJobTitle}>Estágio em Desenvolvimento</span> {' - '}
                <span className={style.timelineCompany}>Globo.com</span>
              </p>
              <p className={style.timelineContent}>
                Participei na manutenção e desenvolvimento de features dos sites:{' '}
                <Link href="https://g1.globo.com">G1</Link>,{' '}
                <Link href="https://ge.globo.com/cartola/">Cartola</Link> e{' '}
                <Link href="https://ge.globo">GE(Globoesporte)</Link>.
              </p>
            </li>

            <li className={style.timelineMark}>
              <span className={style.timelineDate}>2015 - Atual</span>
              <p className={style.timelineContent}>
                <span className={style.timelineJobTitle}>Desenvolvedor</span> {' - '}
                <span className={style.timelineCompany}>
                  Grupo Globo (HUB digital / antiga globo.com)
                </span>
              </p>
              <p className={style.timelineContent}>
                Participei na manutenção e desenvolvimento de features do site:{' '}
                <Link href="https://ge.globo">GE(Globoesporte)</Link>.
              </p>
              <p className={style.timelineContent}>
                Participei na manutenção e desenvolvimento de features do APP para Smart TVs: Canais
                globo (Antigo globosatplay) e Globoplay.
              </p>
              <p className={style.timelineContent}>
                Hoje atuo no time de pesquisa e desenvolvimento para a melhoria das APP de tv do
                Globoplay, tanto para o usuário final quanto para os desenvolvedores.
              </p>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
