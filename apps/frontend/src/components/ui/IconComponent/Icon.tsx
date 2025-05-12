import { iconMap } from '@lib/icons'
import type { IconName, Size } from './types'

const sizeMap: Record<Size, number> = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
}

type IconProps = {
  icon: IconName
  size?: Size
  color?: string
  className?: string
}

export const Icon = ({
  icon,
  size = 'md',
  color = 'currentColor',
  className = '',
}: IconProps) => {
  const SvgIcon = iconMap[icon]
  const pixelSize = sizeMap[size]

  return <SvgIcon width={pixelSize} height={pixelSize} fill={color} className={className} />
}
