import React from 'react';
import Image from 'next/image';

export default function Logo() {
    return (
        <>
            <Image
                src="/logo-dixi.png"
                alt={'Logo Dixi'}
                height={76}
                width={62}
            />
        </>
    );
}
