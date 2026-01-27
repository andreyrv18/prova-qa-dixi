'use client';
import { ReactNode, useReducer } from 'react';
import {
    RelogioContext,
    RelogioDispatchContext,
    RelogioState,
    RelogioAction,
} from '@/app/context/RelogioContext';

function RelogioReducer(state: RelogioState, action: RelogioAction) {
    switch (action.type) {
        case 'SAVE_TIME': {
            return { ...state, isTimeSaved: true };
        }
        case 'HORA_MOSTRADA': {
            return { ...state, horaMostrada: action.payload };
        }
        case 'RESET_TIME': {
            return { isTimeSaved: false, horaMostrada: null };
        }

        default: {
            return state;
        }
    }
}
const initalState: RelogioState = {
    isTimeSaved: false,
    horaMostrada: null,
};

export default function RelogioProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(RelogioReducer, initalState);

    return (
        <RelogioContext.Provider value={state}>
            <RelogioDispatchContext.Provider value={dispatch}>
                {children}
            </RelogioDispatchContext.Provider>
        </RelogioContext.Provider>
    );
}
