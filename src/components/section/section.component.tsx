import classNames from "classnames";
import { SectionStyle } from "./section.style"

interface SectionProps {
  children: any;
  customStyle?: Record<string, any>;
  className?: any
}

export function Section({ children, customStyle, className }: SectionProps): JSX.Element {
  const style = SectionStyle()

  return (
    <section className={classNames(style.content, className)} style={customStyle}>
      {children}
    </section>
  )
}
