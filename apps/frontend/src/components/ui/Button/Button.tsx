import React from 'react';
import classNames from 'classnames';

import {ButtonProps} from './types';
import './styles.scss';

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
                    {icon && (<span className={`icon icon--${iconPosition ?? 'left'}`}>{icon}</span>)}
                    {text && <span className="text">{text}</span>}
                    {icon && iconPosition === 'right' && <span className="icon">{icon}</span>}
                </>
            )}
        </button>
    );
}

export default Button;