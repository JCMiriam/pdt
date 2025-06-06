import CaretDown from '@assets/icons/caret-down.svg?react'
import CaretUp from '@assets/icons/caret-up.svg?react'
import CaretRight from '@assets/icons/caret-right.svg?react'
import CaretLeft from '@assets/icons/caret-left.svg?react'
import Cross from '@assets/icons/cross.svg?react'
import Crown from '@assets/icons/crown.svg?react'
import Pencil from '@assets/icons/pencil.svg?react'
import Picture from '@assets/icons/picture.svg?react'

export const iconMap = {
  caretDown: CaretDown,
  caretUp: CaretUp,
  caretRight: CaretRight,
  caretLeft: CaretLeft,
  cross: Cross,
  crown: Crown,
  pencil: Pencil,
  picture: Picture,
} as const

export const iconNames = Object.keys(iconMap) as (keyof typeof iconMap)[]
