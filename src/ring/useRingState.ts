import {
    createContext,
    useContext,
} from 'react';
import {
    DefaultRingState,
    type RingState,
} from './RingState';

export const RingStateContext = createContext<RingState>(DefaultRingState);

export function useRingState(): RingState {
    return useContext(RingStateContext);
}
