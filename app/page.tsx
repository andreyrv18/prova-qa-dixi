'use client';
import SideBar from '@/app/ui/sideBar';
import WebcamComponent from '@/app/ui/webcam';
import Card from '@/app/ui/card';
import Switch from '@/app/ui/switch';
import Modal from '@/app/ui/modal';
import { useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Button } from '@/app/ui/button';

export default function Home() {
    const [capturedImage, setCapturedImage] = useState<string | StaticImport>(
        '',
    );
    const [showModal, setShowModal] = useState(false);

    const handleCapture = (imageSrc: string) => {
        setCapturedImage(imageSrc);
        setShowModal(true);
    };
    return (
        <div className="grid h-screen grid-cols-[auto_1fr]">
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
                            <WebcamComponent onCapture={handleCapture} />
                            <div className="flex w-full flex-col justify-between p-3">
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
                                        A data e hora serão registrados no
                                        sistema ao realizar a marcação.
                                    </p>
                                    <Switch
                                        // onClick={}
                                        label="Tirar foto para bater ponto"
                                    ></Switch>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <Button
                                        className="items-center"
                                        icon={true}
                                        buttonSize="large"
                                        // onClick={capturePhoto}
                                    >
                                        Registrar Ponto
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </main>
                </div>
                <Modal
                    openModal={showModal}
                    closeModal={() => setShowModal(false)}
                >
                    <section className="grid-cols[1fr_1fr] grid">
                        <h1 className="text-titulo-modal text-azul-base font-bold">
                            Prévia da Marcação
                        </h1>

                        {capturedImage && (
                            <Image
                                src={capturedImage}
                                width={300}
                                height={300}
                                className="rounded-md object-cover"
                                alt="Foto capturada da Webcam"
                            ></Image>
                        )}
                    </section>
                </Modal>
            </section>
        </div>
    );
}
