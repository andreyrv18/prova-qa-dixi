import { createContext, Dispatch } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface WebcamState {
    capturedImage: string | StaticImport;
    deactivatedWebcam: boolean;
    isWebcamOpen: boolean;
    mustCapture: boolean;
}

export type WebcamAction =
    | { type: 'CAPTURE_SUCCES'; payload: string }
    | { type: 'CAPTURE_TRIGGER' }
    | { type: 'CLEAR_IMAGE' }
    | { type: 'DEACTIVATE' }
    | { type: 'OPEN_WEBCAM' };

export const WebcamContext = createContext<WebcamState | null>(null);
export const WebcamDispatchContext =
    createContext<Dispatch<WebcamAction> | null>(null);
