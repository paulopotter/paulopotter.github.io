// @ts-nocheck
import { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

import * as DevIcons from "react-devicons";

import { Head } from "../components";
import { AuthorCardStyle } from "../components/styles/authorCard.style";
import { getAllPosts } from "../services/api";
import CONFIGS from "../services/configs";
import { AuthorStyle } from "../styles/";
import { ThemeContext } from "./_app";

const { HASH_GRAVATAR, SOCIAL } = CONFIGS;

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
  const authorStyle = AuthorStyle({ isDarkTheme });

  const style = {
    socialList: "",
    socialItem: "",
    socialIcon: "",
  };

  const entryDate = "2013-10-01";
  const workLife = dayjs().diff(entryDate, "year", false);

  return (
    <>
      <Head />
      <section className={authorStyle.content}>
        {/* <img

            src={`https://www.gravatar.com/avatar/${ HASH_GRAVATAR }?s=200`}
            alt="Foto do meu rosto."
            width="150"
            height="150"
            className={classNames(authorCardStyle.img)}
            id="authorImage"
          /> */}

        <h2 className={authorStyle?.name}>Paulo Oliveira</h2>
        {/* <h3>
          Trabalhando há {workLife} anos na <a href="http://globo.com">Globo</a>.
        </h3> */}

        {/* <div>
          <h4>Sobre mim:</h4>
          <p className="about-me__section--block">
            Apaixonado por tecnologia, hoje sou desenvolvedor focado no
            desenvolvimento de app para Smart TVs.
          </p>
          <div className="about-me__section--block">
            <div className="about-me__section--title">Contatos</div>
            <ul className={style.socialList}>
              {SOCIAL?.map((social, index) => (
                <li
                  className={style.socialItem}
                  key={`${social.name}-${index}`}
                >
                  <a href={social.url} title={social.name}>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-me__section--block">
            <div className="about-me__section--title">Skills</div>
            <LanguageIKnow />
          </div>

          <div className="about-me__section--block">
            <div className="about-me__section--title">
              Principais projetos que participei
            </div>
            <ul className="about-me__section--list">
              <li className="about-me__list--item">Cartola</li>
              <li className="about-me__list--item">Globoesporte(ge)</li>
              <li className="about-me__list--item">G1</li>
              <li className="about-me__list--item">
                Smart TV
                <ul>
                  <li>Globoplay</li>
                  <li>Canais Globo (antigo Globosat play)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="about-me__section--block">
            <div className="about-me__section--title">Experiência</div>
            <ul className="about-me__section--list">
              <li className="about-me__list--item">
                Desenvolvedor:
                <ul>
                  <li>Globo (antiga globo.com) [2015 - atual]</li>
                </ul>
              </li>
              <li className="about-me__list--item">
                <span>Estágio em Desenvolvimento</span>
                <ul>
                  <li>Globo.com [2013 - 2015]</li>
                  <li>MSA RH Consultoria [2012 - 2013]</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="about-me__section--block">
            <div className="about-me__section--title">Educação</div>
            <ul className="about-me__section--list">
              <li className="about-me__list--item">
                Sistema da Informação: Universidade Estácio de Sá - [2016 -
                Atual]
              </li>
              <li className="about-me__list--item">
                Ciência da Computação: UEZO - Centro Universitário Estadual da
                Zona Oeste - [2010 - 2016] <i> - Incompleto</i>
              </li>
            </ul>
          </div>
        </div> */}
      </section>
    </>
  );
}

const LanguageIKnow = () => {
  const tHead = [];
  const tBody = [];

  const LangList = languages.map((language) => {
    const LanguageIcon = DevIcons[`${language}OriginalIcon`];
    tHead.push(
      <th key={`th-${language}`}>
        {LanguageIcon && (
          <LanguageIcon size="4em" alt={language} title={language} />
        )}
      </th>
    );
    tBody.push(<td key={`td-${language}`}>{language}</td>);
  });

  {/* <ul className="about-me__section--list">
    <li className="about-me__list--item"><span>Python</span>
      <ul>
        <li>Django</li>
        <li>Flask</li>
      </ul>
    </li>
    <li className="about-me__list--item"><span>Javascript</span>
      <ul>
        <li>React</li>
        <li>Canvas</li>
      </ul>
    </li>
    <li className="about-me__list--item">HTML(5)</li>
    <li className="about-me__list--item">CSS(3)</li>
    <li className="about-me__list--item">PHP</li>
  </ul> */}

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
