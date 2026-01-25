import React from 'react';

interface CardBarProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export default function Card({ children, ...rest }: CardBarProps) {
    return (
        <section
            {...rest}
            className="border-outline bg-background grid h-155 w-233 grid-cols-[620px_1fr] gap-2 rounded-2xl border-2 shadow-xl"
        >
            {children}
        </section>
    );
}
