import React from "react";

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'alert' | 'link' | 'success';
export type ButtonStyle = 'solid' | 'outline' | 'link' | 'icon';
export type ButtonIconPosition = 'left' | 'right';

interface BaseButtonProps {
    text?: string;
    icon?: React.ReactNode;
    iconPosition?: ButtonIconPosition;
    variant: ButtonVariant;
    style: ButtonStyle;
    size: ButtonSize;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export type ButtonProps = BaseButtonProps;
