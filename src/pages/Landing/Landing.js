import { Heading } from '../../components'
import * as styles from './Landing.module.scss'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Heading overHeading="Web Developer" size="lg">Logan Saunders</Heading>
    </div>
  )
}
