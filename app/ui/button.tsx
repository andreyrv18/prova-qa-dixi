'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    buttonSize: string;
    icon?: boolean;

    forceHover?: boolean;
    forceActive?: boolean;
    forceTranparent?: boolean;
    forceHoverFill?: boolean;
}

export function Button({
    children,
    buttonSize,
    className,
    icon,
    forceActive,
    forceHover,
    forceTranparent,
    forceHoverFill,
    ...rest
}: ButtonProps) {
    const hasButtonSize: string =
        buttonSize == 'pequeno'
            ? 'rounded-3xl w-38 h-8'
            : 'rounded-md w-38 h-8';
    const hasIcon = icon ? <FaPlus></FaPlus> : null;

    const buttonActive =
        'border-bg-[#3379bc] bg-[#3379bc] text-background pointer-events-none';
    const buttonHover = ' bg-azul-leve  pointer-events-none';
    const buttonTransparent =
        'border-none  border-transparent bg-transparent text-transparent  pointer-events-none';
    const buttonHoverFill =
        'bg-azul-leve border-azul-hover  bg-azul-hover text-background  pointer-events-none';
    if (forceActive) {
        className += buttonActive;
    } else if (forceHover) {
        className += buttonHover;
    } else if (forceTranparent) {
        className += buttonTransparent;
    } else if (forceHoverFill) {
        className += buttonHoverFill;
    }

    return (
        <button
            {...rest}
            className={`${hasButtonSize} ${className} text-md border-azul-base hover:bg-azul-leve active:border-bg-[#3379bc] active:text-background flex cursor-pointer items-center justify-center border active:bg-[#3379bc]`}
        >
            {hasIcon}
            {children}
        </button>
    );
}
