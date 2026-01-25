import { ReactNode, useContext, useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { TfiReload } from 'react-icons/tfi';
import { Button } from '@/app/ui/button';
import Relogio from '@/app/ui/relogio';
import { WebcamContext } from '@/app/context/WebcamContext';
import Image from 'next/image';

interface ModalProps {
    children: ReactNode;
    isModalOpen: boolean;
    onModalClose: () => void;
}

export default function Modal({
    isModalOpen,
    onModalClose,
    children,
}: ModalProps) {
    const webcamState = useContext(WebcamContext);
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        if (isModalOpen) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [isModalOpen]);

    const imageSrc = webcamState?.capturedImage;
    const hasValidImage = typeof imageSrc === 'string' && imageSrc.length > 0;
    const isWebcamDeactivated = webcamState?.isWebcamOpen ?? false;

    console.log(isWebcamDeactivated);
    const tamanhoDoModal: string = isWebcamDeactivated
        ? 'h-[446px] w-[672px]'
        : 'h-[348px] w-[402px]';

    const colunasDoGrid = !isWebcamDeactivated ? 'grid-cols-1' : 'grid-cols-2';
    return (
        <>
            <dialog
                ref={ref}
                onCancel={onModalClose}
                className={`open:animate-in open:fade-in ${tamanhoDoModal} m-auto rounded-lg p-6 shadow-xl backdrop:bg-black/50`}
            >
                <button
                    onClick={onModalClose}
                    className="border-azul-base hover:border-azul-hover hover:bg-azul-leve active:bg-azul-base active:border-azul-base active:text-background absolute top-6 right-5 z-10 flex h-6 w-6 items-center justify-center rounded-sm border-2 transition-colors"
                >
                    <FaXmark className="text-azul-base active:text-background" />
                </button>
                <div className={`grid h-full ${colunasDoGrid}`}>
                    {isWebcamDeactivated && (
                        <div className="flex flex-col items-center justify-between">
                            {children}
                            <div className="border-outline bg-background-2 relative flex h-[300] w-[300] items-center justify-center overflow-hidden rounded-2xl border">
                                {hasValidImage ? (
                                    <Image
                                        src={imageSrc}
                                        fill={true}
                                        className="rounded-md object-cover"
                                        alt="Foto capturada da Webcam"
                                    ></Image>
                                ) : (
                                    <p>Sem Foto</p>
                                )}
                            </div>
                            <div className="mt-2 flex w-full items-center justify-center">
                                <Button
                                    buttonSize="large"
                                    icon={<TfiReload />}
                                    className="w-full justify-center"
                                    onClick={onModalClose}
                                >
                                    Tirar Outra foto
                                </Button>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col items-center justify-between">
                        {!isWebcamDeactivated && (
                            <div className="mb-4">{children}</div>
                        )}
                        <span className="mb-4"></span>

                        <div className="text-center">
                            <Relogio>
                                <p className="text-corpo-de-texto">
                                    Você deseja Registrar Esse ponto?
                                </p>
                            </Relogio>
                        </div>
                        <div className="flex w-full flex-col items-center">
                            <Button
                                buttonSize={''}
                                icon={false}
                                className="flex self-end"
                            >
                                Registrar Ponto
                            </Button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
