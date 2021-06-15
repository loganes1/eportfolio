import * as styles from './Heading.module.scss'

export default function Heading({children}) {
  return (
    <h1 className={styles.heading}>{children}</h1>
  )
}