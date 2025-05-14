import React from "react";
import { IconName } from "../IconComponent/types";

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
export type ButtonStyle = 'solid' | 'outline' | 'link' | 'icon';
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
