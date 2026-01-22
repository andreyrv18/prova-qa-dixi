'use client';
import SideBar from '@/app/ui/sideBar';
import WebcamComponent from '@/app/ui/webcam';
import Card from '@/app/ui/card';
import Switch from '@/app/ui/switch';
import Modal from '@/app/ui/modal';
import { useContext } from 'react';
import { Button } from '@/app/ui/button';
import { TbClockPlus } from 'react-icons/tb';

import {
    WebcamContext,
    WebcamDispatchContext,
} from '@/app/context/WebcamContext';
import { ModalContext, ModalDispatchContext } from '@/app/context/ModalContext';
import Relogio from '@/app/ui/relogio';

export default function Home() {
    const webcamState = useContext(WebcamContext);
    const webcamDispatch = useContext(WebcamDispatchContext);
    const modalState = useContext(ModalContext);
    const modalDispatch = useContext(ModalDispatchContext);

    const handleRegistrarFoto = () => {
        webcamDispatch?.({ type: 'CAPTURE_TRIGGER' });

        modalDispatch?.({ type: 'OPEN_MODAL' });
    };
    return (
        <div className="bg-background grid h-screen grid-cols-[auto_1fr]">
            <SideBar />
            <section className="flex h-full w-full flex-col items-center justify-center">
                <div className="flex w-fit flex-col items-start gap-5">
                    <header className="flex flex-col items-start pl-4">
                        <h1 className="text-titulo-pagina text-azul-base self-start font-bold">
                            Bater Ponto
                        </h1>
                        <h2 className="text-subtitulo text-corpo-de-texto font-semibold">
                            Registre o ponto no sistema
                        </h2>
                    </header>
                    <main className="">
                        <Card>
                            <WebcamComponent />
                            <div className="flex w-full flex-col justify-between p-3">
                                <Relogio>
                                    <p className="text-corpo-de-texto">
                                        A data e hora serão registrados no
                                        sistema ao realizar a marcação.
                                    </p>
                                    <Switch
                                        label="Tirar foto para bater ponto"
                                        onChange={() => {
                                            webcamDispatch?.({
                                                type: 'OPEN_WEBCAM',
                                            });
                                        }}
                                        checked={webcamState?.isWebcamOpen}
                                    ></Switch>
                                </Relogio>
                                <div className="flex flex-col gap-6">
                                    <Button
                                        className="items-center"
                                        icon={
                                            <TbClockPlus className="rotate-x-180 transform" />
                                        }
                                        buttonSize="large"
                                        onClick={handleRegistrarFoto}
                                    >
                                        Registrar Ponto
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </main>
                </div>
                <Modal
                    isModalOpen={modalState?.isModalOpen ?? false}
                    onModalClose={() =>
                        modalDispatch?.({
                            type: 'CLOSE_MODAL',
                        })
                    }
                >
                    <section className="grid-cols[1fr_1fr] grid">
                        <h1 className="text-titulo-modal text-azul-base font-bold">
                            Prévia da Marcação
                        </h1>
                    </section>
                </Modal>
            </section>
        </div>
    );
}
