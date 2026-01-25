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
        case 'CAPTURE_SUCCES': {
            return {
                ...state,
                capturedImage: action.payload,
                mustCapture: false,
            };
        }
        case 'CLEAR_IMAGE': {
            return { ...state, capturedImage: '' };
        }
        case 'DEACTIVATE': {
            return { ...state, deactivatedWebcam: !state.deactivatedWebcam };
        }
        case 'OPEN_WEBCAM': {
            return { ...state, isWebcamOpen: !state.isWebcamOpen };
        }
        case 'CAPTURE_TRIGGER': {
            return { ...state, mustCapture: true, capturedImage: '' };
        }
        default: {
            throw new Error('Ação desconhecida');
        }
    }
}
const initalState: WebcamState = {
    capturedImage: '',
    deactivatedWebcam: false,
    isWebcamOpen: true,
    mustCapture: false,
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
