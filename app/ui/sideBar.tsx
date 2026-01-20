import React from 'react';
import Link from 'next/dist/client/link';
import Logo from '@/app/ui/Logo';
import { Hr } from '@/app/ui/hr';
import { MdDescription } from 'react-icons/md';
import Image from 'next/image';

export default function SideBar() {
    return (
        <section className="bg-azul-base h-screen w-23 pt-10">
            <section className="flex flex-col items-center">
                <span className="pb-12">
                    <Logo />
                </span>
                <Hr className="w-34" />
                <Link
                    className="text-titulo-campo-texto text-background flex h-24 w-24 flex-col items-center justify-center gap-1"
                    href="/"
                >
                    <Image
                        width={40}
                        height={34}
                        src="/batida-ponto.png"
                        alt="Batida ponto"
                    />

                    <p className="text-inferior-campo-texto font-semibold">
                        Bater Ponto{' '}
                    </p>
                </Link>
                <Hr />
                <Link
                    className="text-titulo-campo-texto text-background flex h-24 w-24 flex-col items-center justify-center"
                    href="/historico"
                >
                    <MdDescription size={34} />
                    <p className="text-inferior-campo-texto text-center font-semibold">
                        Histórico de <br /> Ponto{' '}
                    </p>
                </Link>
                <Hr />
                <Link
                    className="text-titulo-campo-texto text-background flex h-24 w-24 flex-col items-center justify-center"
                    href="/uireference"
                >
                    <p className="text-inferior-campo-texto font-semibold">
                        UI Reference
                    </p>
                </Link>
            </section>
        </section>
    );
}
