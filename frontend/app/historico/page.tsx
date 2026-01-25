import SideBar from '@/app/ui/sideBar';
import Card from '@/app/ui/card';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import { Hr } from '@/app/ui/hr';
import { v4 as uuidv4 } from 'uuid';

export default function Historico() {
    return (
        <section className="grid h-screen grid-cols-[auto_1fr]">
            <SideBar />
            <section className="flex h-full w-full flex-col items-center justify-center">
                <div className="flex w-fit flex-col items-start gap-5">
                    <header className="flex flex-col items-start pl-4">
                        <h1 className="text-titulo-pagina text-azul-base font-bold">
                            Historico
                        </h1>
                        <h2 className="text-subtitulo text-corpo-de-texto font-semibold">
                            Veja os Pontos Registrados no Sistema
                        </h2>
                    </header>
                    <main>
                        <Card>
                            <div>tes</div>
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex flex-row items-center justify-center">
                                    <Input label="Data Inicial"></Input>

                                    <Input
                                        id={uuidv4()}
                                        label="Data Final"
                                        placeholder="00/00/00"
                                        name="vazio neutro"
                                        type="date"
                                    ></Input>
                                    <Button buttonSize="large" icon={true}>
                                        Pesquisar
                                    </Button>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-8">
                                    <p className="text-azul-base">data</p>
                                    <p className="text-azul-base">marcaçoes</p>
                                </div>
                            </div>
                            <Hr />
                        </Card>
                    </main>
                </div>
            </section>
        </section>
    );
}
