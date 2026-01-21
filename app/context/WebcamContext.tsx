import { createContext, Dispatch } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface WebcamState {
    capturedImage: string | StaticImport;
    deactivatedWebcam: boolean;
    isWebcamOpen: boolean;
}

export type WebcamAction =
    | { type: 'SET_IMAGE'; payload: string }
    | { type: 'CLEAR_IMAGE' }
    | { type: 'DEACTIVATE' }
    | { type: 'OPEN_WEBCAM' };

export const WebcamContext = createContext<WebcamState | null>(null);
export const WebcamDispatchContext =
    createContext<Dispatch<WebcamAction> | null>(null);
