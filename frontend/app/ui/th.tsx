import React from 'react';

interface ThProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    middleCell?: boolean;
    colSpan?: number;
}

export default function Th({ children, middleCell, ...rest }: ThProps) {
    const middle = 'border-l border-r font-bold';
    return (
        <th
            {...rest}
            className={`${middleCell && middle} text-azul-base border-b border-gray-200 p-3`}
        >
            {children}
        </th>
    );
}
