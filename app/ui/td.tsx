import React from 'react';

interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    middleCell?: boolean;
    rowSpan?: number;
}

export default function Td({ children, middleCell, ...rest }: TdProps) {
    const middle = ' font-bold border-l border-r';
    return (
        <th
            {...rest}
            className={`${middleCell && middle} text-azul-base border-b border-gray-200 p-3`}
        >
            {children}
        </th>
    );
}
