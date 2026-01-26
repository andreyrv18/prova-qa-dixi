import { createContext, Dispatch } from 'react';

export interface RelogioState {
    isTimeSaved: boolean;
    horaMostrada: Date | null;
}

export type RelogioAction =
    | { type: 'SAVE_TIME' }
    | { type: 'HORA_MOSTRADA'; payload: Date };

export const RelogioContext = createContext<RelogioState | null>(null);
export const RelogioDispatchContext =
    createContext<Dispatch<RelogioAction> | null>(null);
