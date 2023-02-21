import { Head, Section, Link } from "components";

export function EstimateView() {
  return (
    <>
      <Head />
      <Section customStyle={{ flexDirection: 'column' }}>
        <p>
          Você deseja fazer um site ou um app comigo? <br />
          Preencha o formulário e espere pelo o meu contato.
        </p>

        <iframe
          title="Formulário para orçamento."
          src="https://docs.google.com/forms/d/e/1FAIpQLSdpfmGZpFBoVjTFX352-csTiYXzRCh0tGtQERwYxMsMvBuetg/viewform?embedded=true"
          // width="640"
          style={{
            minWidth: "320px",
            width: '100%',
            height: "740px",
            margin: 0,
          }}>Carregando…</iframe>

        <span>
          Caso o fomulário não tenha carregado, <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpfmGZpFBoVjTFX352-csTiYXzRCh0tGtQERwYxMsMvBuetg/viewform">acesse o fomulário através desse link</Link>
        </span>
      </Section>
    </>
  )
}
