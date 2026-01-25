import { createContext, Dispatch } from 'react';

export interface ModalState {
    isModalOpen: boolean;
}

export type ModalAction = { type: 'OPEN_MODAL' } | { type: 'CLOSE_MODAL' };

export const ModalContext = createContext<ModalState | null>(null);
export const ModalDispatchContext = createContext<Dispatch<ModalAction> | null>(
    null,
);
