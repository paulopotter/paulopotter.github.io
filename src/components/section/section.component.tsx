import { SectionStyle } from "./section.style"

interface SectionProps {
  children: any;
  customStyle?: Record<string, any>;
}

export function Section({ children, customStyle }: SectionProps): JSX.Element {
  const style = SectionStyle()

  return (
    <section className={style.content} style={customStyle}>
      {children}
    </section>
  )
}
