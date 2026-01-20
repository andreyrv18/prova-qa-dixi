import React from 'react';

interface HrProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
}

export function Hr({ className, ...rest }: HrProps) {
    return (
        <hr
            {...rest}
            className={`bg-azul-leve h-[2] w-full border-none ${className}`}
        />
    );
}
