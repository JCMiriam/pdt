import React from "react";
import { IconName } from "../../../types/icon";

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
export type ButtonStyle = 'solid' | 'outline' | 'transparent' | 'icon';
export type ButtonIconPosition = 'left' | 'right';

interface BaseButtonProps {
    text?: string;
    icon?: IconName;
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
