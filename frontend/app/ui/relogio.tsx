import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { GetServerTime } from '@/app/services/fetchAPI';
import {
    RelogioContext,
    RelogioDispatchContext,
} from '@/app/context/RelogioContext';
import handleTime from '@/app/utils/handleTime';
import RelogioSkeleton from '@/app/ui/relogioSkeleton';

interface RelogioProps {
    children?: ReactNode;
    horaEstatica?: Date | null;
}

export default function Relogio({ children, horaEstatica }: RelogioProps) {
    const [horaMostrada, setHoraMostrada] = useState<Date | null>(
        horaEstatica || null,
    );
    const intevaloRef = useRef<NodeJS.Timeout | null>(null);

    const relogioState = useContext(RelogioContext);
    const relogioDispatch = useContext(RelogioDispatchContext);

    useEffect(() => {
        if (horaEstatica) {
            setHoraMostrada(horaMostrada);
            return;
        }

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
    }, [horaEstatica]);

    useEffect(() => {
        if (!horaEstatica && horaMostrada && relogioState?.isTimeSaved) {
            relogioDispatch?.({ type: 'HORA_MOSTRADA', payload: horaMostrada });
        }
    }, [
        horaEstatica,
        horaMostrada,
        relogioState?.isTimeSaved,
        relogioDispatch,
    ]);

    if (!horaMostrada) return <RelogioSkeleton />;

    const { diaDaSemana, horas, segundos, dataFormatada } =
        handleTime(horaMostrada)!;

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
