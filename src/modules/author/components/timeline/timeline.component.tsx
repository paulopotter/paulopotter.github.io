import { TimelineStyle } from "./timeline.style"

interface TimelineProps {
  content: TimelineContent[]
}
interface TimelineContent {
  mark: string | number
  data: TimelineContentData[]
}

interface TimelineContentData {
  title: string
  subtitle: string
  content: any
}

export function Timeline({ content }: TimelineProps): JSX.Element{
  const style = TimelineStyle()

  return (
    <ul className={style.timeline}>
      {
        content.map(({ mark, data }) => (
          <li className={style.timelineMark} key={`mark-${mark}`}>
            <span className={style.timelineDate}>{mark}</span>
            {
              data.map(({ title, subtitle, content }) => (
                <div key={`data-${title}`}>
                  <p className={style.timelineContent}>

                    <span className={style.timelineJobTitle}>{title}</span> {' - '}
                    <span className={style.timelineCompany}>{subtitle}</span>
                  </p>
                  <div className={style.timelineContent}>
                    { content }
                  </div>
                </div>
              ))
            }
          </li>
        ))
      }
    </ul>
  )
}
