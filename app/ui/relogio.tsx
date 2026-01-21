import { ReactNode } from 'react';

export default function Relogio({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-subtitulo text-azul-base font-bold">
                    Terça-Feira
                </h2>

                <h1 className="text-azul-base text-6xl font-bold">
                    12:32
                    <span className="text-subtitulo text-corpo-de-texto font-semibold">
                        32
                    </span>
                </h1>
                <p className="text-azul-base text-subtitulo font-semibold">
                    21/02/2026
                </p>
                <p className="text-corpo-de-texto">
                    A data e hora serão registrados no sistema ao realizar a
                    marcação.
                </p>
                {children}
            </div>
        </>
    );
}
