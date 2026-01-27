const TIME_ZONE = 'America/Sao_Paulo';

const opcoesTempo: Intl.DateTimeFormatOptions = {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
};

const opcoesSegundo: Intl.DateTimeFormatOptions = {
    timeZone: TIME_ZONE,
    second: '2-digit',
};

const opcoesDiaDaSemana: Intl.DateTimeFormatOptions = {
    timeZone: TIME_ZONE,
    weekday: 'long',
};

const opcoesDataNum: Intl.DateTimeFormatOptions = {
    timeZone: TIME_ZONE,
};

export default function handleTime(horaMostrada: Date) {
    if (!horaMostrada) return null;

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

    return { diaDaSemana, horas, segundos, dataFormatada };
}

export const formatarData = (dataIso: Date) => {
    return new Date(dataIso).toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });
};
