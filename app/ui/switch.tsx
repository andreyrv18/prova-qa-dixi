'use client';

import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Switch({ label, className, ...props }: InputProps) {
    const id = useId();
    return (
        <label
            htmlFor={id}
            className="text-interior-campo-texto text-titulo-de-campo flex cursor-pointer flex-row items-center justify-between gap-2 font-semibold"
        >
            <input
                id={id}
                type="checkbox"
                className="peer sr-only"
                {...props}
            />
            <span className="group peer hover:outline-azul-leve ring-bg-azul-base after:bg-azul-base peer-checked:ring-azul-base peer-checked:bg-azul-base checked:bg-azul-base after:top-0.2 after:left-0.2 relative h-5 w-14 rounded-full ring-2 transition-all duration-100 after:absolute after:flex after:h-5 after:w-5 after:items-center after:justify-center after:rounded-full after:duration-100 peer-checked:after:translate-x-9 peer-checked:after:bg-white hover:outline-3 hover:outline-offset-2"></span>
            {label}
        </label>
    );
}
