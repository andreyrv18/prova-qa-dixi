import { Fragment } from 'react';
import { Hr } from '@/app/ui/hr';
import { Input } from '@/app/ui/input';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/app/ui/button';
import Th from '@/app/ui/th';
import Td from '@/app/ui/td';
import Switch from '@/app/ui/switch';
import SideBar from '@/app/ui/sideBar';
import { FaPlus } from 'react-icons/fa';

export default function Page() {
    type StringRecord = Record<string, string>;

    // noinspection JSNonASCIINames
    const codigoHex: StringRecord = {
        'Azul Base': '#3379BC',
        'Azul Hover': '#40A5DD',
        'Azul Leve': '#C8E5F4',
        Background: '#FFFFFF',
        'Background 2': '#F9FAFA',
        Outline: '#EBEDEE',
        'Trancado ou Explicativo': '#C8C8C8',
        'Texto Placeholder': '#AFAFAF',
        'Título de Campo': '#9B9B9B',
        'Corpo de Texto': '#7A7A7A',
        Tooltip: '#525252',
        'Texto Destaque': '#000000',
    };
    const faPlus = <FaPlus />;

    return (
        <div className="grid grid-cols-[auto_1fr]">
            <SideBar />
            <main className="w-full xl:h-full">
                <h1 className="text-titulo-modal text-corpo-de-texto p-2">
                    Desafio Dixi 2026 - Bater Ponto - Regras de UI
                </h1>

                <h1 className="text-azul-base ml-2 pl-2 font-bold">
                    Cores e Fontes
                </h1>
                <Hr></Hr>
                <section className="ml-2 grid grid-flow-col grid-cols-[25%_1fr] justify-items-start gap-2 pl-2">
                    <section className="row-span-1 m-2">
                        <h3 className="text-corpo-de-texto text-subtitulo">
                            Cores
                        </h3>
                        <section className="grid grid-cols-[auto_1fr] items-center gap-y-1 p-2">
                            <p className="text-azul-base pl-2 font-bold">
                                Código HEX
                            </p>
                            <p className="text-azul-base pl-2 font-bold">
                                Nome
                            </p>
                            {Object.entries(codigoHex).map(([key, value]) => {
                                const colors = `var(--color-${key.replaceAll(' ', '-').toLowerCase()})`;
                                return (
                                    <Fragment key={key}>
                                        <div
                                            className="ml-2 w-26 rounded-l-lg p-2 text-gray-800"
                                            style={{ background: colors }}
                                        >
                                            {value}
                                        </div>

                                        <div className="p-2 pl-4"> {key}</div>
                                    </Fragment>
                                );
                            })}
                        </section>
                    </section>
                    <section className="row-span-1 m-2">
                        <h3 className="text-botao text-corpo-de-texto pb-2">
                            Fonte
                        </h3>
                        <section className=" ">
                            <h1 className="text-titulo-modal text-corpo-de-texto font-bold">
                                Open Sans
                            </h1>
                            <Hr></Hr>

                            <section className="flex items-center justify-start gap-10">
                                <p className="ml-2 w-20 p-2 font-normal">
                                    Regular
                                </p>
                                <p className="text-azul-base">
                                    The quick brown fox jumps over the lazy dog
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="flex items-center justify-start gap-10">
                                <p className="ml-2 w-20 p-2 font-semibold">
                                    Semibold{' '}
                                </p>
                                <p className="text-azul-base font-semibold">
                                    The quick brown fox jumps over the lazy dog
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="flex items-center justify-start gap-10">
                                <p className="ml-2 w-20 p-2 font-bold">Bold </p>
                                <p className="text-azul-base font-bold">
                                    The quick brown fox jumps over the lazy dog
                                </p>
                            </section>
                            <Hr></Hr>
                        </section>
                        <Hr></Hr>
                        <section className="row-span-1 m-2">
                            <h3 className="text-botao text-corpo-de-texto pb-4 font-semibold">
                                Tamanho das Fontes
                            </h3>
                            <section className="text-azul-base flex items-center justify-stretch gap-6 font-bold">
                                <p className="w-46">Tipo da fonte</p>
                                <p>Tamanho</p>
                                <p className="w-16">Peso</p>
                                <p>Exemplo</p>
                            </section>
                            <Hr></Hr>
                            <section className="ml-2 flex items-center justify-stretch gap-6 p-2">
                                <p className="w-46">Título de Página</p>
                                <p className="w-10">35 px</p>
                                <p className="w-16">Bold</p>
                                <p className="text-titulo-pagina font-bold">
                                    The quick brown fox jumps{' '}
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="ml-2 flex items-center justify-stretch gap-6 p-2">
                                <p className="w-46">Título de Modal</p>
                                <p>20 px</p>
                                <p className="w-16">Bold</p>
                                <p className="text-titulo-modal font-bold">
                                    The quick brown fox jumps{' '}
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="ml-2 flex items-center justify-stretch gap-6 p-2">
                                <p className="w-46">Subtítulo</p>
                                <p>16 px</p>
                                <p className="w-16">SemiBold</p>
                                <p className="text-titulo-modal font-semibold">
                                    The quick brown fox jumps{' '}
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="ml-2 flex items-center justify-stretch gap-6 p-2">
                                <p className="w-46">Título de Campo de Texto</p>
                                <p>10 px</p>
                                <p className="w-16">SemiBold</p>
                                <p className="text-titulo-modal font-semibold">
                                    The quick brown fox jumps{' '}
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="ml-2 flex items-center justify-stretch gap-6 p-2">
                                <p className="w-46">
                                    Interior de Campo de Texto
                                </p>
                                <p>14 px</p>
                                <p className="w-16">Regular</p>
                                <p className="text-titulo-modal font-normal">
                                    The quick brown fox jumps{' '}
                                </p>
                            </section>
                            <Hr></Hr>
                            <section className="ml-2 flex items-center justify-stretch gap-6 p-2">
                                <p className="w-46">Texto de Botão</p>
                                <p>14 px</p>
                                <p className="w-16">Bold</p>
                                <p className="text-titulo-modal font-bold">
                                    The quick brown fox jumps{' '}
                                </p>
                            </section>
                        </section>
                    </section>
                </section>
                <Hr></Hr>
                <span className="p-40"></span>
                <h1 className="text-azul-base ml-2 pl-2 font-bold">
                    Componentes
                </h1>
                <Hr></Hr>

                <section className="flex flex-col">
                    <section className="ml-2 grid h-full grid-flow-col grid-cols-[50%_1fr] justify-items-start gap-2 pl-2">
                        <section className="row-span-2 m-2">
                            <h3 className="text-corpo-de-texto text-subtitulo">
                                Campos de Texto
                            </h3>
                            <section className="grid grid-cols-[auto_1fr_1fr] items-center gap-5 p-2">
                                <p className="text-azul-base pl-2 font-bold"></p>
                                <p className="text-azul-base pl-2 font-bold">
                                    Campo Normal
                                </p>
                                <p className="text-azul-base pl-2 font-bold">
                                    Campo com Ícone
                                </p>
                                <div>
                                    <p className="p-2 font-semibold">
                                        Vazio <br /> (neutro)
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Vazio <br /> (Hover)
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Preenchido
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Preenchido <br /> (hover)
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Erro <br /> (vazio)
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Erro <br /> (preenchido)
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Desabilitado <br />
                                        (vazio)
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Desabilitado <br />
                                        (preenchido)
                                    </p>
                                </div>
                                <div>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="vazio neutro"
                                        type="text"
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="vazio hover"
                                        type="text"
                                        forceHover
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="preenchido"
                                        type="text"
                                        defaultValue="Super Texto"
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="preenchido hover"
                                        type="text"
                                        defaultValue="Super Texto"
                                        forceHover
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="erro vazio"
                                        type="text"
                                        error="mensagem de erro."
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="erro preenchido"
                                        type="text"
                                        error="mensagem de erro."
                                        defaultValue="Super Texto"
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="desabilitado vazio"
                                        type="text"
                                        disabled={true}
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="desabilitado preenchido"
                                        type="text"
                                        defaultValue="Super Texto"
                                        disabled={true}
                                    ></Input>
                                </div>
                                <div>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="vazio neutro"
                                        type="date"
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="vazio hover"
                                        type="date"
                                        forceHover
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="preenchido"
                                        type="date"
                                        defaultValue="2026-01-15"
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="preenchido hover"
                                        type="date"
                                        defaultValue="2026-01-15"
                                        forceHover
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="erro vazio"
                                        type="date"
                                        error="mensagem de erro."
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="erro preenchido"
                                        type="date"
                                        error="mensagem de erro."
                                        defaultValue="2026-01-15"
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="desabilitado vazio"
                                        type="date"
                                        disabled={true}
                                    ></Input>
                                    <Input
                                        id={uuidv4()}
                                        label="Título do Campo"
                                        placeholder="Escreva algo"
                                        name="desabilitado preenchido"
                                        type="date"
                                        defaultValue="2026-01-15"
                                        disabled={true}
                                    ></Input>
                                </div>
                            </section>
                        </section>

                        <section className="row-span-2 m-2">
                            <table className="table-auto border-collapse border-spacing-2">
                                <thead>
                                    <tr>
                                        <Th colSpan={2}>{''}</Th>
                                        <Th middleCell={true}>Botão Pequeno</Th>
                                        <Th colSpan={2}>Botão Médio</Th>
                                    </tr>
                                    <tr>
                                        <Th colSpan={2}>{''}</Th>
                                        <Th middleCell={true}>Botão Normal</Th>
                                        <Th middleCell={true}>Botão Normal </Th>
                                        <Th>Botão com Ícone</Th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* --- GRUPO: Botão Contornado --- */}
                                    <tr>
                                        <Td rowSpan={3}>
                                            Botão
                                            <br />
                                            Contornado{' '}
                                        </Td>
                                        {/* Linha 1: Neutro */}
                                        <td className="text-center font-bold">
                                            Neutro
                                        </td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="pequeno"
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="medio"
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                buttonSize="medio"
                                                icon={faPlus}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                    </tr>

                                    <tr>
                                        {/* Linha 2: Hover */}
                                        <td className="text-center font-bold">
                                            Hover
                                        </td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="pequeno"
                                                forceHover={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="medio"
                                                forceHover={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                buttonSize="medio"
                                                icon={faPlus}
                                                forceHover={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                    </tr>
                                    {/* Linha 3: Pressionado (Com borda inferior grossa) */}
                                    <tr>
                                        <td className="text-center font-bold">
                                            Pressionado
                                        </td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="pequeno"
                                                forceActive={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="medio"
                                                forceActive={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                buttonSize="medio"
                                                forceActive={true}
                                                icon={faPlus}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                    </tr>

                                    {/* --- GRUPO: Botão Cheio --- */}
                                    <tr>
                                        <Td rowSpan={3}>Botão Cheio </Td>
                                        {/* Linha 1: Neutro */}
                                        <td className="text-center font-bold">
                                            Neutro
                                        </td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="pequeno"
                                                forceTranparent={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="medio"
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                buttonSize="medio"
                                                icon={faPlus}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                    </tr>

                                    <tr>
                                        {/* Linha 2: Hover */}
                                        <td className="text-center font-bold">
                                            Hover
                                        </td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="pequeno"
                                                forceTranparent={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="medio"
                                                forceHoverFill={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                buttonSize="medio"
                                                forceHoverFill={true}
                                                icon={faPlus}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                    </tr>
                                    {/* Linha 3: Pressionado (Com borda inferior grossa) */}
                                    <tr>
                                        <td className="text-center font-bold">
                                            Pressionado
                                        </td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="pequeno"
                                                forceTranparent={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td middleCell={true}>
                                            <Button
                                                icon={false}
                                                buttonSize="medio"
                                                forceActive={true}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                buttonSize="medio"
                                                forceActive={true}
                                                icon={faPlus}
                                            >
                                                Texto botão
                                            </Button>
                                        </Td>
                                    </tr>
                                </tbody>
                            </table>
                            <Hr className="h-[3]"></Hr>
                            <table className="table-auto border-collapse border-spacing-2">
                                <thead>
                                    <tr>
                                        <Th colSpan={1}>{''}</Th>
                                        <Th middleCell={true}>
                                            Não Selecionado
                                        </Th>
                                        <Th>Selecionado</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <Td>Neutro</Td>
                                        <Td middleCell={true}>
                                            <Switch />
                                        </Td>
                                        <Td>
                                            <Switch />
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Td rowSpan={2}>Hover</Td>
                                        <Td middleCell={true}>
                                            <Switch />
                                        </Td>
                                        <Td>
                                            <Switch />
                                        </Td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
}
