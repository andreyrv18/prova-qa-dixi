'use client';
import React, { ReactElement } from 'react';
import { IconBaseProps } from 'react-icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    buttonSize: string;
    icon: ReactElement<IconBaseProps> | boolean;
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
    ...props
}: ButtonProps) {
    const hasButtonSize: string =
        buttonSize == 'pequeno'
            ? 'rounded-3xl w-38 h-8'
            : 'rounded-md w-38 h-8';

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
    } else if (hasButtonSize) {
        className += hasButtonSize;
    }

    return (
        <button
            {...props}
            className={`${hasButtonSize} ${className} text-md border-azul-base hover:bg-azul-leve active:border-bg-[#3379bc] active:text-background flex cursor-pointer items-center justify-center gap-2 border active:bg-[#3379bc]`}
        >
            <>{icon}</>
            {children}
        </button>
    );
}
