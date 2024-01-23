import { Head, Section, Link } from 'components';
import { EstimateStyle } from './estimate.style';
import { useTheme } from 'react-jss';
import { ITHEME } from 'theme';

type answerType = {
  question: string;
  answer: string;
  highlight?: string;
};

const lines: answerType[] = [
  {
    question:
      'Que tipo de projeto você deseja realizar o seu orçamento? Um site ou uma APP para TV?',
    answer: 'Sim, por mais que o meu foco seja APP para TV, eu também faço sites.',
  },

  {
    question: 'Qual é o ramo de atuação que seu projeto irá atuar?',
    answer: 'Dependendo do projeto, como IPTV por exemplo, por contrato eu não posso fazer.',
    highlight:
      'Se o seu projeto, de alguma forma, for concorrente (ou de uma empresa concorrente) da Globo, eu não posso fazer.',
  },

  {
    question: 'Saber descrever, em poucas palavras, sobre o que se trata esse seu projeto.',
    answer:
      'Ao saber descrever o seu projeto, você consegue me ajudar a entender melhor do que ele se trata.',
  },

  {
    question: 'Você já possui o layout (telas) do projeto?',
    answer:
      'Meu foco é no desenvolvimento e, infelizmente, eu não possui habilidades de Designer para desenvolver as telas.',
    highlight:
      'Sem um Designer, não vai dar para fazer o seu projeto.<br/> Até posso indicar um, mas não há garantia que ele irá aceitar.',
  },

  {
    question:
      'Se você já possui layout, você possui um UX (Designer) para atualizar o layout, caso necessário?',
    answer:
      'Dependendo do tipo do projeto, as vezes é necessário fazer algumas alterações (principalmente se for um projeto de TV).',
  },

  {
    question:
      'Você já possui um Backend(BE)/API com os dados do sistema que você quer desenvolver?',
    answer:
      'Isso é necessário para poder entender se eu também terei que fazer a parte de Backend.',
    highlight:
      'Ter um alguém fazendo o BE, facilita caso seja necessário buscar alguma informação. <br/>Se já tiver uma API, ela precisa ter algum tipo de documentação, para eu poder saber o que eu posso ou não fazer.',
  },

  {
    question: 'Neste projeto, haverá outros desenvolvedores?',
    answer:
      'Se sim; eles irão desenvolver junto comigo, desenvolver outras partes do projeto ou assumir o projeto depois que eu sair?',
  },

  {
    question:
      'Esse projeto precisa de emissão de Nota Fiscal? ( É necessário que seja CPNJ ao invés de CPF? )',
    answer: 'Infelizmente, no momento, não estou fazendo projetos que precise emitir nota.',
  },

  {
    question:
      'Caso queira fazer uma App de TV, qual (ou quais) plataforma(s) você pretende lançar o seu APP?',
    answer: 'Eu só desenvolvo para Smart TVs Samsung (Tizen) e LG (webOs) dos últimos 4 anos.',
    highlight:
      'Essas duas fabricantes só disponibiliza o envio de novos APPs para as TVs dos últimos 4 anos.<br/> Android TV ou Roku, infelizmente eu não desenvolvo.',
  },
];

export function EstimateView() {
  const theme: ITHEME = useTheme();
  const style = EstimateStyle({ theme });
  return (
    <>
      <Head />
      <Section customStyle={{ flexDirection: 'column' }}>
        <p className={style.head}>
          Você deseja fazer um site ou um app comigo? <br />
          Veja o que você precisa fazer para poder para conseguir um orçamento.
        </p>

        <div>
          <h3 className={style.subHead}>Pré requisitos:</h3>
          <ul>
            {lines.map((data, key) => (
              <LineQuestion {...data} customStyle={style} key={key} />
            ))}
          </ul>
          <p>
            Se você conseguiu preencher todos os pré requisitos, entre em contato comigo via{' '}
            {/* <Link href="https://wa.me/5521964530625/?text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20contigo"> */}
            <Link
              href={`https://wa.me/5521964530625/?text=${encodeURI(
                'Olá, tudo bem? Gostaria de conversar sobre um projeto contigo.'
              )}`}
            >
              whatsapp: (21) 96453-0625
            </Link>
          </p>
        </div>

        {/* <iframe
          title="Formulário para orçamento."
          src="https://docs.google.com/forms/d/e/1FAIpQLSdpfmGZpFBoVjTFX352-csTiYXzRCh0tGtQERwYxMsMvBuetg/viewform?embedded=true"
          // width="640"
          style={{
            minWidth: "320px",
            width: '100%',
            height: "740px",
            margin: '1em 0',
          }}>Carregando…</iframe>

        <span>
          Caso o fomulário não tenha carregado, <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpfmGZpFBoVjTFX352-csTiYXzRCh0tGtQERwYxMsMvBuetg/viewform">acesse o fomulário através desse link</Link>
        </span> */}
      </Section>
    </>
  );
}

function LineQuestion({
  question,
  answer,
  highlight,
  customStyle: style,
}: answerType & { customStyle: any }) {
  return (
    <li className={style.line}>
      <h4 className={style.question}>{question}</h4>
      <p className={style.answer} dangerouslySetInnerHTML={{ __html: answer }} />
      {highlight && (
        <span className={style.highlight} dangerouslySetInnerHTML={{ __html: highlight }}></span>
      )}
    </li>
  );
}
