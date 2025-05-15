import { iconMap } from '@lib/icons';
import type { IconName, Size } from '@shared-types/icon';

const sizeMap: Record<Size, number> = {
  xs: 10,
  sm: 12,
  md: 16,
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
