const URL = 'http://localhost:8080/marcacoes';
const CONTENT = 'application/json';

export const fetchAPI = async () => {
    const response = await fetch(URL);

    return await response.json();
};

export const PostMarcacoes = async (payload: object) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            contentType: CONTENT,
        },
        body: JSON.stringify(payload),
    });

    const { status } = response;
    const data = await response.json();
    return { data, status };
};
