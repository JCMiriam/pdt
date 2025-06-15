type LogoColor = 'fullcolor' | 'monochrome'
export type LogoSize = 'sm' | 'md' | 'lg'

export type LogoProps = {
  size?: LogoSize
  color?: LogoColor
  customColor?: string
  className?: string
}