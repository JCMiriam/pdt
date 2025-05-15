import React from 'react'
import type { LogoProps, LogoSize } from './types'

import Fullcolor from '@assets/images/pdt-fullcolor-logo.svg?react'
import Monochrome from '@assets/images/pdt-monochrome-logo.svg?react'

const sizeMap: Record<LogoSize, number> = {
    sm: 24,
    md: 54,
    lg: 96,
}

const Logo: React.FC<LogoProps> = ({
    size = 'md',
    color = 'fullcolor',
    customColor,
}) => {
    const Svg = color === 'monochrome' ? Monochrome : Fullcolor
    const pixelSize = sizeMap[size]

    return (
        <Svg
        width={pixelSize}
        height={pixelSize}
        aria-label="Logo"
        {...(color === 'monochrome' && customColor
            ? { fill: customColor }
            : {})}
        />
    )
}

export default Logo
