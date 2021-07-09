import * as styles from './Heading.module.scss'

export default function Heading({ children, overHeading, size = 'sm' }) {
  const subHeading = <h2 className={styles.overHeading}>{overHeading}</h2>
  return (
    <>
      {size === 'sm' && subHeading}
      <h1 className={styles.heading} data-size={size}>{children}</h1>
      {size === 'lg' && subHeading}
    </>
  )
}
