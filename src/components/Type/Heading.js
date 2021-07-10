import { useScreenSize } from '../../helpers'
import * as styles from './Heading.module.scss'

export default function Heading({ children, overHeading }) {
  const size = useScreenSize()
  const subHeading = <h2 className={styles.overHeading} data-size={size}>{overHeading}</h2>
  return (
    <>
      {size === 'sm' && subHeading}
      <h1 className={styles.heading} data-size={size}>{children}</h1>
      {size === 'lg' && subHeading}
    </>
  )
}
