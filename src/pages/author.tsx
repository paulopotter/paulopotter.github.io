// @ts-nocheck
import { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

import * as DevIcons from "react-devicons";
import * as BSIcons from 'react-bootstrap-icons'

import { Head } from "../components";
import CONFIGS from "../services/configs";
import { AuthorStyle } from "../styles/";
import { ThemeContext } from "./_app";

const { AUTHOR_IMG, SOCIAL } = CONFIGS;

const languages = [
  "Python",
  "Django",
  "Flask",
  "Javascript",
  "React",
  "Canvas",
  "Html5",
  "Css3",
  "Php",
];

export default function Author() {
  const { isDarkTheme } = useContext(ThemeContext);
  const style = AuthorStyle({ isDarkTheme });

  const entryDate = "2013-10-01";
  const workLife = dayjs().diff(entryDate, "year", false);

  return (
    <>
      <Head />
      <section className={style.content}>
        <img
            src={`${ AUTHOR_IMG }?s=250`}
            alt="Foto do meu rosto."
            width="250"
            height="250"
            className={classNames(style.img)}
            id="authorImage"
          />
        <p className={classNames(style.section)}>
          Olá, me chamo <span className={style?.name}>Paulo Oliveira</span> e sou <span className={style.highlight}>desenvolvedor no <Link href={'https://vemparaglobo.g.globo'}>Grupo Globo</Link> há {workLife} anos</span>. <br /> <br />
          Criei o <Link href={'/'} >um dev qualquer</Link> com o intuito de compartilhar os meus conhecimentos e guardar o meu aprendizado de uma forma estruturada. Sou apaixonado por tecnologia e entusiasta das novidades. <br />
          Hoje estou focado no desenvolvimento de APPs para <span className={style.highlight}>Smart TV, Acessibilidade</span> e <abbr title="Developer eXperience" className={style.highlight}>DX</abbr>.
        </p>

        <section className={classNames(style.section)}>
          <span>Entre em contato comigo!</span>
          <ul className={style.socialList}>
           {
             SOCIAL?.map((social, index) => {
               const SocialIcon = BSIcons[social.name]
               return (
                 <li className={style.socialItem} key={`${social.name}-${index}`}>
                   <a href={social.url} title={social.name}>
                     <SocialIcon className={style.socialIcon} tab-index="-1" alt={`${social.name} ícone`} title={`${social.name}`}/>
                   </a>
                 </li>
               )
             })
           }
          </ul>
        </section>

        <section className={classNames(style.section, style.sectionDivision)}>
          <ul className={style.timeline}>
            <li className={style.timelineMark}>
              <span className={style.timelineDate} >2012</span>
              <p className={style.timelineContent}>
                <span className={style.timelineJobTitle} >Estágio em Desenvolvimento</span> {' - '}
                <span className={style.timelineCompany}>MSA RH Consultoria</span>
              </p>
              <p className={style.timelineContent}>
                Participei no desenvolvimento e manutenção do sistema de gerenciamento de estágiários da Vale.
              </p>
            </li>

            <li className={style.timelineMark}>
              <span className={style.timelineDate} >2013</span>
              <p className={style.timelineContent}>
                <span className={style.timelineJobTitle} >Estágio em Desenvolvimento</span> {' - '}
                <span className={style.timelineCompany}>Globo.com</span>
              </p>
              <p className={style.timelineContent}>
                Participei na manutenção e desenvolvimento de features dos sites: G1, Cartola e GE(Globoesporte).
              </p>
            </li>

            <li className={style.timelineMark}>
              <span className={style.timelineDate} >2015 - Atual</span>
              <p className={style.timelineContent}>
                <span className={style.timelineJobTitle} >Desenvolvedor</span> {' - '}
                <span className={style.timelineCompany}>Grupo Globo (HUB digital / antiga globo.com)</span>
              </p>
              <p className={style.timelineContent}>
                Participei na manutenção e desenvolvimento de features do site: GE(Globoesporte).
              </p>
              <p className={style.timelineContent}>
                Participei na manutenção e desenvolvimento de features do APP para Smart TVs: Canais globo (Antigo globosatplay) e Globoplay.
              </p>
              <p className={style.timelineContent}>
                Hoje atuo no time de pesquisa e desenvolvimento para a melhoria das APP de tv do Globoplay, tanto para o usuário final quanto para os desenvolvedores.
              </p>
            </li>
          </ul>

        </section>

        {/* <section className={classNames(style.section)}>
          <span className="about-me__section--title">Skills:</span>
          <LanguageIKnow styleName={style} />
        </section> */}
      </section>
    </>
  );
}

const LanguageIKnow = ({styleName}) => {
  const tHead = [];
  const tBody = [];
  languages.map((language) => {
    const LanguageIcon = DevIcons[`${language}OriginalIcon`];
    tHead.push(
      <th key={`th-${language}`}>
        {LanguageIcon && (
          <LanguageIcon className={styleName.languageIcon} alt={language} title={language} />
        )}
      </th>
    );
    tBody.push(<td key={`td-${language}`}>{language}</td>);
  });

  return (
    <table>
      <thead>
        <tr>{tHead}</tr>
      </thead>
      <tbody>
        <tr>{tBody}</tr>
      </tbody>
    </table>
  );
};
