import {
    createContext,
    useContext,
} from 'react';
import {
    DefaultSpokeState,
    type SpokeState,
} from './SpokeState';

export const SpokeStateContext = createContext<SpokeState>(DefaultSpokeState);

export function useSpokeState(): SpokeState {
    return useContext(SpokeStateContext);
}
