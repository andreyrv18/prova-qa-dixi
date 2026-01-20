'use client';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | boolean;
    forceHover?: boolean;
    forceFocus?: boolean;
}

export function Input({
    label,
    error,
    forceFocus,
    forceHover,
    disabled,
    ...rest
}: InputProps) {
    const hasError: boolean = !!error;
    const isSimulatedActive = (forceHover || forceFocus) && !hasError;

    return (
        <div className="flex bg-transparent p-2">
            <div className="relative">
                <input
                    {...rest}
                    readOnly={forceHover || forceFocus}
                    className={`peer border-outline placeholder-texto-placeholder focus:border-azul-base focus:outline-azul-base hover:border-azul-hover hover:outline-azul-hover rounded-md border p-2 hover:outline-1 focus:outline-1 ${
                        hasError
                            ? 'border-red-500 hover:border-red-500 hover:outline-red-500 focus:border-red-500 focus:outline-red-500'
                            : isSimulatedActive
                              ? 'border-azul-hover outline-azul-hover outline-2'
                              : 'border-outline focus:border-azul-base text-gray-900'
                    } ${disabled ? 'outline-disabled-border hover:outline-disabled-border hover:border-disabled-border bg-disabled outline-1' : ''}`}
                    disabled={disabled}
                />
                <label
                    htmlFor="meuInput"
                    className="bg-background-2 text-titulo-campo-texto absolute -top-2 left-3 font-bold transition-all"
                >
                    {label}
                </label>
                {typeof error === 'string' && (
                    <span className="bg-background-2 absolute right-3 -bottom-2 px-2 text-xs font-bold text-red-500">
                        *{error}
                    </span>
                )}
            </div>
        </div>
    );
}
