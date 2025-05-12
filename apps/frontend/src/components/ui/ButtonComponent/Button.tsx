import React from 'react'
import classNames from 'classnames'

import { Icon } from '@components/ui/IconComponent/Icon'
import type { ButtonProps } from './types'

import './styles.scss'


const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    iconPosition,
    size,
    variant,
    style,
    onClick,
    disabled = false,
    className,
    type = 'button',
    loading = false
}) => {
    const buttonClass = classNames(
        'button',
        variant,
        style,
        size,
        className
    );

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled || loading}
            >
            {loading ? (
                <span className="loader"></span>
            ) : (
                <>
                {icon && iconPosition === 'left' && (
                    <Icon icon={icon} size="sm" className="icon icon--left" />
                )}

                {text && <span className="text">{text}</span>}

                {icon && iconPosition === 'right' && (
                    <Icon icon={icon} size="sm" className="icon icon--right" />
                )}
                </>
            )}
        </button>
    );
}

export default Button;