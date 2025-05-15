import React from 'react'
import classNames from 'classnames'

import { Icon } from '@components/ui/IconComponent/Icon'
import type { ButtonProps as BaseButtonProps } from './types'

import './styles.scss'

type IconShape = 'default' | 'round'
interface ButtonProps extends BaseButtonProps {
  iconShape?: IconShape
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconPosition = 'left',
  size = 'md',
  variant,
  style,
  onClick,
  disabled = false,
  className,
  type = 'button',
  loading = false,
  iconShape = 'round',
  ...rest
}) => {

  const isIconOnly = !!icon && !text

  const buttonClass = classNames(
    'button',
    variant,
    style,
    size,
    {
      'icon-only':  isIconOnly && iconShape !== 'round',
      'icon-round': isIconOnly && iconShape === 'round',
    },
    className
  )

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="loader" />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Icon icon={icon} size={size} className="icon icon--left" />
          )}

          {text && <span className="text">{text}</span>}

          {icon && iconPosition === 'right' && (
            <Icon icon={icon} size={size} className="icon icon--right" />
          )}
        </>
      )}
    </button>
  )
}

export default Button
