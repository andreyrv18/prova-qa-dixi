'use client';
import { ReactNode, useReducer } from 'react';
import {
    ModalContext,
    ModalDispatchContext,
    ModalState,
    ModalAction,
} from '@/app/context/ModalContext';

function ModalReducer(state: ModalState, action: ModalAction) {
    switch (action.type) {
        case 'OPEN_MODAL': {
            return { isModalOpen: true };
        }
        case 'CLOSE_MODAL': {
            return { isModalOpen: false };
        }
        default: {
            return state;
        }
    }
}
const initalState: ModalState = {
    isModalOpen: false,
};

export default function ModalProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(ModalReducer, initalState);

    return (
        <ModalContext.Provider value={state}>
            <ModalDispatchContext.Provider value={dispatch}>
                {children}
            </ModalDispatchContext.Provider>
        </ModalContext.Provider>
    );
}
