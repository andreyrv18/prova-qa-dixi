const CONTENT = 'application/json';

export const fetchAPI = async () => {
    const URL = 'http://localhost:8080/';

    const response = await fetch(URL);

    return await response.json();
};

export const PostMarcacoes = async (payload: object) => {
    const URL = 'http://localhost:8080/marcacoes';

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': CONTENT,
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        console.error('Erro ao Salvar marcacao', response.status);
        return { status: response.status, data: null };
    }

    const { status } = response;
    const data = await response.json();
    return { data, status };
};

export const GetServerTime = async () => {
    const URL = 'http://localhost:8080/time/sync';
    const response = await fetch(URL, { cache: 'no-cache' });

    if (!response.ok) {
        console.error('Falha na rede');
    }

    const data = await response.json();

    return Number(data['server time']);
};
