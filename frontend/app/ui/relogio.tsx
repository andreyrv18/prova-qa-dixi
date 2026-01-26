import { ReactNode, useEffect, useRef, useState } from 'react';
import { GetServerTime } from '@/app/services/fetchAPI';

export default function Relogio({ children }: { children: ReactNode }) {
    const [horaMostrada, setHoraMostrada] = useState<Date | null>(null);
    const intevaloRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        const sincronizar = async () => {
            const inicio = performance.now();

            try {
                const horaServidor = await GetServerTime();

                if (!horaServidor) return;

                const fim = performance.now();

                const latencia = (fim - inicio) / 2;
                const horaRealServidor = horaServidor + latencia;
                const tempoReferenciaFrontend = performance.now();

                if (intevaloRef.current) clearInterval(intevaloRef.current);

                intevaloRef.current = setInterval(() => {
                    const tempoPassado =
                        performance.now() - tempoReferenciaFrontend;

                    setHoraMostrada(new Date(horaRealServidor + tempoPassado));
                }, 1000);
            } catch (erro) {
                console.error('"Erro ao obter hora do servidor"', erro);
            }
        };

        sincronizar();
        return () => {
            if (intevaloRef.current) clearInterval(intevaloRef.current);
        };
    }, []);

    if (!horaMostrada) return <p className="text-azul-base">Carregando...</p>;

    const opcoesTempo: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    const opcoesSegundo: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        second: '2-digit',
    };

    const opcoesDiaDaSemana: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        weekday: 'long',
    };

    const opcoesDataNum: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
    };

    const diaDaSemana = horaMostrada.toLocaleDateString(
        'pt-BR',
        opcoesDiaDaSemana,
    );
    const horas = horaMostrada.toLocaleTimeString('pt-BR', opcoesTempo);
    const segundos = horaMostrada
        .toLocaleTimeString('pt-BR', opcoesSegundo)
        .padStart(2, '0');
    const dataFormatada = horaMostrada.toLocaleDateString(
        'pt-BR',
        opcoesDataNum,
    );

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-subtitulo text-azul-base font-bold capitalize">
                    {diaDaSemana}
                </h2>

                <h1 className="text-azul-base text-6xl font-bold">
                    {horas}
                    <span className="text-subtitulo text-corpo-de-texto font-semibold">
                        {segundos}
                    </span>
                </h1>
                <p className="text-azul-base text-subtitulo font-semibold">
                    {dataFormatada}
                </p>

                {children}
            </div>
        </>
    );
}
