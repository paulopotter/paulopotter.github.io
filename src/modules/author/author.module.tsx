import classNames from 'classnames';
import * as BSIcons from 'react-bootstrap-icons';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useTheme } from 'react-jss';

import { Head, Link, Section } from 'components';
import CONFIGS from 'services/configs';
import { AuthorStyle } from './author.style';
import { ITHEME } from 'theme';
import { Timeline } from './components';

dayjs.locale('pt-br');
const { AUTHOR_IMG, SOCIAL } = CONFIGS;

export function AuthorView() {
  const theme: ITHEME = useTheme();
  const style = AuthorStyle({ theme });

  const entryDate = '2013-10-01';
  const workLife = dayjs().diff(entryDate, 'year', false);

  const jobTimeline = [
    {
      mark: 2012,
      data: [
        {
          title: 'Estágio em Desenvolvimento',
          subtitle: 'MSA RH Consultoria',
          content: [
            <p key="job-estag-msa">
              Participei no desenvolvimento e manutenção do sistema de gerenciamento de estágiários
              da Vale.
            </p>,
          ],
        },
      ],
    },
    {
      mark: 2013,
      data: [
        {
          title: 'Estágio em Desenvolvimento',
          subtitle: 'Globo.com',
          content: [
            <p key="job-estag-globo">
              Participei na manutenção e desenvolvimento de features dos sites:{' '}
              <Link href="https://g1.globo.com">G1</Link>,{' '}
              <Link href="https://ge.globo.com/cartola/">Cartola</Link> e{' '}
              <Link href="https://ge.globo">GE(Globoesporte)</Link>.
            </p>,
          ],
        },
      ],
    },
    {
      mark: '2015 - Atual',
      data: [
        {
          title: 'Desenvolvedor',
          subtitle: 'Grupo Globo (HUB digital / antiga globo.com)',
          content: [
            <p key="job-desenvolvedor-content-0">
              Participei na manutenção e desenvolvimento de features do site:{' '}
              <Link href="https://ge.globo">GE(Globoesporte)</Link>.
            </p>,
            <p key="job-desenvolvedor-content-1">
              Participei na manutenção e desenvolvimento de features do APP para Smart TVs: Canais
              globo (Antigo globosatplay) e Globoplay.
            </p>,
            <p key="job-desenvolvedor-content-2">
              Hoje atuo no time de pesquisa e desenvolvimento para a melhoria das APP de tv do
              Globoplay, tanto para o usuário final quanto para os desenvolvedores.
            </p>,
          ],
        },
      ],
    },
  ];

  const freelaTimeline = [
    {
      mark: 2022,
      data: [
        {
          title: 'Moga Festival',
          subtitle: 'Rethink',
          content: [
            <div key="content-moga-0">
              <ul>
                <li>
                  <b>Site</b>: <Link href="https://mogafestival.com/" />
                </li>
                <li>
                  <b>Stack de desenvolvimento</b>: NextJs
                </li>
                <li>
                  <b>Desafios</b>: Ajudar no desenvolvimento do novo hostsite do festival.
                </li>
              </ul>
            </div>,
          ],
        },
      ],
    },
    {
      mark: 2023,
      data: [
        {
          title: 'Projeto Interno',
          subtitle: 'Firedev',
          content: [
            <div key="content-firedev-0">
              <ul>
                <li>
                  <b>Site</b>: <Link href="https://firedev.com.br/" />
                </li>
                <li>
                  <b>Stack de desenvolvimento</b>: React, styled component, Material UI
                </li>
                <li>
                  <b>Desafios</b>: Ajudar no desenvolvimento de uma plataforma geração de CRUD
                  interna.
                </li>
              </ul>
            </div>,
          ],
        },
      ],
    },
    {
      mark: 2024,
      data: [
        {
          title: 'Projeto whitelabel para Smart Tv',
          subtitle: 'Zoe web',
          content: [
            <div key="content-zoeweb-0">
              <ul>
                <li>
                  <b>Site</b>: <Link href="https://zoeweb.com.br/" />
                </li>
                <li>
                  <b>Stack de desenvolvimento</b>: React
                </li>
                <li>
                  <b>Desafios</b>: Ajudar no desenvolvimento de uma app para Smart TVs com a
                  facilidade de reaproveitar o projetos para os seus outros clientes.
                </li>
              </ul>
            </div>,
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Head />
      <Section className={style.content}>
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
              type BSIconKeysType = keyof typeof BSIcons;
              const socialName: BSIconKeysType = social.name.toLowerCase().startsWith('cal')
                ? 'CalendarEvent'
                : (social.name as BSIconKeysType);

              const SocialIcon = BSIcons[socialName] as unknown as any;
              return (
                <li className={style.socialItem} key={`${social.name}-${index}`}>
                  <Link href={social.url} title={social.name} disableIcon>
                    <SocialIcon
                      className={style.socialIcon}
                      tabIndex={-1}
                      alt={`${social.name}`}
                      title={`${social.name}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={classNames(style.section, style.sectionDivision)}>
          <Timeline content={jobTimeline} />
        </section>
      </Section>
      <Section>
        <h3 className={style.sectionTitle}>Outros Projetos:</h3>
        <section className={classNames(style.section, style.sectionDivision)}>
          <Timeline content={freelaTimeline} />
          <br />
          <p>
            Deseja fazer parte desta lista? <Link href="estimate">Faça seu orçamento!</Link>
          </p>
        </section>
      </Section>
    </>
  );
}
