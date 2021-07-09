import colors from './colors.module.scss'

export const colorsCssVars = (theme) => {
  if (theme === 'dark') {
    return {
      '--primary': colors['dark-primary'],
      '--secondary': colors['dark-secondary'],
      '--accent': colors['dark-accent']
    }
  }

  return {
    '--primary': colors['light-primary'],
    '--secondary': colors['light-secondary'],
    '--accent': colors['light-accent']
  }
}

export default null
