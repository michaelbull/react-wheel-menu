import {
    createContext,
    useContext
} from 'react';
import {
    DefaultSpokeState,
    SpokeState
} from '../models';

export const SpokeStateContext = createContext<SpokeState>(DefaultSpokeState);

export function useSpokeState(): SpokeState {
    return useContext(SpokeStateContext);
}
