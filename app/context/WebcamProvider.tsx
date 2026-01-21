'use client';
import React, { ReactNode, useReducer } from 'react';
import {
    WebcamContext,
    WebcamDispatchContext,
    WebcamState,
    WebcamAction,
} from '@/app/context/WebcamContext';

function WebcamReducer(state: WebcamState, action: WebcamAction) {
    switch (action.type) {
        case 'SET_IMAGE': {
            return { ...state, capturedImage: action.payload };
        }
        case 'CLEAR_IMAGE': {
            return { ...state, capturedImage: '' };
        }
        case 'DEACTIVATE': {
            return { ...state, deactivatedWebcam: false };
        }
        case 'OPEN_WEBCAM': {
            return { ...state, isWebcamOpen: !state.isWebcamOpen };
        }
        default: {
            throw new Error('Ação desconhecida');
        }
    }
}
const initalState: WebcamState = {
    capturedImage: '',
    deactivatedWebcam: false,
    isWebcamOpen: false,
};

export default function WebcamProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(WebcamReducer, initalState);

    return (
        <WebcamContext.Provider value={state}>
            <WebcamDispatchContext.Provider value={dispatch}>
                {children}
            </WebcamDispatchContext.Provider>
        </WebcamContext.Provider>
    );
}
