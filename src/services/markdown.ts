/**
 * Importamos os módulos que instalamos
 * pelo NPM.
 */
// Processador para parsear markdown
import {remark} from 'remark';
// Serializador de markdown para string
import html from 'remark-html';

/**
 * Criamos nossa função de transformar
 * string em HTML.
 * Ela é uma função assincrona, o que
 * ela sempre responderá uma Promise e
 * nos dará a possibilidade de esperar uma
 * Promise dentro dela terminar para
 * continuar de uma forma simples.
 */
export async function toHTML(markdown) {
  // Processamos nosso conteúdo Markdown
  // @ts-ignore
  const result = await remark()
    .use(html)
    .process(markdown);

  /**
   * Retornamos ele de volta em formato
   * de String.
   */
  return result.toString();
}

/**
 * Exportamos o padrão como um objeto
 * com a função para ficar mais bonito
 * utilizá-lo, utilizaremos ela assim:
 * markdown.toHTML(content)
 */
export default { toHTML };
