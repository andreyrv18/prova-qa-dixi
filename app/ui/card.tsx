import React from 'react';

interface CardBarProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export default function Card({ children, ...rest }: CardBarProps) {
    return (
        <section
            {...rest}
            className="border-outline bg-background-2 grid h-[620] w-[932] grid-cols-[auto_1fr] gap-2 rounded-2xl border-2 shadow-xl"
        >
            {children}
        </section>
    );
}
