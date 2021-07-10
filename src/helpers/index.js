import * as React from 'react'

const getScreenSize = (size) => {
  const sizeMap = {
    sm: 360,
    lg: 1200
  }

  switch (true) {
    case size < sizeMap.lg: return 'sm'
    default: return 'lg'
  }
}

export const useScreenSize = () => {
  const [width, setWidth] = React.useState(window.outerWidth)
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.outerWidth)
    })
  })
  return getScreenSize(width)
}

export default null
