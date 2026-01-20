import React, { useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';

interface ModalProps {
    children: React.ReactNode;
    openModal: boolean;
    closeModal: () => void;
}

export default function Modal({ openModal, closeModal, children }: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <>
            <dialog
                ref={ref}
                onCancel={closeModal}
                className="open:animate-in open:fade-in m-auto h-[446] w-[672] rounded-lg p-6 shadow-xl backdrop:bg-black/50"
            >
                {children}
                <button
                    onClick={closeModal}
                    className="border-azul-base hover:border-azul-hover hover:bg-azul-hover active:bg-azul-base active:border-azul-base active:text-background absolute top-6 right-5 flex h-6 w-6 items-center justify-center rounded-sm border-2"
                >
                    <FaXmark className="text-azul-base active:text-background" />
                </button>
            </dialog>
        </>
    );
}
